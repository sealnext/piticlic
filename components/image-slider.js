import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/thumbs';
import { Thumbs } from 'swiper/modules';

const ImageCarousel = ({ images }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="md:col-span-3">
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Thumbs]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto rounded-lg object-cover"
                            src={image.src}
                            style={{
                                aspectRatio: '600/400',
                                objectFit: 'contain',
                                backgroundColor: '#f5f5f5',
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs]}
                className="mySwiper"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img style={{ objectFit: 'cover', height: '100%', width: '100%' }} src={image.src} alt={`Thumbnail ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;