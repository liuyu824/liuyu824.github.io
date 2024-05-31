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
        {'userName':'黄殿辉','userJobID':'0','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn'},
        {'userName':'陈灿','userJobID':'23627','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chencan@bjev.com.cn'},
        {'userName':'郭梦飞','userJobID':'20017','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科'},
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
        document.getElementById('userOffice').value = "";
        document.getElementById('userOffice').readOnly = false;
        document.getElementById("div_userOffice").hidden = false;
        document.getElementById("userDepartment").value = "";
        document.getElementById("userDepartment").readOnly = false;
    } else {
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
        {'userName':'黄殿辉','userJobID':'0','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn'},
        {'userName':'陈灿','userJobID':'23627','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chencan@bjev.com.cn'},
        {'userName':'郭梦飞','userJobID':'20017','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科'},
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
        console.log()
    } else {
        redirectWithParams("html/function.html",account)
    }
}

// 携带参数跳转
function redirectWithParams(page, params) {
    // 检查params是否是一个对象
    if (typeof params === 'object') {
        // 将对象转换为查询字符串
        const queryString = Object.keys(params)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
            .join('&');
        // 将查询字符串添加到URL中
        window.location.href = page + '?' + queryString;
    } else {
        // 如果params不是对象，直接跳转到页面
        window.location.href = page;
    }
}
