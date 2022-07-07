import style from './header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className={style.header_wrapper}>
                <NavLink
                    to='/'
                    exact={true}
                    className={style.link}
                    activeClassName={style.link_active}
                >
                    Все котики
                </NavLink>
                <NavLink
                    to='/favorite'
                    exact={true}
                    className={style.link}
                    activeClassName={style.link_active}
                >
                    Любимые котики
                </NavLink>
            </div>
        </header>

    )
}

export default Header;