$(document).ready(function() {
  $("button#lightTheme").click(function() {
      $("body").removeClass();
      $("body").addClass("lightTheme");
      });

  $("button#darkTheme").click(function() {
      $("body").removeClass();
      $("body").addClass("darkTheme");
    });
  });
