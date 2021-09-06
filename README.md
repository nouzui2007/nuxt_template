# Vuex(vuex-module-decorators)を使う

## VSCodeでコンテナに接続する

### 拡張機能

Remote Development

### 手順

1. VSCode左下の `Open a Remote Window` をクリック
1. `Open Folder in Container...` を選択
    1. すでにフォルダを開いている場合は、`Reopen in Container`を選択
1. このフォルダを選択

1. 左側のペインに `NPM SCRIPTS` を開く

1. `dev` にポイントし、実行ボタンをクリックする

1. ブラウザからアクセスする

```bash
$ http://localhost:3000
```

## VuexをNuxtで利用する

諸々無視すれば、 `store` ディレクトリにモジュールと対応するファイルを設置すると利用できる。

が、TypeScriptとVuexは相性良くない。

* 型安全が守られない
* インテリセンスが効かない

Nuxt公式は `vuex-module-decorators` を推奨している。

### インストール

```sh
yarn add -D vuex-module-decorators
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
