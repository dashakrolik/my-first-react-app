import React, { Component } from 'react'
import UserName from './UserName'
import UserState from './UserState'

export default class UserBoard extends Component {
  render() {
    return <div>{ this.props.content }
      <h1>User Board</h1>
      <UserState name="Dasha"/>
      <UserState name="Vita" />

    </div>
  }
}
