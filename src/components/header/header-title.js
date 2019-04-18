import React from 'react'

import Container from '../container'
import Row from '../row'

import './header-title.scss'

const HeaderTitle = ({ title, secondary, ...props }) => {
  const Secondary = typeof secondary === 'string' ? () => <h2>{secondary}</h2> : secondary

  return (
    <header className="header-title">
      <Container>
        <Row>
          <div className="col-lg-6 primary">
            <h1> {title} </h1>
          </div>

          <div className="col-lg-6 secondary">{!!Secondary && <Secondary />}</div>
        </Row>
      </Container>
    </header>
  )
}
export default HeaderTitle
