// @flow
import React from 'react'

const Header = () => (
  <div className="header bg-secondary">
    <div id="title-panel">
      <h3 className="card-title">Study Typer</h3>
      <p className="card-subtitle text-white">Typing game for English study</p>
    </div>
    <div
      id="explanation"
      className="text-white align-self-center font-weight-light"
    >
      <p>英語勉強のためのタイピングゲームです</p>
      <p>日本語訳を確認しつつ表示される英単語を打ち込みましょう</p>
      <p>タイピングしながら楽しく英語の意味を覚えられます</p>
    </div>
  </div>
)

export default Header
