export default {
    render(h) {
        return h("i", {
            attrs: {
                class: 'iconfont inBlock center'
            },
            'class': {
                'iconfont icon-loading rotate inBlock default': this.type == "loading",
                'iconfont icon-warning inBlock warning': this.type == "warning",
                'iconfont icon-error inBlock error': this.type == "error",
                'iconfont icon-success inBlock success': this.type == "success",
            }
        })
    },
    props: {
        type: {
            type: String,
            default: 'loading'
        },
        text: {
            type: String,
            default: '数据加载中请稍后'
        }
    }
}




