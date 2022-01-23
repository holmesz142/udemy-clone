const controller = require('./controller')
const paypalServices = require('../services/paypal.services')

const payment = async (req, res, next) => {
    try {
        const product = req.body
        // console.log(price)

        var create_payment_json = {
            "intent": "sale",
            "payer": {
                "payment_method": "paypal"
            },
            "redirect_urls": {
                "return_url": `http://localhost:5000/paypal/success`,
                "cancel_url": "http://localhost:5000/paypal/cancel"
            },
            "transactions": [{
                "item_list": {
                    "items": [
                        {
                            name: product.Name,
                            sku: product._id,
                            price: product.price.replace(/[^a-zA-Z0-9]/g, ""),
                            currency: "USD",
                            quantity: 1,
                        },
                    ],
                },
                "amount": {
                    "currency": "USD",
                    "total": product.price.replace(/[^a-zA-Z0-9]/g, "")
                },
                "description": ""
            }]
        };


        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                throw error;
            } else {
                // console.log("dong 47", payment);
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        controller.sendSuccess(res, payment.links[i].href, 200)
                        res.redirect(payment.links[i].href);
                        // const link = payment.links[i].href
                    }
                }

                console.log("Create Payment Response");
                console.log("dong 47", payment);
                return {
                    message: 'Successfully payment',
                    success: true,
                    data: payment
                }
            }
        });

    } catch (err) {
        return controller.sendError(res)
    }
}

const paymentSuccess = async (req, res, next) => {
    try {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        const priceTotal = req.query.price

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": price
                }
            }]
        };

        let success = true

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error);
                success = false

                throw error;
            } else {
                console.log("successly paid")
            }
        });
        if (!success) {
            res.redirect('http://localhost:3000/payment-denied')
        } else {
            res.redirect('http://localhost:3000/payment-success')
        }
    } catch (err) {
        return controller.sendError(res)
    }
}

const paymentCancel = async (req, res, next) => {
    try {
        const resServices = await paypalServices.PaymentCancel()
        if (!resServices.success)
            return controller.sendSuccess(res, {}, 300, resServices.message)
        return controller.sendSuccess(res, {}, 200, resServices.message)
    } catch (err) {
        return controller.sendError(res)
    }
}



module.exports = {
    payment,
    paymentSuccess,
    paymentCancel
}