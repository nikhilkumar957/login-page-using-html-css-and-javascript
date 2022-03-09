let usernames =[{
    usercode:"username1",
    password:"abc@12"
},{
    usercode:"username2",
    password:"123abc"
},{
    usercode:"username3",
    password:"1234@abcd"
}
]
alert("please enter credentials")
function validate(){
    var user = document.getElementById("usercode").value;
    var pass = document.getElementById("password").value;
    if (user==('username1') && pass==('abc@12') ){
    alert("login success");
    location.href=("success.html")
    }
    else if (user==('username2') && pass==('123abc') ){
    alert("login success");
    location.href=("success.html")
    }
    else if (user==('username3') && pass==('1234@abcd') ){
    alert("login success");
    location.href=("success.html")
    }
    else{
    alert("incorrect data")
    }
}