import React, { Component } from 'react';

class ZipForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: ""
        }
        this.inputUpdated = this.inputUpdated.bind(this);
        this.submitZipCode = this.submitZipCode.bind(this);
}
inputUpdated(e) {
    const zipcode = e.target.value;
    this.setState({zipcode: zipcode});
}

submitZipCode (e) {
    e.preventDefault(); // don’t submit the form
    const { zipcode } = this.state; // get the zipcode from the state
    const { onSubmit } = this.props; // the method from the App
    onSubmit(zipcode); // the form calls a method on the App and passes the zipcode
    this.setState( {zipcode : ""} ); // clear the zipcode in the class (and on the web page)
    }

render() {
    return (
        <div className="zip-form">
        <form onSubmit={this.submitZipCode} id="zipForm">
        <div className="flex-parent">
            <label htmlFor="zipcode">Zip</label>
            <input onInput={this.inputUpdated} className="form-control" type="input"
             id="zipcode" name="zipcode" value={this.state.zipcode} required />
            <button type="submit" className="btn btn-success"> Get the forcast!</button>
        </div>
        </form>
        </div>
    )
}
}
    

export default ZipForm;