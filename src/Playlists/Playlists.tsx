import {useState} from 'react'
import playlists from './PlaylistData/PlaylistData'
import AudioPlayer from 'src/AudioPlayer/AudioPlayer';
import PlaylistSelector from './PlaylistSelector/PlaylistSelector'


function Playlists(){

    const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])

    interface Track {
        id: number;
        title: string;
        author: string;
        audio: string;
        img: string;
    }

    interface Playlist {
        playlistID: number;
        name: string;
        playlistImg: string;
        tracks: Track[];
    }

    const onSelectedPlaylist = (playlist: Playlist) => {
        setSelectedPlaylist(playlist)
    }

    return (
        <div>
            <PlaylistSelector {...{playlists, onSelectedPlaylist}} />
            <AudioPlayer playlist={selectedPlaylist} />
        </div>
    )
}

export default Playlists