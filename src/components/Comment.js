import React from 'react';
import { FiCheck } from "react-icons/fi";

export default class Comment extends React.Component {
    render() {
        return (
            <p><FiCheck /> { this.props.text}</p>
        )
    }
}