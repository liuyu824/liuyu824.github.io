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

    if (userJobID === ""){
        document.getElementById("div_userJobId").hidden = true;
    }
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
    // {'userName':'黄殿辉','userJobID':'0','userDepartment':'数字化云平台部','userOffice':'','userEmail':'huangdianhui@bjev.com.cn','startTime':'','finishTime':'','finalGrade':''},

    // 检查params是否是一个对象
    // if (typeof userParams === 'object') {
    //     console.log("params是对象")
    //     // 将对象转换为查询字符串
    //     const queryString = Object.keys(userParams)
    //         .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(userParams[key]))
    //         .join('&');
    //     // 将查询字符串添加到URL中
    //     console.log(queryString)
    //
    // } else {
    //     console.log("params不是对象")
    //     // 如果params不是对象，直接跳转到页面
    //     window.location.href = page;
    // }

    // 获取当前页面的URL
    const url = window.location.href;
    window.location.href = page + '?' + new URLSearchParams(url.split('?')[1]);
}


