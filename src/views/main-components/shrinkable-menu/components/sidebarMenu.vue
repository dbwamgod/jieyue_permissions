<style lang="less">
    @import "../styles/menu.less";
</style>

<template>
    <Menu ref="sideMenu" :active-name="act_name" :open-names="['2']" :theme="menuTheme" width="auto"
          @on-select="menuSelect">

        <Submenu name="2">
            <template slot="title">
                <Icon type="ionic"></Icon>
                作业平台
            </template>
            <MenuItem name="2-1" style="padding: 0;">
                <router-link tag="li" to="/component/focus-large" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">集群大盘
                </router-link>
            </MenuItem>
            <MenuItem name="2-2" style="padding: 0;">
                <router-link tag="li" to="/component/task-warning" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">任务预警
                </router-link>
            </MenuItem>
            <MenuItem name="2-3" style="padding: 0;">
                <router-link tag="li" to="/component/task-inquire" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">任务查询
                </router-link>
            </MenuItem>
            <MenuItem name="2-4" style="padding: 0;">
                <router-link tag="li" to="/component/task-table" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">任务记录
                </router-link>
            </MenuItem>
            <MenuItem name="2-5" style="padding: 0;">
                <router-link tag="li" to="/component/spark-table" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">SPARK工作台
                </router-link>
            </MenuItem>
            <MenuItem name="2-6" style="padding: 0;">
                <router-link tag="li" to="/component/hue-table" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">HUE工作台
                </router-link>
            </MenuItem>
            <MenuItem name="2-7" style="padding: 0;">
                <router-link tag="li" to="/component/data_com" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">元数据对比
                </router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="filing"></Icon>
                任务调度
            </template>
            <MenuItem name="3-1" style="padding: 0;">
                <router-link tag="li" to="/component/task-dispatch" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">azkaban
                </router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="4">
            <template slot="title">
                <Icon type="social-codepen"></Icon>
                HIVE权限管理
            </template>
            <MenuItem name="4-1" style="padding: 0;">
                <router-link tag="li" to="/jurisdiction/add-jurisdiction" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">
                    权限管理
                </router-link>
            </MenuItem>
        </Submenu>
    </Menu>
</template>

<script>


    export default {
        name: 'sidebarMenu',
        data () {
            return {
                act_name: '2-1'
            };
        },
        props: {
            menuList: Array,
            iconSize: Number,
            menuTheme: {
                type: String,
                default: 'dark'
            },
            openNames: {
                type: Array
            }
        },
        mounted () {
            // console.log('side', this.openNames, this.$route.name);
            // this.act_name = this.openNames[1];
            // console.log(this.$route, this.act_name);

        },
        created () {
            this.act_name = localStorage.getItem(`pagesT`)?localStorage.getItem(`pagesT`):"2-1";

            //this.act_name=this.openNames[1];
            // this.activeName = Cookies.get('pages');

        },
        methods: {

            // changeMenu (active) {
            //     this.$emit('on-change', active);
            //      console.log('=1=1=1=1=1=11==1=11==',active)
            //     // if(this.openNames.indexOf(data)>-1){
            //     //     this.openNames.remove(data)
            //     // }else{
            //     //     this.openNames.push(data)
            //     // }
            //     console.log(this.openNames)
            // },
            // itemTitle (item) {
            //     if (typeof item.title === 'object') {
            //         return this.$t(item.title.i18n);
            //     } else {
            //         return item.title;
            //     }
            // }
            menuSelect (name) {

                localStorage.setItem(`pagesT`,`${name}`);
                this.$store.commit('addOpenSubmenu', name);
                //  console.log('side', this.openNames, this.$route.name);
                // console.log('=1=1=1=1=1=11==1=11==',data,row,index)
                // if(this.openNames.indexOf(data)>-1){
                //     this.openNames.remove(data)
                // }else{
                //     this.openNames.push(data)
                // }
                // console.log(this.openNames)
            }
        },
        updated () {
            this.$nextTick(() => {
                if (this.$refs.sideMenu) {
                    this.$refs.sideMenu.updateOpened();
                }
            });
        }
    };
</script>
<style>
    router-link {
        color: white;
    }
</style>

