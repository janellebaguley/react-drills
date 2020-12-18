import React, {Component} from 'react'

export default class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.jpg} />
        <div>Error 777</div>
      </div>
    )
  }
}