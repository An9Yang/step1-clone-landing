# Step1 Chrome Web Store 上架材料

本文件夹包含 Chrome Web Store 上架所需的所有视觉材料和文档。

---

## 文件清单

### 图标
| 文件名 | 尺寸 | 用途 |
|--------|------|------|
| `icon-128x128.svg` | 128 x 128 px | 商店应用图标 |

### 商店截图 (Screenshots)
| 文件名 | 尺寸 | 内容 |
|--------|------|------|
| `screenshot-1-hero.svg` | 1280 x 800 px | 主功能展示 - Clone Any Design in Seconds |
| `screenshot-2-siteclone.svg` | 1280 x 800 px | Site Clone 功能 |
| `screenshot-3-component.svg` | 1280 x 800 px | Component Clone 功能 |
| `screenshot-4-visual.svg` | 1280 x 800 px | Visual Edit 功能 |
| `screenshot-5-style.svg` | 1280 x 800 px | Style Extraction 功能 |

### 推广图 (Promo Tiles)
| 文件名 | 尺寸 | 用途 |
|--------|------|------|
| `promo-small-440x280.svg` | 440 x 280 px | 小推广图 |
| `promo-large-1400x560.svg` | 1400 x 560 px | 大推广图 (Marquee Banner) |

### 文档
| 文件名 | 用途 |
|--------|------|
| `permissions-justification.md` | 权限解释文案 (英文) |

---

## 如何转换为 PNG

### 方法 1: 浏览器截图 (推荐)
1. 在浏览器中打开 SVG 文件
2. 确认显示正常
3. 使用截图工具截取 (macOS: Cmd+Shift+4)

### 方法 2: 在线工具
- [CloudConvert](https://cloudconvert.com/svg-to-png)
- [SVG to PNG](https://svgtopng.com/)

### 方法 3: 命令行 (需安装 Inkscape)
```bash
# 单个文件
inkscape icon-128x128.svg -o icon-128x128.png

# 批量转换
for f in *.svg; do inkscape "$f" -o "${f%.svg}.png"; done
```

### 方法 4: macOS Preview
1. 用 Preview 打开 SVG 文件
2. File → Export → 选择 PNG 格式

---

## Chrome Web Store 规格要求

| 素材类型 | 尺寸 | 格式 | 备注 |
|----------|------|------|------|
| 应用图标 | 128 x 128 | PNG | 边缘清晰，不要圆角 |
| 截图 | 1280 x 800 或 640 x 400 | JPEG/PNG | 无透明通道，至少1张 |
| 小推广图 | 440 x 280 | JPEG/PNG | Logo + 产品名 |
| 大推广图 | 1400 x 560 | JPEG/PNG | 重要内容在中心安全区 |

---

## 其他上架所需信息

### 隐私政策
- **URL**: https://step1.dev/privacy
- **内容**: 已在项目 `components/PrivacyPolicy.tsx` 中定义

### 权限说明
- 详见 `permissions-justification.md`
- 填写表单时直接复制相关段落

---

## 品牌色彩参考

| 颜色 | HEX | 用途 |
|------|-----|------|
| Primary Yellow | #facc15 | 主品牌色 |
| Text Dark | #0f172a | 主文字 |
| Text Secondary | #475569 | 次要文字 |
| Background | #fafafa | 背景 |
| Site Clone | #facc15 | 黄色功能标识 |
| Component Clone | #3b82f6 | 蓝色功能标识 |
| Visual Edit | #9333ea | 紫色功能标识 |
| Style Extract | #22c55e | 绿色功能标识 |

---

*生成日期: 2025年1月*
