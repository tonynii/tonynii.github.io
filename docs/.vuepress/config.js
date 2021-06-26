module.exports = {
    title: '逸山轩',
    description: '逸风随性，山野青翠',
    theme: 'reco',

    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },

    themeConfig: {
        // 博客配置
        type: 'blog',
        author: '逸山',
        authorAvatar: '/avatar.jpg',
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        nav: [
            { text: '时间线', link: '/timeline/', icon: 'reco-date' }
        ],
        blogConfig: {
            category: {
                location: 2,     // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3,     // 在导航栏菜单中所占的位置，默认3
                text: 'Tag'      // 默认文案 “标签”
            },
            socialLinks: [     // 信息栏展示社交信息
                { icon: 'reco-github', link: 'https://github.com/tonynii' },
                { icon: 'reco-weibo', link: 'https://weibo.com/2372023982' }
            ]
        },
        // 备案
        //record: '苏ICP备20026723号',
        //recordLink: 'http://www.beian.miit.gov.cn/',
        // cyberSecurityRecord: '公安部备案文案',
        // cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2020'
    }
}