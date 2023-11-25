import {useState} from 'react'
import playlists from './PlaylistData/PlaylistData'
import AudioPlayer from 'src/AudioPlayer/AudioPlayer';
import PlaylistSelector from './PlaylistSelector/PlaylistSelector'


function Playlists(){

    const [selectedPlaylist, setSelectedPlaylist] = useState(playlists[0])


    const onSelectedPlaylist = (playlist) => {
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