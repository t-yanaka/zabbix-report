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
                    buttons(data);
                    
                    /*var buf="<h3> TEST  </h3> <form>"; 
                    for (var i = 0; i < data.length; i++) {
                        buf=buf + "<p>";
                        var keys = Object.keys(data[i]);
                        for (var j = 0; j < keys.length; j++) {
                            buf=buf + "<button>"+ data[i] [keys[j]] +"</button>";
                        }
                        buf=buf + "</p>";   
                    }
                    buf=buf + "</form>";
                    $("#table").html(buf); 
                */
                },
                error : function(data) {
                    var d = JSON.stringify(data);
                    // Error
                    alert(d);
                }
            });
});
});

   function buttons(data){
       var buf="<h3> TEST  </h3> <form>";
       for (var i = 0; i < data.length; i++) {
           buf=buf + "<p>";
           var keys = Object.keys(data[i]);
           for (var j = 0; j < keys.length; j++) {
               buf=buf + "<button>"+ data[i] [keys[j]] +"</button>";
           }
           buf=buf + "</p>";
       }
       buf=buf + "</form>";
       $("#table").html(buf);
   }
           
   
