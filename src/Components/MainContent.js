import React, { Component } from 'react'

class MainContent extends Component {

    render() {
        return (
            <ul>
                <li>Name:
                    <input type='text'></input>
                </li>
                <li>Faculty:
                    <input type='text'></input>
                </li>
                <li>Etc:
                    <input type='text'></input>
                </li>
            </ul>
        );
    }

}

export default MainContent
