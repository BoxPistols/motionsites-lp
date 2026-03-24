# LP 制作プロンプトテンプレート（完全版）

> このテンプレートを使って、ダークプレミアム系 LP を一発で生成するためのプロンプト。
> `{...}` の部分を差し替えて使用する。

---

## 使い方

1. セクション 1〜8 をすべてコピー
2. `{ブランド名}` `{キャッチコピー}` 等のプレースホルダを置換
3. Claude に貼り付ける

---

## ここからプロンプト本文

````markdown
# {ブランド名} LP — 完全再現プロンプト

## 1. プロジェクト概要

| 項目 | 値 |
|------|-----|
| タイプ | シングルページ LP |
| テーマ | {テーマ例: AI-powered web design agency} |
| 美学 | {美学例: ダーク・プレミアム・Apple 風} |
| 背景 | 純黒 `#000` 全面 |
| スタック | React + Vite + TypeScript + Tailwind CSS v4 |

### 依存パッケージ（これだけ入れる）
```
motion          — framer-motion アニメーション
lucide-react    — アイコン
hls.js          — HLS 動画ストリーミング（使う場合のみ）
```

### 重要な制約
- `shadcn/ui` は使わない（液体グラスを自前 CSS で実装）
- Tailwind v4 の `@theme inline` を使う
- フォントは **インライン style** で指定する（Tailwind の `font-heading` 等は v4 で不安定なため）
- 全セクションに `style={{ background: '#000' }}` を明示する
- 動画が読み込めない場合の **フォールバック視覚効果** を必ず用意する

---

## 2. デザインシステム

### 2.1 フォント（Google Fonts）

| 役割 | フォント | ウェイト | 指定方法 |
|------|----------|----------|----------|
| 見出し | {例: Instrument Serif} | italic | `style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic' }}` |
| 本文 | {例: Barlow} | 300, 400, 500, 600 | `style={{ fontFamily: "'Barlow', sans-serif" }}` |

```html
<!-- index.html の <head> に追加 -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family={見出しフォント}:ital@1&family={本文フォント}:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

### 2.2 カラー階層（ダークテーマ）

| 用途 | 値 | 使用場面 |
|------|-----|----------|
| 背景 | `#000000` | 全セクション background |
| 見出し | `#ffffff` | h1, h2, h3 |
| 本文（主） | `rgba(255,255,255,0.8)` | 説明文、引用 |
| 本文（副） | `rgba(255,255,255,0.55-0.6)` | サブテキスト |
| 本文（補助） | `rgba(255,255,255,0.4)` | フッター、キャプション |
| アクセント | `{例: rgba(120,80,255,0.6)}` | グロー、オーブ |

### 2.3 タイポグラフィ規則

| 要素 | サイズ | lineHeight | letterSpacing |
|------|--------|------------|---------------|
| Hero 見出し | `clamp(3.5rem, 9vw, 7rem)` | `0.85-0.88` | `-3px` |
| セクション見出し | `clamp(2.25rem, 5vw, 3.75rem)` | `0.9` | `-0.025em` |
| 小見出し | `clamp(1.5rem, 3vw, 1.875rem)` | `0.9` | `-0.025em` |
| 本文 | `0.875rem` または `1.05rem` | `1.6-1.7` | — |
| ラベル / Badge | `0.75rem` | — | — |

> **重要**: すべて `clamp()` を使いレスポンシブにする。メディアクエリでのフォントサイズ切替は使わない。

### 2.4 全ボタン・インタラクティブ要素
- `rounded-full`（ピル形状）
- `cursor-pointer` 必須
- `transition-colors` でホバー遷移
- ホバー時に `scale` は使わない（レイアウトシフト防止）

---

## 3. 液体グラス CSS（`index.css` にそのまま記述）

### ⚠️ `@layer components` は使わない — グローバルに定義する

```css
/* Liquid Glass - subtle */
.liquid-glass {
  background: rgba(255, 255, 255, 0.03);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(180deg,
    rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

/* Liquid Glass - strong（ボタン、強調カード用） */
.liquid-glass-strong { /* ...同構造、blur(50px)、影強め */ }
```

---

## 4. ヒーロー背景の視覚効果（動画が読み込めない場合のフォールバック）

### これが最重要。動画なしでもインパクトを出す。

