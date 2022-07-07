import './App.css';
import Header from "./components/header/header";
import {Route, Switch} from "react-router-dom";
import MainScreen from "./components/main-screen/main-screen";
import FavScreen from "./components/fav-screen/fav-screen";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getCatData} from "./services/actions/card";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatData())
    }, [dispatch])
    return (
        <>
            <Header/>
            <Switch>
                <Route path='/favorite' exact={true}>
                    <FavScreen/>
                </Route>
                <Route path='/' exact={true}>
                    <MainScreen/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
