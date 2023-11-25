import './TrackHeader.css'


function TrackHeader({trackInfo}){
    return (
        <div className="track_header_container">
            <img className="musicCover" src={trackInfo.img} alt="" />
            <div>
                <h3 className="title">{trackInfo.title}</h3>
                <p className="subTitle">{trackInfo.author}</p>
            </div>
        </div>
    )
}

export default TrackHeader