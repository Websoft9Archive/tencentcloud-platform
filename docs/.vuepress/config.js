module.exports = {

//针对不同项目，需要修改的参数有：base,title,description,repo以及nav,sidebar 文件夹下的导航js文件

base: '/docs/tencentcloud/',
dest: 'html/tencentcloud',

//vuepress多语言，区别于主题多语言
locales: {
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Tencent Cloud Platform',
      description: 'You can get the Installation of Image,Administrator,Configuration of the Tencent Cloud from this documentation.'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '腾讯云 云平台指南',
      description: '本文档是对腾讯云官方文档的简化，并结合安装部署、配置等实际操作，致力于帮助您快速的掌握最基本的技能。'
    }
},

themeConfig: {
	 
	//Basic configuration
	displayAllHeaders: false, // 默认值：false
  activeHeaderLinks: true, // 默认值：true
  displayAllHeaders: false, // 默认值：false
  sidebar: 'auto', // 默认值：false

  //Markdown configuration
  includeLevel: [1, 2], //默认值：[2, 3]

  //Github 
  repo: 'Websoft9/tencentcloud-platform',
  editLinks: true,
  docsDir: 'docs',
  docsBranch: 'main',

  //主题多语言
  locales: {
    '/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Edit this page on GitHub',
      lastUpdated: 'Last Updated',
      serviceWorker: {
         updatePopup: {
         message: "New content is available.",
         buttonText: "Refresh"
          }
        },
  
    //top-menu
    nav: require('./nav/en'),
    //left-menu
    sidebar:require('./sidebar/en'),
  },  
  
  '/zh/': {
    label: '中文',
    selectText: '语言',
    editLinkText: '在Github上编辑',
    lastUpdated: 'Last Updated',
    serviceWorker: {
      updatePopup: {
        message: "此文档有可用的更新",
        buttonText: "刷新"
      }
    },
  
    //页眉
    nav: require('./nav/zh'),
    //侧边栏导航
    sidebar: require('./sidebar/zh'),
  
  },
  
},   
}
}
