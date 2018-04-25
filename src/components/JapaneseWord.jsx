// @flow
import React from 'react'

type Props = {
  ja: string,
}

const JapaneseWord = (props: Props) => {
  const { ja } = props
  return <p>{ja}</p>
}

export default JapaneseWord
