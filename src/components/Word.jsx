// @flow

import React from 'react'

type Props = {
  en: string,
  ja: string,
  isActive: boolean,
  filledNum: ?number,
  missedNum: ?number
}

const Word = (props: Props) => {
  return props.isActive ? (
    <li className="active">
      <span className="filled">{props.en.slice(0, props.filledNum || 0)}</span>
      <span className="missed">
        {props.en.slice(
          props.filledNum || 0,
          props.filledNum + props.missedNum
        )}
      </span>
      <span className="unfilled">
        {props.en.slice(props.filledNum + props.missedNum)}
      </span>
      <span> : {props.ja}</span>
    </li>
  ) : (
    <li className="inactive">
      <span>{props.en}</span>
    </li>
  )
}

export default Word
