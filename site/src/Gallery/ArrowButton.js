import { Component } from "react";
import { Container, Col, Row, Button} from "reactstrap";

import arrow from "./images/arrow.png";

export class ArrowButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let classes = "gallery-button pointer-cursor centered " + (this.props.direction === "left" ? "flip" : "");
        return (
            <Col xs={1} className="gallery-button-container">
                <Button onClick={this.props.onClick} className={classes}>
                    <img className="arrow" src={arrow} alt={this.props.direction} />
                </Button>
            </Col>
        );
    }
}
 