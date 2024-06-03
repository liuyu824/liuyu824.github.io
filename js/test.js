window.onload = function(){
    // 获取当前页面的URL
    const url = window.location.href;
    // 使用URLSearchParams解析查询参数
    const userParams = new URLSearchParams(url.split('?')[1]);
    // 填充页面信息
    document.getElementById("userName").innerHTML = userParams.get("userName");
    document.getElementById("userOffice").innerHTML = userParams.get("userOffice");
}

function getRadioValue(){

    let finishTime = getNowDate();

    let finalGrade = 0;

    const answerList = [
        {'question':'question1','answer':'a'},
        {'question':'question2','answer':'a'},
        {'question':'question3','answer':'a'},
        {'question':'question4','answer':'a'},
        {'question':'question5','answer':'a'},
        {'question':'question6','answer':'a'},
        {'question':'question7','answer':'a'},
        {'question':'question8','answer':'a'},
        {'question':'question9','answer':'a'},
        {'question':'question10','answer':'a'},
        {'question':'question11','answer':'a'},
    ];

    for (let i = 1; i <= 10; i++) {
        const radios = document.getElementsByName('question'+i);

        // 使用函数检查是否有单选按钮被选中
        const isSelected = isRadioButtonSelected('question' + i); // 返回true或false
        if (!isSelected){
            //弹窗请全部选择
            window.alert('请完成全部单选题');
            return;
        }

        for(let j=0; j < radios.length; j++){
            if(radios[j].checked){
                const chosenValue = radios[j].value;
                console.log(chosenValue);

                const rightValue = answerList.filter(
                    function(e){
                        return e.question === 'question'+i;
                    })[0]; // 筛选答案列表返回数组，不存在则返回空数组



                if (rightValue.answer === chosenValue){
                    finalGrade += 10;
                }

                break;
            }
        }
    }
    document.getElementById('grade').innerHTML = finalGrade.toString();

    // 获取当前页面的URL
    const url = window.location.href;
    // 使用URLSearchParams解析查询参数
    const userParams = new URLSearchParams(url.split('?')[1]);

    userParams.set('finishTime', finishTime);
    userParams.set('finalGrade',finalGrade.toString());
    redirectWithParams('achievement.html', userParams);
}

// 假设你的单选按钮有相同的name属性值，例如 "radioName"
function isRadioButtonSelected(name) {
    return document.querySelector(`input[name='${name}']:checked`) !== null;
}
