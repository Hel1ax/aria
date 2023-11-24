import React, { useEffect, useState } from 'react';
import VideoItem from './VideoItem/VideoItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import './PodcastItem.css'
import { GrFormPrevious, GrFormNext  } from "react-icons/gr";

function PodcastItem({podcastRequest, podcastTitle}){
    const [videos, setVideos] = useState([]);
    const [isHover, setHover] = useState(false);
    
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_KEY = process.env.REACT_APP_API_3;
                const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${podcastRequest}&type=video&part=snippet&maxResults=5`;
                const response = await fetch(API_URL);
                const data = await response.json();
                setVideos(data.items);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    }, []);


    return (
        <div className='podcasts-block' 
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <h2 className='podcast-title'>{podcastTitle || "Музыкальные подкасты"}</h2>
            <Swiper
                
                className='podcast-swiper'
                grabCursor={true}
                spaceBetween={10}
                freeMode={true}
                slidesPerView={1}
                mousewheel={true}
                pagination={{ clickable: true }}
                loop
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                breakpoints={{
                    480: {
                        slidesPerView: 1,
                        width:480
                    },
                    640: {
                        slidesPerView: 1.8,
                        width:640
                    },
                    768: {
                        slidesPerView: 2,
                        width:768
                    },
                    1024: {
                        slidesPerView: 2.6,
                        width:1024
                    },
                  }}
            >
            {videos && videos.map((video) => (
            <SwiperSlide key={video.id.videoId}>
                <Link to={`/podcasts/${video.id.videoId}`}>
                    <VideoItem video={video} />
                </Link>    
            </SwiperSlide>
            ))}
            {isHover && <div>
                <div className="swiper-button-next"><GrFormNext /></div> 
                <div className="swiper-button-prev"><GrFormPrevious /></div>
            </div>}
                
            </Swiper>
            
        </div>
    );
}

export default PodcastItem