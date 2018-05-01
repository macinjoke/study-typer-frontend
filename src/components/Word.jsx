// @flow
import React from 'react'

type Props = {
  index: number,
  en: string,
  isActive: boolean,
  filledNum: ?number,
  missedNum: ?number,
}

const Word = (props: Props) => {
  const { index, en, isActive, filledNum, missedNum } = props

  return isActive ? (
    <li className="active">
      <span className="index text-monospace">
        {index + 1 < 10 && <span className="text-monospace">&nbsp;</span>}
        {index + 1}:{' '}
      </span>
      <span className="filled">{en.slice(0, filledNum || 0)}</span>
      <span className="missed">
        {en.slice(filledNum || 0, filledNum + missedNum)}
      </span>
      <span className="unfilled">{en.slice(filledNum + missedNum)}</span>
    </li>
  ) : (
    <li className="inactive text-muted">
      <span className="index text-monospace">
        {index + 1 < 10 && <span className="text-monospace">&nbsp;</span>}
        {index + 1}:{' '}
      </span>
      <span>{en}</span>
    </li>
  )
}

export default Word
