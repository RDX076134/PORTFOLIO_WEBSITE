import React from 'react';
import {v4 as uuid} from 'uuid';

export default function Techsection(props) {
    let {skillname, iconUrl, starsTotal, starsTotalcolored} = props.skill;
    let stars=[];
    for (let i = 0; i < starsTotal; i++ ){
        if (i < starsTotalcolored){
            stars.push(<i key={uuid()} className="fas fa-star text-info"></i>);
        }
        else{
            stars.push(<i key={uuid()} className="fas fa-star"></i>);
        }
    }
    return (
    <div>
            <img className="d-block mb-1" src={iconUrl} alt={skillname} style={{height: "100px", width: "100px"}}></img>
            {stars}
    </div>
    );
}
