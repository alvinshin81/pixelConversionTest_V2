//track ID 목록
// const trackIdList = ['7152515445403531586', '6141657146100435130', '4917123126974236283', '4587589955779840066'];

const trackIdDbList = [
    { ID: '4587589955779840066', NAME: '기획테스트 이것저것' },
    { ID: '4917123126974236283', NAME: '이벤트 커스텀 테스트 픽셀' },
    { ID: '6141657146100435130', NAME: '부메랑M2 Catalog 0' },
    { ID: '7152515445403531586', NAME: '알림톡 테스트' }
  ]

var arr = trackIdDbList;

window.onload = function() {
  document.write("<table><tread>");
  document.write("<tr>");
  document.write("<th>이름</th>");
  document.write("<th>ID</th>");
  document.write("</tr></tread><tbody>");
  for (var i = 0; i < arr.length; i++) {
      document.write("<tr>");
      document.write("<td>" + arr[i].ID + "</td>");
      document.write("<td>" + arr[i].NAME + "</td>");
      document.write("</tr>");
  }
  document.write("</tbody></table>");
}


// for (var i = 0; i < arr.length; i++) {
//   var trackId = arr[i].ID;
//   var trackName = arr[i].NAME;
//   console.log(arr[i].ID);
//   console.log(arr[i].NAME);
//   document.querySelector("#trackId").innerHTML = trackId;
//   document.querySelector("#trackName").innerHTML = trackName;
// };