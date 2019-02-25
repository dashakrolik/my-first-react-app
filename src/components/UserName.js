import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <div>{ this.props.content }
      <p>User:
        <b> Dasha</b>
      </p>
    </div>
  }
}
