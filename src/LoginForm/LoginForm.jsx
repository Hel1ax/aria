import './LoginForm.css'
import {Link} from 'react-router-dom'
import { MdOutlineEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
function LoginForm(){
    return (
        <form className="form-wrapper">
            <h2>Вход</h2>
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
                    type="password"
                    className="input"
                    name="password"
                    required
                />
                <FaLock className='login-icon' />
                <label htmlFor="password" className="label">
                    Пароль
                </label>
            </section>
            <Link to={'/'}>
                <button type="button" className="btn">
                    Войти
                </button>
            </Link>
            <span className="block"></span>
            <span className="footer"></span>
        </form>
    );
}

export default LoginForm