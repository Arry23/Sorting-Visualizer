function merge_sort(t){
    var dpr=[],dpl=[];
    var n=arr.length,t1,t2,i=0,time=t;
    function mergesorthelper(l,r){
        if(l>=r) return;
        var m=(l+r-(l+r)%2)/2;
        mergesorthelper(l,m);
        mergesorthelper(m+1,r);
        dpl.push(l),dpr.push(r);
    }
    mergesorthelper(0,n-1);
    function merge(l,m,r){
        var i=l,j=m+1,y;
        function animate2(p,q){
            var x=arr[q];
            for(var k=q ; k>=p ; k--){
                var a=document.getElementById("bar"+k);
                if(k==p) arr[k]=x;
                else arr[k]=arr[k-1];
                a.style.height=(arr[k]*100)/mx+"%";
            }
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
        function merge1(){
            $('.bar').css('backgroundColor','blue');
            window.clearTimeout(y);
            if(j>r || i>m) sort();
            else{
                var speed=time;
                document.getElementById("bar"+i).style.backgroundColor="green";
                document.getElementById("bar"+j).style.backgroundColor="green";
                if(arr[i]>arr[j]){
                    speed+=2*time;
                    var p=i,q=j;
                    t1=window.setTimeout(function(){
                        animate1(p,q);
                    },time);
                    i++,j++,m++;
                }
                else i++;
                y=window.setTimeout(merge1,speed);
            }
        }
        merge1();
    }
    function sort(){
        if(i>=dpr.length){
            $('.bar').css('backgroundColor','purple');
            return;
        }
        var a=dpl[i]+dpr[i],l=dpl[i],r=dpr[i];
        var m=(a-a%2)/2;
        merge(l,m,r);
        i++;
    }
    sort();
}