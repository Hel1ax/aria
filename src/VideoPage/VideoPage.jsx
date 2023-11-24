import React from "react";
import { useParams } from "react-router-dom";
import './VideoPage.css'
function VideoPage(){
    const {videoId} = useParams();
    
    return (
        <div className="video-block">
            <iframe
            title={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            allowFullScreen
          ></iframe>
        </div>
    )
}

export default VideoPage