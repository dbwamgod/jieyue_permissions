<style lang="less">
    @import "../styles/menu.less";
</style>

<template>
    <Menu ref="sideMenu" :active-name="act_name" :open-names="['2']" :theme="menuTheme" width="auto"
          @on-select="menuSelect" class="menu-label">

        <Submenu name="2" v-if="dropdown.homework">
            <template slot="title">
                <Icon type="ionic"></Icon>
                作业平台
            </template>
            <MenuItem name="2-1" class="menu-coms" v-if="menuDisplay.CLUSTER_GRAIL" >
                <router-link tag="li" to="/component/focus-large" class="router-com">集群大盘
                </router-link>
            </MenuItem>
            <MenuItem name="2-2" class="menu-coms" v-if="menuDisplay.TASK_WARN" >
                <router-link tag="li" class="router-com" to="/component/task-warning">任务预警
                </router-link>
            </MenuItem>
            <MenuItem name="2-3" class="menu-coms" v-if="menuDisplay.TASK_FIND">
                <router-link tag="li"  class="router-com" to="/component/task-inquire">任务查询
                </router-link>
            </MenuItem>
            <MenuItem name="2-4" class="menu-coms" v-if="menuDisplay.TASK_RECORD">
                <router-link tag="li"  class="router-com" to="/component/task-table">任务记录
                </router-link>
            </MenuItem>
            <MenuItem name="2-5" class="menu-coms" v-if="menuDisplay.SPARK_WORKBENCH">
                <router-link tag="li"  class="router-com" to="/component/spark-table">SPARK工作台
                </router-link>
            </MenuItem>
            <MenuItem name="2-6" class="menu-coms" v-if="menuDisplay.HUE_WORKBENCH">
                <router-link tag="li"  class="router-com" to="/component/hue-table">HUE工作台
                </router-link>
            </MenuItem>
            <MenuItem name="2-7" class="menu-coms" v-if="menuDisplay.METADATA_COMPARE">
                <router-link tag="li"  class="router-com" to="/component/data_com">元数据对比
                </router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="3" v-if="dropdown.azkaban">
            <template slot="title">
                <Icon type="filing"></Icon>
                任务调度
            </template>
            <MenuItem name="3-1" class="menu-coms" v-if="menuDisplay.AZKABAN">
                <router-link tag="li"  class="router-com" to="/component/task-dispatch">azkaban
                </router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="4" v-if="dropdown.jurisdiction">
            <template slot="title">
                <Icon type="social-codepen"></Icon>
                HIVE权限管理
            </template>
            <MenuItem name="4-1" class="menu-coms" v-if="menuDisplay.AUTH">
                <router-link tag="li"  class="router-com" to="/jurisdiction/add-jurisdiction">
                    权限管理
                </router-link>
            </MenuItem>
            <MenuItem name="4-2" class="menu-coms" v-if="menuDisplay.BATCH">
                <router-link tag="li"  class="router-com" to="/jurisdiction/del-jurisdiction">
                    批量管理
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
                menuDisplay: {
                    'CLUSTER_GRAIL': false,
                    'TASK_WARN': false,
                    'TASK_FIND': false,
                    'TASK_RECORD': false,
                    'SPARK_WORKBENCH': false,
                    'HUE_WORKBENCH': false,
                    'METADATA_COMPARE': false,
                    'AZKABAN': false,
                    'AUTH': false,
                    'BATCH': false
                },
                dropdown: {
                    homework: false,
                    azkaban: false,
                    jurisdiction: false,
                },
                act_name: '2-1',
                pathNameObj: {
                    'focus-large': '2-1',
                    'task-warning': '2-2',
                    'task-inquire': '2-3',
                    'task-table': '2-4',
                    'spark-table': '2-5',
                    'HUE-table': '2-6',
                    'data_com': '2-7',
                    'task-dispatch': '3-1',
                    'add-jurisdiction': '4-1',
                    'workflow': '4-2'
                },
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
        watch: {
            '$route' (to, form) {
                this.act_name = this.pathNameObj[to.name] || this.pathNameObj[form.name];
                this.pathNameObj[to.name] && sessionStorage.setItem('pagesT', this.pathNameObj[to.name]);
            }
        },
        created () {
            let localQ = JSON.parse(localStorage.getItem('galaxy_Jurisdiction'));
            localQ && localQ.length && localQ.map(r => {
                this.menuDisplay[r.resourceCode] = true;
                r.resourceCode === 'CLUSTER_GRAIL' || 'TASK_WARN' || 'TASK_FIND' || 'TASK_RECORD' || 'SPARK_WORKBENCH' || 'HUE_WORKBENCH' || 'METADATA_COMPARE' ? this.dropdown.homework = true : '';
                r.resourceCode === 'AZKABAN' ? this.dropdown.azkaban = true : '';
                r.resourceCode === 'AUTH' || 'BATCH' ? this.dropdown.jurisdiction = true : '';
            });
            this.act_name = sessionStorage.getItem(`pagesT`) ? sessionStorage.getItem(`pagesT`) : this.pathNameObj[this.$store.state.app.currentPageName];

        },
        methods: {
            menuSelect (name) {
                sessionStorage.setItem(`pagesT`, `${name}`);
                this.$store.commit('addOpenSubmenu', name);
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
