module.exports = {
    title: "XPU实训文档库",
    description: "西安工程大学计算机实训月文档",
    plugins: ['@vuepress/back-to-top'],
    themeConfig: {
        nav: [
            {text: '首页', link: '/'},
            {
                text: 'Vue基础实战',
                items: [
                    {
                        text: 'Vue 基础入门', 
                        link: '/vue/Vue初体验',
                    },
                    {text: 'Tailwind CSS', link:'/vue/Tailwind CSS 入门'}
                ]
            },
            {
                text: 'Spring Boot基础实战',
                items: [
                    {
                        text: 'Vue 基础入门', 
                        link: '/vue/Vue初体验',
                    },
                    {text: 'Tailwind CSS', link:'/vue/Tailwind CSS 入门'}
                ]
            }
        ],
        sidebar: 'auto'
    },
    
}