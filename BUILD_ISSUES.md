# 网站构建常见问题及解决方案

本文档总结了在构建 Choice SimpliHire 网站过程中遇到的各种问题及其解决方案，供后续开发和部署参考。

---

## 一、Shell 命令执行问题

### 问题描述
在 Windows PowerShell 环境下，使用 `&&` 分隔符执行多条命令时失败：
```
The token '&&' is not a valid statement separator in this version.
```

### 解决方案
将 `&&` 替换为 `;`，使用分号分隔多条命令：
```powershell
cd c:\Users\czf\Desktop\公司\gw\choice-simplihire; npm run build
```

---

## 二、CSS 动画性能问题

### 问题描述
使用 `transition: all` 导致页面动画卡顿，特别是在移动端设备上。

### 解决方案
1. 将 `transition: all` 替换为具体的属性列表：
   ```css
   transition: background-color var(--transition-base), 
               color var(--transition-base), 
               border-color var(--transition-base), 
               transform var(--transition-fast), 
               box-shadow var(--transition-base);
   ```
2. 使用 `will-change` 提示浏览器优化动画属性
3. 优先使用 `transform` 和 `opacity` 进行 GPU 加速

---

## 三、按钮样式一致性问题

### 问题描述
跨页面按钮样式不一致，按钮分级不清晰，缺少统一的视觉层级。

### 解决方案
建立标准化的按钮系统，包含四种类型：
- **Primary（主要按钮）**：深色背景，白色文字，用于关键操作
- **Secondary（次要按钮）**：透明背景，深色边框，用于次要操作
- **Outline（轮廓按钮）**：透明背景，浅色边框
- **Text（文字按钮）**：纯文字样式

统一按钮的内边距、边框半径、阴影和悬停效果。

---

## 四、CSS 样式替换失败

### 问题描述
使用编辑工具替换大型 CSS 样式块时失败，提示 "String to replace not found in file"。

### 解决方案
将大型替换操作分解为多个小步骤：
1. 先修改基础样式
2. 再逐个更新各个变体
3. 确保每次替换的字符串在文件中唯一

---

## 五、导航栏样式问题

### 问题描述
导航栏布局不协调，字体大小不符合预期。

### 解决方案
1. 调整 `.nav-link` 字体大小和内边距
2. 统一导航栏的高度和间距
3. 添加滚动时的背景模糊效果

---

## 六、构建内存不足问题

### 问题描述
执行 `npm run build` 时出现内存溢出错误：
```
Fatal process out of memory: Re-embedded builtins: set permissions
```

### 解决方案
1. 关闭其他占用内存的程序
2. 使用开发服务器 `npm run dev` 进行预览
3. 考虑升级 Node.js 版本或增加内存限制

---

## 七、按钮点击变黑问题

### 问题描述
点击深色按钮时，按钮会变成黑色。

### 解决方案
在 `.btn-primary:active` 等伪类中显式设置背景色和边框色：
```css
.btn-primary:active {
  background-color: var(--color-primary-dark);
  border-color: var(--color-primary-dark);
  color: var(--color-white);
  outline: none;
}
```

---

## 八、按钮点击/悬停字体消失问题

### 问题描述
点击或鼠标悬停在深色按钮上时，文字会消失。

### 解决方案
1. **原因分析**：全局 `a:hover` 样式会覆盖按钮的 hover 状态。由于按钮通常通过 `<router-link>` 实现（渲染为 `<a>` 标签），当鼠标悬停时，全局的 `a:hover` 会将文字颜色改为与背景色相近的颜色，导致文字看起来消失。

2. **解决方法**：
   - 在按钮的 hover/active 状态中添加 `!important` 强制覆盖全局样式
   - 添加 `-webkit-tap-highlight-color: transparent` 禁用移动端点击高亮
   - 在全局样式中添加 `-webkit-tap-highlight-color: transparent`

```css
.btn-primary:hover,
a.btn-primary:hover {
  color: var(--color-white) !important;
  -webkit-tap-highlight-color: transparent;
}
```

---

## 九、部署到阿里云页面不显示问题

### 问题描述
将构建后的文件上传到阿里云静态网站托管后，页面无法显示。

### 解决方案
1. **路由模式问题**：
   - 原项目使用 `createWebHistory`（HTML5 History 模式），需要服务器将所有路由请求回退到 `index.html`
   - 阿里云静态网站托管默认不会配置路由回退规则
   - **解决方法**：切换到 `createWebHashHistory`（Hash 模式）

2. **base 路径问题**：
   - 原配置 `base: '/choice-simplihire/'` 指定了子目录路径
   - 如果阿里云域名根目录就是站点根目录，资源路径会不正确
   - **解决方法**：将 base 路径改为 `/`

