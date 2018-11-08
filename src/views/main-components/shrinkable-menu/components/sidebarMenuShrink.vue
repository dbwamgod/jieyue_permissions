<template>
    <div>
        <template>
            <div class="down-container">
                <Dropdown transfer placement="right-start" :key="1" @on-click="changeMenu" v-if="dropdown.homework">
                    <Button class="dropdown-button" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="ionic" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu class="downMenu-list" slot="list">
                        <DropdownItem name="home_index" key="1-1" v-if="menuDisplay.CLUSTER_GRAIL"><span
                                class="dowmItem-info">集群大盘</span></DropdownItem>
                        <DropdownItem name="task-warning" key="1-2" v-if="menuDisplay.TASK_WARN"><span
                                class="dowmItem-info">任务预警</span></DropdownItem>
                        <DropdownItem name="task-inquire" key="1-3" v-if="menuDisplay.TASK_FIND"><span
                                class="dowmItem-info">任务查询</span></DropdownItem>
                        <DropdownItem name="task-table" key="1-4" v-if="menuDisplay.TASK_RECORD"><span
                                class="dowmItem-info">任务记录</span></DropdownItem>
                        <DropdownItem name="spark-table" key="1-5" v-if="menuDisplay.SPARK_WORKBENCH"><span
                                class="dowmItem-info">SPARK工作台</span></DropdownItem>
                        <DropdownItem name="HUE-table" key="1-6" v-if="menuDisplay.HUE_WORKBENCH"><span
                                class="dowmItem-info">HUE工作台</span></DropdownItem>
                        <DropdownItem name="data_com" key="1-7" v-if="menuDisplay.METADATA_COMPARE"><span
                                class="dowmItem-info">元数据对比</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer v-if="dropdown.azkanban" placement="right-start" :key="2" @on-click="changeMenu">
                    <Button class="dropdown-button" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="filing" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu class="downMenu-list" slot="list">
                        <DropdownItem v-if="menuDisplay.AZKABAN" name="task-dispatch" key="2-1"><span
                                class="dowmItem-info">azkaban</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer v-if="dropdown.jurisdiction" placement="right-start" :key="3" @on-click="changeMenu">
                    <Button class="dropdown-button" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="social-codepen" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu class="downMenu-list" slot="list">
                        <DropdownItem v-if="menuDisplay.AUTH" name="add-jurisdiction" key="3-1"><span
                                class="dowmItem-info">HIVE权限管理</span></DropdownItem>
                        <DropdownItem v-if="menuDisplay.BATCH" name="workflow" key="3-2"><span
                                class="dowmItem-info">批量管理</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'sidebarMenuShrink',
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
                    azkanban: false,
                    jurisdiction: false,
                },
                menuListDisplay: []
            };
        },
        props: {
            menuList: {
                type: Array
            },
            iconColor: {
                type: String,
                default: 'white'
            },
            menuTheme: {
                type: String,
                default: 'darck'
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
        },

        methods: {
            changeMenu (active) {
                this.$emit('on-change', active);
            },
            itemTitle (item) {
                if (typeof item.title === 'object') {
                    return this.$t(item.title.i18n);
                } else {
                    return item.title;
                }
            }
        }
    };
</script>
<style scoped lang="less">
    .down-container {
        text-align: center;
        .dropdown-button {
            width: 70px;
            margin-left: -5px;
            padding: 10px 0;
        }
        .downMenu-list {
            width: 200px;
            .dowmItem-info {
                padding-left: 10px;
            }
        }

    }
</style>
