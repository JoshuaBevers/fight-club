import React, { Component } from "react";
import './Card.css';

class Card extends Component {
    render() {
        return(
            <div className="card" onClick={this.props.fight} >
                <p><b>Name:</b> {this.props.name}</p>
                <p><b>Age:</b> {this.props.age}</p>
                <p><b>Role:</b> {this.props.role}</p>
                <p><b>Race:</b> {this.props.race}</p>
                <p><b>Health:</b> {this.props.health}</p>
                <p><b>Level:</b> {this.props.level}</p>
            </div>
        )
    }
}

export default Card;