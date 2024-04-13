[英語版](README.en.md)

# シカクエ

<p align="center">
  <img src="https://lh3.googleusercontent.com/pw/AP1GczPHGPjAQ81CJ7ULA7h5u9E_qpYZVxPPVtl_T8l7mPHxQOYCs0V93mI910r9ceQUDYX3lGtZCQayx65j3rnHz_zqmw7bniHyZ27Jqj-CRlI1gRdwuHhoPnsZD6po-grQxOGcW4DtRtUs_V0R5o6PWCyBRcRUeODRULJltdcelE1QRMR4Zz4ziRkrOG3_8dDoXUNcxs4JrFb2D9Ns6cv2sQxGpyjMpZo0F0qxhAwNVmcoZqw5AHPIv1HNo8rigZbpkJPHs4ld-pYshmHU3XIUnjfCa6akUeQiRSczBLeK9fA5aH__q9EvGX6LcWIuuZTp4Wwzk59HnFqBGanIJmld1mGhJYp-aHou7cV_rYMLTg4_AwrdpWrAgFcc1sBg2zY6SbyQn5Awm1JLGTFwHmfJGz5QnPxWPKYgIG_7e4d272Z8860Iz_yqzij1lvXd0V3CLYMLzna4FPWGq_BWOnirIEaLAP23xkjPzR8mkDm6B3wBg6Nv4O3AkVUf0DS9HdQqtd-Gkp0bcDlOkWcE5_Wy-AKrevyksmtkec6M4Aef6YzjgoRG3FRRLQBLPbCAYQfmK_SJE4HYltjZp4DYk4sIbom66POB9azoldDavbh1bkHdAMrU0bzS_DJw9qJX0JRffjJMVfjYTbVjAXfGuKy9dJ8z4eUYCu7XqsRuW1WEZwCUsm1D0mLMLdxmsZZ110uccum8FNaJHNtqJIXE26kIk0QXZMlIi1lMUmVC353iXatEJe7TLHN28UXSeE0gUmrLmDrTjzECz_4P27DA83tP0syLaxOZKSx4EKH2OzZHUxCnqlHVHUn5w26advKs7tcUAzm8DueDabuBKEOdoGWEtxNibATJPGxtcl9N5s7edydTju-MgpwEFChYWFj4RURP5_lQq682SO-MY76nhU2fMZYnGW8V1BRF9o6EXrO6MRenvAnu2yFkWIlnidLD=w372-h797-s-no-gm?authuser=0" width="370" height="797" />
  <img src="https://lh3.googleusercontent.com/pw/AP1GczOaDnJ2B9dym47Y8gXyahPyjHtoPyk6hFjY6IN7CY3gsb7ioQToxOQECkq-iH3JBp8_AFPFbHsoyKcmP0kilX91uU_zomzqkujP9ETGrJwrqL1_Fuxn_pGEMKLf35LmyBv_U7vEHqVPN9zC1f8RU0UwEHI5FcFpcKG5nrDHKKd5RNcogXBGCGj06_gG453J948LPFt_AK1b0XaOwP87OKBlpMR5IiNQistQtIq5AsgXroamZgzjoj83BIc5rnV8LyGCTnCJqhZpOW1fIqjzP7Ni7zwZaMYqLVi5XcJfyQgUR1dMNk0rJty8AdUTkZIhwGdUcnW7DiKxWU1WUF0NdIMopqPgANEnDePZLJpzKeADKN7JX2lYdq_gGExXObKLgP7dnBmm0Nx-iwkhhf7P3PvuPOFvTRB-FdvhSxT8NoJ7kSj_tUh5RRqr6KNvbuXgDbFIxMiok8x1MZsRRvf5fHN5WT4r5LEKNDQe5hcHL1ftinaXSByun0plSE1Wu089kJyl5f0zg_xiW7S8C6qGfN41jB2R3GUXMs8L1yCgD2Lbkf-l6f9ZQB7N9k5KBc5QYR9J9nRRXSVkX_rhHUYU-UqDpUKsqiXveQCH3QVOVpWrvYtxHA0J2yHPcE0ApU03v7CP3Gfwq5rUYVHoa-QpYi7n9bOXmj-5L6EOwZvEHTzAKfSgMbx04qBmSObakZJE_H0bcaoZpJ09WxYUgJNpAWNuNNjx2u75JVGV6qwP_ODEc_R6cek5brMVob2ZqHhsu6H3v0E5xbZRbQzba84uuBUvdn1o4be7YA-24iis0v4DQOnB1E8hCvteaaB_JohKAHBJJLYoCXncE2269YJZcDRx0GJMY6yqRXdicl08lI1hNldsItd1rhs6fCEJzjXIM133dfcRmRovrs6X0ybwwicb4o6rpwbZ9ZSWnaHunWGRI_2T8wwPl5RA-I4Y=w370-h803-s-no-gm?authuser=0" width="370" height="797"/>
</p>

## 概要

シカクエは、HTML5 検定の資格勉強をサポートするためのアプリケーションです。忙しい仕事や学業に追われる人々が、隙間時間を活用して楽しく資格勉強ができるように設計されています。

## 技術

これは、npm を使用した JavaScript プロジェクトです。Express.js を使用したウェブアプリケーションであり、データストレージには MySQL を使用しています。

## インストール

1. リポジトリをクローン: `git clone <https://github.com/SHIKAKUE-html5/SHIKAKUE.git>`
2. 依存関係をインストール: `npm install`
3. `.env.example`を`.env`にコピーし、環境変数を入力してください。
4. SCSS を CSS にコンパイルする: `gulp sass`
5. サーバーを起動: `npm start`

## プロジェクト構造

プロジェクトは以下の構造を持っています：

- `src/`: これがメインのアプリケーションコードが存在する場所です。
  - `config/`: `database.js`や`viewEngine.js`などの設定ファイルが含まれています。
  - `controllers/`: 受信したリクエストを処理し、レスポンスを送信するコントローラーファイルが含まれています。
  - `models/`: データベース内のデータの構造を定義するファイルが含まれています。
  - `routes/`: アプリケーションのルートを定義するファイルが含まれています。
  - `services/`: ビジネスロジックを定義するファイルが含まれています。
  - `views/`: アプリケーションのデータがユーザーに表示される方法を定義するファイルが含まれています。
- `public/`: CSS、JavaScript、および画像などの静的ファイルが含まれています。
- `sass/`: CSS にコンパイルされる SCSS ファイルが含まれています。
- `seeder/`: 初期データでデータベースを生成するファイルが含まれています。
- `gulpfile.js`: 一般的な開発活動を自動化するタスクを定義します。
- `server.js`: アプリケーションのエントリーポイントです。

## 貢献

貢献は歓迎されています。リポジトリをフォークして変更を含むプルリクエストを作成してください。
