import React, { Component } from 'react';

class inputField extends Component {
  
    // bi thay doi state qua nhieu lan, luc nay hieu nang co bi anh huong ko ?
    handleOnChange = event => {
        this.props.changeName(event.target.value)
    }


    render() {
        return (
            <form >
                <div className="form-group">
                    <label>Họ tên</label>
                    <input onChange={this.handleOnChange} type="email" className="form-control" placeholder="Tên"></input>
                </div>
                <input onClick={this.props.handleButtonClicked} className="btn btn-primary" type="button" value="Submit"></input>
                {/* <button type='submit' onClick={this.props.handleButtonClicked} className="btn btn-primary">Submit</button> */}
            </form >

        );
    }
}

export default inputField;