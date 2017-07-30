var foo = {};
foo.dir ="dir";
foo.file = [];
foo.file.push("file1", "file2", "file3");
foo.file.push("file4", "file5", "file6");
var JSONfoo = JSON.stringify(foo);
var JSONfoofile = foo.file;
document.write(JSONfoo);
//document.write("\n");
document.write(JSONfoofile);
console.log(JSONfoofile);

$.ajax(
{url: 'http://report.com/json/data.json',
//{url: 'json/data.json',
dataType: 'json',
data: {name: 'd'},
success: function(data){
var dataArray = data.dirs;
	
$.each(dataArray, function(i){
		//$(".nameData").append("<p>dir: " + dataArray[i].dir + "　file: " + dataArray[i].file + "</p>");
                $(".nameData").append("<p>dir: " + dataArray[i].dir + "</p>");
                //console.log(dataArray[i].dir);
});
	}
});
