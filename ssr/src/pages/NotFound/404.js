import React from 'react'

export default (props) => {
  props.staticContext ? props.staticContext.NotFound = true : '';
  return <div>404</div>
}