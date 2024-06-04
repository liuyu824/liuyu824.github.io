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

    // 拼接String字符串
    const account =
        {'userName':userName,
            'userJobID':userJobID,
            'userDepartment':userDepartment,
            'userOffice':userOffice,
            'userEmail':userEmail,
            'startTime':'',
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