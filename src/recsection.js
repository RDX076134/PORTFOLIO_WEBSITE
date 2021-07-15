import React, {Component} from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import {Modal} from 'react-bootstrap';

class Recsection extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          rec: [
            {
                Number: 1,
                comment: "He's a very very good person",
                person: "Om",
                designation: "CEO at Alpha"
            },
            {
                Number: 2,
                comment: "He's a very keen learner",
                person: "Om",
                designation: "CEO at Alpha"
            },
            {
                Number: 3,
                comment: "Very curoius fellow",
                person: "Om",
                designation: "CEO at Alpha"
            },
            {
                Number: 4,
                comment: "A little lazy guy",
                person: "Om",
                designation: "CEO at Alpha"
            },
        ],
        };
      }
     
    render(){
        const {rec} = this.state;
        let comment1="";
        rec.map((recs) =>{

            if (recs.comment.length > 18){
                comment1 = recs.comment.slice(0,18) + "...";  
                recs.Newcomment = comment1;
            }
            else{
                comment1 = recs.comment;
                recs.Newcomment = comment1;
            }
            })
    return (
        <div id="reccomendation" className="container-fluid my-5 py-4 text-center">
            <div className="row py-4 flex-nowrap overflow-auto" id="scrollbar">
                {rec.map((recs) => (
                <div key={uuid()} className="col-12 col-md-4">
                <Reccards recs={recs} />
                </div>
                ))}
            </div>
        </div>        
    )
}
}

class Reccards extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          isShow: false};
        }
        toggleShow = () => {
            this.setState(state => ({ isShow: !state.isShow }));
          };

        openModal = () => this.setState({ isShow: true });
        closeModal = () => this.setState({ isShow: false });
    render(){
    return (
        <div className="card shadow h-100">
            <div className="card-body">
                <h4 className="">{this.props.recs.Newcomment}</h4>
                <p className="card-text mb-0" >{this.props.recs.person}</p>
                <p className="card-text">{this.props.recs.designation}</p>
                <a onClick={this.openModal} className="stretched-link"> </a>
                <Modal show={this.state.isShow} onHide={this.closeModal}>
                    <Modal.Body className="text-center">
                        <div className="text-end mb-4"><i className="fas fa-times" onClick={this.closeModal}></i></div>
                        <h5 className="mb-3">{this.props.recs.comment}</h5>
                        <p className="text-secondary mb-0" >{this.props.recs.person}</p>
                        <p className="text-secondary">{this.props.recs.designation}</p>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    )
}
}

export default Recsection;