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
    const inputValue = document.getElementById("userName").value;
    console.log("Input value change to: "+ inputValue)
    if (inputValue === "黄殿辉"){
        document.getElementById("userDepartment").value = "数字化云平台部";
        document.getElementById("userDepartment").readOnly = true;
        document.getElementById("div_userOffice").hidden = true;
    } else if (inputValue === "陈灿"){
        document.getElementById("userDepartment").value = "数字化云平台部";
        document.getElementById("userDepartment").readOnly = true;
        document.getElementById("userOffice").value = "网联平台系统开发科";
        document.getElementById("userOffice").readOnly = true;
    } else {
        document.getElementById("userDepartment").value = "";
        document.getElementById("userDepartment").readOnly = false;
        document.getElementById("userOffice").value = "";
        document.getElementById("userOffice").readOnly = false;
        document.getElementById("div_userOffice").hidden = false;
    }
}

function index(btn){
    var user = $(".userPhone").val();
    var pass = $(".userPass").val();
    var data='{"userNum":"'+user+'","password":"'+pass+'"}';
    sessionStorage.setItem("userNum",JSON.stringify(user));

    self.location.href="html/test.html";
    sessionStorage.setItem("userNum",JSON.stringify(user));

    // $.ajax({
    //     type: 'GET',
    //     url: basePath+'/user/studentLogin',
    //     data: JSON.parse(data),
    //     dataType: 'json',
    //     success: function (res) {
    //         console.log(res);
    //         if(res.status=='200'){
    //             layer.msg("登录成功");
    //
    //         }else if(res.status=='400'){
    //             layer.msg(res.msg);
    //         }
    //     },
    //     error: function (XMLHttpRequest, textStatus, errorThrown) {
    //         layer.msg("登录失败");
    //     }
    // });
 /*   self.location.href='function.html'*/
}
function userLimit(user) {//密码限制字符在100字符以内
    if (user != "" && user != null && user != undefined)//判断是否填入密码
    {
        return true;
    }
    else {
        layer.msg("请输入学号！");
    }
}

function passLimit(pass) {//密码限制字符在100字符以内
    if (pass != "" && pass != null && pass != undefined)//判断是否填入密码
    {
        return true;
    }
    else {
        layer.msg("请输入密码！");
    }
}
//验证码是否正确
function codeLimit() {
    var inputCode = document.getElementById("J_codetext").value.toUpperCase();
    var codeToUp = code.toUpperCase();
    if (inputCode.length <= 0) {
        layer.msg("输入验证码");
        /*    document.getElementById("J_codetext").setAttribute("placeholder","");*/
        createCode();
        return false;
    }
    else if (inputCode != codeToUp) {
        document.getElementById("J_codetext").value = "";
        layer.msg("验证码错误");
        /* document.getElementById("J_codetext").setAttribute("placeholder","验证码错误");*/
        createCode();
        return false;
    }
    else {
        return true;
    }
}