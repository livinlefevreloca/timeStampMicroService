// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
$(function(){
var pathName =  window.location.pathname;
alert(pathName);
$.get(pathName,function(data){
  alert("work")
  $("#rtrn-val").text(JSON.stringify(data));
});
});