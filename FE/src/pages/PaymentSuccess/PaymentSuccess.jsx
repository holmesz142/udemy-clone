import './payment.css'
import { Link } from 'react-router-dom'

const PaymentSuccess = () => {
    return (
        <div className='payment'>
            <div class="card-payment">
                <div className='checkmark-icon'>
                    <i class="checkmark">✓</i>
                </div>
                <h1 className='text-1'>Success</h1>
                <p className='text-2'>Thanh toán thành công</p>
            </div>
            <Link to='/' className='return-btn'>
                Nhấn để trở về trang chủ
            </Link>
        </div>
    )
}

export default PaymentSuccess
