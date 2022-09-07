import React from "react";
import avatar from "./avatar.png";

export default function Photo() {
    return <div className="photo-container">
        <img className="photo-image" src={avatar} alt="avatar"/>
        </div>;
}
