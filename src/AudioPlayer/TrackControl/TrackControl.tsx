import React from 'react';
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';

import './TrackControl.css'

interface TrackControlProps {
    isPlaying: boolean;
    playingButton: () => void;
    handlePrevTrack: () => void;
    handleNextTrack: () => void;
}

export function TrackConrol({isPlaying, playingButton, handlePrevTrack, handleNextTrack} : TrackControlProps){
    return (
        <div className='control_track_container'>
            <button className="playButton audio_button" onClick={handlePrevTrack}>
                <BiSkipPrevious className='audio_icon'/>
            </button>

            {isPlaying ? (
            <button className="playButton audio_button" onClick={playingButton}>
                <AiFillPauseCircle className='audio_icon'/>
            </button>
            ) : (
            <button className="playButton audio_button" onClick={playingButton}>
                <AiFillPlayCircle className='audio_icon'/>
            </button>

            )}
            <button className="playButton audio_button" onClick={handleNextTrack}>
                <BiSkipNext className='audio_icon' />
            </button>
        </div>
    )
}