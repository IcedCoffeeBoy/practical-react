import React, { Component } from 'react'

class MainContent extends Component {

    constructor(props) {
        super(props);
        this.state = { namevalue: '', yearvalue: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        const isValid  = this.checkForValidEntry(this.state)
        if (isValid) {
            alert('The following will be submitted:\n' +
                'Name:' + this.state.namevalue + '\n' +
                'Year:' + this.state.yearvalue);
        }
        event.preventDefault();
    }

    checkForValidEntry(state) {
        if (state.namevalue === '') {
            alert('The name field cannot be empty')
            return false
        }
        if (state.yearvalue > 4 || state.yearvalue === '') {
            alert('Ensure that the correct year is entered')
            return false
        }
        return true
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" name='namevalue' value={this.state.namevalue} onChange={this.handleChange} />
                </label>
                <br />
                <label>
                    Year: <input type="number" name='yearvalue' value={this.state.yearvalue} onChange={this.handleChange} />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }

}

export default MainContent
