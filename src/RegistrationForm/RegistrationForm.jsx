import {Link} from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock, FaLockOpen, FaUser   } from "react-icons/fa";

function RegistrationForm(){
    return (
        <form className="form-wrapper">
            <h2>Регистрация</h2>
            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="email"
                    required
                />
                <MdOutlineEmail className='login-icon'/>
                <label htmlFor="email" className="label">
                    Почта
                </label>
            </section>

            <section className="group">
                <input
                    type="text"
                    size="30"
                    className="input"
                    name="name"
                    required
                />
                <FaUser className='login-icon'/>
                <label htmlFor="name" className="label">
                    Имя
                </label>
            </section>

            <section className="group">
                <input
                    type="password"
                    className="input"
                    name="password"
                    required
                />
                <FaLock className='login-icon' />
                <label htmlFor="password" className="label">
                    Введите пароль
                </label>
            </section>

            <section className="group">
                <input
                    type="password"
                    className="input"
                    name="password"
                    required
                />
                <FaLockOpen className='login-icon' />
                <label htmlFor="password" className="label">
                    Повторите пароль
                </label>
            </section>
            <Link to={'/'}>
                <button type="button" className="btn">
                    Зарегистрироваться
                </button>
            </Link>
            <span className="block"></span>
            <span className="footer"></span>
        </form>
    )
}

export default RegistrationForm