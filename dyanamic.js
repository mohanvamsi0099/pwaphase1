function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open('GET',file,true);
  // console.log(xhr);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4&& xhr.status=="200")
    {
      callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  profile1(data.career);
  education(data.education);
  skill(data.skills);
})
var parent=document.querySelector('.parent');
var child1=document.querySelector('.child1');
var child2=document.querySelector('.child2');

function profile(pro){

  var image=document.createElement('img');
  image.src=pro.img;
  child1.appendChild(image);
  parent.appendChild(child1);

  var name=document.createElement('h2');
  name.textContent=pro.name;
  child1.appendChild(name);
  parent.appendChild(child1);

  var hr=document.createElement('hr');
  child1.appendChild(hr);
  parent.appendChild(child1);

  var email=document.createElement('h3');
  email.textContent=pro.email;
  child1.appendChild(email);
  parent.appendChild(child1);
}
function profile1(rar) {

var rh=document.createElement("h1");
rh.textContent="resume"
child2.appendChild(rh);
parent.appendChild(child2);

var hr=document.createElement('hr');
child2.appendChild(hr);
parent.appendChild(child2);

 var info=document.createElement('h3');
  info.textContent=rar.info;
  child2.appendChild(info);
  parent.appendChild(child2);

  var rh1=document.createElement("h1");
  rh1.textContent="acadamic skills"
  child2.appendChild(rh1);
  parent.appendChild(child2);

  var hr1=document.createElement('hr');
  child2.appendChild(hr1);
  parent.appendChild(child2);

  var table=document.createElement('table');
  child2.appendChild(table);
  parent.appendChild(child2);

}
function education(edu){

var h2=document.createElement("h2");
h2.textContent="education details"
child2.appendChild(h2);
parent.appendChild(child2);

var hr1=document.createElement('hr');
child2.appendChild(hr1);
parent.appendChild(child2);

var table=document.createElement('table');
let aa="<tr><th>s.no</th><th>name</th><th>college</th><th>areas</th></tr>"
let row=' ';
for(i in edu){
  row+="<tr>"+"<td>"+edu[i].sno+"</td>"+
"<td>"+edu[i].name+"<td>"+
"<td>"+edu[i].college+"<td>"+
"<td>"+edu[i].area+"<td>"+
"</tr>";
}
table.innerHTML=aa+row;
child2.appendChild(table);
parent.appendChild(child2);
}

function skill(info){
var kk=document.createElement("h2");
kk.textContent="skills set";
child2.appendChild(kk);
parent.appendChild(child2);


var hr2=document.createElement('hr');
child2.appendChild(hr2);
parent.appendChild(child2);

var ul=document.createElement(ul);
child2.appendChild(ul);
for(i in info )
{
  var li=document.createElement("li");
  li.textContent=info[i].info;
  ul.append(li);
  child2.append(ul);
}



}
