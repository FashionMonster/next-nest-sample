Next.js に Nest.js を組み込んだサンプルプロジェクト

## 技術構成

| 項目              | 技術                              |
| ----------------- | --------------------------------- |
| 言語              | TypeScript                        |
| ライブラリ        | React                             |
| フレームワーク１  | Next.js                           |
| フレームワーク２  | Nest.js                           |
| アーキテクチャ    | クリーンアーキテクチャ            |
| その他設定        | Prettier,ESLint,babel etc..       |


## 始め方

１：ソースのクローン

```bash
git clone https://github.com/FashionMonster/next-nest-sample.git
```

２：パッケージをインストール

```bash
npm install
# or
yarn
```

３：プロジェクトの起動

```bash
npm run dev
# or
yarn dev
```

４：ブラウザで http://localhost:3000 を開く

５：テストボタンをクリックして、「Hello World!」と表示されれば OK

## 作成過程

１：[Next.js（TypeScript）の雛形プロジェクト作成](https://nextjs.org/docs/basic-features/typescript)

```bash
npx create-next-app@latest --ts
# or
yarn create next-app --typescript
```

２：[Nest.js に必要なパッケージをインストール](https://docs.nestjs.com/)

```bash
npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
# or
yarn add @nestjs/core @nestjs/common rxjs reflect-metadata
```

３：[pages/api 配下に\[...routes\].ts を作成する　※"routes"は別の名前でも問題ない](https://nextjs.org/docs/api-routes/dynamic-api-routes#catch-all-api-routes)

４：\[...routes\].ts に Nest.js アプリケーションインスタンスの生成とミドルウェアを設定

５：[Controllers, Service, Domain, Infrastructure フォルダを作成。](https://kkoudev.netlify.app/2020/05/nextjs-architecture-design/)さらに Nest.js の contoroller, service, module ファイル を作成

６：Nest.js のサービスを DI する箇所でエラーが発生するので、.babelrc を作成

７：tsconfig.json の設定（デコレータの有効化など）

８：ESLint と Prettier の設定
prettier と eslint-config-prettier をインストール
prettierrc を作成、eslintrc.json を編集
[VSCode の拡張機能をインストール](https://qiita.com/genbu-jp/items/a48bcb9df209b71c2de3)

９：「始め方」の３以降を実行
