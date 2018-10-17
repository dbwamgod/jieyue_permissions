<template>
    <div id="main" class="app-main">
        <router-view></router-view>
    </div>
</template>

<script>

    import Cookies from 'js-cookie';

    export default {
        data () {
            return {
                theme: this.$store.state.app.themeColor
            };
        },
        created () {
//本地权限校验没有存储后 会自动跳到登录页
            if (!JSON.parse(localStorage.getItem('galaxy_Jurisdiction'))) {
                this.$store.commit('logout', this);
                this.$store.commit('clearOpenedSubmenu');
                this.$router.push({
                    name: 'login'
                });
            }
            //判断已登录后重新加载页面而导致的权限bug
            if (!sessionStorage.getItem('pagesT')) {
                if (localStorage.getItem('galaxy_Jurisdiction')) {
                    let Code = JSON.parse(localStorage.getItem('galaxy_Jurisdiction'))[0].resourceCode;
                    let CodeOrg = 0;
                    if (JSON.parse(localStorage.getItem('galaxy_Jurisdiction'))[1]) {
                        CodeOrg = JSON.parse(localStorage.getItem('galaxy_Jurisdiction'))[1].resourceCode;
                    }

                    if (Code == '29' || CodeOrg == '32') {
                        this.again_go('focus-large');
                    }
                    if (Code == '29' && CodeOrg !== '32') {
                        this.again_go('task-warning');
                    } else if (Code == '35') {
                        this.again_go('task-inquire');
                    } else if (Code == '38') {
                        this.again_go('task-table');
                    } else if (Code == '40') {
                        this.again_go('spark-table');
                    } else if (Code == '41') {
                        this.again_go('HUE-table');
                    } else if (Code == '42') {
                        this.again_go('data_com');
                    } else if (Code == '44') {
                        this.again_go('task-dispatch');
                    } else if (Code == 'AUTH') {
                        this.again_go('add-jurisdiction');
                    } else if (Code == 'BATCH') {
                        this.again_go('add-jurisdiction');
                    }
                }
            }

            Array.prototype.remove = function (val) {
                let index = this.indexOf(val);
                if (index > -1) {
                    this.splice(index, 1);
                }
            };
        },
        mounted () {
            if (localStorage.getItem('galaxy_child')) {
                JSON.parse(localStorage.getItem('galaxy_child')).map(r => {
                    this.$store.commit("judgeJurisdiction",r.resourceCode)
                });
            }else{

            }

        },
        beforeDestroy () {
        },
        methods: {

            again_go (where = 'focus-large') {
                Cookies.set('defaultHome', where);
                this.$router.push({
                    name: String(where)
                });
            },
        }
    };
</script>

<style>
    html,
    body {
        width: 100%;
        height: 100%;
        background: #f0f0f0;
        overflow: hidden;
    }

    .app-main {
        width: 100%;
        height: 100%;
    }
</style>
