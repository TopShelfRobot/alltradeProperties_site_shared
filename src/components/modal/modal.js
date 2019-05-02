import React, { Children } from 'react'
import PropTypes from 'prop-types'
import * as bodyScrollLock from 'body-scroll-lock'

import { ModalConsumer } from './context'

export default class Modal extends React.Component {
  static rootInstance
  static show(modalName) {
    Modal.rootInstance.openModal(modalName)
  }

  render() {
    return (
      <ModalConsumer>
        {({ modalName, onClose }) => {
          const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { onClose })
          })

          const handleBackgroundClick = e => {
            e.stopPropagation()
            e.target === this.background && onClose()
          }

          bodyScrollLock.disableBodyScroll(this.content)

          const visibilityStyle = modalName === this.props.name ? styles.visible : styles.hidden
          const backdropStyle = {
            ...styles.backdrop,
            ...visibilityStyle,
          }
          const contentStyle = {
            ...styles.content,
            ...visibilityStyle,
          }

          return (
            <div style={backdropStyle} onClick={handleBackgroundClick} ref={el => (this.background = el)}>
              <div style={contentStyle} ref={el => (this.content = el)}>
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
    transition: '.25s ease-in',
    zIndex: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: 'white',
    margin: '3em',
    transition: '.25s ease-in',
    maxHeight: '100%',
    overflowY: 'auto',
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
  },
  visible: {
    opacity: 1,
    visibility: 'visible',
  },
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}
