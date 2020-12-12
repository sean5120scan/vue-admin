import Warn from "./warnTip.vue"
export default {
    install(Vue, options) {
        const WarnTip = Vue.extend(Warn)
        const warnInstance = new WarnTip()
        document.body.appendChild(warnInstance.$mount().$el)
        const warnFn = (config) => {
            let opts = {
                text: "",
                mask: true,
                isClickMaskVisble: false,
            }
            for (let key in opts) {
                if (opts.hasOwnProperty(key)) {
                    warnInstance.$data[key] = opts[key]
                }
            }
            config = { ...opts, ...config }
            warnInstance.show = true
            warnInstance.text = config.text
            warnInstance.isShowModal = config.mask
            warnInstance.asyncVisble = config.isClickMaskVisble
        }

        Vue.prototype.$sysWarn = warnFn
    }
}
