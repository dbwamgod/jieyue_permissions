<style lang="less">
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
                }
            };
        },
        methods: {
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
                            fd.append('client_secret','abc');
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
                                    Cookies.set('password', this.form.password);
                                    Cookies.set('access', 1);
                                    Cookies.set('token', res.data.access_token);
                                    this.$store.commit('addOpenSubmenu', '2-1');
                                    // this.$store.commit('addOpenSubmenu', '2-1');
                                    this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                                    this.$axios({//银河平台 if 页面
                                        method: 'post',
                                        url: api.getHueAutoLoginUrl(Cookies.get('token')),
                                        data: {
                                            // userName: '1578326883@qq.com',
                                            // pswd: '111111',
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
                                        this.$router.push({
                                            name: 'focus-large'
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

                [
                    {'userName': 'qiyctest15', 'dbName': 'ods', 'tableName': '', 'operate': '删除', 'flag': '-1'},
                    {'userName': 'qiyctest15', 'dbName': 'ods', 'tableName': '', 'operate': '查询', 'flag': '-1'}
                ];
            }
        }
    };
</script>

<style>
</style>
