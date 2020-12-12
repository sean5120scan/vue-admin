
import Vue from "vue"
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// / 找到globalComps文件夹下以.vue命名的文件
const requireComponent = require.context("../../globalComps", false, /\.vue$/); 
requireComponent.keys().map((fileName) => {
    const componentConfig = requireComponent(fileName);
    const name = fileName.replace(/^\.\//, "").replace(/\.\w+$/, "");
    const componentName = capitalizeFirstLetter(name);
    Vue.component(componentName, componentConfig.default || componentConfig);
});