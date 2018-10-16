<template>
    <div>
        <template>
            <div style="text-align: center;" key="1indd">
                <Dropdown transfer  placement="right-start" :key="1" @on-click="changeMenu" v-if="dropdown.homework">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="ionic" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem name="home_index" key="1-1"  v-if="menuDisplay.fouse"><span style="padding-left:10px;">集群大盘</span></DropdownItem>
                        <DropdownItem name="task-warning" key="1-2" v-if="menuDisplay.early_warn"><span style="padding-left:10px;">任务预警</span></DropdownItem>
                        <DropdownItem name="task-inquire" key="1-3" v-if="menuDisplay.check"><span style="padding-left:10px;">任务查询</span></DropdownItem>
                        <DropdownItem name="task-table" key="1-4" v-if="menuDisplay.record"><span style="padding-left:10px;">任务记录</span></DropdownItem>
                        <DropdownItem name="spark-table" key="1-5" v-if="menuDisplay.spark"><span style="padding-left:10px;">SPARK工作台</span></DropdownItem>
                        <DropdownItem name="HUE-table" key="1-6" v-if="menuDisplay.hue"><span style="padding-left:10px;">HUE工作台</span></DropdownItem>
                        <DropdownItem name="data_com" key="1-7" v-if="menuDisplay.compare"><span style="padding-left:10px;">元数据对比</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer v-if="dropdown.azkanban"  placement="right-start" :key="2" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="filing" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem v-if="menuDisplay.azkanban" name="task-dispatch" key="2-1"><span style="padding-left:10px;">azkaban</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer v-if="dropdown.jurisdiction"  placement="right-start" :key="3" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="social-codepen" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem v-if="menuDisplay.jurisdiction" name="add-jurisdiction" key="3-1"><span style="padding-left:10px;">HIVE权限管理</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'sidebarMenuShrink',
    data(){
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
            },
            dropdown:{
                homework:false,
                azkanban:false,
                jurisdiction:false,
            },
            menuListDisplay:[]
        }
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
    created(){
        let localQ = JSON.parse(localStorage.getItem('galaxy_Jurisdiction'));
        if (localQ.length !== 0) {
            localQ.forEach(r => {
                this.menuListDisplay.push(r.resourceName);
            });
            let homeWork=0
            for (var variable of this.menuListDisplay) {
                if (variable == "权限管理") {
                    this.dropdown.jurisdiction=true
                    this.menuDisplay.jurisdiction = true;
                } else if (variable == "azkaban") {
                    this.dropdown.azkanban=true
                    this.menuDisplay.azkanban = true;
                } else if (variable == "元数据对比") {
                    homeWork++;
                    this.menuDisplay.compare = true;
                } else if (variable == "HUE工作台") {
                    homeWork++;
                    this.menuDisplay.hue = true;
                } else if (variable == "SPARK工作台") {
                    homeWork++;
                    this.menuDisplay.spark = true;
                }else if (variable == "任务记录") {
                    homeWork++;
                    this.menuDisplay.record = true;
                }else if (variable == "任务查询") {
                    homeWork++;
                    this.menuDisplay.check = true;
                }else if (variable == "任务预警") {
                    homeWork++;
                    this.menuDisplay.early_warn = true;
                }else if (variable == "集群大盘") {
                    homeWork++;
                    this.menuDisplay.fouse = true;
                }
            }
            if(homeWork<=1){
                this.dropdown.homework=true
            }

        }
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
