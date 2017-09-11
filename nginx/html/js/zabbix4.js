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
    zabbixAjax('select distinct table_name from information_schema.columns where column_key="PRI" order by column_name asc;', "all", "tables").done(function(data) {
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
        var q1 = 'select * from ' + d + ' limit 10;'
        var tables = data;
        zabbixAjax(q1).done(function(data1) {
            if (Object.keys(data1).length === 0) {
                alert("NO DATA");
            }else{
                var q2 = 'select distinct table_name from information_schema.columns where column_name in (select distinct column_name from information_schema.columns where table_name = "' + d + '") and column_name in (select distinct column_name from information_schema.columns where column_key="pri") and table_name != "' + d + '" order by table_name asc;'
                //var q2 = 'select distinct table_name from information_schema.columns where and table_name = "' + d + '" and column_key="pri" and table_name = "' + d + '" order by column_name asc;'
                //alert(q2);
                //alert(d);
                zabbixAjax(q2).done(function(data2) {
                    var w = JSON.stringify(data2);
                    if (Object.keys(data2).length === 0) {
                        columnsButtons(tables, data1, data2, d, "columns");
                    }else{
                        columnsButtons(tables, data1, data2, d, "columns");
                    }
                }).fail(function(XMLHttpRequest, textStatus, errorThrown) {
                   alert("error");
                })
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


function zabbixAjax(query){
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
     //alert(buf);
};

function columnsButtons(tables, data1, data2, para1, para2){
     var buf=' <div name="bt" class="FirstButtons"> <h3>' + para1 + '<h3>';
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

     var keys = Object.keys(data1[0]);
     //buf = buf + "<div style='color:blue; float:right position:absolute; top:0px; right:100px'>";
     buf = buf+ "<table border=1 style='color:blue; position:absolute; top:150px; left:450px; font-size: smale;'>";

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
     for (var i = 0; i < data1.length; i++) {
         buf=buf + "<tr>";
         var keys = Object.keys(data1[i]);
         for (var j = 0; j < keys.length; j++) {
             buf=buf + '<td>' + data1[i] [keys[j]] + '</td>';
         }
     }
     buf=buf + "</tr>"
     buf=buf + "</table>"
     //buf=buf + "</div>"
    
     //var d2 = intersection(data1, data2)     
 
     buf=buf+' <div name="bt" class="SecondButtons"> <h3>' + 'joint' + '<h3>';
     //var buf=' <nav';
     for (var i = 0; i < data2.length; i++) {
         //buf=buf + '<form name="sbt' + i + '"> <p>';
         var keys = Object.keys(data2[i]);
         for (var j = 0; j < keys.length; j++) {
             var d = data2[i] [keys[j]];
             buf = buf + '<form name="bt' + i + '" style="margin: 0px;"> <p>' + '<button type="button" id="manyButtons-id' + i + '" name="manyButtons" value="' + d + '" onclick="columnsQuery(' + i + ')">' + d + '</button> </p> </form>';
         }
         //buf=buf + '</p> </form>';
     }

     buf=buf + '</div>';
     buf=buf + '<style> div.SecondButtons { color:red; float:left; position:absolute; top:90px; left:220px; } </style>'

     $("#id-buttons").html(buf);
}

function intersection(arr1, arr2) {
         
         var result = [];
         for (var i = 0, len = arr1.length; i < len; i++) {
             var keys = Object.keys(arr1[i]);
             for (var j = 0; j < keys.length; j++) {
                 var a = arr1[i] [keys[j]];
                 if (arr2.includes(a)) {
                     result.push(arr1[i]);
                 }
             }
         }
         return result;
}

