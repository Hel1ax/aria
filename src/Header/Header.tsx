import { ChangeEvent, FormEvent, useState, useEffect} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";

function Header(){
    
    const [isMenuOpen, setMenuOpen] = useState(false)

    const [searchQuery, setSearchQuery] = useState('');

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen)
    }

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e?.target?.value);
    }

    const handleSearchSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Добавьте здесь логику для обработки поискового запроса, например, перенаправление на страницу поиска
        console.log('Search submitted:', searchQuery);
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []); 

    useEffect(() => {
        if (windowWidth > 1200) {
            setMenuOpen(false);
        }
    }, [windowWidth]);

    return (
        <header className="header">
            <div className="header-content">
                
                <div className='header-block'>
                    <Link to='/'>
                    <div className='header-picture'>
                        <img src={("./img/icon-wave.png")} alt=''></img>
                    </div>
                    </Link>
                    <h2 className='header-title'>@ria</h2>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>  

                <ul className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <form onSubmit={handleSearchSubmit} className={`search-form ${isMenuOpen ? 'open' : ''}`}>
                        <input
                            placeholder=" "
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <Link to={`/videos/${searchQuery}`}>
                        <div className='submit-btn'><IoIosSearch /></div>
                        </Link>
                    </form>
                    <li><Link to="/" className='nav-link'>Главное</Link></li>
                    <li><Link to="/podcasts" className='nav-link'>Подкасты и музыка</Link></li>
                    <li><Link to="/clips" className='nav-link'>Клипы</Link></li>
                    <li><Link to="./login" className='nav-link'>Войти</Link></li>
                    <li><Link to="./registration" className='nav-link'>Зарегистрироваться</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header