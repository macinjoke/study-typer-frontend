// @flow
import React from 'react'

const Header = () => (
  <div className="header">
    <div id="title-panel">
      <div id="title-and-version">
        <h3 id="title">Study Typer</h3>
        <p id="version">ver 1.0.0</p>
      </div>
      <p id="subtitle">Typing game for English study</p>
    </div>
    <div id="explanation-panel" className="text-white font-weight-light">
      <p>英語勉強のためのタイピングゲームです</p>
      <p>日本語訳を確認しつつ表示される英単語を打ち込みましょう</p>
      <p>タイピングしながら楽しく英語の意味を覚えられます</p>
    </div>
  </div>
)

export default Header