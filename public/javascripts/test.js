(function () {
  var button = document.getElementById('request');
  var url = 'http://google.com/'; // リクエスト先URL
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onreadystatechange = function () {
    if (request.readyState !== 4) {
        // リクエスト中
    } else if (request.status !== 200) {
        // 失敗
        console.log(request.status);
    } else {
        // 取得成功
        var result = request.responseText;
        console.log(result);
    }
  };
  request.send(null);
}());
