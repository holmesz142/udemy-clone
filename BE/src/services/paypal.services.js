const paypal = require('paypal-rest-sdk')

const payment = (body) => {
    try {
        const { price } = body
        console.log(price)

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
                            name: "Mua khoá học",
                            sku: "001",
                            price: `${price}`,
                            currency: "USD",
                            quantity: 1,
                        },
                    ],
                },
                "amount": {
                    "currency": "USD",
                    "total": price.toString()
                },
                "description": ""
            }]
        };


        paypal.payment.create(create_payment_json, function (error, payment) {
            if (error) {
                return {
                    message: 'Cannot payment',
                    success: false
                }
                throw error;
            } else {

                // console.log("dong 47", payment);
                // for (let i = 0; i < payment.links.length; i++) {
                //     if (payment.links[i].rel === 'approval_url') {
                //         redirect(payment.links[i].href);
                //         // const link = payment.links[i].href
                //     }
                // }

                console.log("Create Payment Response");
                console.log("dong 47", payment);
                return {
                    message: 'Successfully payment',
                    success: true,
                    data: payment
                }
            }
        });
    } catch (error) {
        console.log('err', error)
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const PaymentSuccess = (payerID, paymentId, price) => {
    try {
        // const payerId = req.query.PayerID;
        // const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerID,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": price
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                return {
                    message: 'Payment Fail',
                    success: false
                }
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                //res.send('Success');
                return {
                    message: 'Successfully payment',
                    success: true,
                    data: payment
                }
            }
        });


    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

const PaymentCancel = () => {
    try {
        return {
            message: 'Cancelled !!',
            success: true
        }
    } catch (error) {
        return {
            message: 'An error occurred',
            success: false
        }
    }
}

module.exports = {
    payment,
    PaymentSuccess,
    PaymentCancel
}