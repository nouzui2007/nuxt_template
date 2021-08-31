# nuxt_templateの使い方

## VSCodeでコンテナに接続する

### 拡張機能

Remote Development

### 手順

1. VSCode左下の `Open a Remote Window` をクリック
1. `Open Folder in Container...` を選択
    1. すでにフォルダを開いている場合は、`Reopen in Container`を選択
1. このフォルダを選択

## プロジェクトを作る

1. メニューの `Terminal -> New Terminal` をクリック  
  ここでコンテナに接続したターミナルが開く

1. Nuxtプロジェクト作成コマンドを実行  

```bash
yarn create nuxt-app
```

3. 最近のバージョンでは直下にファイルがあるとエラーになるので、プロジェクト用のフォルダ（ここでは `project` ）を指定し、プロジェクト作成後、中にできたファイルを全て親フォルダに移動する

```bash
yarn create nuxt-app project
```

4. `Rebuild Container` で再度開く

1. 左側のペインに `NPM SCRIPTS` を開く

1. `dev` にポイントし、実行ボタンをクリックする

1. ブラウザからアクセスする

```bash
$ http://localhost:3000
```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
