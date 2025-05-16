/**
 * Created by LiuYu824
 */
$(window).resize(function(){
    height_width();
    form_height();
});
function height_width(){
    var topheight = $(".lg-redDiv").height()*0.5;
    console.log(topheight)
    $(".lg-redDiv").css("margin-top",-topheight+"px");
}
function form_height(){
/*    var topheight1 = $(".lg-form").height()*0.5;
    console.log(topheight1)
    $(".lg-form").css("margin-top",-topheight1+"px");*/
}

$(function(){
    height_width();
    form_height();
    createCode();
});

function handleInput(){

    const userList = [
        {'userName':'贾芳','userJobID':'工号俺不知道','userDepartment':'综合管理部','userOffice':'','userEmail':'jiafang01@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'冯硕','userJobID':'','userDepartment':'智能网联中心','userOffice':'','userEmail':'fengshuo@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'黄殿辉','userJobID':'21238','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭梦飞','userJobID':'20017','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'guomengfei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'肖倩文','userJobID':'18335','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'xiaoqianwen@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'蔡竞仪','userJobID':'19024','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'caijingyi@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈团圆','userJobID':'20023','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chentuanyuan@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭丽丽','userJobID':'16118','userDepartment':'数字化云平台部','userOffice':'','userEmail':'guolili@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'叶广辉','userJobID':'26874','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'yeguanghui@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'易迪华','userJobID':'21299','userDepartment':'数字化云平台部','userOffice':'','userEmail':'yidihua@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张大伟','userJobID':'24086','userDepartment':'数字化云平台部','userOffice':'','userEmail':'zhangdawei01@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'苏玥文','userJobID':'24991','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'suyuewen@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张一豪','userJobID':'26158','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'zhangyihao@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭菲菲','userJobID':'23935','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'guofeifei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'李惠惠','userJobID':'23661','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'lihuihui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'韩微微','userJobID':'23609','userDepartment':'数字化云平台部','userOffice':'','userEmail':'hanweiwei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'梁紫藤','userJobID':'23685','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'liangziteng@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈雄厚','userJobID':'22626','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chenxionghou@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'卢忆都','userJobID':'21300','userDepartment':'数字化云平台部','userOffice':'','userEmail':'luyidu@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'周志敏','userJobID':'23616','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'zhouzhimin@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张金玉','userJobID':'24102','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'zhangjinyu@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈晓东','userJobID':'23670','userDepartment':'数字化云平台部','userOffice':'手机APP应用开发科','userEmail':'chenxiaodong@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'嵇黎明','userJobID':'23663','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'jiliming@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'胡晓晨','userJobID':'23676','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'huxiaochen@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'姚景茹','userJobID':'23672','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'yaojingru@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'林鸿英','userJobID':'23607','userDepartment':'数字化云平台部','userOffice':'','userEmail':'linhongying@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'金秋颖','userJobID':'23657','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'jinqiuying@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'王延涛','userJobID':'23666','userDepartment':'数字化云平台部','userOffice':'手机APP应用开发科','userEmail':'wangyantao@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张玲智','userJobID':'23626','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'zhanglingzhi@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'范丹丹','userJobID':'21435','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'fandandan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'王闯','userJobID':'25182','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'wangchuang01@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'杨茜','userJobID':'26870','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'yangqian01@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈灿','userJobID':'23627','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chencan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'徐玥','userJobID':'19027','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'xuyue@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'李彤','userJobID':'25304','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'litong04@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郑楠','userJobID':'23617','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'zhengnan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'石煜','userJobID':'23644','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'shiyu@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'吴康','userJobID':'23682','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'wukang@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'刘婧','userJobID':'25277','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'liujing05@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'马宁','userJobID':'26871','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'maning@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭雪','userJobID':'26872','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'guoxue@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'杜洋','userJobID':'23606','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'duyang@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'杨猛','userJobID':'23610','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'yangmeng03@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'刘硕','userJobID':'24006','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'liushuo@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
    ];

    const inputValue = document.getElementById("userName").value;

    const account = userList.filter(
        function(e){
            return e.userName === inputValue;
        })[0]; // 筛选账号返回数组，不存在则返回空数组

    if(!account){
        // 没有此用户信息
        document.getElementById("userJobID").value = "";
        document.getElementById("userJobID").readOnly = false;
        document.getElementById("div_userJobId").hidden = false;
        document.getElementById('userOffice').value = "";
        document.getElementById('userOffice').readOnly = false;
        document.getElementById("div_userOffice").hidden = false;
        document.getElementById("userDepartment").value = "";
        document.getElementById("userDepartment").readOnly = false;
    } else {
        if (account.userJobID === ""){
            //当前用户为硕总
            document.getElementById("div_userOffice").hidden = true;
            document.getElementById("div_userJobId").hidden = true;
        }
        if (account.userOffice===""){
            //当前用户为黄总or总师，隐藏所在科室框
            document.getElementById("div_userOffice").hidden = true;
        }
        document.getElementById("userJobID").value = account.userJobID;
        document.getElementById("userJobID").readOnly = true;
        document.getElementById('userOffice').value = account.userOffice;
        document.getElementById('userOffice').readOnly = true;
        document.getElementById("userDepartment").value = account.userDepartment;
        document.getElementById("userDepartment").readOnly = true;
    }
}

function index(btn){
    const userList = [
        {'userName':'贾芳','userJobID':'工号俺不知道','userDepartment':'综合管理部','userOffice':'','userEmail':'jiafang01@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'冯硕','userJobID':'','userDepartment':'智能网联中心','userOffice':'','userEmail':'fengshuo@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'黄殿辉','userJobID':'21238','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭梦飞','userJobID':'20017','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'guomengfei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'肖倩文','userJobID':'18335','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'xiaoqianwen@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'蔡竞仪','userJobID':'19024','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'caijingyi@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈团圆','userJobID':'20023','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chentuanyuan@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭丽丽','userJobID':'16118','userDepartment':'数字化云平台部','userOffice':'','userEmail':'guolili@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'叶广辉','userJobID':'26874','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'yeguanghui@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'易迪华','userJobID':'21299','userDepartment':'数字化云平台部','userOffice':'','userEmail':'yidihua@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张大伟','userJobID':'24086','userDepartment':'数字化云平台部','userOffice':'','userEmail':'zhangdawei01@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'苏玥文','userJobID':'24991','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'suyuewen@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张一豪','userJobID':'26158','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'zhangyihao@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭菲菲','userJobID':'23935','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'guofeifei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'李惠惠','userJobID':'23661','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'lihuihui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'韩微微','userJobID':'23609','userDepartment':'数字化云平台部','userOffice':'','userEmail':'hanweiwei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'梁紫藤','userJobID':'23685','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'liangziteng@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈雄厚','userJobID':'22626','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chenxionghou@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'卢忆都','userJobID':'21300','userDepartment':'数字化云平台部','userOffice':'','userEmail':'luyidu@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'周志敏','userJobID':'23616','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'zhouzhimin@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张金玉','userJobID':'24102','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'zhangjinyu@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈晓东','userJobID':'23670','userDepartment':'数字化云平台部','userOffice':'手机APP应用开发科','userEmail':'chenxiaodong@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'嵇黎明','userJobID':'23663','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'jiliming@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'胡晓晨','userJobID':'23676','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'huxiaochen@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'姚景茹','userJobID':'23672','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'yaojingru@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'林鸿英','userJobID':'23607','userDepartment':'数字化云平台部','userOffice':'','userEmail':'linhongying@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'金秋颖','userJobID':'23657','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'jinqiuying@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'王延涛','userJobID':'23666','userDepartment':'数字化云平台部','userOffice':'手机APP应用开发科','userEmail':'wangyantao@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'张玲智','userJobID':'23626','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'zhanglingzhi@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'范丹丹','userJobID':'21435','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'fandandan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'王闯','userJobID':'25182','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'wangchuang01@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'杨茜','userJobID':'26870','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'yangqian01@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈灿','userJobID':'23627','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chencan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'徐玥','userJobID':'19027','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'xuyue@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'李彤','userJobID':'25304','userDepartment':'数字化云平台部','userOffice':'OTA技术与管理科','userEmail':'litong04@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郑楠','userJobID':'23617','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'zhengnan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'石煜','userJobID':'23644','userDepartment':'数字化云平台部','userOffice':'大数据分析及应用开发科','userEmail':'shiyu@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'吴康','userJobID':'23682','userDepartment':'数字化云平台部','userOffice':'车联网运营支持科','userEmail':'wukang@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'刘婧','userJobID':'25277','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'liujing05@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'马宁','userJobID':'26871','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'maning@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭雪','userJobID':'26872','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'guoxue@baicgroup.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'杜洋','userJobID':'23606','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'duyang@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'杨猛','userJobID':'23610','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'yangmeng03@baicmotor.com','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'刘硕','userJobID':'24006','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'liushuo@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
    ];

    const userName = document.getElementById("userName").value;
    const userJobID = document.getElementById("userJobID").value;
    const userOffice = document.getElementById("userOffice").value;
    const userDepartment = document.getElementById("userDepartment").value;
    const data='{"userName":"'+userName+'","userOffice":"'+userOffice+'","userDepartment":"'+userDepartment+'"}';
    sessionStorage.setItem("userData",JSON.stringify(data));

    const account = userList.filter(
        function(e){
            return e.userName === userName &&
                e.userJobID === userJobID &&
                e.userDepartment === userDepartment &&
                e.userOffice === userOffice;
        })[0]; // 筛选账号返回数组，不存在则返回空数组

    if (!account){
    } else {
        redirectWithParams("html/function.html",account)
    }
}

function redirect(page){
    // 获取当前页面的URL
    const url = window.location.href;
    // 使用URLSearchParams解析查询参数
    const userParams = new URLSearchParams(url.split('?')[1]);
    redirectWithParams(page,userParams)
}

// 携带参数跳转
function redirectWithParams(page, userParams) {
    // 检查params是否是一个对象
    if (typeof userParams === 'object') {
        // 将对象转换为查询字符串
        const queryString = Object.keys(userParams)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(userParams[key]))
            .join('&');
        // 将查询字符串添加到URL中
        window.location.href = page + '?' + queryString;
    } else {
        // 如果params不是对象，直接跳转到页面
        window.location.href = page;
    }
}

// 格式化日对象
function getNowDate (){
    let date = new Date();
    let sign2 = ":";
    let year = date.getFullYear() // 年
    let month = date.getMonth() + 1; // 月
    let day = date.getDate(); // 日
    let hour = date.getHours(); // 时
    let minutes = date.getMinutes(); // 分
    let weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
    let week = weekArr[date.getDay()];
    // 给一位数的数据前面加 “0”
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (day >= 0 && day <= 9) {
        day = "0" + day;
    }
    if (hour >= 0 && hour <= 9) {
        hour = "0" + hour;
    }
    if (minutes >= 0 && minutes <= 9) {
        minutes = "0" + minutes;
    }
    return year + "-" + month + "-" + day + " " + hour + sign2 + minutes;
}