import Content from '../Content/Content'
import Intro from '../Intro/Intro'
import Requirement from '../Requirement/Requirement'
import './SingleCourse.scss'
import Footer from '../../../home/components/footer/Footer'
import { LocalLibrary, Movie, AccessTime, BatteryChargingFull } from '@material-ui/icons'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { payment } from '../../../../redux/_actions/Product/product.Action'



const SingleCourse = (props) => {
    const productDetail = useSelector(state => state.product.productDetail)
    // console.log(productDetail)
    // const payment = useSelector(state => state.product.paymentDetail)
    const dispatch = useDispatch()
    // console.log("asd ", payment)
    const handlePayment = () => {
        const price = productDetail?.Price.replace(/[^a-zA-Z0-9]/g, "").toString()
        // console.log(price)

        const res = dispatch(payment(price))
        // console.log("res", res)

        if (res.success === true) {
            console.log(0)
        }

    }

    return (
        <div className="single-course">
            <div className="single-course-wrap">
                <section className="single-course-col left">
                    <section className="course-wrap">
                        <h1 className="course-name">{productDetail?.Name}</h1>
                        <div className="course-desc">{productDetail?.Description}</div>
                        <Intro intro={productDetail?.Intros} />
                        <Content content={productDetail?.Contents} />
                        <Requirement requirement={productDetail?.Requirements} />
                    </section>
                </section>
                <section className="single-course-col right">
                    <section className="course-preview">
                        <img className="course-img" src={productDetail?.Image} alt="" />
                        <div className="course-price">{productDetail?.Price}$</div>
                        <button className="course-buy-btn" onClick={handlePayment}>Buy now</button>
                        <ul className="list-basic">
                            <li className="list-item"><LocalLibrary className="icon" />Trình độ cơ bản</li>
                            <li className="list-item"><Movie className="icon" />Tổng số <strong>{productDetail?.TotalLesson}</strong> bài học</li>
                            <li className="list-item"><AccessTime className="icon" />Thời lượng <strong>{productDetail?.TotalTime}</strong></li>
                            <li className="list-item"><BatteryChargingFull className="icon" />Học mọi lúc, mọi nơi</li>
                        </ul>
                    </section>
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default SingleCourse
