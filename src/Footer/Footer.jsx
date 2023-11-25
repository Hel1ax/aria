import './Footer.css'
function Footer(){
    return (
        <div className="footer">
                <div className="about">
                    <h3>Для вас старался</h3>
                    <ul>
                        <li>Махтаев Арсен Шапиевич</li>
                        <li>ИКБО-30-22</li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Познакомьтесь также</h3>
                    <ul>
                        <li><a href="#">Новые Релизы</a></li>
                        <li><a href="#">Концерты</a></li>
                        <li><a href="#">Блог</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Обратная связь</h3>
                    <ul>
                        <li>
                            <a href="#">+79880755545</a>
                        </li>

                        <li>
                            <a href="#">+79640007555</a>
                        </li>

                        <li>
                            <a href="#">aria.example@gmail.com</a>
                        </li>
                    </ul>
                </div>
        </div>
    )
}

export default Footer