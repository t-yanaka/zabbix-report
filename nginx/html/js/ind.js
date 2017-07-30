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
          dataType: 'jsonp',
          jsonpCallback: 'test',
          //jsonp : 'parseResponse',
          success: function callback(data) {
                       // レスポンス情報を出力します。
                       responseDebug(data);
                   },
          error: function(XMLHttpRequest, textStatus, errorThrown) {
                      // エラー情報を出力します。
                      errorDebug(XMLHttpRequest, textStatus, errorThrown)
                 }
        });
    });
 
    /*
     * デバッグ情報（リクエスト）を出力します。
     */
     function requestDebug(url, requestParam) {
         $( '#request_url' ).html("Request URL : " + url);
         $( '#request_parameter' ).html("Request Parameter : " + requestParam.test);
     }
 
     /*
      * デバッグ情報（レスポンス）を出力します。
      */
      function responseDebug(data) {
          $( '#response_parameter' ).html("Respons Data : " + data.responsData);
      }
 
      /*
       * デバッグ情報（エラー）を出力します。
       */
       function errorDebug(XMLHttpRequest, textStatus, errorThrown) {
           $("#XMLHttpRequest").html("XMLHttpRequest : " + XMLHttpRequest.status);
           $("#textStatus").html("textStatus : " + textStatus);
           $("#errorThrown").html("errorThrown : " + errorThrown.message);
       }
 
    /*
     * デバッグ情報をクリアします。
     */
     function allClear() {
         $( '#request_url' ).empty();
         $( '#request_parameter' ).empty();
         $( '#response_parameter' ).empty();
         $( '#XMLHttpRequest' ).empty();
         $( '#textStatus' ).empty();
         $( '#errorThrown' ).empty();
     }
} );
