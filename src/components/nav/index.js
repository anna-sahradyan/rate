
import React from 'react';
import '../header/Header.css';
import {NavLink} from "react-router-dom";

class   Nav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render(){
        let nav ={ "Main": '/', " About Us":'/about'," Exchange Rates":'/exchange',"Contacts":'/contacts'} ;
        return(
            <>
                <div className="header-nav">
                    <div className="container">
                        <nav className={`navList`}>
                            {Object.keys(nav).map(elem=>{
                                return <li key={elem}><NavLink to={nav[elem]}className="link" >{elem}</NavLink></li>
                            })}



                        </nav>
                    </div>

                </div>
            </>


        );
    }
}
export default Nav;


