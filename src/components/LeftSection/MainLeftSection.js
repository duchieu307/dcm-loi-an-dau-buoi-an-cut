import React, { Component } from 'react';
import Info from "./LeftSectionComponents/Info"
import Follow from "./LeftSectionComponents/Follow"
import Input from "../InputField"

const Img = (props) => <img className="circle-image avatar" src="https://via.placeholder.com/500x500" alt="Anh Dai Dien"></img>

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
     
        console.log("props: ",typeof(this.props.data)," ",this.props.data.leftSection)
        return (
            <section id="left"  >
                {!this.state.isButtonClicked ?
                    <div
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseHover}
                    >
                        {/* <p>{this.props}</p> */}
                        {this.state.isHovering && <button onClick={this.handleButtonClicked} >Bam di </button>}
                    </div>
                    :
                    <Input changeName={this.props.changeName} handleButtonClicked={this.handleButtonClicked}/>
                }
                <div className="center-left-section">
                    <Img  ></Img>
                    <Info />
                    <Follow />
                </div>
            </section>
        );
    }
}

export default MainLeftSection;