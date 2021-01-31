/**
 * 服务端样式 css渲染
 */
import React, { Component } from 'react'

export default (Components, styles) => {
  return class newComponent extends Component {
    constructor(props) {
      super(props)
      const { staticContext } = props;
      if (staticContext) {
        staticContext.css.push(styles._getCss())	
      }
    }
    render() {
      return <Components {...this.props} />
    }
  }
}