$("#player").on("click", () => {
  $("#org").fadeOut(600, () => {
    $("#player_signup").fadeIn(1000);
    // .css({
    //   flex: 1,
    // });
    $("#player").css({
      transform: "translateX(-100px)",
    });
  });

  //   $("button").css("visibility: initial");
});

$("button").on("click", () => {
  $("#org").fadeIn(600);
});

// function disable() {
//   $("*").prop("disabled", true);
// }

// function enable() {
//   $("*").prop("disabled", false);
// }
