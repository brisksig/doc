module.exports = {
  title: 'Brisk',
  description: '高性能go语言HTTP-web框架.',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  themeConfig: {
    logo: '/logo.png',  // 左上角logo
    nav:[ // 导航栏配置
      {text: '首页', link: '/' },
      {text: '文档', link: '/docs/' },
      {text: 'Github', link: 'https://github.com/DomineCore/brisk'}      
    ],
    sidebar: 'auto', // 侧边栏配置
  }
};
