module.exports = {
    title: 'demo', // 设置网站标题
    // dest: './dist', // 设置输出目录
    base: '/vuepress-demo/', // 设置站点根路径
    repo: 'https://github.com/shiningya/vuepress-demo', // 添加 github 链接
    themeConfig: {
        // 添加导航栏
        nav: [
            {
                text: 'vue',
                items: [
                    { text: 'vue1', link: '/vue/vue1' },
                    { text: 'vue2', link: '/vue/vue2' },
                    { text: 'vue3', link: '/vue/vue3' }
                ]
            },
            { text: 'css', link: '/blog/' },
            { text: 'js', link: '/zhihu/' },
            {
                text: 'github',
                // 这里是下拉列表展现形式。
                items: [
                    { text: 'focus-outside', link: 'https://github.com/txs1992/focus-outside' },
                    { text: 'stylus-converter', link: 'https://github.com/txs1992/stylus-converter' }
                ]
            }
        ],
        // 为以下路由添加侧边栏
        // sidebar: ['/', '/git', '/vue']
    }
}