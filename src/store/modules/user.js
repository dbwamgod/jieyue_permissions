import Cookies from 'js-cookie';

const user = {
    state: {},
    mutations: {
        logout (state, vm) {


            let keys= Object.keys(Cookies());
            keys.map(r=>{
                Cookies.remove(r);
            });

            // Cookies.remove('userM');
            // Cookies.remove('passwordM');
            // Cookies.remove('access');
            // Cookies.remove('azkaban');
            // Cookies.remove('tokenY');
            // Cookies.remove('userId');
            // Cookies.remove('PLAY_SESSION');
            // Cookies.remove('hue');
            // Cookies.remove('spark.submit');
            sessionStorage.removeItem(`pagesT`);
            localStorage.removeItem("galaxy_Jurisdiction")
            localStorage.removeItem("galaxy_child")
            // 恢复默认样式
            let themeLink = document.querySelector('link[name="theme"]');
            themeLink.setAttribute('href', '');
            // 清空打开的页面等数据，但是保存主题数据
            let theme = '', Jurisdiction = '', child='';
            if (localStorage.Jurisdiction){
                Jurisdiction = localStorage.Jurisdiction;
            }
            if (localStorage.child){
                child = localStorage.child;
            }
            if (localStorage.theme) {
                theme = localStorage.theme;
            }
            localStorage.clear();
            if (theme) {
                localStorage.theme = theme;
            }
            if (Jurisdiction) {
                localStorage.Jurisdiction = Jurisdiction;
            }
            if (child) {
                localStorage.child = child;
            }
        }
    }
};

export default user;
