# 株式会社ゆめみフロントエンドコーディング課題

## 課題概要
https://yumemi.notion.site/0e9ef27b55704d7882aab55cc86c999d

---

## アプリ詳細

### 実装内容
  1. ゆめみフロントエンドコーディング試験 API の「都道府県一覧」API から取得する。
  2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する。
  3. 都道府県にチェックを入れると、ゆめみフロントエンドコーディング試験 API から選択された都道府県の「人口構成」を取得する。
  4. 人口構成APIレスポンスから、「 X軸:年」「Y軸:人口数」の折れ線グラフを動的に生成して表示する。「総人口」の他に「年少人口」「生産年齢人口」「老年人口」も切り替えるUIを何かしらの形で用意し、表示できるようにすること。（同時に表示する必要はない）

### 実施期間
　　2024/11/11~2024/11/14

### デモ動画
https://github.com/user-attachments/assets/881e5fed-2d26-4271-bb39-c46e92b6305b

---

## 技術スタック
### 使用言語
 ・ TypeScript
 
### フロントエンド
 ・ Next.js<br>
 ・利用API: RESAS（地域経済分析システム）API

## 本番環境
 ・https://yumemi-graph-app.vercel.app/
 
---

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
RESAS_API_URL = "https://yumemi-frontend-engineer-codecheck-api.vercel.app"
RESAS_API_KEY = "8FzX5qLmN3wRtKjH7vCyP9bGdEaU4sYpT6cMfZnJ"
```
4. サーバー立ち上げ
```
npm run dev
```
