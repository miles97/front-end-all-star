module.exports = {
    title: '前端全明星',
    base: '',
    shouldPrefetch: () => false,
    description: 'front-end all star,前端全明星',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'miles97',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'Github',
        // 以下为可选的编辑链接选项
    
        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'ebook-sourcecode',
        // 默认是 false, 设置为 true 来启用
        editLinks: false,
        // 默认为 "Edit this page"
        editLinkText: '嘻嘻',
        nav: [
            { text: '概述', link: '/' },
            { text: '名人堂', link: '/list/' },
        ],
        sidebar: {
            '/list/': [
                {
                    title: 'list',
                    collapsable: false,
                    children: [
                        '/list/0.md',
                        '/list/1.md',
                        '/list/2.md',
                        '/list/3.md'
                    ]
                }, 
         
                {
                    title: 'about',
                    collapsable: false,
                    children: [
                        '/list/99.md',
                    ]
                }
            ],     
        }
    },

};