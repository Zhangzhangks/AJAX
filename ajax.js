function resloverdata(data){
    var arr=[];
    for(let k in arr){
        var str=k+'='+data[k];
        arr.push(str);

    }
    return arr.join('&');
}
resloverdata({nam:'zks',age:18});