import React from "react";
import  ReactDOM from "react-dom";


import { BrowserRouter,HashRouter } from "react-router-dom";
import{Route,Switch} from "react-router";
import {Game} from "./Game";
import {Home} from "./Home";

const notFound=()=>{
    return(
        <div>
            <h2>Sayfa Bulunamadı: 404</h2>
            <p>
                Hata: Aradığınız Sayfaya şu anda ulaşılamıyor.
                
            </p>
        </div>
    )
}
class App extends React.Component{

   render() {
       return(
        <HashRouter>
            <Switch>
                <Route exact path='/Game' Component={Game}/>
                <Route exact path='/Home' Component={Home}/>
                <Route Component={notFound()}/>
            </Switch>
        </HashRouter>
       );
   };
};
ReactDOM.render(<App />, document.getElementById("root"));

