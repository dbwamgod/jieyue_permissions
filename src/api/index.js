// const _baseUrlQ = 'http://172.18.101.118:10000/galaxy-platform-management';
// const _baseT='http://172.18.101.118:10000';

//生产环境

const _baseUrlQ = 'http://api.bdc.jieyue.com/api/galaxy-platform-management';
const _baseT = 'http://api.bdc.jieyue.com/api';
import Cookies from "js-cookie"
export default {
	_baseUrlQ,
// login(){//登录
    // 	return _loginUrl +'/mc-auth/auth/login'
    // },



    login(){//登录
        // return _loginUrlT +'/user-auth/auth/login'
		return _baseT + '/platform-user-oauth2/oauth/token';

    }, 
	com_Data(){//元数据
        return _baseUrlQ +'/galaxy/meta/getMeta?'+"access_token="+Cookies.get('token')
    },
    modifyMeta(){//登录
        return _baseUrlQ +'/galaxy/meta/modifyMeta?'+"access_token="+Cookies.get('token')
    }, 
	queryUserBehaviorPage(){//工作台
        return _baseUrlQ +'/galaxy/userBehavior/queryUserBehaviorPage?'+"access_token="+Cookies.get('token');
    },
    queryAllDbs(){//工作台获取列表
		return _baseUrlQ +'/galaxy/privilege/queryAllDbs?'+"access_token="+Cookies.get('token')
    },
    queryAllUsers(){//用户平台获取用户列表
        return _baseT +'/platform-user-admin/user/listUserByTenant?'+"access_token="+Cookies.get('token')
    },
    queryDbPrivilege(){//工作台获取全库权限列表
		return _baseUrlQ +'/galaxy/privilege/queryDbPrivilege?'+"access_token="+Cookies.get('token')
	},
    queryTbPrivilegePage(){//工作台获取详情列表
		return _baseUrlQ +'/galaxy/privilege/queryTbPrivilegePage?'+"access_token="+Cookies.get('token')
	},
    changeUsePrivilege(){//工作台提交修改
		return _baseUrlQ +'/galaxy/privilege/changeUsePrivilege?'+"access_token="+Cookies.get('token')
	},
	getHueAutoLoginUrl(){//获取hue 卡牌地址
		// return 'http://192.168.34.159/galaxy/hadoop/getAutoLoginUrl'
		return _baseUrlQ +'/galaxy/hadoop/getAutoLoginUrl?'+"access_token="+Cookies.get('token')
	},
	getMonitorList(){//作业监控
		return _baseUrlQ +'/galaxy/work/getMonitorList?'+"access_token="+Cookies.get('token')
	},
	getMonitorLog(id){//获取日志地址
		return _baseUrlQ +'/galaxy/work/getMonitorLog/'+id+"?"+"access_token="+Cookies.get('token')
	},
	killJob(id){//获取预警停止操作
		return _baseUrlQ +'/galaxy/user/killJob/'+id+"?"+"access_token="+Cookies.get('token')
	},
	getSearch(id){//获取作业优化
		// return 'http://172.18.101.132:8080/search?id='+id+"&"+"access_token="+Cookies.get('token');// 测试
		return 'http://10.50.192.58:8080/search?id='+id+"&"+"access_token="+Cookies.get('token');
	},
	getWarnList(){//作业预警
		return _baseUrlQ +'/galaxy/work/getWarnList?'+"access_token="+Cookies.get('token')
	},
	getHostInformations(){//集群大盘列表
		return _baseUrlQ +'/galaxy/cluster/getHostInformations?'+"access_token="+Cookies.get('token')
	},
	getHostHisInformations(time){//集群大盘图标
		return _baseUrlQ +'/galaxy/cluster/getHostHisInformations/'+time+"?"+"access_token="+Cookies.get('token')
	},

   
}
