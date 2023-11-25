import './PlaylistSelector.css'

function PlaylistSelector({playlists, onSelectedPlaylist}){

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