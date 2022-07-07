<<<<<<< HEAD
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

=======
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

>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
export default FavScreen