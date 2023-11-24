import './TrackHeader.css'

interface TrackHeaderProps{
    trackInfo: {
        img: string,
        title: string,
        author: string
    };
}


function TrackHeader({trackInfo}: TrackHeaderProps){
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