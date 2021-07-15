import React from 'react';

function BlogCards(props){
    let {title, imageUrl, cardtext} = props.blog;
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

export default BlogCards;