# study-typer-frontend
WebタイピングゲームをReactで作る。

公開中: http://study-typer.macinjoke.com/

backend: https://github.com/makky05/study-typer-backend

記事を書きました: http://tonkatu05.hatenablog.com/entry/2018/10/17/121701

# Welcome Contribution
ご意見や、機能のリクエスト、バグ報告など Issue にてお待ちしています。 もしくは [@macinjoke](https://twitter.com/macinjoke) まで。
Pull Request も Welcome です。 (バックエンドのほうもwelcomeですがIssue は全てフロントの方にお願いします)


# 概要

![study typer demo](https://raw.githubusercontent.com/wiki/makky05/study-typer-backend/images/typing_demo.gif)

英和辞書データを返すAPIサーバーをpythonで書いてReactでUIを描画する。サーバー側ではredisに英和辞書データを格納してある。英単語の音声ファイルを用意してその単語をタイピング時に再生できるようにした。
それぞれ英単語にはランク(難易度)が設定してある。たとえばランク1はanswerやpenなどの簡単な単語で、30はflorescenceなどの難しい単語である。ランク付けすることで自分に合ったレベルの英単語を学習タイピングできる。

