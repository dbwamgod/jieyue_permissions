const _baseUrlQ = 'http://172.18.101.118:10000/galaxy-platform-management';
const _baseT = 'http://172.18.101.118:10000';

//生产环境

// const _baseUrlQ = 'http://api.bdc.jieyue.com/api/galaxy-platform-management';
// const _baseT = 'http://api.bdc.jieyue.com/api';
import Cookies from 'js-cookie';

function cookies_con () {
    let cookies_cons = 'access_token=' + Cookies.get('tokenY');
    return cookies_cons;
}

export default {
    _baseUrlQ,
// login(){//登录
    // 	return _loginUrl +'/mc-auth/auth/login'
    // },

    //获取userID
    userId () {
        return _baseT + '/platform-user-oauth2/user?' + cookies_con();
    },

    Resource_permissions () {
        return _baseT + '/platform-user-admin/user/find/auth/?' + cookies_con();
    },

    login () {//登录
        // return _loginUrlT +'/user-auth/auth/login'
        return _baseT + '/platform-user-oauth2/oauth/token';

    },
    com_Data () {//元数据
        return _baseUrlQ + '/galaxy/meta/getMeta?' + cookies_con();
    },
    modifyMeta () {//登录
        return _baseUrlQ + '/galaxy/meta/modifyMeta?' + cookies_con();
    },
    queryUserBehaviorPage () {//工作台
        return _baseUrlQ + '/galaxy/userBehavior/queryUserBehaviorPage?' + cookies_con();
    },
    queryAllDbs () {//工作台获取列表
        return _baseUrlQ + '/galaxy/privilege/queryAllDbs?' + cookies_con();
    },
    queryAllUsers () {//用户平台获取用户列表
        return _baseT + '/platform-user-admin/user/listUserByTenant?' + cookies_con();
    },
    queryDbPrivilege () {//工作台获取全库权限列表
        return _baseUrlQ + '/galaxy/privilege/queryDbPrivilege?' + cookies_con();
    },
    queryTbPrivilegePage () {//工作台获取详情列表
        return _baseUrlQ + '/galaxy/privilege/queryTbPrivilegePage?' + cookies_con();
    },
    changeUsePrivilege () {//工作台提交修改
        return _baseUrlQ + '/galaxy/privilege/changeUsePrivilege?' + cookies_con();
    },
    getHueAutoLoginUrl () {//获取hue 卡牌地址
        // return 'http://192.168.34.159/galaxy/hadoop/getAutoLoginUrl'
        return _baseUrlQ + '/galaxy/hadoop/getAutoLoginUrl?' + cookies_con();
    },
    getMonitorList () {//作业监控
        return _baseUrlQ + '/galaxy/work/getMonitorList?' + cookies_con();
    },
    getMonitorLog (id) {//获取日志地址
        return _baseUrlQ + '/galaxy/work/getMonitorLog/' + id + '?' + cookies_con();
    },
    killJob (id) {//获取预警停止操作
        return _baseUrlQ + '/galaxy/user/killJob/' + id + '?' + cookies_con();
    },
    getSearch (id) {//获取作业优化
        // return 'http://172.18.101.132:8080/search?id='+id+"&"+"access_token="+Cookies.get('tokenY');// 测试
        return 'http://10.50.192.58:8080/search?id=' + id + '&' + cookies_con();
    },
    getWarnList () {//作业预警
        return _baseUrlQ + '/galaxy/work/getWarnList?' + cookies_con();
    },
    getHostInformations () {//集群大盘列表
        return _baseUrlQ + '/galaxy/cluster/getHostInformations?' + cookies_con();
    },
    getHostHisInformations (time) {//集群大盘图标
        return _baseUrlQ + '/galaxy/cluster/getHostHisInformations/' + time + '?' + cookies_con();
    },

};
