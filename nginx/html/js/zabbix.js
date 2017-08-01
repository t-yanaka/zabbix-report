$(function(){
$('#ajax-button').submit(function(event) {
    // HTMLでの送信をキャンセル
    event.preventDefault();
    
    // 操作対象のフォーム要素を取得
    var $form = $(this);
    
    // 送信ボタンを取得
    var $button = $form.find('button');
    
    var url = "http://report.com/zabbix/";
    var requestParam = {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query":"select * from alerts;"};
    //alert(JSON.stringify(requestParam));
    
    $.ajax({
                type : 'POST',
                url : url,
                data : JSON.stringify(requestParam),
                //data : requestParam,
                dataType : 'JSON',
                contentType:'application/json',
                scriptCharset: 'UTF-8',
                timeout : 300000000,
                success : function(data) {
                    var d = JSON.stringify(data); 
                    // Success
                    //alert(d);
                    document.write(d);
                },
                error : function(data) {
                    var d = JSON.stringify(data);
                    // Error
                    alert(d);
                }
            });
});
});