```css
/* アニメーションオーブ（3個配置） */
@keyframes orb-float-1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(80px, -60px) scale(1.15); }
  66% { transform: translate(-40px, 40px) scale(0.9); }
}

.hero-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.5;
  pointer-events: none;
  will-change: transform;
}

.hero-orb-1 {
  width: 600px; height: 600px;
  background: radial-gradient(circle, {アクセント色1, 例: rgba(120,80,255,0.6)} 0%, transparent 70%);
  top: 10%; left: 15%;
  animation: orb-float-1 20s ease-in-out infinite;
}
/* orb-2, orb-3 も同様に色・位置・速度を変えて配置 */

/* 見出し背後のグロー */
.hero-glow {
  position: absolute;
  width: 700px; height: 300px;
  top: 50%; left: 50%;
  transform: translate(-50%, -60%);
  background: radial-gradient(ellipse, {アクセント色, 例: rgba(140,80,255,0.2)} 0%, transparent 70%);
  pointer-events: none;
}

/* 微細グリッドパターン */
.hero-grid {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 80px 80px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 40%, black 30%, transparent 80%);
  pointer-events: none;
}
```

### ヒーロー構造（z-index 順）
```
z-0  : 動画（あれば）— opacity-40, mix-blend-mode: screen
z-0  : アニメーションオーブ 3個
z-0  : グリッドパターン
z-0  : ヘディンググロー
z-1  : フェードオーバーレイ（下部 400px グラデーション）
z-10 : コンテンツ（Badge → 見出し → サブテキスト → CTA）
```

---

## 5. 共通コンポーネント

### 5.1 BlurText（word-by-word アニメーション）
- `motion/react` で各単語を個別アニメーション
- `IntersectionObserver` でビューポート内に入ったら発火
- `blur(10px)` → `blur(0px)`, `opacity: 0` → `1`, `y: 50` → `0`
- 単語間遅延: 80ms
- **Hero の見出しにのみ使用**（多用しない）

### 5.2 HLSVideo（HLS 動画プレイヤー）
- `hls.js` で HLS ストリーミング
- Safari: `canPlayType('application/vnd.apple.mpegurl')` で native 再生
- `autoPlay loop muted playsInline`

### 5.3 Badge（セクションラベル）
```tsx
<span className="liquid-glass rounded-full inline-block mb-4"
  style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500,
           color: '#fff', fontSize: '0.75rem', padding: '0.25rem 0.875rem' }}>
  {children}
</span>
```

### 5.4 動画フェードオーバーレイ
```css
.video-fade-top {
  position: absolute; top: 0; left: 0; right: 0;
  height: 200px;
  background: linear-gradient(to bottom, black, transparent);
  z-index: 1; pointer-events: none;
}
.video-fade-bottom { /* 同上、bottom: 0、to top */ }
```

---

## 6. セクション定義

### セクション 1 — NAVBAR（fixed）

| プロパティ | 値 |
|------------|-----|
| Position | `fixed top-4 left-0 right-0 z-50 px-6 md:px-8` |
| 構造 | 左: ロゴ / 中央: ナビピル / 右: CTA |

- ナビピル: `liquid-glass rounded-full` 内にリンク
- CTA: `bg-white text-black rounded-full`
- ロゴ背景にも `backdrop-filter: blur(10px)` を追加

---

### セクション 2 — HERO（100vh）

| プロパティ | 値 |
|------------|-----|
| 高さ | `min-height: 100vh`（固定 height は使わない） |
| overflow | `hidden` |
| コンテンツ padding | `paddingTop: '20vh', paddingBottom: '15vh'` |

**背景レイヤー**: オーブ 3個 + グリッド + グロー + 動画（任意）

**コンテンツ**:
1. Badge ピル: `"New"` タグ + テキスト
2. 見出し: `BlurText` コンポーネント — `"{キャッチコピー}"`
3. サブテキスト: `motion.p` で fade-in（delay: 0.8s）
4. CTA ボタン 2つ: `motion.div` で fade-in（delay: 1.1s）

---

### セクション 3 — PARTNERS

| プロパティ | 値 |
|------------|-----|
| 構造 | Badge + パートナー名を横並び |
| フォント | 見出しフォント（italic）で各社名 |
| 間隔 | `gap-8 md:gap-12`, `py-20` |

---

### セクション 4 — HOW IT WORKS（動画背景）

| プロパティ | 値 |
|------------|-----|
| 高さ | `min-height: 700px` |
| 背景 | HLS 動画 + 上下フェード |
| overflow | `hidden` |

---

### セクション 5 — FEATURES CHESS（交互レイアウト）

| プロパティ | 値 |
|------------|-----|
| 構造 | `flex-col gap-20` 内に行ごとに左右交互 |
| 偶数行 | `lg:flex-row-reverse` |
| 画像 | `liquid-glass rounded-2xl overflow-hidden` 内に配置 |

---

