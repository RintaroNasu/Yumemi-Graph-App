# 株式会社ゆめみ　フロントエンドコーディング課題

## 課題概要
https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d

## 開発環境のセットアップ手順
ローカル環境で開発サーバーを起動するための手順は以下の通りです。

1. リポジトリをクローン
```
git clone https://github.com/RintaroNasu/yumemi-graph-app.git
```
2. 依存パッケージをインストール
```
npm install
```
3. .env ファイルをルートディレクトリに作成し、以下の内容を追加（APIキーはゆめみによって提供されています。）
```
RESAS_API_KEY = "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ"
```
4. サーバー立ち上げ
```
npm run dev
```

## 技術スタック
・フロントエンド: Next.js<br>
・利用API: RESAS（地域経済分析システム）API
