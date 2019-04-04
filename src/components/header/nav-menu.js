import React from 'react'
import cn from 'classnames'

import './nav-menu.scss'

const renderItem = level => (item, idx) => {
  const { label, url, sub } = item
  return (
    <li key={`l${level}-${idx}`} style={{ float: 'left' }}>
      <a href={url}>{label}</a>
      {sub && <ul className="nav-dropdown">{(sub || []).map(renderItem(level + 1))}</ul>}
    </li>
  )
}

class NavMenu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuActive: false,
    }

    this.handleClickToggle = this.handleClickToggle.bind(this)
  }

  handleClickToggle = e => {
    const menuActive = !this.state.menuActive
    this.setState({ menuActive })
  }

  render() {
    const { menu, className: classNameProp, brand: Brand } = this.props
    const { menuActive } = this.state

    return (
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="/">
              <Brand />
            </a>
          </div>
        </div>

        <nav className={cn('nav-menu', classNameProp)}>
          <div className="nav-mobile">
            <a id="nav-toggle" className={cn({ active: menuActive })} href="#!" onClick={this.handleClickToggle}>
              <span />
            </a>
          </div>
          <ul className={cn('nav-list', { active: menuActive })}>{(menu || []).map(renderItem(1))}</ul>
        </nav>
      </section>
    )
  }
}

export default NavMenu
