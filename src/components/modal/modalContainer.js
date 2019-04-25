import React from 'react'
import { ModalConsumer } from './context'

export default class ModalContainer extends React.Component {
  static modalInstance
  static show(name) {
    console.log(ModalContainer.modalInstance)
  }

  render() {
    return <ModalConsumer>{Component => <Component />}</ModalConsumer>
  }
}
