import { MJMLElement } from 'mjml-core'
import merge from 'lodash/merge'
import MJMLText from 'mjml-text'
import React, { Component } from 'react'

const tagName = 'test'
const endingTag = false

/*
 * Add your default mjml-attributes here
 */
const defaultMJMLDefinition = {
  attributes: {
    'color': '#424242',
    'font-family': 'Helvetica',
    'margin-top': '10px'
  }
}

/*
 * Add you default style here
 */
const baseStyles = {
  div: {
    cursor: 'auto'
  }
}

@MJMLElement
class Test extends Component {

  /*
   * Build your styling here
   */
  getStyles () {
    const { mjAttribute, color } = this.props

    return merge({}, this.constructor.baseStyles, {
      text: {
      /*
       * Get the color attribute
       * Example: <mj-test color="blue">content</mj-test>
       */
        color: mjAttribute('color')
      }
    })
  }

  render () {
    const css = this.getStyles()
    const content = 'Hello World!'

    return (
      <MJMLText style={css}>
        {content}
      </MJMLText>
    )
  }

}

Test.tagName = tagName
Test.defaultMJMLDefinition = defaultMJMLDefinition
Test.endingTag = endingTag
Test.baseStyles = baseStyles

export default Test

