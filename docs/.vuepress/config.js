module.exports = {
    // base: "/docs/",
    title: "李十一啊",
    description: "李十一啊的前端笔记记录",
    head: [
        // ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'author', content: '李十一啊' }],
        ['meta', { name: 'keywords', content: 'javascrpt笔记，前端面试，vue，vue3、前端自动化构建工具详解、react知识分享、css知识分享等前端知识分享' }],
    ],
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: '关于我', link: '/about/', target: '_blank' },
            { text: 'js', link: 'https://baidu.com', target: '_self', rel: '' },
            {
                text: 'vue',
                ariaLabel: 'vue Menu',
                items: [
                    { text: 'vue2', link: '/vue/vue2/' },
                    { text: 'vue3', link: '/vue/vue3/' }
                ]
            },
            {
                text: 'interview',
                ariaLabel: 'interview Menu',
                items: [
                    { text: 'js', link: '/interview/js/' },
                    { text: 'css', link: '/interview/css/' }
                ]
            }
        ],
        sidebar: [{
                title: 'Group 1', // 必要的
                path: '/foo/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1, // 可选的, 默认值是 1
                children: [
                    '/'
                ]
            },
            {
                title: 'Group 2',
                children: [ /* ... */ ],
                initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
        ]
    }
}