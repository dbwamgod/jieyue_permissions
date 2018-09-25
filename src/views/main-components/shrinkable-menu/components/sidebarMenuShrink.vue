<template>
    <div>
        <!-- <template v-for="(item, index) in menuList">
            <div style="text-align: center;" :key="index">
                <Dropdown transfer v-if="item.children.length !== 1" placement="right-start" :key="index" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" :color="iconColor" :type="item.icon"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <template v-for="(child, i) in item.children">
                            <DropdownItem :name="child.name" :key="i"><Icon :type="child.icon"></Icon><span style="padding-left:10px;">{{ itemTitle(child) }}</span></DropdownItem>
                        </template>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer v-else placement="right-start" :key="index" @on-click="changeMenu">
                    <Button @click="changeMenu(item.children[0].name)" style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <Icon :size="20" :color="iconColor" :type="item.children[0].icon || item.icon"></Icon>
                        <Icon type="ios-analytics"></Icon>
                    </Button>  
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem :name="item.children[0].name" :key="'d' + index"><Icon :type="item.children[0].icon || item.icon"></Icon><span style="padding-left:10px;">{{ itemTitle(item.children[0]) }}</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </template> -->
        <template>
            <div style="text-align: center;" key="1indd">
                <Dropdown transfer  placement="right-start" :key="1" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="ionic" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem name="home_index" key="1-1"><span style="padding-left:10px;">集群大盘</span></DropdownItem>
                        <DropdownItem name="task-inquire" key="1-2"><span style="padding-left:10px;">任务查询</span></DropdownItem>
                        <DropdownItem name="task-table" key="1-3"><span style="padding-left:10px;">任务记录</span></DropdownItem>
                        <DropdownItem name="spark-table" key="1-4"><span style="padding-left:10px;">SPARK工作台</span></DropdownItem>
                        <DropdownItem name="HUE-table" key="1-5"><span style="padding-left:10px;">HUE工作台</span></DropdownItem>
                        <DropdownItem name="data_com" key="1-6"><span style="padding-left:10px;">元数据对比</span></DropdownItem>
                        <DropdownItem name="task-dispatch" key="1-7"><span style="padding-left:10px;">任务调度</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer  placement="right-start" :key="2" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="filing" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem name="task-dispatch" key="2-1"><span style="padding-left:10px;">azkaban</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown transfer  placement="right-start" :key="3" @on-click="changeMenu">
                    <Button style="width: 70px;margin-left: -5px;padding:10px 0;" type="text">
                        <!-- <Icon :size="20" :color="iconColor" :type="item.icon"></Icon> -->
                        <Icon type="social-codepen" :size='20' color="#fff"></Icon>
                    </Button>
                    <DropdownMenu style="width: 200px;" slot="list">
                        <DropdownItem name="add-jurisdiction" key="3-1"><span style="padding-left:10px;">HIVE权限管理</span></DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'sidebarMenuShrink',
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
