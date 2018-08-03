$(document).ready(function() {
  $("#friday-toggle").click(function() {
    $('#friday').css("display", "block");
    $('#friday-toggle').css("background-color", "#27a2d0");
    $('#saturday').css("display", "none");
    $('#saturday-toggle').css("background-color", "#2cb5e8");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#2cb5e8");
  });

  $("#saturday-toggle").click(function() {
    $('#saturday').css("display", "block");
    $('#saturday-toggle').css("background-color", "#27a2d0");
    $('#sunday').css("display", "none");
    $('#sunday-toggle').css("background-color", "#2cb5e8");
    $('#friday').css("display", "none");
    $('#friday-toggle').css("background-color", "#2cb5e8");
  });

  $("#sunday-toggle").click(function() {
      $('#sunday').css("display", "block");
      $('#sunday-toggle').css("background-color", "#27a2d0");
      $('#friday').css("display", "none");
      $('#friday-toggle').css("background-color", "#2cb5e8");
      $('#saturday').css("display", "none");
      $('#saturday-toggle').css("background-color", "#2cb5e8");
  });
});