### セクション 6 — FEATURES GRID（4カラム）

| プロパティ | 値 |
|------------|-----|
| グリッド | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6` |
| カード | `liquid-glass rounded-2xl p-6` |
| アイコン | Lucide アイコンを `liquid-glass-strong rounded-full w-10 h-10` 内に |

---

### セクション 7 — STATS（動画背景 + グラスカード）

| プロパティ | 値 |
|------------|-----|
| 背景動画 | デサチュレート `filter: saturate(0)` |
| カード | `liquid-glass rounded-3xl` 内にグリッド |
| グリッド | `grid-cols-2 lg:grid-cols-4` |

---

### セクション 8 — TESTIMONIALS（3カラム）

| プロパティ | 値 |
|------------|-----|
| グリッド | `grid-cols-1 md:grid-cols-3 gap-6` |
| カード | `liquid-glass rounded-2xl p-8` |
| 引用 | italic, `rgba(255,255,255,0.8)` |

---

### セクション 9 — CTA FOOTER（動画背景）

| プロパティ | 値 |
|------------|-----|
| 背景 | HLS 動画 + 上下フェード |
| CTA | `liquid-glass-strong` + `bg-white text-black` の 2 ボタン |
| フッター | `border-top: 1px solid rgba(255,255,255,0.1)` |

---

## 7. アニメーション規則

| パターン | 用途 | 設定 |
|----------|------|------|
| BlurText | Hero 見出しのみ | word-by-word, delay 80ms |
| fade-in-up | Badge, サブテキスト, CTA | `opacity: 0→1, y: 20→0`, duration 0.6s |
| whileInView | セクション見出し, カード | `viewport: { once: true, margin: '-50px' }` |
| stagger | グリッドカード | `delay: i * 0.1` |
| orb-float | Hero 背景オーブ | 18-25s 周期, ease-in-out, infinite |

### `prefers-reduced-motion` 対応（必須）
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. よくあるミスと対策

| ミス | 対策 |
|------|------|
| 動画が読み込めず黒一面 | オーブ + グロー + グリッドのフォールバックを必ず入れる |
| `@layer components` で液体グラスが消える | グローバルに定義する（`@layer` を使わない） |
| Tailwind v4 で `font-heading` が効かない | インライン `style` で `fontFamily` を直接指定 |
| `overflow-visible` で横スクロール発生 | 動画セクションは必ず `overflow-hidden` |
| `height: 1000px` で下部に空白 | `min-height: 100vh` + padding で制御 |
| 見出しの行間が広すぎる | `lineHeight: 0.85-0.9` を明示（clamp と併用） |
| ホバーで `scale` → レイアウトシフト | `bg-white/10` や `opacity` 変化に留める |
| アイコンに絵文字を使用 | 必ず Lucide / Heroicons の SVG アイコン |
| `body` に `overflow-x: hidden` がない | 必ず付ける（オーブがはみ出す） |

---

## 9. Tailwind v4 CSS テンプレート（`index.css`）

```css
@import "tailwindcss";

@theme inline {
  --color-foreground: #ffffff;
  --color-primary: #ffffff;
  --font-heading: '{見出しフォント}', serif;
  --font-body: '{本文フォント}', sans-serif;
}

html { scroll-behavior: smooth; }

body {
  font-family: '{本文フォント}', sans-serif;
  background: #000;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

/* この後に：
   - prefers-reduced-motion
   - hero-orb keyframes + classes
   - hero-glow, hero-grid
   - liquid-glass, liquid-glass-strong
   - video-fade-top, video-fade-bottom
   を記述 */
```

---

## 10. チェックリスト

### 視覚品質
- [ ] 動画なしでも Hero にインパクトがあるか
- [ ] 液体グラスの境界グラデーションが見えるか
- [ ] フォントが正しく読み込まれているか（italic セリフ + サンセリフ）
- [ ] カラー階層（白 → 60% → 40%）が適切か

### レイアウト
- [ ] 横スクロールが発生しないか
- [ ] Navbar がコンテンツに被っていないか（top-4 余白）
- [ ] 全セクションの背景が `#000` で統一されているか
- [ ] 動画セクションに `overflow-hidden` があるか

### インタラクション
- [ ] 全ボタンに `cursor-pointer` があるか
- [ ] ホバーで layout shift が起きないか
- [ ] `prefers-reduced-motion` でアニメーションが無効化されるか

### パフォーマンス
- [ ] オーブに `will-change: transform` があるか
- [ ] 動画に `muted playsInline` があるか
- [ ] 画像に `loading="lazy"` があるか（Below the fold）
````
