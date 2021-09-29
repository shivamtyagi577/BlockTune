import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar3.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>Meet the developers</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>Archishman/DevaRaj/Shivam</h3>
                        <p>Team Members!</p>
                        <p>Music Player on Blockchain</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>We're the Computer Science Students at CHRIST University, Bangalore.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    <p>Contrary Lorem Ipsum is not simply random text. It has roots in a piece ofr.</p>
                    <p>Contrary to popular belief not simply random text. It has roots in a piece of.</p>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply has roots in a piece of</p>
                    <p>And a blogger.</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/shivamtyagi"} title={"vishal.kld"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/"}  title={"Vishal_kld"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/shivam-tyagi-b1b040165/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/chandler_beeing/"}  title={"shivam-tyagi"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://archisman.neocities.org/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;