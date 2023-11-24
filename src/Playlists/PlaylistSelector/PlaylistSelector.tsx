import './PlaylistSelector.css'


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

interface PlaylistsSelectorProps{
    playlists: Playlist[]
    onSelectedPlaylist: (playlist: Playlist) => void;
}

function PlaylistSelector({playlists, onSelectedPlaylist} : PlaylistsSelectorProps){

    return (
    <div className="playlist-block">
        <h2 className='playlist-block-title'>Плейлисты для вас</h2>
        <ul className='playlists'>
            {playlists.map((playlist) => (
            <li>
                <div className="playlist-item" key={playlist.playlistID} onClick={() => onSelectedPlaylist(playlist)}>
                    <img src={playlist.playlistImg} alt={playlist.name} className='playlist-img'></img>
                    <div className='playlist-title'>{playlist.name}</div>
                </div>
            </li>
            ))}
        </ul>
    </div>
    )
}

export default PlaylistSelector