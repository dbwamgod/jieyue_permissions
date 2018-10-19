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


            Array.prototype.remove = function (val) {
                let index = this.indexOf(val);
                if (index > -1) {
                    this.splice(index, 1);
                }
            };
        },

        beforeDestroy () {
        },
        methods: {


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
