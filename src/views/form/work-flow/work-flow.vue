<template>
    <div style='position: relative;height:100%;padding:10px;'>
        <Spin fix v-show="SpinType">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>Loading</div>
        </Spin>
        <Form :model="formItem" :label-width="60">
            <Row type="flex" justify="start" class="code-row-bg">

                <Col span="5">
                <FormItem label="用户名：">
                    <Select v-model="formItem.userName" placeholder="请选择" >
                        <Option v-for="item in userList" :value="item||''" :key="item">{{ item}}</Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span="5">
                <FormItem label="库名：">
                    <Select v-model="formItem.dbName" placeholder="请选择" >
                        <Option v-for="item in cityList" :value="item.dbName||''" :key="item.dbName">{{ item.dbName}}
                        </Option>
                    </Select>
                </FormItem>
                </Col>
                <Col span="8">
                <FormItem label="">
                    <CheckboxGroup v-model="formItem.checkbox" >
                        <Checkbox v-for="(item,i) in queryDbPrivilegeList" :label="item.key" :key="i">{{item.name}}</Checkbox>
                    </CheckboxGroup>
                </FormItem>
                </Col>
                <Col span='4'>
                <Button type="primary" @click='submit' :disabled="!(formItem.input && formItem.checkbox.length)">提交</Button>
                </Col>
            </Row>
        </Form>
      <Row>
          <Col span="18">
                <Form  :label-width="60">
                        <FormItem label="表名：">
                                    <Input v-model="formItem.input" placeholder="输入表明以逗号分隔..."  />
                        </FormItem>
                </Form>
          </Col>
      </Row>
        <Modal
                v-model="resModal"
                title="返回结果"
                @on-ok="modelOk"
                @on-cancel="modelOk">
                <div style="max-height:400px; overflow-y: scroll">
                    <p v-for="item in resModalList">库名：{{item.dbName}},<br/>
                        表名：{{item.tableName}},<br/>
                        权限：{{item.operate}},<br/>
                        权限修改结果：{{item.secrityStatus==1?'成功':'失败'}} </p>

                </div>

        </Modal>
    </div>
</template>
<style scoped>
.paging {
  float: right;
  margin-top: 10px;
}
</style>
<script>
import api from "@/api";
import Cookies from "js-cookie";
import util from "@/libs/util";

export default {
  data() {
    return {
      ajaxHistoryData: [],
      // 初始化信息总条数
      dataCount: 0,
      // 每页显示多少条
      page: {
        pageIndex: 1,
        pageSize: 10
      },
      SpinType: false,
      resModal: false,
      resModalList: [],
      cityList: [{}],
      userList: [],
      formItem: {
        input: "", //表明集合
        checkbox: [],
        dbName: "",
        userName: ""
      },
      queryDbPrivilegeList: [
        { name: "查询", key: "selectStatus", flag: 0 },
        { name: "添加", key: "insertStatus", flag: 0 },
        { name: "修改", key: "updateStatus", flag: 0 },
        { name: "删除", key: "deletetStatus", flag: 0 }
      ],
      queryDbPrivilegeOldList: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$axios({
        method: "post",
        url: api.queryAllUsers(),
        data: {
          pageInfo: {
            currentPage: 0,
            pageSize: 0,
            totalPages: 0,
            totalRecords: 0
          },
          tenantId: 1
        },
        headers: {
          Authorization: Cookies.get("tokenY"),
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(res => {
        if (res.data.code == 200 && res.data.data) {
          var users = [];
          res.data.data.forEach(function(e) {
            users.push(e.email.split("@")[0]);
          });
          this.userList = users;
          this.userList.push("gtb1");

          if (users.length > 0) {
            this.formItem.userName = users[0];
          }
        }
      });
      this.$axios({
        //库名
        method: "get",
        url: api.queryAllDbs(),
        headers: {
          Authorization: Cookies.get("tokenY"),
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(res => {
        if (res.data.code == 200) {
          this.cityList = res.data.data;
          this.formItem.dbName = res.data.data[0].dbName;
        } else {
          this.$Message.info(res.data.msg);
        }
      });
    },
    submit() {
      this.SpinType = true;
      let userName = this.formItem.userName;
      const params = [];
      const tableNameList = util.uniq(this.formItem.input.replace(/\s+/g, "").split(","));
      this.formItem.checkbox.map((item, index) => {
        tableNameList.map(r => {
          params.push({
            dbName: this.formItem.dbName,
            flag: "1",
            operate: this.conversion(item),
            tableName: r,
            userName
          });
        });
      });
      this.$axios({
        method: "post",
        url: api.changeUsePrivilege(),
        data: params,
        headers: {
          Authorization: Cookies.get("tokenY"),
          "Content-Type": "application/json;charset=UTF-8"
        }
      }).then(
        res => {
          if (res.data.code == 200) {
            this.resModalList = res.data.data;
            this.resModal = true;
            this.SpinType = false;
          } else {
            this.SpinType = false;
            this.$Message.info(res.data.msg);
          }
        },
        err => {
          this.SpinType = false;
          this.$Message.info("网络请求错误");
        }
      );

      setTimeout(() => {
        if (this.SpinType) {
          this.$Message.info("稍等");
        }
      }, 5000);
    },

    modelOk() {
      this.resModal = false;
      this.resModalList = [];
    },
    conversion(info) {
      switch (info) {
        case "deletetStatus":
          return "delete";
          break;
        case "insertStatus":
          return "insert";
          break;
        case "selectStatus":
          return "select";
          break;
        case "updateStatus":
          return "update";
          break;
        default:
      }
    }
  }
};
</script>
<style>
</style>





