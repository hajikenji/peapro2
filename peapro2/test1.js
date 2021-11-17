// DOMの読み込みが終わったらfunction()の中の処理を実行します。
function score_indicate() {
  let subject_points = [
    Number($("#national_language").val()),
    Number($("#english").val()),
    Number($("#mathematics").val()),
    Number($("#science").val()),
    Number($("#society").val()),
  ];
  return subject_points;
}
$(document).ready(function () {
  // 「国語、英語、数学、理科、社会」の点数（入力値）を取得して合計点と平均点を出すロジック
  function score_indicate2() {
    // 変数「subject_points」に「国語、英語、数学、理科、社会」の点数の配列を代入します。
    subject_points = score_indicate();
    // 変数「sum」に「国語、英語、数学、理科、社会」の点数を足します。
    let sum = subject_points[0];
    sum = sum + subject_points[1];
    sum = sum + subject_points[2];
    sum = sum + subject_points[3];
    sum = sum + subject_points[4];
    // 「合計点：」(id="sum_indicate")に変数「sum」(合計点)を出力させます。
    $("#sum_indicate").text(sum);
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
  }
});
// 「平均点：」に各教科の平均点を出力する
