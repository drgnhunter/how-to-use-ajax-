function sendGETRequest(){
    console.log("1");
    var mobile = document.getElementById("mobile");
    var password = document.getElementById("password");

    var r = new XMLHttpRequest();//request object
    r.onreadystatechange = function(){
        if(r.readyState == 4 && r.status == 200){
            var t =  r.responseText;
            console.log(t);
            document.getElementById("a").innerHTML = t;
        }
    };

    r.open("GET","server.php?mobile="+mobile.value+"&password="+password.value,true);
    r.send();
    
    console.log("2");
}

function sendGETRequest2(){
    var mobile = document.getElementById("mobile");
    var password = document.getElementById("password");

    var r = new XMLHttpRequest();
    r.onreadystatechange = function(){
        if(r.readyState == 4 && r.status == 200){
            var t =  r.responseText;
            alert(t);
        }
    };

    r.open("GET","server.php?mobile="+mobile.value+"&password="+password.value,true);
    r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    r.send();
    
}

function sendPOSTRequest(){
    var mobile = document.getElementById("mobile");
    var password = document.getElementById("password");

    var f = new FormData();
    f.append("mobile",mobile.value);
    f.append("password",password.value);

    var r = new XMLHttpRequest();
    r.onreadystatechange = function(){
        if(r.readyState == 4 && r.status == 200){
            var t =  r.responseText;
            console.log(t);
        }
    };

    r.open("POST","server2.php",true);
    r.send(f);
    
    console.log("AFTER AJAX");
}

function uploadFile(){
    var file_id = document.getElementById("file");

    var f = new FormData();
    f.append("file",file_id.files[0]);
    
    var r = new XMLHttpRequest();
    r.onreadystatechange = function(){
        if(r.readyState == 4 && r.status == 200){
            var t = r.responseText;
            alert(t);
        }
    };

    r.open("POST","file_server.php",true);
    r.send(f);
}