//問題１　配列作成
let array = [2, 4, 7, 5, 4, 3, 8];
let result = array.filter( function (value, index, array) {
    // indexを比較し、重複データを排除
    return array.indexOf( value ) === index;
})
// 結果出力
console.log('result: '+ result);
//https://www.fenet.jp/dotnet/column/language/7232/

//問題２　うるう年の判定
function isLeapYear(year){
  if( (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
let year = 2020;
if (isLeapYear(year)) {
  console.log(year + '年はうるう年です');
} else {
  console.log(year + '年はうるう年ではありません');
}
let check = 2021;
if (isLeapYear(check)) {
  console.log(check + '年はうるう年です');
} else {
  console.log(check + '年はうるう年ではありません');
}
//https://techacademy.jp/magazine/27156