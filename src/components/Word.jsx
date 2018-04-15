// @flow
import React from 'react'

type Props = {
  en: string,
  ja: string,
  isActive: boolean,
  filledNum: ?number,
  missedNum: ?number,
}

const Word = (props: Props) => {
  const { en, ja, isActive, filledNum, missedNum } = props

  return isActive ? (
    <li className="active">
      <span className="filled">{en.slice(0, filledNum || 0)}</span>
      <span className="missed">
        {en.slice(filledNum || 0, filledNum + missedNum)}
      </span>
      <span className="unfilled">{en.slice(filledNum + missedNum)}</span>
      <span> : {ja}</span>
    </li>
  ) : (
    <li className="inactive">
      <span>{en}</span>
    </li>
  )
}

export default Word
