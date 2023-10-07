"use strict"

const home = (req, res) =>{
    res.render('home/index');
};
 //hello라는 컨트롤러 함수를 만들고 이를 외부에서 사용해준다

const login = (req, res)=>{
    res.render("home/login");
    
};

module.exports = {
    home,
    login,
}; //module을 오브젝트로 빼준다(키하나만 입력해주면 키와같은 밸류도넣어줌)