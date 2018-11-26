// @flow
import React from 'react'

type Props = {
  ja: string,
}

const JapaneseWord = (props: Props) => {
  const { ja } = props
  // TODO ------- This is hotfix ------
  const sentences = ja.split('\n')
  return (
    <p className="col-sm align-self-center">
      {sentences[0]}
      <br />
      {sentences[1]}
    </p>
  )
  // ----------------------------------
}

export default JapaneseWord
