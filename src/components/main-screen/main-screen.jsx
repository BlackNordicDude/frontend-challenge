<<<<<<< HEAD
import style from './main-screen.module.css'
import {useDispatch, useSelector} from "react-redux";
import CatCard from "../cat-card/cat-card";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {getCatData} from "../../services/actions/card";

const MainScreen = () => {
    const dispatch = useDispatch();
    const {cats, request} = useSelector(store => ({
        cats: store.card.cats,
        request: store.card.getCatRequest,
    }))

    const { ref, inView } = useInView({
        threshold: 1
    })

    useEffect(() => {
        if (inView) {
            dispatch(getCatData(5));
        }
    },[inView, dispatch])

    return (
        <div className={style.main}>
            <div className={style.main_wrapper}>
                {
                    cats.map((cat, i) => {
                        if (i+1 === cats.length) {
                            return <CatCard catData={cat} key={cat.id} ref={ref}/>
                        }
                        return <CatCard catData={cat} key={cat.id}/>
                    })
                }
            </div>
            <div className={style.load}>...Загружаем еще котиков...</div>
        </div>
    )
}

=======
import style from './main-screen.module.css'
import {useDispatch, useSelector} from "react-redux";
import CatCard from "../cat-card/cat-card";
import {useInView} from "react-intersection-observer";
import {useEffect} from "react";
import {getCatData} from "../../services/actions/card";

const MainScreen = () => {
    const dispatch = useDispatch();
    const {cats, request} = useSelector(store => ({
        cats: store.card.cats,
        request: store.card.getCatRequest,
    }))

    const { ref, inView } = useInView({
        threshold: 1
    })

    useEffect(() => {
        if (inView) {
            dispatch(getCatData(5));
        }
    },[inView, dispatch])

    return (
        <div className={style.main}>
            <div className={style.main_wrapper}>
                {
                    cats.map((cat, i) => {
                        if (i+1 === cats.length) {
                            return <CatCard catData={cat} key={cat.id} ref={ref}/>
                        }
                        return <CatCard catData={cat} key={cat.id}/>
                    })
                }
            </div>
            <div className={style.load}>...Загружаем еще котиков...</div>
        </div>
    )
}

>>>>>>> dce69a906b0c0d696eb744df290099e4b9942212
export default MainScreen