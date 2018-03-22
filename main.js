function loadJSON(file,callback)
 {
   var xhr=new XMLHttpRequest();
   xhr.overrideMimeType("appliation/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange=function() {
     if(xhr.readyState===4 && xhr.status=="200"){
     callback(xhr.responseText);
   }
 };
 xhr.send();
}
loadJSON("data.json", function(text)
{
  let data=JSON.parse(text);
  console.log(data);
career(data.career);
education(data.education);
skills(data.skills);
})

var right=document.querySelector(".content");
function career(car){
  console.log(car.info);
  var h2=document.createElement("h3");
  h2.textContent="Career Objective";
  right.appendChild(h2);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  right.appendChild(p);
}
function education(edu){
  var h3=document.createElement("h3");
  h3.textContent="Education Qualifications";
  right.appendChild(h3);
  var hr=document.createElement("hr");
  right.appendChild(hr);
  var ul=document.createElement("ul");
  right.appendChild(ul);
  for(var i=edu.length-1;i>=0;i--){
    var li=document.createElement("li");
    li.textContent=edu[i].degree
    ul .appendChild(li);
    var p=document.createElement("p");
    p.textContent=edu[i].school;
    ul.appendChild(p);
    var ul1=document.createElement("ul");
    ul.appendChild(ul1);
    console.log(edu[i].data.length)
    for(var j=0;j<edu[i].data.length;j++){
      var li1=document.createElement("li");
      li1.textContent=edu[i].data[j];
      ul1.appendChild(li1);
    }

  }
}

function skills(ski){
  var h3=document.createElement("h3");
    h3.textContent=" Skills Known";
    right.appendChild(h3);
    // h3.textcontent="skills";
    var hr=document.createElement("hr");
      right.appendChild(hr);
      var table=document.createElement("table");
      table.border="1";
      right.appendChild(table);
      let row="";
      console.log(ski.length);
      for(var i=0; i<ski.length; i++){
         row+="<tr><td>"+ski[i].name+"</td><td>"+ski[i].info+"</td></tr>";
      }
      table.innerHTML=row;
      table.style.border="1";
}
// function skills(skill){
//   var h3=document.createElement("h3");
//   h3.textContent=" Skills Known";
//   right.appendChild(h3);
//   // h3.textcontent="skills";
//   var hr=document.createElement("hr");
//     right.appendChild(hr);
//     var table=document.createElement("table");
//     right.appendChild(table);
//     let row="";
//     console.log(skill.length);
//     for(var i=0; i<skill.length; i++){
//       row+="<tr><td>"+skill[i].name+"</td><td>"+skill[i].info+"</td></tr>";
// }
// table.innerHTML=row;
// }
