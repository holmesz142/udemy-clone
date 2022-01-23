import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import ListItem from '../listitem/ListItem'
import './list.scss'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const List = () => {
    return (
        <div className="list">
            <Swiper
                spaceBetween={20}
                slidesPerView={5}
                navigation={{ clickable: true }}
            >
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>
                <SwiperSlide><ListItem imgSrc="https://img-c.udemycdn.com/course/240x135/1462428_639f_7.jpg" courseTitle="Photography Masterclass: A Complete Guide to Photography" courseAuthor="holmesz, v1tzxje" coursePrice="$89.99" tag="Bestseller" /></SwiperSlide>


            </Swiper>

        </div>
    )
}

export default List
