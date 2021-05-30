function bubble_sort(t){
    var n=arr.length,y;
    var time=t,t1,t2,y;
    function animate2(p,q){
        var temp=arr[p];
        arr[p]=arr[q];
        arr[q]=temp;
        document.getElementById("bar"+p).style.height=(arr[p]*100)/mx+"%";
        document.getElementById("bar"+q).style.height=(arr[q]*100)/mx+"%";
        window.clearTimeout(t2);
    }
    function animate1(p,q){
        window.clearTimeout(t1);
        document.getElementById("bar"+p).style.backgroundColor="red";
        document.getElementById("bar"+q).style.backgroundColor="red";
        t2=window.setTimeout(function(){
            animate2(p,q);
        },time);
    }
    function sort1(){
        window.clearTimeout(y);
        var i=1;
        if(n>0){
            function sort(){
                // if(i!=1){
                //     var p=i-1,q=i-2;
                //     document.getElementById("bar"+p).style.backgroundColor="blue";
                //     document.getElementById("bar"+q).style.backgroundColor="blue";
                // }
                window.clearTimeout(y);
                var speed=time;
                for(var p=0 ; p<n ; p++) document.getElementById("bar"+p).style.backgroundColor="blue";
                if(i>n) {
                    var p=i-1;
                    document.getElementById("bar"+p).style.backgroundColor="purple";
                    sort1();
                }
                else{
                    var a=document.getElementById("bar"+i);
                    var j=i-1;
                    var b=document.getElementById("bar"+j);
                    a.style.backgroundColor="green";
                    b.style.backgroundColor="green";
                    if(arr[i]<arr[j]){
                        var p=i,q=j;
                        speed+=2*time;
                        t1=window.setTimeout(function(){
                            animate1(p,q);
                        },time);
                    }
                    i++;
                    y=window.setTimeout(sort,speed);
                }
            }
            sort();
            // y=window.setTimeout(sort1,(n-1)*time);
            n--;
        }
        else $('.bar').css('backgroundColor','purple');
    }
    sort1();
    
}