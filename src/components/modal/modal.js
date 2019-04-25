import React, { Children } from 'react'
import PropTypes from 'prop-types'
import * as bodyScrollLock from 'body-scroll-lock'

import { ModalConsumer } from './context'

const SingleChildContainer = props => {
  return Children.only(props.children)
}

export default class Modal extends React.Component {
  static rootInstance
  static show(modalName) {
    Modal.rootInstance.openModal(modalName)
  }

  render() {
    return (
      <ModalConsumer>
        {({ modalName, onClose }) => {
          if (modalName !== this.props.name) return null

          const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { onClose })
          })

          const handleBackgroundClick = e => {
            e.stopPropagation()
            e.target === this.background && onClose()
          }

          bodyScrollLock.disableBodyScroll(this.content)

          return (
            <div style={styles.backdrop} onClick={handleBackgroundClick} ref={el => (this.background = el)}>
              <div style={styles.content} ref={el => (this.content = el)}>
                {children}
              </div>
            </div>
          )
        }}
      </ModalConsumer>
    )
  }
}

const styles = {
  backdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    margin: '3em',
    maxHeight: '100%',
    overflowY: 'auto',
  },
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
