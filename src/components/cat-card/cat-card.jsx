<<<<<<< HEAD
import style from './cat-card.module.css'
import like_inactive from '../../images/like-inactive.png'
import like_active from '../../images/like-active.png'
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_FAV, REMOVE_FROM_FAV} from "../../services/actions";
import {forwardRef} from "react";

const CatCard = forwardRef(({catData}, ref) => {
    const { url, id } = catData;
    const dispatch = useDispatch();
    const { favCats } = useSelector(store => ({
        favCats: store.fav.favCats,
    }))

    let isFav = false;

    if (favCats.length > 0) {
        favCats.forEach(cat => {
            if (cat.id === id) {
                isFav = true;
            }
        })
    }

    const handleLike = () => {
            dispatch({
                type: isFav ? REMOVE_FROM_FAV : ADD_TO_FAV,
                payload: catData
            })
    }

    return (
        <article className={style.card} ref={ref}>
            <img src={url} alt={'cat'} className={style.img}/>
            {
                !isFav ? (
                    <div className={style.like} onClick={handleLike} >
                        <img src={like_inactive} alt={`like inactive`}/>
                    </div>
                ) : (
                    <div className={style.like_active} onClick={handleLike} >
                        <img src={like_active} alt={`like active`}/>
                    </div>
                )
            }
        </article>
    )
})

=======
import style from './cat-card.module.css'
import like_inactive from '../../images/like-inactive.png'
import like_active from '../../images/like-active.png'
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_FAV, REMOVE_FROM_FAV} from "../../services/actions";
import {forwardRef} from "react";

const CatCard = forwardRef(({catData}, ref) => {
    const { url, id } = catData;
    const dispatch = useDispatch();
    const { favCats } = useSelector(store => ({
        favCats: store.fav.favCats,
    }))

    let isFav = false;

    if (favCats.length > 0) {
        favCats.forEach(cat => {
            if (cat.id === id) {
                isFav = true;
            }
        })
    }

    const handleLike = () => {
            dispatch({
                type: isFav ? REMOVE_FROM_FAV : ADD_TO_FAV,
                payload: catData
            })
    }

    return (
        <article className={style.card} ref={ref}>
            <img src={url} alt={'cat'} className={style.img}/>
            {
                !isFav ? (
                    <div className={style.like} onClick={handleLike} >
                        <img src={like_inactive} alt={`like inactive`}/>
                    </div>
                ) : (
                    <div className={style.like_active} onClick={handleLike} >
                        <img src={like_active} alt={`like active`}/>
                    </div>
                )
            }
        </article>
    )
})

>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
export default CatCard