function parseFromUrl(){
    // 获取当前页面的URL
    const url = window.location.href;

// 使用URLSearchParams解析查询参数
    const params = new URLSearchParams(url.split('?')[1]);

// 获取特定的查询参数
    const userName = params.get('userName');
    const userJobID = params.get('userJobID');
    const userOffice = params.get('userOffice');
    const userDepartment = params.get('userDepartment');
    const userEmail = params.get('userEmail');

    console.log(userName + userJobID + userOffice + userDepartment + userEmail);
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