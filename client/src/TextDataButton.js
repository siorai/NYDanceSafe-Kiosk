import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TextDataButton extends Component {

  render() {
    return(
      <li><Link to={`${this.props.url}/text`}  onClick={ () => this.props.action() }><i className="fa fa-phone-square"></i>Text this info</Link></li>
    )
  }
}

export default TextDataButton
