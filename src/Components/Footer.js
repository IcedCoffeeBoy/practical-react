import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer style={footerstyles}>This is a footer</footer>
        );
    }
}

const footerstyles = {
    backgroundColor: 'yellow',
};

export default Footer;
