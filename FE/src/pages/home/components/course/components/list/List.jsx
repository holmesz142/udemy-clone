import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import ListItem from '../listitem/ListItem'
import './list.scss'
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProductsHomeApi } from "../../../../../../redux/_actions/Product/product.Action"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


const List = () => {
    const products = useSelector(state => state.product.productHome)
    // console.log(products)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllProductsHomeApi())
    }, [dispatch])

    return (
        <div className="list">
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                navigation={{ clickable: true }}
            >
                {products.map((item, i) => (
                    <SwiperSlide key={i}><ListItem imgSrc={item.Image} courseTitle={item.Name} courseAuthor={item.Author} coursePrice={item.Price} tag="Bestseller" path={`/single-product/${item._id}`} /></SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default List
