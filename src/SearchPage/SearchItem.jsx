import './SearchItem.css'
import {Link} from 'react-router-dom'
function SearchItem({ video }) {
  
    // Функция для переключения состояния воспроизведения
    const truncate = (str, maxLength) => {
      if (str.length > maxLength){
        return str.slice(0, maxLength - 1) + "..."
      }else{
        return str
      }
    }
  
    return (
        <div key={video.id.videoId} className='search-preview-block'>
            <h3 className='search-preview-title'>{truncate(video.snippet.title, 35)}</h3>
            <Link to={`/podcasts/${video.id.videoId}`}>
                <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} style={{ cursor: 'pointer' }} className='search-preview-img' />
            </Link>
        </div>
    );
  }

export default SearchItem