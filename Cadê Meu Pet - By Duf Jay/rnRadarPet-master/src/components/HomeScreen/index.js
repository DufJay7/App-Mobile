import React, { Component } from 'react'

import Map from './Map';

export default class HomeScreen extends Component {
  render() {
    return <Map navigation={this.props.navigation}/>
  }
}
