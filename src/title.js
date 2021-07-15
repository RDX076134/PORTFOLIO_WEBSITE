import React from "react";

function Titlesec(){
    return (
        <div className="container-fluid text-center my-5">
            <div className="row align-items-md-center">
                <div className="col-12 col-md-6 pt-5"><img className="img-fluid w-50 rounded-circle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Symbol_from_Marvel%27s_The_Avengers_logo.svg/1754px-Symbol_from_Marvel%27s_The_Avengers_logo.svg.png" alt="avengerlogo"></img></div>
                <div className="col-12 col-md-6 mt-2">
                    <div className="jumbotron bg-white"><h1 className="font-weight-light display-4">Hi, I am <span className="text-info">Harshil Bhanushali</span></h1></div>
                    <h4 className="fw-light">I'm a Student at NIT-Surat</h4>
                </div>
            </div>
        </div>
    );
}

export default Titlesec; 