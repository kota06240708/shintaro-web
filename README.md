# shintaro-web

shintaro's web site

[http://avant-garde](http://avant-garde.id.s3-website-us-west-2.amazonaws.com/)


## Overview

* build
  * [gulp](https://gulpjs.com)
  * [webpack](https://webpack.js.org/)

* library
  * [barba.js](https://github.com/barbajs/barba)
  * [typed.js](https://github.com/mattboldt/typed.js/)
  * [swiper](https://idangero.us/swiper/)
  * [gsap](https://greensock.com/gsap)

* notes
  * lint-staged + pre-commitを使っているのでgitにpushするタイミングで`yarn style:lint`が発火され、エラーだった場合commitができないのでご注意。

## Build Setup

予めNode.jsをインストールしておいてください。

* node.js v10.15.3
* yarn

** macでのインストール **

```bash
brew install yarn
```

** windowsでのインストール **

[こちら](https://yarnpkg.com/ja/docs/install#windows-stable) からダウンロードしてください。

** yarnがインストールできているか確認 **

```bash
yarn -v # output: 1.15.2
```

** 各コマンド **

```bash
# 依存モジュールをインストール。 初回時のみ使う
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

```sh
.
├── data       # 各ページのデータ
├── dist       # 開発ディレクトリ
├── docs       # 本番環境向けのディレクトリ書出し先
├── src        # 実際に手を動かすディレクトリ
└── system     # ビルド環境
```

