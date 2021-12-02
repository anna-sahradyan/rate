
import React from 'react';
import './Footer.css';




class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let navFooter = { "Contacts": '/contacts', "Warranty": '/warranty', "About Us": '/about', "Return policy": '/policy', "Service agreement": '/agreement' };
        return (

            <footer id="footer" className="footer">


                                <h1 className="footer-title"><a href="https://itgid.info">2021 &copy; Exchange Rates</a></h1>

                                    <ul className="list-unstyled">
                                        {Object.keys(navFooter).map(elem => {
                                            return <li key={elem}><a href={navFooter[elem]}>{elem}</a></li>

                                        })}
                                    </ul>


            </footer>


        );
    }
}
export default Footer;
