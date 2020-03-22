import React, { Component } from 'react';
import Info from "./LeftSectionComponents/Info"
import Follow from "./LeftSectionComponents/Follow"
import Input from "../InputField"

const Img = (props) => <img className="circle-image avatar" src="https://via.placeholder.com/500x500" alt="Anh Dai Dien"></img>
const LeftDataVariables = {
    name : "Name",
    Info : "Description",
    Follow : "Follow"
}


class MainLeftSection extends Component {
    
    constructor(prop) {
        super(prop)
        this.handleMouseHover = this.handleMouseHover.bind(this)
        this.handleButtonClicked = this.handleButtonClicked.bind(this)
        this.state = {
            isHovering: false,
            isButtonClicked: false
        }
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState)
    }

    handleButtonClicked() {
        console.log("Clicked")
        this.setState(this.toggleButtonState)
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        }
    }

    toggleButtonState(state) {
        return {
            isButtonClicked: !state.isButtonClicked
        }
    }


    render() {
        // if (this.props.data.leftSection){
        //     console.log(this.props.data.leftSection[0].value)
        // }
        return (
            <section id="left"  >
                {!this.state.isButtonClicked ?
                    <div
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseHover}
                    >
                        {this.props.data.leftSection ? <p>{this.props.data.leftSection[0].value}</p> : "Data chua ve" }
                        {this.state.isHovering && <button onClick={this.handleButtonClicked} >Bam di </button>}
                    </div>
                    :
                    <Input Name={this.props.LeftDataVariables.name} ChangeLeftContent={this.props.ChangeLeftContent} handleButtonClicked={this.handleButtonClicked}/>
                }
                <div className="center-left-section">
                    <Img  ></Img>
                    <Info ChangeLeftContent={this.props.ChangeLeftContent} />
                    <Follow />
                </div>
            </section>
        );
    }
}

export default MainLeftSection;