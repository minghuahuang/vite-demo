import vue from '@vitejs/plugin-vue'
import react from '@vitejs/plugin-react'

export default {
  plugins: [
    vue(),
    react(
    // {
    //   babel: {
    //     plugins: [ '@babel/plugin-transform-react-jsx' ],
    //   }
    // }
    ),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`
  }
}