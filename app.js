function start(){
   
   var txt =  $("#search").val();
   $(".page-title").text(txt);


} 


function add(){
  var caption = prompt("Enter your caption");
  var name = prompt("Enter your user name");
  var pic = prompt("Enter your photo URL");
  var avatar = prompt("enter your photo");

  var randomId = (new Date()).getTime().toString();

  var card = $("#mycard").clone();
  card.attr('id',randomId);
  var row = $(".row-cards")
  row.append(card)

$("#"+randomId+" .caption").text(caption)
$("#"+randomId+" .username").text(name)
$("#"+randomId+" .banner").attr("src",pic)
$("#"+randomId+" .avatar").css("background-image",'url('+avatar+')');


  
}