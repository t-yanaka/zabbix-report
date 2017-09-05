$(function(){
$('#ajax-button').submit(function(event) {
    // HTMLでの送信をキャンセル
    event.preventDefault();
    
    // 操作対象のフォーム要素を取得
    var $form = $(this);
    var textarea1 = $("#textarea-id").val(); 
    // 送信ボタンを取得
    var $button = $form.find('button');
    
    var url = "http://report.com/zabbix/";
    var requestParam = {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query": textarea1};
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
                    var keys = Object.keys(data[0]);
                    //$("#example-table").tabulator({
                        var columns=[];
                        var sampleData=[];
                        //var keys = Object.keys(data[0]);
                        for (var j = 0; j < keys.length; j++) {
                            columns=columns + {title:[keys[j]] , field:[keys[j]], sortable:true, width:200};
                        }
                        alert(columns[0] ['title']);
                    //});

                        for (var i = 0; i < data.length; i++) {
                            sampleData=sampleData + data[i];
                        }
                        alert(sampleData);
                        // $("#example-table").tabulator("setData", sampleData);   
                         

                },
                error : function(data) {
                    var d = JSON.stringify(data);
                    // Error
                    alert(d);
                }
            });
});
});
