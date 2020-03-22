import React, { Component } from 'react';
import Input from "../../InputField"

class Info extends Component {

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
        return (
            <div className="content">
                {!this.state.isButtonClicked ?
                    <div
                        onMouseEnter={this.handleMouseHover}
                        onMouseLeave={this.handleMouseHover}
                    >
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
                        {this.state.isHovering && <button onClick={this.handleButtonClicked} >Bam di </button>}
                    </div>

                    :
                    <Input ChangeLeftContent={this.props.ChangeLeftContent} handleButtonClicked={this.handleButtonClicked} />
                }

            </div>

        );
    }
}

export default Info;