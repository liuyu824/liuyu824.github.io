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
        {'userName':'黄殿辉','userJobID':'21238','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈灿','userJobID':'23627','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chencan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭梦飞','userJobID':'20017','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'guomengfei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'','userJobID':'','userDepartment':'','userOffice':'','userEmail':'','startTime':'','finishTime':'','finalGrade':''},
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
        {'userName':'黄殿辉','userJobID':'0','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'陈灿','userJobID':'23627','userDepartment':'数字化云平台部','userOffice':'网联平台系统开发科','userEmail':'chencan@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
        {'userName':'郭梦飞','userJobID':'20017','userDepartment':'数字化云平台部','userOffice':'网联终端应用开发科','userEmail':'guomengfei@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},
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

function redirect(page){
    // 获取当前页面的URL
    const url = window.location.href;
    // 使用URLSearchParams解析查询参数
    const userParams = new URLSearchParams(url.split('?')[1]);
    // 获取特定的查询参数
    const userName = userParams.get('userName');
    const userJobID = userParams.get('userJobID');
    const userOffice = userParams.get('userOffice');
    const userDepartment = userParams.get('userDepartment');
    const userEmail = userParams.get('userEmail');



    redirectWithParams(page,userParams)
}

// 携带参数跳转
function redirectWithParams(page, userParams) {
    // 检查params是否是一个对象
    if (typeof userParams === 'object') {
        console.log(userParams)
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
    let seconds = date.getSeconds() //秒
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
    if (seconds >= 0 && seconds <= 9) {
        seconds = "0" + seconds;
    }
    return year + "-" + month + "-" + day + " " + hour + sign2 + minutes + sign2 + seconds;
}