# shintaro-web

shintaro's web site

[http://w-avantgarde-b.com/](http://w-avantgarde-b.com/)

## Overview

- build

  - [gulp](https://gulpjs.com)
  - [webpack](https://webpack.js.org/)

- library

  - [barba.js](https://github.com/barbajs/barba)
  - [typed.js](https://github.com/mattboldt/typed.js/)
  - [swiper](https://idangero.us/swiper/)
  - [gsap](https://greensock.com/gsap)

- notes
  - lint-staged + pre-commit を使っているので git に push するタイミングで`yarn style:lint`が発火され、エラーだった場合 commit ができないのでご注意。

## Build Setup

予め Node.js をインストールしておいてください。

- node.js v10.15.3
- yarn

**mac でのインストール**

```bash
brew install yarn
```

**windows でのインストール**

[こちら](https://yarnpkg.com/ja/docs/install#windows-stable) からダウンロードしてください。

**yarn がインストールできているか確認**

```bash
yarn -v # output: 1.15.2
```

**各コマンド**

```bash
# 依存モジュールをインストール。 初回時のみ行う
yarn install

# 開発開始
yarn start

# 本番環境生成
yarn build

# 本番環境のデバック(docsファイルが無い場合、エラーになる)
yarn browser

# cssのコードをチェック + 自動修正
yarn style:lint
```

## Structure

```
.
├── data       # 各ページのデータ
├── dist       # 開発ディレクトリ
├── docs       # 本番環境向けのディレクトリ書出し先
├── src        # 実際に手を動かすディレクトリ
└── system     # ビルド環境
```
