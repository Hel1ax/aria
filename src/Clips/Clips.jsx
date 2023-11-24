import React, { useState, useEffect } from "react";
import './Clips.css';
import { GrFormPrevious, GrFormNext  } from "react-icons/gr";
import ClipsItem from "./ClipsItem";

function Clips() {
    const [videos, setVideos] = useState([]);
    const videosPerPage = 6;
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    
    const API_KEY = process.env.REACT_APP_API_2;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=pham music&type=video&part=snippet&maxResults=${videosPerPage}`;

                const response = await fetch(API_URL);
                const data = await response.json();

                setVideos(data.items);
                setNextPage(data.nextPageToken)
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchData();
    }, []);

    const handlePageChange = (newPage) => {
        const fetchData = async () => {
            try {
                const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&q=pham music&type=video&part=snippet&maxResults=${videosPerPage}&pageToken=${newPage}`;
                const response = await fetch(API_URL);
                const data = await response.json();

                setVideos(data.items);
                setNextPage(data.nextPageToken);
                setPrevPage(data.prevPageToken);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };
        fetchData();
    };

    return (
        <div className="clips-container">
            <h2 className="clips-title">Музыкальные клипы</h2>
            <div className="clips-block">
                {videos && videos.map((video) => (
                    <div className="clip" key={video.id.videoId}><ClipsItem video={video} /></div>
                ))}
            </div>
            {videos && <div className="pagination">
                <span onClick={() => prevPage && handlePageChange(prevPage)} className="clips-page-prev"><GrFormPrevious /> </span>
                <span onClick={() => nextPage && handlePageChange(nextPage)} className="clips-page-next"><GrFormNext /></span>
            </div>}
            
        </div>
    );
}

export default Clips;
