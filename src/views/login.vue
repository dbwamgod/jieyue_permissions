<style  lang="less">
    @import "./login.less";
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                            <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                            
                        </FormItem>
                    </Form>

                </div>
            </Card>
        </div>
    </div>
</template>

<script>
    import Cookies from 'js-cookie';
    import md5 from 'js-md5';
    import api from '@/api';

    export default {
        data () {
            return {
                form: {
                    userName: '',
                    password: ''
                },
                rules: {
                    userName: [
                        {required: true, message: '账号不能为空', trigger: 'blur'}
                    ],
                    password: [{required: true, message: '密码不能为空', trigger: 'blur'}]
                },
                code_party:{
                    CLUSTER_GRAIL:"focus-large",
                    TASK_WARN:"task-warning",
                    TASK_FIND:"task-inquire",
                    TASK_RECORD:"task-table",
                    SPARK_WORKBENCH:"spark-table",
                    HUE_WORKBENCH:"HUE-table",
                    METADATA_COMPARE:"data_com",
                    AZKABAN:"task-dispatch",
                    AUTH:"add-jurisdiction",
                    BATCH:"workflow",
                },
                homework: {
                    now_status: false,
                    before_status: false,
                    early_warn_list: false,
                    kill_job_task: false,
                    check_list: false,
                    log_info: false,
                    operation_log_info: false,
                    mysql_list: false,
                },
            };
        },
        created () {
        
        },
        methods: {
            login_go (where = 'focus-large') {
                Cookies.set('defaultHome', where);
                this.$router.push({
                    name: String(where)
                });
            },

            handleSubmit () {
                let _self = this;
                this.$refs.loginForm.validate(valid => {
                    let regUser = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (regUser.test(this.form.userName)) {

                        if (valid) {//登陆接口
                            let fd = new FormData();
                            fd.append('password', this.form.password);
                            fd.append('username', this.form.userName);
                            fd.append('client_id', 'browser');
                            fd.append('client_secret', 'abc');
                            fd.append('grant_type', 'password');

                            this.$axios({
                                method: 'post',
                                url: api.login(),
                                data: fd,
                                headers: {
                                    'content-Type': 'application/x-www-form-urlencoded',
                                }
                            }).then(res => {
                                if (res.status === 200) {
                                    Cookies.set('userM', this.form.userName);
                                    Cookies.set('access', 1);
                                    Cookies.set('tokenY', res.data.access_token);
                                    this.$store.commit('addOpenSubmenu', '2-1');
                                    this.$store.commit('setAvator', require('@/images/u=3448484253,3685836170&fm=27&gp=0.jpg'));

                                    this.$axios({
                                        method: 'get',
                                        url: api.userId(),
                                        headers: {
                                            'content-Type': 'application/x-www-form-urlencoded',
                                        },
                                    }).then(res => {
                                        Cookies.set('party_userId', res.data.principal.id);
                                        this.$axios({
                                            method: 'post',
                                            url: api.Resource_permissions(),
                                            data:{
                                                tenantCode:"GALAXY_PLATFORM",
                                                userId: Cookies.get('party_userId')
                                            }
                                        }).then((res) => {
                                            if (res.data.code == 200) {
                                                if(res.data.data.length){
                                                    let dataLen = [];
                                                    res.data.data.map((res, i) => {
                                                        dataLen.push(res);
                                                    });
                                                    localStorage.setItem('galaxy_Jurisdiction', JSON.stringify(dataLen));
                                                    let disNay = [];
                                                    let set = new Set(JSON.parse(localStorage.getItem('galaxy_Jurisdiction')));
                                                    let resource = [...set];
                                                    resource.forEach(r => {
                                                        if (r.child) {
                                                            r.child.forEach(r => {
                                                                disNay.push(r);
                                                            });
                                                        }
                                                    });
                                                    for (var code in this.code_party) {
                                                        if(code==resource[0].resourceCode){
                                                            this.login_go(this.code_party.code)
                                                        }
                                                    }
                                                    localStorage.setItem('galaxy_child', JSON.stringify(disNay));
                                                    this.$axios({//银河平台 if 页面
                                                        method: 'post',
                                                        url: api.getHueAutoLoginUrl(Cookies.get('tokenY')),
                                                        data: {
                                                            userName: this.form.userName,
                                                            pswd: this.form.password,
                                                        },
                                                        headers: {
                                                            'Content-Type': 'application/json;charset=UTF-8'
                                                        }
                                                    }).then(res => {

                                                        Cookies.set('azkaban', res.data.data.azkaban);
                                                        Cookies.set('hue', res.data.data.hue);
                                                        Cookies.set('spark.submit', res.data.data['spark.submit']);
                                                    });
                                                }else{
                                                    const title = '登录错误';
                                                    Cookies.remove('userM');
                                                    Cookies.remove('access');
                                                    Cookies.remove('tokenY');
                                                    Cookies.remove('party_userId');
                                                    this.$Modal.error({
                                                        title: title,
                                                        content: '您未开通系统权限, 请联系管理员',
                                                    });
                                                }


                                            } else {
                                                const title = '资源错误';
                                                Cookies.remove('userM');
                                                Cookies.remove('access');
                                                Cookies.remove('tokenY');
                                                Cookies.remove('party_userId');

                                                this.$Modal.error({
                                                    title: title,
                                                    content: res.data.msg,
                                                });
                                            }
                                        });

                                    });
                                }
                            }).catch(res => {
                                this.$Message.info('密码和邮箱不匹配');
                            });

                        }
                    } else {
                        this.$Message.info('邮箱地址格式不对');
                    }

                });

            }
        }
    };
</script>

