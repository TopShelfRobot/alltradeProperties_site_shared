import React from 'react'
import * as bodyScrollLock from 'body-scroll-lock'
import Modal from './modal'
import { ModalProvider } from './context'

export default class ModalRoot extends React.Component {
  constructor(props) {
    super(props)
    Modal.rootInstance = this
  }

  state = {
    modalName: null,
    onClose: this.onClose.bind(this),
  }

  openModal(modalName) {
    this.setState({ modalName })
  }
  onClose() {
    this.setState({ modalName: null })
    bodyScrollLock.clearAllBodyScrollLocks()
  }

  render() {
    return <ModalProvider value={this.state}>{this.props.children}</ModalProvider>
  }
}
