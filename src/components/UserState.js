import React, { Component } from 'react'
import UserName from './UserName'
import UserBoard from './UserBoard'

export default class UserState extends Component {
  state = { active: true }

  toggle = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (<div>
      <UserName name={ this.props.name }/> 
      <p>{ this.props.name } is <b>{ this.state.active ? 'present' : 'absent' }</b></p>
      <button onClick={this.toggle}>Toggle</button>
    </div>)
  }
}
