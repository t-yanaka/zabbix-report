var myAjax = function(arg) {
    var opt = $.extend({}, $.ajaxSettings, arg);
    var jqXHR = $.ajax(opt);

    var defer = $.Deferred();

    jqXHR.done(function(data, statusText, jqXHR) {
        console.log('done(=success)時の共通処理 ...');

        // defer.resovle ではなくて defer.resolveWith で
        // myAjax(...).done() 内でのthisのコンテキストを
        // 明示的に指定する
        defer.resolveWith(this, arguments);
    });

    jqXHR.fail(function(jqXHR, statusText, errorThrown) {
        console.log('fail(=error)時の共通処理 ...');

        // defer.reject ではなくて defer.rejectWith で
        // myAjax(...).fail() 内でのthisのコンテキストを
        // 明示的に指定する
        defer.rejectWith(this, arguments);
    });

    jqXHR.always(function() {
        console.log('always(=complete)時の共通処理 ...');
    });

    return $.extend({}, jqXHR, defer.promise());
};

function firstZabbixAjax(){
    zabbixAjax("show tables;");
};

function createQuery(num){
    //buttonId= '"manyButtons-id' + num + '"'
    var d = document.getElementById('manyButtons-id' + num).value;
    var q = 'select column_name from information_schema.columns where table_name="' + d + '";'
    alert(q);
    zabbixAjax(q);
};

function zabbixAjax(query){
zabbixDbQuery = {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query": query}; 
myAjax({
    url: 'http://report.com/zabbix/',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(zabbixDbQuery)
}).done(function(json, statusText, jqXHR) {
    //alert(json);
    buttons(json);
}).fail(function(jqXHR, statusText, errorThrown) {
    console.log('FAIL!');
}).always(function() {
    console.log('ALWAYS!');
});
};

   function buttons(data){
       var buf='<h3> TEST  </h3> <form name="bt">';
       for (var i = 0; i < data.length; i++) {
           buf=buf + '<form name="bt"> <p>';
           var keys = Object.keys(data[i]);
           for (var j = 0; j < keys.length; j++) {
               var d = data[i] [keys[j]]; 
               buf = buf + '<button type="button" id="manyButtons-id' + i + '" name="manyButtons" value="' + d + '" onclick="createQuery(' + i + ')">' + d + '</button>';
               //buf=buf + "<button>"+ data[i] [keys[j]] +"</button>";
           }
           buf=buf + '</p> </form>';
       }
       //buf=buf + '</form>';
       $("#id-buttons").html(buf);
       alert(buf);
   };           
