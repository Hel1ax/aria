import React, { useState, useEffect, useRef } from 'react';
import { TrackConrol } from './TrackControl/TrackControl';
import { VolumeControl } from './VolumeControl/VolumeControl';
import { TrackInfo } from './TrackInfo/TrackInfo';
import './AudioPlayer.css'
import TrackHeader from './TrackHeader/TrackHeader';



function AudioPlayer({playlist}) {
    const [musicItems, setMusicItems] = useState(playlist.tracks);

    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const currentTrack = useRef(new Audio(musicItems[currentTrackIndex].audio));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    
    const updateCurrentTime = () => {
        setCurrentTime(currentTrack.current.currentTime);
    };

    const handleAudioChange = () => {
        currentTrack.current.pause();
        currentTrack.current.removeEventListener('timeupdate', updateCurrentTime);
        currentTrack.current = new Audio(musicItems[currentTrackIndex].audio);
        currentTrack.current.addEventListener('loadedmetadata', () => {
            setDuration(currentTrack.current.duration);
            setCurrentTime(0); // Сбросьте текущее время при изменении трека
            currentTrack.current.addEventListener('timeupdate', updateCurrentTime);
            if (isPlaying) {
                currentTrack.current.play();
            }
        });
    };

    useEffect(() => {
        setMusicItems(playlist.tracks);
        setCurrentTrackIndex(0); 

        handleAudioChange();
    }, [playlist, musicItems]);

    useEffect(() => {
        handleAudioChange();
        return () => {
            currentTrack.current.removeEventListener('timeupdate', updateCurrentTime);
        };    
    }, [currentTrackIndex]);


    useEffect(() => {
        if (currentTrack.current.currentTime > duration - 0.5){
            handleNextTrack();
        }
    }, [currentTrack.current.currentTime, duration])

    

    useEffect(() => {
        if (isPlaying) {
        currentTrack.current.play();
        } else {
        currentTrack.current.pause();
        }
    }, [isPlaying]);


    const handlePrevTrack = () => {
        if (currentTrackIndex > 0) {
            setCurrentTrackIndex(currentTrackIndex - 1);
        }
    };

    const handleNextTrack = () => {
            if (currentTrackIndex < musicItems.length - 1) {
            setCurrentTrackIndex(currentTrackIndex + 1);
        }
    };

    const playingButton = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="component">
            <TrackHeader trackInfo={musicItems[currentTrackIndex]}/>
            <div className='control_track_block'>
            <TrackConrol {...{isPlaying, playingButton, handlePrevTrack, handleNextTrack}}></TrackConrol>
            <TrackInfo 
                trackInfo={musicItems[currentTrackIndex]}
                {...{currentTime, duration, currentTrack, setCurrentTime}}
            ></TrackInfo>
            
            </div>
            <VolumeControl {...{currentTrack}}></VolumeControl>
        </div>
    );
}

export default AudioPlayer;
