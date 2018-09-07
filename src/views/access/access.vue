
<template>
      <div class="tissue">
 <!-- //角色授权 -->
   <Modal
        width="1200"
        title="角色授权"
        v-model="modal7"
        :closable="false">
        <div class="role_authorization">
             <div class="role_header">
                <ul>
                    <li>
                        驾驶舱
                    </li>
                    <li>
                        SaaS-BI
                    </li>
                    <li>
                        银河管理平台
                    </li>
                </ul>
             </div>
             <div class="role_tree" style="clear:both">
                 <Tree :data="tree1"></Tree>
             </div>
        </div>
    </Modal>

         <div class="tissue_header" style="display:flex;justify-content:space-between">
 
          <h2>角色管理</h2>
          <div class="tissue_search">
            <Input  placeholder="可按权限、机构、及用户查询" v-model="searchText" class="search_ipt"></Input>
            <Button type="primary" icon="ios-search" class="tissue_btn"></Button>
          </div>
             <div class="adduser">
             <Button type="success" style="margin-top:10px;margin-right:5px" @click="modal7 = true">+</Button>
          </div>
         </div>
         <div class="tissue_cont">
              <Table width="100%"  border :columns="columns2" :data="data3"></Table>
         </div>
     <div class="tissue_footer">
           <Page :total="100" show-elevator class="paging"></Page>
      </div>
      </div>
    
</template>

<script>
export default {
  name: "home",
  data() {
    return {

         modal7: false,
        tree1: [
                    {
                        title: '主体',
                        expand: true,
                        children: [
                            {
                                title: '银河管理平台',
                                expand: true,
                         
                            },
                            {
                                title: '业绩',
                                expand: true,
                          
                            },
                             {
                                title: '我的',
                                expand: true,
                          
                            }
                        ]
                    }
                ],
      columns2: [
        {
          title: "角色名称",
          key: "role_name",
          align:"center",
          fixed: "left"
        },
        {
          title: "上级角色名称",
          key: "superior_role_name",
           align:"center",
        },
  
  
        {
          title: "操作",
          key: "action",
           align:"center",
          fixed: "right",
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "primary",
                    size: "small",  
                    icon:"edit",
                    shape:"circle"
                  },
                  style:{
                     
                     color:"white",
                     marginRight:"10px"
                  },
                 on:{
                      click:()=>{
                        
                    }
                  }
                },
                
              ),
              h(
                "Button",
                   
                {
                    // title: 'User Info',
                  props: {
                    type: "error",
                    size: "small",
                     shape:"circle",
                     icon:'trash-b',

                  },
                  style:{
                     color:"white",
                     marginRight:"10px"
                  },
                  on:{
                      click:()=>{
                        alert(11111)
                      }
                  }
                }, 
              ),
              h(
                "Button",
                   
                {
                    // title: 'User Info',
                  props: {
                    type: "success",
                    size: "small",
                     shape:"circle",
                     icon:'person',

                  },
                  style:{
                     color:"white"
                  },
                  on:{
                      click:()=>{
                        this.modal7=true;
                      }
                  }
                }, 
              )
            ]);
          }
        }
      ],
      data3: [
        {
        role_name:'12345',
        superior_role_name:'121212'
        },
         {
        role_name:'12345',
        superior_role_name:'121212'
        },
         {
        role_name:'12345',
        superior_role_name:'121212'
        }

      ]
    };
  },
  methods:{
          ok () {
                this.$Message.info('Clicked ok');
            },
            cancel () {
                this.$Message.info('Clicked cancel');
            }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
 
}
.tissue{
    overflow: hidden;
}
.tissue_header {
  width: 100%;
  height: 50px;
  background-color: rgb(220, 241, 255);
  text-align: justify;
}
.tissue_header h2 {
  line-height: 50px;
  padding-left: 5px;
}
.search_ipt {
  width: 300px;
  line-height: 50px;

}
.tissue_search {
  position: relative;
  /* padding-right: 5px; */

}
.tissue_btn {
  position: absolute;
  top: 10px;
  right: 0; 
  /* line-height: 50px; */
}
.tissue_footer{
    width: 100%;
    height: 40px;
    /* background: red; */
    position: absolute;
    left: 0;
    bottom: 10px;
}
.tissue_footer .paging{
  text-align: center;
  line-height: 40px;
}
/* 角色授权
  */
  .role_authorization{
      width: 100%;
      height: 400px;
  }
  .role_header ul li{
      width:150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border: 1px solid #e7e7ee;
      float: left;
      
  }
  .role_tree{
      width: 150px;
      height:94%;
      border: 1px solid #e7e7ee;
  }
</style>



