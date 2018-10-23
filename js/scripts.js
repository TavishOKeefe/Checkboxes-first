$(document).ready(function(){
  $("form#personality-test").submit(function(event){
    event.preventDefault();
    $("#personality-response").show();
    $("input:checkbox[name=personality]:checked").each(function(){
      var personalityCheck = $(this).val();
      $("#personality-response").append(personalityCheck + "<br>");
    });
    $('#personality-test').hide();
  });
});
