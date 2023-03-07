## vite 简单使用项目


## 启动

安装依赖

```shell
npm install
```

启动项目

```shell
npm run dev
```

构建打包

```shell
npm run build
```

### 问题

1. 报错：`[vite] Internal server error: Failed to load PostCSS config`

解决：`postcss.config.js` 改名为 `postcss.config.cjs`。

2. 配置react18 时，报错: `[vite] Internal server error: Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.`

解决： 安装 `@babel/plugin-transform-react-jsx` 插件，配置 vite.config.js

```js
import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

export default {
  plugins: [
    vue(),
    react({
      babel: {
        plugins: [ '@babel/plugin-transform-react-jsx' ],
      }
    }),
  ]
}
```

另一种解决：修改 `main.js` -> `main.jsx`。同样 `index.html` 引入需要修改。

3. 报错：`Uncaught ReferenceError: React is not defined`

解决：报错文件引入 react。

```js
import react from 'react'
```

另一种解决：

  - 修改 `main.js` -> `main.jsx`。同样 `index.html` 引入需要修改。

  - 在 vite.config.js 文件中配置  `esbuild.jsxInject`
  
    ```js
    import react from '@vitejs/plugin-react'

    export default {
      plugins: [
        vue(),
        react(),
      ],
      esbuild: {
        jsxInject: `import React from 'react'`
      }
    }
    ```