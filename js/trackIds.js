//track ID 목록
// const trackIdList = ['7152515445403531586', '6141657146100435130', '4917123126974236283', '4587589955779840066'];

const trackIdDbList = [
    { ID: '4587589955779840066', NAME: '기획테스트 이것저것' },
    { ID: '4917123126974236283', NAME: '이벤트 커스텀 테스트 픽셀' },
    { ID: '6141657146100435130', NAME: '부메랑M2 Catalog 0' },
    { ID: '7152515445403531586', NAME: '알림톡 테스트' }
  ]



  window.onload = function() {
    var arr = trackIdDbList;
    
    let parent = document.querySelector('#trackIds');
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    const tr = document.createElement('tr');
    const body_tr = document.createElement('tr');
    const head_id = document.createElement('th');
    const head_name = document.createElement('th');
    const body_id = document.createElement('td');
    const body_name = document.createElement('td');
  
    table.classList.add('table');
    thead.classList.add('head');
    head_id.classList.add('head_id');
    head_name.classList.add('head_name');
    body_id.classList.add('body_id');
    body_name.classList.add('body_name');
    tbody.classList.add('tbody');
    tbody.setAttribute("id", "trackBody");
  
    parent.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(tr);
    tr.appendChild(head_id);
    tr.appendChild(head_name);
  
    head_id.append('ID');
    head_name.append('Name');
  
    table.appendChild(tbody);
    console.log(arr.length);
  
    for (var i = 0; i < arr.length; i++) {
        document.querySelector("#trackBody").append(body_tr);
        const table = document.getElementById('trackBody');
        const new_row = table.insertRow();
  
        let temp_html = ``;
  
        temp_html = '<td>' + arr[i].ID + '</td>';
        temp_html += '<td>' + arr[i].NAME + '</td>';
        new_row.insertAdjacentHTML('afterbegin', temp_html);
    }
  }

function trackIdList() {
  var arr = trackIdDbList;
  const div = document.createElement('div');
  const a = document.createElement('a');

  document.write("<table><thead>");
  document.write("<tr>");
  document.write("<th>이름</th>");
  document.write("<th>ID</th>");
  document.write("</tr></thead><tbody>");
  for (var i = 0; i < arr.length; i++) {
      document.write("<tr>");
      document.write("<td>" + arr[i].ID + "</td>");
      document.write("<td>" + arr[i].NAME + "</td>");
      document.write("</tr>");
  }
  document.write("</tbody></table>");

  div.append
  div.setAttribute("id", "trackBody")

}
