function createarray(size){
    var n=size,arr=[];
    for(var i=0 ; i<n ; i++){
        arr.push(Math.floor(Math.random()*200)+5);
    }
    var mx=-1;
    for(i=0 ; i<arr.length ; i++){
        if(arr[i]>mx) mx=arr[i];
    }
    var div0=document.getElementById("sortner");
    for(i=0 ; i<arr.length ; i++){
        var div1=document.createElement("div");
        div1.setAttribute("class","container");
        var div2=document.createElement("div");
        div2.setAttribute("class","bar");
        div2.setAttribute("id","bar"+i);
        div2.style.height=(arr[i]*100)/mx+"%";
        div0.appendChild(div1);
        div1.appendChild(div2);
    }
    return arr;
}

var arr=createarray(20);

var mx=-1;
for(i=0 ; i<arr.length ; i++){
    if(arr[i]>mx) mx=arr[i];
}

function clr(){
	location.reload();
}

function onlyOne1(checkbox){
    var checkboxes = document.getElementsByName('check1')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}
function onlyOne2(checkbox){
    var checkboxes = document.getElementsByName('check2')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

function simulate(){
    var a=document.getElementsByClassName("group1");
    var b=document.getElementsByClassName("group2");
    var x=false,y=false;
    var speed=[400,100,75];
    var p=0,q=0;
    for(var i=0 ; i<4 ; i++){
        if(a[i].checked) x=true,p=i;
    }
    for(var i=0 ; i<3 ; i++){
        if(b[i].checked) y=true,q=i;
    }
    if(x && y){
        if(p==0) selection_sort(speed[q]);
        else if(p==1) bubble_sort(speed[q]);
        else if(p==2) merge_sort(speed[q]);
        else quick_sort(speed[q]);
    }
    else{
        window.alert("Please check the algorithm/speed");
    }
}