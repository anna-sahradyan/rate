import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Contacts from "./components/contacts/Contacts";
import Exchange from "./components/exchange";
import Rate from "./components/rate";


class App extends React.Component {
    render() {
        return (
            <>

                <div className={`wrapper`}>
                    <Header/>
                    <div className={`main`}>
                        <Switch>

                            <Route exact path='/' component={Rate}/>
                            <Route path='/main' component={Rate}/>
                            <Route path="/about" render={() => <About/>}/>
                            <Route path="/contacts" component={Contacts}/>
                            <Route path="/exchange" component={Exchange}/>

                        </Switch>
                    </div>
                </div>
                <Footer/>

            </>
        );
    }
}

export default App;