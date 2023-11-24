import './Footer.css'
function Footer(){
    return (
        <div className="footer">
                <div className="about">
                    <h3>About Us</h3>
                    <p>Я - энтузиаст, предлагающий лучшую музыку и новейшие тренды мира музыки. Подписывайтесь на меня, чтобы быть в курсе последних новостей и релизов!</p>
                </div>
                <div className="links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Главная</a></li>
                        <li><a href="#">Новые Релизы</a></li>
                        <li><a href="#">Концерты</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">+79880755545</a>
                        </li>

                        <li>
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <a href="#">+79640007555</a>
                        </li>

                        <li>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                            <a href="#">12 Michurinsky prospekt, Moscow, Russia</a>
                        </li>
                        <li>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                            <a href="#">aria.example@gmail.com</a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Footer