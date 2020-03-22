import React, { useState } from 'react';

function inputField(props) {

    const [inputName] = useState(props.type)

    // bi thay doi state qua nhieu lan, luc nay hieu nang co bi anh huong ko ?
    function handleOnChange  (event) {
        this.props.ChangeLeftContent(event.target.name, event.target.value)
    }



    return (
        <form >
            <div className="form-group">
                <label>Họ tên</label>
                <input name={inputName} onChange={this.handleOnChange} type="text" className="form-control" placeholder="Tên"></input>
            </div>
            <input onClick={this.props.handleButtonClicked} className="btn btn-primary" type="button" value="Submit"></input>
            {/* <button type='submit' onClick={this.props.handleButtonClicked} className="btn btn-primary">Submit</button> */}
        </form >

    );

}

export default inputField;