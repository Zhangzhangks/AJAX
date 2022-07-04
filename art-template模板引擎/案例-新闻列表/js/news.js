$(function() {
    function isZero(value) {
        return value = value >= 10 ? value : '0' + value;
    }
    template.defaults.imports.dataFormatTime = function(value) {
            var value = new Date(value)
            var y = isZero(value.getFullYear());
            let m = isZero(value.getMonth() + 1);
            let day = isZero(value.getDate() - 20);

            return y + '-' + m + '-' + day
        }
        // 获取新闻列表
    function getComments() {
        $.get('http://www.liulongbin.top:3006/api/news', function(res) {
            if (res.status != 200) {
                alert('获取失败')
            }
            // res的tag转为数组
            for (var i = 0; i < res.data.length; i++) {
                res.data[i].tags = res.data[i].tags.split(',')
            }
            console.log(res);


            var strHtml = template('news', res);
            $('#news-list').html(strHtml)
        });
    };
    getComments();


})