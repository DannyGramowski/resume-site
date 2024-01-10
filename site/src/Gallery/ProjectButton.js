import { Container, Button } from "reactstrap";
import { Component } from "react";

export class ProjectButton extends Component {
    state = {hover: false};



    toggleHover = (value) => {
        this.setState({hover: value});
    }

    render() { 
        let className = "proj-button" + (this.props.active === true ? " active" : "");
        let data = this.props.projectData;
        let background = data.background;
        let textColor = data.textColor;

        let style = this.state.hover ? {boxShadow: ``} : {};
 //shadows on hover or always
 //fuzz effect
        

        return (
            <Container className="proj-button-container center">
                <Button className={className} style={style} onClick={this.props.onClick} onMouseEnter={() => this.toggleHover(true)} onMouseLeave={() => this.toggleHover(false)}>
                    <span className="tooltip" style={{background: background, color: textColor}}>{data.name}</span>
                </Button>
            </Container>
        );
    }
}
 