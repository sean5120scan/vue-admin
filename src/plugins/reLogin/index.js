import ReloginComp from "./relogin.vue"
export default {
    install(Vue, options) {
        const Relogin = Vue.extend(ReloginComp)
        const LoginInstance = new Relogin()
        document.body.appendChild(LoginInstance.$mount().$el)
        function reloginFn(config) {

            let options = {
                title: ""
            }
            for (let key in config) {
                if (config.hasOwnProperty(key)) {
                    LoginInstance.$data[key] = config[key]
                }
            }
            config = { ...options, ...config }
            console.log("config:", config)
            return new Promise((resolve, reject) => {
                LoginInstance.loginVisible = true
                let confirm = LoginInstance.loginConfirm
                let cancel = LoginInstance.loginCancel

                console.log("LoginInstance:", LoginInstance)
                LoginInstance.loginConfirm = () => {
                    let data = {
                        username: LoginInstance.ruleForm.username,
                        password: LoginInstance.ruleForm.password,
                    }
                    confirm()
                    resolve(data)
                }
                LoginInstance.loginCancel = () => {
                    LoginInstance.loginVisible = false
                    cancel()
                    reject()
                }
            })
        }
        Vue.prototype.$relogin = reloginFn
    }
}