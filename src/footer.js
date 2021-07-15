import React from "react";

function Footersec(){
    return(
        <footer>
            <div className="container-fluid text-light mt-5 pt-3 text-center" style={{backgroundColor: "black"}}>
                <div className="row align-items-center pt-4 pb-5">
                    <div className="col-12">
                        <h2 className="fw-normal text-center">Interested in working with me?</h2>
                        <button className="btn btn-outline-light mt-3 text-light btn-lg" type="button" style={{fontSize: "110%"}}>Let's Talk</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 py-4 py-md-3">
                        <p className="text-info fw-lighter pb-2" style={{fontSize: "125%"}}>More Links</p>
                        <a href="/" className="fw-lighter text-light d-block" style={{textDecoration: 'none'}}>Blogs</a>
                        <a href="/" className="fw-lighter text-light d-block" style={{textDecoration: 'none'}}>Home</a>
                        <a href="/" className="fw-lighter text-light d-block" style={{textDecoration: 'none'}}>Contact Me</a>
                        <a href="/" className="fw-lighter text-light d-block" style={{textDecoration: 'none'}}>Write A Reccomendation<i className="fas fa-heart ps-1"></i></a>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <p className="fw-lighter" id="footer-para" style={{textAlign: "justify"}}>Lorem ipsum dolor sit amet, qui id odio mundi splendide. Cu elit probo ceteros vel. Vis ea alii appetere, ne eam stet aeque, scripta dolores quo cu. Tale dicant dolorem eos eu. Ferri mazim eam ei, labitur deterruisset vis ne, labore copiosae an vis.
                                                        Et mei tempor iudicabit consectetuer, modo quaerendum deterruisset vel an, et quas repudiandae complectitur nam. Vidisse explicari percipitur cum ad, ne nec modo convenire forensibus, scripta dissentiunt cum te. Hell Volhard zelinsky. </p>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <p className="text-info fw-lighter pb-1" style={{fontSize: "125%"}}>Social</p>
                        <a href="/" className=""><i className="fab fa-linkedin mb-2 text-light" style={{fontSize: "250%"}}></i></a>
                        <br />
                        <a href="/"><i className="fab fa-github-square mb-2 text-light" style={{fontSize: "250%"}}></i></a>
                        <br />
                        <a href="/"><i className="fas fa-envelope text-light" style={{fontSize: "235%"}}></i></a>
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col-12">
                        <p className="text-muted fw-lighter" style={{fontSize: "90%"}}>Copyright <i className="far fa-copyright"></i> Harshil Bhanushali 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footersec;