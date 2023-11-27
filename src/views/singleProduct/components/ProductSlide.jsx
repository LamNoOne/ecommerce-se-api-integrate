import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

import images from "~/assets/images"
// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { Mousewheel, FreeMode, Navigation, Thumbs } from "swiper/modules"

export default function ProductSlide() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)

    return (
        <>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#ddd",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={16}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 max-w-[600px] m-0"
            >
                <SwiperSlide>
                    <div className="flex items-center h-[600px] bg-[#f5f5f5]">
                        <img src={images.game_1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center h-[600px] bg-[#f5f5f5]">
                        <img src={images.game_2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center h-[600px] bg-[#f5f5f5]">
                        <img src={images.game_3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center h-[600px] bg-[#f5f5f5]">
                        <img src={images.game_4} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex items-center h-[600px] bg-[#f5f5f5]">
                        <img src={images.game_5} />
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                direction={"vertical"}
                spaceBetween={10}
                slidesPerView={4}
                mousewheel={false}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Mousewheel, FreeMode, Navigation, Thumbs]}
                className="mySwiper max-w-[170px] m-0"
            >
                <SwiperSlide>
                    <div className="h-[138px] px-6 py-3 bg-[#f5f5f5] flex items-center">
                        <img src={images.game_1} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[138px] px-6 py-3 bg-[#f5f5f5] flex items-center">
                        <img src={images.game_2} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[138px] px-6 py-3 bg-[#f5f5f5] flex items-center">
                        <img src={images.game_3} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[138px] px-6 py-3 bg-[#f5f5f5] flex items-center">
                        <img src={images.game_4} />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[138px] px-6 py-3 bg-[#f5f5f5] flex items-center">
                        <img src={images.game_5} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
