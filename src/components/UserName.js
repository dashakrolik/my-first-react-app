import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return <div>{ this.props.content }
      <p>User:
        <b>{ this.props.name }</b>
      </p>
    </div>
  }
}
