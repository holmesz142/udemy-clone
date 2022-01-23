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
import { getAllClassApi } from "../../../../../../redux/_actions/Class/class.Action"

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])


const List = () => {
    const classes = useSelector(state => state.class.classes)
    // console.log(classes)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllClassApi())
    }, [dispatch])

    return (
        <div className="list">
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                navigation={{ clickable: true }}
            >
                {classes.map((item, i) => (
                    <SwiperSlide key={i}><ListItem idClass={item._id} TimeStart={item.TimeStart} TimeEnd={item.TimeEnd} imgSrc={item.Image} courseTitle={item.Name} courseAuthor={item.Author} coursePrice={item.Price} /></SwiperSlide>
                ))}

            </Swiper>

        </div>
    )
}

export default List
