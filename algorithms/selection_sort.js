function selection_sort(t){
    var n=arr.length,i=0,t1,t2,time=t;
    function sort(){
        if(i<n){
            var min=i,j=i;
            console.log(j+" "+i);
            function animate2(p,q){
                window.clearTimeout(t1);
                var temp=arr[p];
                arr[p]=arr[q];
                arr[q]=temp;
                document.getElementById("bar"+p).style.height=(arr[p]*100)/mx+"%";
                document.getElementById("bar"+q).style.height=(arr[q]*100)/mx+"%";
                t2=window.setTimeout(function(){
                    window.clearTimeout(t2);
                    document.getElementById("bar"+p).style.backgroundColor="purple";
                    for(var i=p+1 ; i<n ; i++){
                        document.getElementById("bar"+i).style.backgroundColor="blue";
                    }
                    sort();
                },time);
            }
            function animate1(p,q){
                document.getElementById("bar"+p).style.backgroundColor="red";
                document.getElementById("bar"+q).style.backgroundColor="red";
                t1=window.setTimeout(function(){
                    animate2(p,q);
                },time);
            }
            function sort1(){
                window.clearTimeout(t2);
                if(j!=i && j<n){
                    var p=j-1;
                    if(p!=min) document.getElementById("bar"+p).style.backgroundColor="blue";
                }
                if(j<n){
                    var speed=time;
                    if(j!=i) document.getElementById("bar"+j).style.backgroundColor="green";
                    else document.getElementById("bar"+j).style.backgroundColor="red";
                    if(arr[j]<arr[min]){
                        var p=j,q=min;
                        min=j,speed+=time;
                        t1=window.setTimeout(function(){
                            document.getElementById("bar"+p).style.backgroundColor="red";
                            if(p!=q) document.getElementById("bar"+q).style.backgroundColor="blue";
                            window.clearTimeout(t1);
                        },time);
                    }
                    j++;
                    t2=window.setTimeout(sort1,speed);
                }
                else{
                    var p=i,q=min;
                    i++;
                    animate1(p,q);
                }
            }
            sort1();
        }
        else $('.bar').css('backgroundColor','purple');
    }
    sort();
}