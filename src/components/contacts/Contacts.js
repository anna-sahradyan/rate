
import React from 'react';
import './Contacts.css';
class Contacts extends React.Component {

    render() {
        return (
            <>
                <div className="contacts">
                    <div className={`contactsList`}>
                    <ul>
                        <h2>Our address is:</h2>
                        <li>Tel: +374 (0)55 55 55 55</li>
                        <li>Fax:  +374 (0)55 85 85 85</li>
                        <h2>Our office opening hours are:</h2>
                        <li>Monday - Thursday, 7:30am - 7:00pm</li>
                        <li>Friday, 7:30am - 5:30pm</li>
                        <li>Saturday, 9:00am - 2:00pm</li>

                    </ul>
                </div>
                </div>
            </>



        );
    }
}
export default Contacts;
