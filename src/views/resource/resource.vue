<template>
    <div style='position: relative;height:100%;padding:10px;'>
        <Row type="flex" justify="space-between" align="middle" class="code-row-bg" style='margin-bottom:10px;'>
            <Col span="6">
            <div style="padding:5px 0 ; font-weight:700; font-size:18px;">資源接口</div>
            </Col>
            <Breadcrumb>
                <BreadcrumbItem :to="{ name: 'list_tree'}">切换树形列表</BreadcrumbItem>
            </Breadcrumb>
        </Row>

        <Table :columns="columns1" :data="data1" id="table1"></Table>
        <Table :columns="columns2" :data="data2" style="margin-top: 20px" id="table2"></Table>
        <Table :columns="columns3" :data="data3" style="margin-top: 20px" id="table3"></Table>
        <Table :columns="columns4" :data="data4" style="margin-top: 20px" id="table4"></Table>

        <Page :total="10" style="margin-left: 50%"/>

    </div>
</template>
<style scoped>
    .paging {
        float: right;
        margin-top: 10px;
    }
</style>
<script>
    import api from '@/api';
    import Cookies from 'js-cookie';

    export default {
        data () {
            return {
                columns1: [
                    {
                        title: 'resourceId',
                        key: 'resourceId'
                    },
                    {
                        title: 'tenantId',
                        key: 'tenantId'
                    },
                    {
                        title: 'parentId',
                        key: 'parentId'
                    },
                    {
                        title: 'resourceName',
                        key: 'resourceName'
                    },
                    {
                        title: 'description',
                        key: 'description'
                    },
                    {
                        title: 'modifyTime',
                        key: 'modifyTime'
                    },
                ],
                data1: [],
                columns2: [
                    {
                        title: 'resourceId',
                        key: 'resourceId'
                    },
                    {
                        title: 'tenantId',
                        key: 'tenantId'
                    },
                    {
                        title: 'parentId',
                        key: 'parentId'
                    },
                    {
                        title: 'resourceName',
                        key: 'resourceName'
                    },
                    {
                        title: 'description',
                        key: 'description'
                    },
                    {
                        title: 'modifyTime',
                        key: 'modifyTime'
                    },
                ],
                data2: [],
                columns3: [
                    {
                        title: 'resourceId',
                        key: 'resourceId'
                    },
                    {
                        title: 'tenantId',
                        key: 'tenantId'
                    },
                    {
                        title: 'parentId',
                        key: 'parentId'
                    },
                    {
                        title: 'resourceName',
                        key: 'resourceName'
                    },
                    {
                        title: 'description',
                        key: 'description'
                    },
                    {
                        title: 'modifyTime',
                        key: 'modifyTime'
                    },
                ],
                data3: [],
                columns4: [
                    {
                        title: 'resourceId',
                        key: 'resourceId'
                    },
                    {
                        title: 'tenantId',
                        key: 'tenantId'
                    },
                    {
                        title: 'parentId',
                        key: 'parentId'
                    },
                    {
                        title: 'resourceName',
                        key: 'resourceName'
                    },
                    {
                        title: 'description',
                        key: 'description'
                    },
                    {
                        title: 'modifyTime',
                        key: 'modifyTime'
                    },
                ],
                data4: [],

            };
        },
        computed: {

        },
        created () {
            this.res_List();
        },
        methods: {
            res_List () {
                this.$axios({
                    method: 'post',
                    url: api.res_list(),
                    data: {
                        currentPage: 1,
                        pageSize: 10
                    },
                    headers:{
                        Authorization:Cookies.get("token"),
                        'Content-Type': 'application/json;charset=UTF-8'
                    }
                }).then(res => {
                    if (res.data.code == 200) {
                        this.res_lists = res.data.data;

                        for (let i = 0; i < this.res_lists.length; i++) {

                            if (this.res_lists.length === 0) {
                                table1.style.display="none"
                                table2.style.display="none"
                                table3.style.display="none"
                                table4.style.display="none"

                            }
                            if (this.res_lists.length === 1) {
                                this.data1 = [this.res_lists[0]];
                                table2.style.display="none"
                                table3.style.display="none"
                                table4.style.display="none"
                            }
                            if (this.res_lists.length === 2) {
                                this.data1 = [this.res_lists[0]];
                                this.data2 = [this.res_lists[1]];
                                table3.style.display="none"
                                table4.style.display="none"
                            }
                            if (this.res_lists.length === 3) {
                                this.data1 = [this.res_lists[0]];
                                this.data2 = [this.res_lists[1]];
                                this.data3 = [this.res_lists[2]];
                                table4.style.display="none"
                            }
                            if (this.res_lists.length === 4) {
                                this.data1 = [this.res_lists[0]];
                                this.data2 = [this.res_lists[1]];
                                this.data3 = [this.res_lists[2]];
                                this.data4 = [this.res_lists[3]];
                            }

                        }

                    }
                });

            },
        }
    };
</script>
