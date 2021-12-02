import React, {Component} from 'react';
import Nav from "../nav";

class Header extends Component {
    render() {
        return (
            <>
                <section className={`header`}>
                    <Nav/>
                </section>
            </>
        );
    }
}

export default Header;