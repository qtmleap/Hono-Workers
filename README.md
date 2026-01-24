# Hono + Cloudflare Workers

TypeScript + Bun + Wrangler を使用した Cloudflare Workers プロジェクト

## 技術スタック

- [Hono](https://hono.dev/) - 軽量Webフレームワーク
- [Cloudflare Workers](https://workers.cloudflare.com/) - エッジコンピューティング
- [Bun](https://bun.sh/) - JavaScript ランタイム / パッケージマネージャー
- [TypeScript](https://www.typescriptlang.org/)
- [Biome](https://biomejs.dev/) - Linter / Formatter

## セットアップ

```bash
bun install
```

## 開発

```bash
bun run dev
```

http://localhost:8787 でローカルサーバーが起動します。

## デプロイ

```bash
bun run deploy
```

## プロジェクト構成

```
├── src/
│   └── index.ts        # エントリーポイント
├── wrangler.toml       # Wrangler設定
├── package.json
├── tsconfig.json
└── biome.json
```
