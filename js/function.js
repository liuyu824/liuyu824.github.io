window.onload = function (){
    parseFromUrl();
}

function parseFromUrl(){
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

    if (userOffice === ""){
        document.getElementById("div_userOffice").hidden = true;
    } else {
        document.getElementById("div_userOffice").hidden = false;
        document.getElementById("userOffice").innerHTML = userOffice;
    }
    document.getElementById("userName").innerHTML = userName;
    document.getElementById("userJobID").innerHTML = userJobID;
    document.getElementById("userDepartment").innerHTML = userDepartment;
    document.getElementById("userEmail").innerHTML = userEmail;
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

function redirect(page,){
    // 获取当前页面的URL
    const url = window.location.href;
    // 使用URLSearchParams解析查询参数
    const userParams = new URLSearchParams(url.split('?')[1]);
    redirectWithParams(page,userParams)
    redirectWithParams(page,userParams)
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

