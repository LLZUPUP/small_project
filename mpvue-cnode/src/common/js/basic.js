const navList = [
    { title: '全部', type: 'all' },
    { title: '精华', type: 'good' },
    { title: '分享', type: 'share' },
    { title: '问答', type: 'ask' },
    { title: '招聘', type: 'job' },
    { title: '测试', type: 'dev' },
]
const obj2style = style => {
    let str = []
    Object.keys(style).forEach(key => {
        str.push(`${key}:${style[key]};`)
    })
    return str.join(';');
}

export {
    navList,
    obj2style
}