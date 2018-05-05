// @flow
import React from 'react'

type Props = {
  ja: string,
}

const JapaneseWord = (props: Props) => {
  const { ja } = props
  return <p className="col-sm align-self-center">{ja}</p>
}

export default JapaneseWord
