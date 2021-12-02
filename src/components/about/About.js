
import React from 'react';
import './About.css';
import {NavLink} from "react-router-dom";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="about">
                <div className="containerAbout">
                    <ul>
                        <li><NavLink to="/contacts">Meet the Team</NavLink></li>
                        <li><NavLink to="#">Security</NavLink></li>
                        <li><NavLink to="#">Careers</NavLink></li>
                    </ul>
                    <h2>About Us</h2>
                    <pre> <p className={`lorem`}><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi consectetur, dolore ea esse est exercitationem fugiat illo inventore modi molestiae necessitatibus neque omnis perspiciatis quis, rem sit soluta ut?</span><span>Aspernatur delectus doloremque impedit in iure praesentium rerum sapiente sint sunt voluptates! Aliquid consectetur dignissimos fuga fugit hic ipsum itaque, libero maiores molestiae nihil praesentium qui soluta, tempora, totam voluptates?</span><span>Ab aspernatur distinctio eaque error fugit ipsam molestiae odit perspiciatis quo sapiente. Cumque incidunt veritatis voluptate! Accusantium consequuntur cumque doloribus nihil non possimus sequi? Cumque doloremque obcaecati vel vero voluptatibus?</span><span>Ab architecto fugiat unde. Aliquid, dicta dolorem dolorum iure iusto modi neque odio provident quae veritatis. Asperiores doloremque illo nam nemo, nostrum pariatur perspiciatis suscipit! Accusamus dolore ex illum similique.</span><span>Accusamus alias debitis dolorem eius excepturi, optio porro quam quibusdam repellendus. Blanditiis consequuntur corporis dolorum harum provident recusandae repellendus suscipit vel. Asperiores eius laborum natus odit! Explicabo, laboriosam, odit? Consequatur.</span></p></pre>

                </div>

            </div>


        );
    }
}
export default About;
