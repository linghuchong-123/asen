/*
 * @Description:
 * @Version: 2.0
 * @Author: yangsen
 * @Date: 2022-01-25 21:03:11
 * @LastEditors: yangsen
 * @LastEditTime: 2022-02-20 18:54:14
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh',
  title: '永远有一颗乐于深思的心',
  description: '前端开发图形领域知识',
  

  // 主题和它的配置
  theme: '@vuepress/theme-default', 
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
    updatedTime: true,
    navbar: [
      { text: '首页', link: '/' },
      { 
          text: '冴羽的 JavaScript 博客', 
          children: [
              { text: 'Github', link: 'https://github.com/mqyqingfeng' },
              { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
          ]
      }
    ],
    
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: 'webgl',
        link: '/webgl/index.md',
        children: [
          // SidebarItem
          {
            text: 'github',
            link: 'https://github.com',
            children: [],
          },
          // 字符串 - 页面文件路径
          'webgl/index.md',
        ],
      },
    ],
  



  },
})
