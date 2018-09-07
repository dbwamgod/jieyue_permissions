import Vue from 'vue';
import iView from 'iview';
import Cookies from 'js-cookie';
import {router} from './router/index';
import {appRouter} from './router/router';
import store from './store';
import App from './app.vue';
import '@/locale';
import 'iview/dist/styles/iview.css';
import VueI18n from 'vue-i18n';
import util from './libs/util';

import axios from 'axios';
Vue.prototype.$axios=axios;
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers['Authorization'] = Cookies.get("token");
Vue.prototype.$qs=qs;

Vue.use(VueI18n);
Vue.use(iView);
// import ElementUI from 'element-ui'
// import '/element-ui/lib/theme-default/index.css'
// Vue.use(ElementUI);

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    data: {
        currentPageName: ''
    },
    mounted () {
        this.currentPageName = this.$route.name;
        // 显示打开的页面的列表
        this.$store.commit('setOpenedList');
        this.$store.commit('initCachepage');
        // 权限菜单过滤相关
        this.$store.commit('updateMenulist');
        // iview-admin检查更新
        util.checkUpdate(this);
    },
    created () {
        let tagsList = [];
        appRouter.map((item) => {
            if (item.children.length <= 1) {
                tagsList.push(item.children[0]);
            } else {
                tagsList.push(...item.children);
            }
        });
        this.$store.commit('setTagsList', tagsList);
        // window.addEventListener('beforeunload', function(e){
        //     let event = e || event
        //     var n = event.screenX -screenLeft;

        //     var b = n > document.documentElement.scrollWidth - 20;
        //     console.log('执行了false')
        //     if (!(b && event.clientY < 0 || event.altKey)) {
        //         event.returnValue = "真的要刷新页面么？";
        //         console.log('执行了')
        //         //这里放置我想执行缓存的代码
        //         setTimeout(() => {
        //             alert('离开了');
        //         }, 100);
        //         return '离开了'
        //     }
        // })
    }
});
