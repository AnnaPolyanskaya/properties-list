import React, { Component } from 'react';
import './header.css';
import { Button} from 'semantic-ui-react'

export default class Header extends Component {
  render() {
    return (
      <div className='header-main'>
            <h2>Choose layout</h2>
            <Button.Group>
                <Button onClick={() => { this.props.chooseLayout(true)}}>One</Button>
                <Button onClick={() => { this.props.chooseLayout(false)}}>Two</Button>
            </Button.Group>
      </div>
    )
  }
}
