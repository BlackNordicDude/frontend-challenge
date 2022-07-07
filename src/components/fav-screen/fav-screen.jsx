import style from './fav-screen.module.css'
import {useSelector} from "react-redux";
import CatCard from "../cat-card/cat-card";

const FavScreen = () => {
    const {favCats} = useSelector(store => ({
        favCats: store.fav.favCats,
    }))
    return (
        <div className={style.fav}>
            <div className={style.fav_wrapper}>
                {
                    favCats.map(cat => <CatCard catData={cat} key={cat.id}/> )
                }
            </div>
        </div>
    )
}

export default FavScreen