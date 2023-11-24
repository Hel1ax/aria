import {BsFillVolumeOffFill, BsFillVolumeDownFill, BsFillVolumeUpFill} from 'react-icons/bs'
import React, {useState, useEffect, RefObject} from 'react'
import './VolumeControl.css'

interface VolumeControlProps{
    currentTrack: RefObject<HTMLAudioElement>;

}
export function VolumeControl({ currentTrack }:VolumeControlProps){

    const [isVisibleVolume, setVisibleVolume] = useState(false);
    const [volume, setVolume] = useState(20);

    useEffect(() => {
        if (currentTrack.current)
            currentTrack.current.volume = volume/100;
    }, [volume])

    return (
        <div className='volume_control'>
            <button className="playButton volume_button" onClick={() => setVisibleVolume(!isVisibleVolume)}>
                {volume ? (volume > 50 ? <BsFillVolumeUpFill /> : <BsFillVolumeDownFill />) : <BsFillVolumeOffFill />}      
            </button>
            {isVisibleVolume ? <input
                type="range"
                min="0"
                max="100"
                value={volume}
                className="volumeline"
                onChange={(e) => {
                    if (currentTrack.current)
                        currentTrack.current.volume = Number(e.target.value)/100;
                    setVolume(Number(e.target.value));
                }}
            /> : ''}
        </div>
    )
} 