import React, { useState, useEffect } from "react";
import VideoItem from "../Podcasts/VideoItem/VideoItem";
import './SearchPage.css';
import { GrFormPrevious, GrFormNext  } from "react-icons/gr";
import { useParams } from "react-router-dom";
import SearchItem from "./SearchItem";

function SearchPage() {
    const [videos, setVideos] = useState([]);
    const videosPerPage = 8;

    const {search} = useParams()
    const API_KEY = process.env.REACT_APP_API_1;

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=${search} music&type=video&part=snippet&maxResults=${videosPerPage}`;

                const response = await fetch(API_URL);
                const data = await response.json();

                setVideos(data.items);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData(search);
    }, []);

    return (
        <div className="search-container">
            <h2 className="search-title">Видео по запросу: {search}</h2>
            <div className="search-block">
                {videos && videos.map((video) => (
                    <div className="search" key={video.id.videoId}><SearchItem video={video} /></div>
                ))}
            </div>
        </div>
    );
}

export default SearchPage;
