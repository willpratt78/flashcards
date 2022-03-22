$(document).ready(function() {
  let bool1=false
  $("#button1").click(function() {
    if(bool1 === false){
      $("#button1").text("Hide Definition");
      bool1 = true;
    } else {
      $("#button1").text("Show Definition");
      bool1 = false
    }
    $("#p1").toggle(".hide");
  });
});

$(document).ready(function() {
  let bool2 = false
  $("#button2").click(function() {
    if(bool2 === false){
      $("#button2").text("Hide Definition");
      bool2 = true;
    } else {
      $("#button2").text("Show Definition");
      bool2 = false
    }
    $("#p2").toggle(".hide");
  });
});

$(document).ready(function() {
  let bool3 = false
  $("#button3").click(function() {
    if(bool3 === false){
      $("#button3").text("Hide Definition");
      bool3 = true;
    } else {
      $("#button3").text("Show Definition");
      bool3 = false
    }
    $("#p3").toggle(".hide");
  });
});

$(document).ready(function() {
  $("#button4").click(function() {
    $("#p4").toggle(".hide");
  });
});

$(document).ready(function() {
  $("#button5").click(function() {
    $("#p5").toggle(".hide");
  });
});