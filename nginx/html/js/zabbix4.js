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
    //var q = zabbixAjax('show tables;', "all", "tables");
    zabbixAjax('show tables;', "all", "tables").done(function(data) {
                    firstButtons(data, "all", "tables")
                    //if (para2 == "tables") {
                    //    buttons(data, para1, para2);
                    //} else if (para2 == "columns") {
                    //    alert("OK");
                    //}
    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                         alert("error");
    })
    //w = JSON.stringify(q, "tables")
    //alert(w);
    //buttons(q);
};

function columnsQuery(num){
    //buttonId= '"manyButtons-id' + num + '"'
    var d = document.getElementById('manyButtons-id' + num).value;
    var quary = 'select column_name from snformation_schema.columns where table_name = "' + d + '";'
    //var q = zabbixAjax(quary, d, "columns");
    zabbixAjax('show tables;', "all", "tables").done(function(data) {
        var q = 'select * from ' + d + ' limit 10;'
        var tables = data;
        zabbixAjax(q, "all", "tables").done(function(data) {
            if (Object.keys(data).length === 0) {
                alert("NO DATA");
            }else{
                columnsButtons(tables, data, d, "columns")
            }
        }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
            alert("error");
        })
    }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                         alert("error");
    })
    //alert(q);
    //buttons(q);
};

/*
function zabbixAjax(query, para1, para2){
zabbixDbQuery = {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query": query}; 
myAjax({
    url: 'http://report.com/zabbix/',
    type: 'POST',
    dataType: 'json',
    data: JSON.stringify(zabbixDbQuery),
    //async:false
}).done(function(json, statusText, jqXHR) {
    buttons(json, para1, para2);
    //return json;
}).fail(function(jqXHR, statusText, errorThrown) {
    alert('FAIL!');
}).always(function() {
    console.log('ALWAYS!');
});
};
*/


function zabbixAjax(query, para1, para2){
zabbixDbQuery = {"host":"10.0.1.163", "port":3306, "db":"zabbix", "user":"zabbix", "passwd":"zabbix", "charset":"utf8", "query": query};
return $.ajax({
            url: 'http://report.com/query/',
            type:'POST',
            dataType: 'json',
            data : JSON.stringify(zabbixDbQuery),
            timeout:30000,
            //async:false
       });
};

function firstButtons(data, para1, para2){
     var buf=' <div name="bt" class="FirstButtons"> <h3>' + para1 + ' ' + para2 + '<h3>';
     for (var i = 0; i < data.length; i++) {
         buf=buf + '<form name="bt' + i + '"> <p>';
         var keys = Object.keys(data[i]);
         for (var j = 0; j < keys.length; j++) {
             var d = data[i] [keys[j]]; 
             buf = buf + '<form name="bt' + i + '" style="margin: 0px;"> <p>' + '<button type="button" id="manyButtons-id' + i + '" name="manyButtons" value="' + d + '" onclick="columnsQuery(' + i + ')">' + d + '</button> </p> </form>';
         }
         //buf=buf + '</p> </form>';
     }
     buf=buf + '</div>';
     buf=buf + '<style> div.FirstButtons { color:red; position:relative; top:0px; left:0px } </style>'
     $("#id-buttons").html(buf);
     alert(buf);
};

function columnsButtons(tables, data, para1, para2){
     var buf=' <div name="bt" class="FirstButtons"> <h3>' + para1 + ' ' + para2 + '<h3>';
     //var buf=' <nav';
     for (var i = 0; i < tables.length; i++) {
         buf=buf + '<form name="bt' + i + '"> <p>';
         var keys = Object.keys(tables[i]);
         for (var j = 0; j < keys.length; j++) {
             var d = tables[i] [keys[j]];
             buf = buf + '<form name="bt' + i + '" style="margin: 0px;"> <p>' + '<button type="button" id="manyButtons-id' + i + '" name="manyButtons" value="' + d + '" onclick="columnsQuery(' + i + ')">' + d + '</button> </p> </form>';
         }
         //buf=buf + '</p> </form>';
     }

     buf=buf + '</div>';
     buf=buf + '<style> div.FirstButtons { color:red; float:left } </style>'

     var keys = Object.keys(data[0]);
     //buf = buf + "<div style='color:blue; float:right position:absolute; top:0px; right:100px'>";
     buf = buf+ "<table border=1 style='color:blue; position:absolute; top:150px; left:350px;'>";


     buf=buf + "<tr>";
     for (var j = 0; j < keys.length; j++) {
         buf=buf + '<td> <input type="checkbox"> <select name="league" > <option value="">test1</option> <option value="">test2</option> <option value="">test3</option></select></td>';
         //buf=buf + '<td>' + [keys[j]] +'</td>';
         //alert(buf);
      }
      buf=buf + "</tr>";

     buf=buf + "<tr>";
     for (var j = 0; j < keys.length; j++) {
         //buf=buf + '<td> <input type="checkbox">'</td>';
         buf=buf + '<td>' + [keys[j]] +'</td>';
         //alert(buf);
      }
      buf=buf + "</tr>";
 
     buf=buf + "<tr>";
     for (var i = 0; i < data.length; i++) {
         buf=buf + "<tr>";
         var keys = Object.keys(data[i]);
         for (var j = 0; j < keys.length; j++) {
             buf=buf + '<td>' + data[i] [keys[j]] + '</td>';
         }
     }
     buf=buf + "</tr>"
     buf=buf + "</table>"
     //buf=buf + "</div>"

     $("#id-buttons").html(buf);
     //alert(buf);
}
