import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Playlists from './Playlists/Playlists'
import Podcasts from './Podcasts/Podcasts'
import VideoPage from './VideoPage/VideoPage';
import Clips from './Clips/Clips';
import LoginForm from './LoginForm/LoginForm';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import DefaultPage from './DefaultPage/DefaultPage';
import SearchPage from './SearchPage/SearchPage'

function App() {
  return (
    <Router>
      <div className="App">
          <Header></Header>
          <div className="wrapper">
          <Routes>
            <Route path="" exact element={<Playlists />} />
            <Route path="/podcasts" exact element={<Podcasts />} />
            <Route path="/clips" exact element={<Clips/>}/>
            <Route path="/podcasts/:videoId" element={<VideoPage/>} />
            <Route path="/login" element={<LoginForm/>}></Route>
            <Route path="/registration" element={<RegistrationForm/>}></Route>
            <Route path="/videos/:search" element={<SearchPage/>}></Route>
            <Route path={'*'}element={<DefaultPage/>}></Route>
          </Routes>
          </div>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

