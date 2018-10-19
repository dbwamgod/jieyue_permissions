<style lang="less">
    @import "../styles/menu.less";
</style>

<template>
    <Menu ref="sideMenu" :active-name="act_name" :open-names="['2']" :theme="menuTheme" width="auto"
          @on-select="menuSelect">

        <Submenu name="2" v-if="dropdown.homework">
            <template slot="title">
                <Icon type="ionic"></Icon>
                作业平台
            </template>
            <MenuItem name="2-1" style="padding: 0;" v-if="menuDisplay.fouse">
                <router-link tag="li" to="/component/focus-large" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">集群大盘
                </router-link>
            </MenuItem>
            <MenuItem name="2-2" style="padding: 0;" v-if="menuDisplay.early_warn">
                <router-link tag="li" to="/component/task-warning" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">任务预警
                </router-link>
            </MenuItem>
            <MenuItem name="2-3" style="padding: 0;" v-if="menuDisplay.check">
                <router-link tag="li" to="/component/task-inquire" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">任务查询
                </router-link>
            </MenuItem>
            <MenuItem name="2-4" style="padding: 0;" v-if="menuDisplay.record">
                <router-link tag="li" to="/component/task-table" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">任务记录
                </router-link>
            </MenuItem>
            <MenuItem name="2-5" style="padding: 0;" v-if="menuDisplay.spark">
                <router-link tag="li" to="/component/spark-table" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">SPARK工作台
                </router-link>
            </MenuItem>
            <MenuItem name="2-6" style="padding: 0;" v-if="menuDisplay.hue">
                <router-link tag="li" to="/component/hue-table" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">HUE工作台
                </router-link>
            </MenuItem>
            <MenuItem name="2-7" style="padding: 0;" v-if="menuDisplay.compare">
                <router-link tag="li" to="/component/data_com" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">元数据对比
                </router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="3" v-if="dropdown.azkaban">
            <template slot="title">
                <Icon type="filing"></Icon>
                任务调度
            </template>
            <MenuItem name="3-1" style="padding: 0;" v-if="menuDisplay.azkaban">
                <router-link tag="li" to="/component/task-dispatch" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">azkaban
                </router-link>
            </MenuItem>
        </Submenu>
        <Submenu name="4" v-if="dropdown.jurisdiction">
            <template slot="title">
                <Icon type="social-codepen"></Icon>
                HIVE权限管理
            </template>
            <MenuItem name="4-1" style="padding: 0;" v-if="menuDisplay.jurisdiction">
                <router-link tag="li" to="/jurisdiction/add-jurisdiction" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">
                    权限管理
                </router-link>
            </MenuItem>
            <MenuItem name="4-2" style="padding: 0;" v-if="menuDisplay.batch">
                <router-link tag="li" to="/jurisdiction/del-jurisdiction" style="    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;">
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
                    fouse: false,
                    check: false,
                    record: false,
                    spark: false,
                    hue: false,
                    compare: false,
                    early_warn: false,
                    azkanban: false,
                    jurisdiction: false,
                    batch: false
                },
                dropdown: {
                    homework: false,
                    azkaban: false,
                    jurisdiction: false,
                },
                act_name: '2-1',
                menuListDisplay: [],

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

            let localQ = JSON.parse(localStorage.getItem('galaxy_Jurisdiction'));
            if (localQ.length !== 0) {
                localQ.forEach(r => {
                    this.menuListDisplay.push(r.resourceName);
                });

                for (let i = 0; i < localQ.length; i++) {
                    if (localQ[i + 1]) {
                        if (localQ[i].resourceCode == 'CLUSTER_GRAIL' || localQ[i + 1].resourceCode == 'CLUSTER_GRAIL') {
                            this.activeName = '2-1';
                            break;
                        }
                    }
                    if (localQ[i].resourceCode == 'TASK_WARN') {
                        this.activeName = '2-2';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'TASK_FIND') {
                        this.activeName = '2-3';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'TASK_RECORD') {
                        this.activeName = '2-4';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'SPARK_WORKBENCH') {
                        this.activeName = '2-5';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'HUE_WORKBENCH') {
                        this.activeName = '2-6';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'METADATA_COMPARE') {
                        this.activeName = '2-7';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'AZKABAN') {
                        this.activeName = '3-1';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'AUTH') {
                        this.activeName = '4-1';
                        break;
                    }
                    else if (localQ[i].resourceCode == 'BATCH') {
                        this.activeName = '4-2';
                        break;
                    }
                }
                let homeWork = 0;
                let dropdowm = 0;
                for (var variable of this.menuListDisplay) {
                    if (variable == '批量管理') {
                        dropdowm++;
                        this.menuDisplay.batch = true;
                    } else if (variable == '权限管理') {
                        dropdowm++;
                        this.menuDisplay.jurisdiction = true;
                    } else if (variable == 'azkaban') {
                        this.dropdown.azkaban = true;
                        this.menuDisplay.azkaban = true;
                    } else if (variable == '元数据对比') {
                        homeWork++;
                        this.menuDisplay.compare = true;
                    } else if (variable == 'HUE工作台') {
                        homeWork++;
                        this.menuDisplay.hue = true;
                    } else if (variable == 'SPARK工作台') {
                        homeWork++;
                        this.menuDisplay.spark = true;
                    } else if (variable == '任务记录') {
                        homeWork++;
                        this.menuDisplay.record = true;
                    } else if (variable == '任务查询') {
                        homeWork++;
                        this.menuDisplay.check = true;
                    } else if (variable == '任务预警') {
                        homeWork++;
                        this.menuDisplay.early_warn = true;
                    } else if (variable == '集群大盘') {
                        homeWork++;
                        this.menuDisplay.fouse = true;
                    }
                }
                if (homeWork <= 7) {
                    this.dropdown.homework = true;
                }
                if (dropdowm <= 2) {
                    this.dropdown.jurisdiction = true;
                }
            }

            this.act_name = sessionStorage.getItem(`pagesT`) ? sessionStorage.getItem(`pagesT`) : '2-1';

            //this.act_name=this.openNames[1];
            // this.activeName = Cookies.get('pages');

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
<style>
    router-link {
        color: white;
    }
</style>

