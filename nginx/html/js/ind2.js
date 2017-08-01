/*
$( function() {
    $( '#ajax-button' ) .click(
    function() {
        var url = "http://report.com/json/data.json";
        var requestParam = {test : '{"key":"val"}'};
        // デバッグ情報をクリアします。
        allClear();
        // リクエスト情報を出力します。
        requestDebug(url, requestParam);
        $.ajax({
          url: url,
          type:'GET',
          data: requestParam,
          dataType: 'json',
          //jsonpCallback: 'test',
          //jsonp : 'parseResponse',
          success: function(data) {
                       var d = JSON.stringify(data);
                       //var d = data.alert
                       
                       // レスポンス情報を出力します。
                       //responseDebug(data);
                       alert(d);
                   },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
                      // エラー情報を出力します。
                      errorDebug(XMLHttpRequest, textStatus, errorThrown)
                 }
        });
    });
*/
$(function(){
$('#ajax-button').submit(function(event) {
    // HTMLでの送信をキャンセル
    event.preventDefault();
 
    // 操作対象のフォーム要素を取得
    var $form = $(this);
    
    // 送信ボタンを取得
    var $button = $form.find('button');
 
    var url = "http://report.com/zabbix/";
    var requestParam = {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8","query":"select * from alerts"};
    alert(JSON.stringify(requestParam));
    // 送信
    /*
    $.ajax({
        //url: $form.attr('action'),
        type: $form.attr('method'),
        //type: $form.attr('method'),
        //data: $form.serialize(),
        url: url,
        //type:'POST',
        data: JSON.stringify(requestParam),
        dataType: 'json',        
        timeout: 10000,  // 単位はミリ秒
 
        // 送信前
        beforeSend: function(xhr, settings) {
            // ボタンを無効化し、二重送信を防止
            $button.attr('disabled', true);
        },
        // 応答後
        complete: function(xhr, textStatus) {
            // ボタンを有効化し、再送信を許可
            $button.attr('disabled', false);
        },
 
        // 通信成功時の処理
        success: function(result, textStatus, xhr) {
            // 入力値を初期化
            $form[0].reset();
             
            alert('OK');
        },
 
        // 通信失敗時の処理
        error: function(xhr, textStatus, error) {
            alert('NG...');
        }
    });
    */
    
    
    $.ajax({
                type : 'POST',
                url : url,
                data : JSON.stringify(requestParam),
                //data: requestParam,
                //data: {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query":"alerts"},
                //contentType: 'application/JSON',
                dataType : 'JSON',
                scriptCharset: 'utf-8',
                success : function(data) {
                    var d = JSON.stringify(data); 
                    // Success
                    alert(d);
                },
                error : function(data) {

                    // Error
                    alert("error");
                }
            });
});
});
