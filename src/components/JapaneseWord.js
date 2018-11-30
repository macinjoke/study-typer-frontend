// @flow
import React from 'react'

type Props = {
  ja: string,
}

const JapaneseWord = (props: Props) => {
  const { ja } = props
  const sentences = ja.split('\n')
  return (
    <div className="japaneseWord col-sm align-self-center">
      <p className="main">{sentences[0]}</p>
      <p className="sub">{sentences[1]}</p>
    </div>
  )
}

export default JapaneseWord
