import { RefObject } from "react";
import './TrackInfo.css'

interface TrackInfoProps{
    currentTime: number;
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
    duration: number;
    currentTrack: RefObject<HTMLAudioElement>;
    trackInfo: {
        img: string,
        title: string,
        author: string
    };
}

export function TrackInfo({trackInfo, currentTime, duration, currentTrack, setCurrentTime}: TrackInfoProps){
    return (
        <div className="track_info_container">
            <div className="timecontrol">
                <p className="current_time">
                    {Math.floor(currentTime / 60)}:{String(Math.floor(currentTime % 60)).padStart(2, '0')}
                </p>
                <input
                    type="range"
                    min="0"
                    max={duration}
                    value={currentTime}
                    className="timeline"
                    onChange={(e) => {
                        if (currentTrack.current)
                            currentTrack.current.currentTime = Number(e.target.value);
                        setCurrentTime(Number(e.target.value));
                    }}
                />
                <p className="duration">
                    {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
                </p>
            </div>
        </div>
    )
}