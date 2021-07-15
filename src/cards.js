import React from 'react';

function Cards(props){
    let {title, imageUrl, cardtext} = props.project;
    return(
            <div className="card shadow h-100">
                <img className="card-img-top w-100" src={imageUrl} alt="" style={{height: "70%"}}></img>
                    <div className="card-body">
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">{cardtext}</p>
                        <a href="/" className="stretched-link"> </a>
                    </div>
            </div>
    );
}

export default Cards;