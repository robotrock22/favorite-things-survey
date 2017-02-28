$(function() {
  $("form").submit(function(event) {
    var answer1 = $("#q1").val();
    var answer2 = $("#q2").val();
    var answer3 = $("#q3").val();
    var answer4 = $("#q4").val();
    var answer5 = $("#q5").val();
    var allAnswers = [];

    if (answer1) {
      allAnswers.push(answer1);
    }
    if (answer2) {
      allAnswers.push(answer2);
    }
    if (answer3) {
      allAnswers.push(answer3);
    }
    if (answer4) {
      allAnswers.push(answer4);
    }
    if (answer5) {
      allAnswers.push(answer5);
    }

    var firstThree  = [];
    firstThree.push(allAnswers[0]);
    firstThree.push(allAnswers[1]);
    firstThree.push(allAnswers[2]);
    $("#output").empty()

    $("#output").append("<li>" + firstThree[0] + "</li>")
    $("#output").append("<li>" + firstThree[1] + "</li>")
    $("#output").append("<li>" + firstThree[2] + "</li>")
    $("form").slideUp();
    $("h3").slideDown();
    event.preventDefault();
  });
});
