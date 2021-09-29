import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
//import Logo from "../assets/img/headphonesLogo.svg"
import Logoo from "../assets/img/sound.png"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/home"}>
                    <h1>
                        Block
                        <img src={Logoo} width={"24px"} alt=""/>
                        Tune
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;