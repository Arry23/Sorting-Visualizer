function quick_sort(t){
    var n=arr.length,arr1=[];
    for(var i=0 ; i<n ; i++) arr1.push(arr[i]);
    var dpl=[],dpr=[];
    var t1,t2,t3,time=t,r;
    function helper(l,h){
        var pivot=arr1[l],j=h;
        for(var i=l+1 ; i<=h ; i++){
            if(arr1[i]>pivot){
                temp=arr1[i];
                arr1[i]=arr1[j];
                arr1[j]=temp;
                j--,h--,i--;
            }
        }
        temp=arr1[l];
        arr1[l]=arr1[j];
        arr1[j]=temp;
        return j;
    }
    function quicksorthelper(l,h){
        if(l>=h) return;
        dpl.push(l),dpr.push(h);
        var p=helper(l,h);
        quicksorthelper(l,p-1);
        quicksorthelper(p+1,h);
    }
    quicksorthelper(0,n-1);
    function partition(l,h){
        var i=l+1,y;
        document.getElementById("bar"+l).style.backgroundColor="yellow";
        for(var j=0 ; j<l ; j++){
            document.getElementById("bar"+j).style.backgroundColor="purple";
        }
        function animate3(p,q){
            window.clearTimeout(t3);
            document.getElementById("bar"+p).style.backgroundColor="blue";
            document.getElementById("bar"+q).style.backgroundColor="blue";
        }
        function animate2(p,q){
            window.clearTimeout(t2);
            var temp=arr[p];
            arr[p]=arr[q];
            arr[q]=temp;
            document.getElementById("bar"+p).style.height=(arr[p]*100)/mx+"%";
            document.getElementById("bar"+q).style.height=(arr[q]*100)/mx+"%";
            t3=window.setTimeout(function(){
                animate3(p,q);
            },time);
        }
        function animate1(p,q){
            window.clearTimeout(t1);
            document.getElementById("bar"+p).style.backgroundColor="red";
            document.getElementById("bar"+q).style.backgroundColor="red";
            t2=window.setTimeout(function(){
                animate2(p,q);
            },time);
        }
        function partition1(){
            window.clearTimeout(y);
            if(i<=h){
                var speed=0;
                if(i!=h){
                    document.getElementById("bar"+i).style.backgroundColor="green";
                    document.getElementById("bar"+h).style.backgroundColor="green";
                }
                if(arr[l]<arr[i]){
                    if(i!=h){
                        speed+=4*time;
                        p=i,q=h;
                        t1=window.setTimeout(function(){
                            animate1(p,q);
                        },time);
                    }
                    h--;
                }
                else{
                    var p=i,q=h;
                    speed+=2*time;
                    t3=window.setTimeout(function(){
                        animate3(p,q);
                    },time);
                    i++;
                }
                y=window.setTimeout(partition1,speed);
            }
            else{
                var p=l,q=h;
                animate1(p,q);
                t1=window.setTimeout(function(){
                    document.getElementById("bar"+h).style.backgroundColor="purple";
                    window.clearTimeout(t1);
                },3*time);
                r=window.setTimeout(sort,3*time);
            }
        }
        partition1();
    }
    var i=-1; 
    function sort(){
        window.clearTimeout(r);
        i++;
        if(i>=dpr.length){
            $('.bar').css('backgroundColor','purple');
            return;
        }
        partition(dpl[i],dpr[i]);
    }
    sort();
}