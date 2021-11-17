// プランA

$(document).ready(function () {
  $("#contact").on("submit", function (e, context) {
    if (context === "execute") {
      // alert("a");
      return;
    }
    // alert("B");
    // alert(context);
    e.preventDefault();
    if (confirm("送信していいですか？")) {
      $("#contact").trigger("submit", ["execute"]);
      alert("送信完了しました！");
    } else {
      alert("送信をキャンセルしました。");
    }
  });
});

// プランB
// プランAとの相違点は $("#contact") => (".btn")に、
// .on("submit" ~~ => .on("click"に。

// $(document).ready(function () {
//   $(".btn").on("click", function (e, context) {
//     if (context === "execute") {
//       // alert("a");
//       return;
//     }
//     // alert("B");
//     // alert(context);
//     e.preventDefault();
//     if (confirm("送信していいですか？")) {
//       $(".btn").trigger("click", ["execute"]);
//       alert("送信完了しました！");
//     } else {
//       alert("送信をキャンセルしました。");
//     }
//   });
// });
