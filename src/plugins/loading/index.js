import myLoading from "./loading.vue";
export default {
  install(Vue, options) {
    const Loading = Vue.extend(myLoading);
    const Profile = new Loading({
      el: document.createElement("div"),
    });
    document.body.appendChild(Profile.$el);
    if (options) {
      if (options.txt) {
        Profile.icon = options.txt;
      }
      if (options.color) {
        Profile.color = options.color;
      }
      if (options.type) {
        Profile.type = options.type;
      }
      options.mask = options.mask ? options.mask : false
    }
    
    const myLoadingMethod = {
      open(
        opts = { type: "loading", text: "加载中请稍后", duration: 2000, mask: true }
      ) {
        Profile.show = true;
        if (opts.text) {
          Profile.text = opts.text;
        }
  
        if (opts.type) {
          Profile.type = opts.type;
        }
        if (opts.duration) {
          Profile.duration = opts.duration;
          if (opts.duration !== 0) {
            setTimeout(() => {
              Profile.show = false;
            }, opts.duration);
          }
        }
        if (!opts.duration) {
          setTimeout(() => {
            Profile.show = false;
          }, 2000);
        }
      },
      close() {
        Profile.show = false;
      },
    };
    Vue.prototype.$sLoading = myLoadingMethod;
  },
};
