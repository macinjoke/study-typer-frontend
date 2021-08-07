もう開発・公開してない。

# study-typer-frontend
WebタイピングゲームをReactで作る。

~公開中: http://study-typer.macinjoke.com/~

backend: https://github.com/makky05/study-typer-backend

記事を書きました: http://tonkatu05.hatenablog.com/entry/2018/10/17/121701

# 概要

![study typer demo](https://raw.githubusercontent.com/wiki/makky05/study-typer-backend/images/typing_demo.gif)

英和辞書データを返すAPIサーバーをpythonで書いてReactでUIを描画する。サーバー側ではredisに英和辞書データを格納してある。英単語の音声ファイルを用意してその単語をタイピング時に再生できるようにした。
それぞれ英単語にはランク(難易度)が設定してある。たとえばランク1はanswerやpenなどの簡単な単語で、30はflorescenceなどの難しい単語である。ランク付けすることで自分に合ったレベルの英単語を学習タイピングできる。

