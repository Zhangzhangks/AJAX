function resolveData(data) {
    // 拼接数据
    var arr = [];
    for (var k in data) {
        var str = k + '=' + data[k]
        arr.push(str)
    };
    return arr.join('&');
}
// 例如 name = zks & age=18
resolveData()

function itheima(option) {
    var xhr = new XMLHttpRequest();
    // 把传过来的数据封装成拼接字符串  
    var qs = resolveData(option.data);
    if (option.method.toUpperCase() === 'GET') {
        xhr.open(option.method, option.URL + '?' + qs);
        xhr.send();
    } else if (option.method.toUpperCase() === 'POST') {

        xhr.open(option.method, option.URL);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        xhr.send(qs);

    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText);
            // console.log(result);
            option.success(result)
        }
    };

}