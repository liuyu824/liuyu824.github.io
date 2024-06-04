function testAgain(){
    redirect('test.html')
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

    // 获取特定的查询参数
    const userName = userParams.get('userName');
    const userJobID = userParams.get('userJobID');
    const userOffice = userParams.get('userOffice');
    const userDepartment = userParams.get('userDepartment');
    const userEmail = userParams.get('userEmail');
    const startTime = getNowDate();

    // 拼接String字符串
    const account =
        {'userName':userName,
            'userJobID':userJobID,
            'userDepartment':userDepartment,
            'userOffice':userOffice,
            'userEmail':userEmail,
            'startTime':startTime,
            'finishTime':'',
            'finalGrade':''};

    // 检查params是否是一个对象
    if (typeof account === 'object') {
        // 将对象转换为查询字符串
        const queryString = Object.keys(account)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(account[key]))
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