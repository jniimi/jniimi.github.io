# jniimilab.ai

名城大学 新美研究室（JNiimiLab）の公式Webサイトです。
GitHub Pagesでホスティングし、カスタムドメイン **[jniimilab.ai](https://jniimilab.ai)** を割り当てています。

## サイト構成

| ページ | ファイル | 内容 |
|---|---|---|
| Top | `index.html` | プロフィール・研究関心・経歴・連絡先 |
| Research | `research.html` | 研究業績 |
| Education | `education.html` | 教育関連情報 |
| Seminar | `seminar.html` | ゼミナール情報 |

## 技術スタック

- 静的HTML / CSS / JavaScript（フレームワーク不使用）
- GitHub Pages によるホスティング
- カスタムドメイン設定（`CNAME`）
- Google Fonts（Cormorant Garamond, Great Vibes, Share Tech Mono）
- note.com の RSS フィード取得（`rss.js`）

## ローカルでの確認

任意のHTTPサーバーでルートディレクトリを配信してください。

```bash
# 例: Python
python -m http.server 8000
```

## ライセンス・クレジット

- ブランドアイコン: [edent/SuperTinyIcons](https://github.com/edent/SuperTinyIcons)
- 写真素材: [Pexels](https://www.pexels.com)
- サイト構築: [Claude Code](https://claude.ai/code) との協働
