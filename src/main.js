import { sum } from './utils/help.js'

import _ from 'lodash'

import './style/style.css'
import './style/style.less'
import './style/style.scss'

import { multi } from './TS/multi.ts'

import viteImage from './images/vite.png'

import App from './vue/App.vue'
import { createApp } from 'vue'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Rpp from './react/App.jsx'

const s_num = sum(24, 42)

const l_num = _.add(24, 42)

const t_num = multi(2, 33)

console.log('sum', s_num)
console.log('add', l_num)
console.log('multi', t_num)

// 图片
const image = new Image();
image.src = viteImage;
document.body.appendChild(image);

// vue3
const app = createApp(App)
app.mount('#vue')

// react18
const root = ReactDOM.createRoot(document.getElementById('react'))
root.render(<Rpp />)