3. **修改文件**：
   - `src/router/index.js`：将 `createWebHistory` 改为 `createWebHashHistory`
   - `vite.config.js`：将 `base: '/choice-simplihire/'` 改为 `base: '/'`

4. **部署步骤**：
   - 运行 `npm run build` 构建项目
   - 将 `dist` 目录下的所有文件上传到阿里云 Bucket 根目录
   - 确保设置了正确的默认首页为 `index.html`

---

## 十、字体层级问题

### 问题描述
网站的字体层级不清晰，主标题、副标题、正文、按钮之间的字号、字重、间距差异不明显，导致页面看起来比较平。

### 解决方案
建立完整的字体变量系统：
- Hero 标题：`clamp(2.5rem, 6vw, 4rem)`
- H1-H4 标题：使用不同的字号和字重
- 正文：统一的字号和行高
- 辅助文字：较小的字号和较浅的颜色

确保每个页面只突出一个核心主张，重点词通过字重、颜色或排版位置突出。

---

## 十一、移动端适配问题

### 问题描述
手机首屏标题和副标题被裁切，按钮偏宽，严重影响移动端用户体验。

### 解决方案
1. **标题字体响应式调整**：
   - 将固定字号改为渐进式响应字号：`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl`
   - 避免使用过大的固定字号

2. **副标题截断问题**：
   - 移除 `whitespace-nowrap overflow-hidden text-ellipsis` 样式
   - 添加 `max-w-2xl mx-auto leading-relaxed` 让文字正常换行
   - 使用响应式字体大小：`text-sm sm:text-base md:text-lg lg:text-xl`

3. **按钮宽度调整**：
   - 添加响应式内边距：`px-6 md:px-8`
   - 避免移动端按钮过宽

4. **Header 响应式调整**：
   - Logo 尺寸改为响应式：`h-10 sm:h-12 md:h-16 lg:h-20`
   - Header 高度改为响应式：`h-12 sm:h-14 md:h-16 lg:h-20`
   - 顶部 padding 同步调整：`pt-12 sm:pt-14 md:pt-16 lg:pt-20`

---

## 十二、GitHub Actions 部署权限问题

### 问题描述
GitHub Pages 部署失败，提示权限不足。

### 解决方案
1. **原因分析**：新版 GitHub 默认限制了工作流令牌（`GITHUB_TOKEN`）的权限，缺少写入权限导致部署失败。

2. **解决方法**：在 `.github/workflows/deploy.yml` 中添加权限声明：
   ```yaml
   permissions:
     contents: write
     pages: write
     id-token: write
   ```

3. **完整工作流配置**：
   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ master ]

   permissions:
     contents: write
     pages: write
     id-token: write

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout code
           uses: actions/checkout@v4

         - name: Set up Node.js
           uses: actions/setup-node@v4
           with:
             node-version: '20'
             cache: 'npm'

         - name: Install dependencies
           run: npm install

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v4
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

---

## 十三、npm ci 失败问题

### 问题描述
在 GitHub Actions CI 环境中执行 `npm ci` 失败。

### 解决方案
将 `npm ci` 改为 `npm install`：
```yaml
- name: Install dependencies
  run: npm install
```

**原因分析**：`npm ci` 需要完全匹配的 `package-lock.json` 文件，而 `npm install` 更加灵活，适合 CI 环境。

---

## 十四、Header 高度与 logo 尺寸不一致问题

### 问题描述
Header 使用固定高度 `h-16`，但 logo 在大屏幕上使用 `h-20`，导致 logo 溢出 Header 区域。

### 解决方案
1. 将 Header 高度改为响应式，与 logo 尺寸保持一致：
   ```html
   <div class="h-12 sm:h-14 md:h-16 lg:h-20">
   ```

2. 确保所有页面的顶部 padding 与 Header 高度同步：
   ```html
   <div class="pt-12 sm:pt-14 md:pt-16 lg:pt-20">
   ```

3. 验证所有页面（Home、AboutUs、InvestmentPortfolio、IndustryInsights、ContactUs）都已更新。

---

## 总结

在构建网站过程中，常见问题主要集中在以下几个方面：

1. **样式问题**：CSS 样式冲突、动画性能、按钮状态管理、字体层级
2. **构建问题**：Shell 命令兼容性、内存不足、构建配置、npm ci 失败
3. **部署问题**：路由模式配置、base 路径设置、服务器配置、GitHub Actions 权限
4. **移动端适配问题**：标题裁切、按钮宽度、Header 响应式调整

通过建立标准化的样式系统、使用合适的路由模式、注意不同环境的命令差异、采用响应式设计，可以有效避免大部分问题。在遇到问题时，建议先分析错误信息，定位问题根源，再采取相应的解决方案。