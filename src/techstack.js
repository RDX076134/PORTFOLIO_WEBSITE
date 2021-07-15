import React from 'react'
import Techsection from './techsection';
import {v4 as uuid} from 'uuid';

export default function Techstack() {
    let Techskills= [
        {
            id: 1,
            skillname: "HTML5",
            iconUrl: "data:image/png;base64,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",
            starsTotal: 3,
            starsTotalcolored: 3,
        },
        {
            id: 2,
            skillname: "CSS3",
            iconUrl: "https://cdn.iconscout.com/icon/free/png-512/css3-8-1175200.png",
            starsTotal: 3,
            starsTotalcolored: 2,
        },
        {
            id: 3,
            skillname: "JS",
            iconUrl: "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
            starsTotal: 3,
            starsTotalcolored: 1,
        },
        {
            id: 4,
            skillname: "BS5",
            iconUrl: "https://miro.medium.com/max/1206/1*KWBfLD6aEEHNWyuYmL2CVw.png",
            starsTotal: 3,
            starsTotalcolored: 3,
        },
        {
            id: 5,
            skillname: "React",
            iconUrl: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",
            starsTotal: 3,
            starsTotalcolored: 1,
        },
        {
            id: 6,
            skillname: "MySQL",
            iconUrl: "https://pngimg.com/uploads/mysql/mysql_PNG23.png",
            starsTotal: 3,
            starsTotalcolored: 2,
        },
        {
            id: 7,
            skillname: "Python",
            iconUrl: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
            starsTotal: 3,
            starsTotalcolored: 1,
        },
        {
            id: 8,
            skillname: "Flask",
            iconUrl: "https://cdn.iconscout.com/icon/free/png-256/flask-51-285137.png",
            starsTotal: 3,
            starsTotalcolored: 0,
        }    
    ];
    let finalRow=[];
    for (let i=0; i < 2; i++){
        let skillRow = Techskills.slice(i * 4, (i + 1)* 4);
        finalRow.push(
            <div key={uuid()} className="d-flex py-3 justify-content-around flex-nowrap">
                {skillRow.map((skill) => (
                    <Techsection key={uuid()} skill = {skill} />
                ))}
            </div>
        );
    }

    return (
        <div className="container-fluid text-center bg-light my-5 pt-3" id="techstack">
            <h1 className="text-info fw-light">
            Technology <span className="text-dark">Stack</span></h1>
            <p className="lead font-weight-lighter pb-4">I design, develope and deliver with these weapons.</p>
            {finalRow}
        </div>
    );
}
