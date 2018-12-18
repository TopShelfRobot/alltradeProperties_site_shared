import React from 'react'
import cn from 'classnames'

import './pager.scss'

function range(from, to) {
  const ary = []
  for (let n = from; n <= to; n++) {
    ary.push(n)
  }
  return ary
}

const Pager = ({ current, total = 1, onGoTo, ...props }) => (
  <nav aria-label="Alltrade Listing Page Navigation" className="pager">
    <ul className="pagination">
      <li className={cn('page-item', { disabled: current <= 1 })}>
        <button className="page-link" onClick={onGoTo(current - 1)}>
          Previous
        </button>
      </li>
      {range(1, total).map(page => (
        <li key={`pager-${page}`} className={cn('page-item', { active: current === page })}>
          <button className="page-link" onClick={onGoTo(page)}>
            {page}
          </button>
        </li>
      ))}
      <li className={cn('page-item', { disabled: current === total })}>
        <button className="page-link" onClick={onGoTo(current + 1)}>
          Next
        </button>
      </li>
    </ul>
  </nav>
)

export default Pager
