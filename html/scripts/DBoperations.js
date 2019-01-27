function querycourseinfo()
{
var sub = document.getElementById("textfield1").value;
var num = document.getElementById("textfield2").value;
  database.ref().orderByChild('Subject').equalTo(sub).on('child_added',function(snapshot) {
  var courses = snapshot.val();
  console.log(courses);
  if(courses.Catalog == num)
  {
      var course = courses;
      console.log(course);
      var result = "";
      if(document.getElementById("cb1").checked){result += "[Career]: "+course.Career+" \n ";}
      if(document.getElementById("cb2").checked){result += "[Catalog]: "+ course.Catalog+" \n ";}
      if(document.getElementById("cb3").checked){result += "[Class Units]: "+course["Class Units"]+" \n ";}
      if(document.getElementById("cb4").checked){result += "[Compn code]: "+course["Component Code"]+" \n ";}
      if(document.getElementById("cb5").checked){result += "[Compn Descr]: "+course["Component Descr"]+" \n ";}
      if(document.getElementById("cb6").checked){result += "[ID]: "+course["Course ID"]+" \n ";}
      if(document.getElementById("cb7").checked){result += "[Eq course]: "+course["Equivalent Courses"]+" \n ";}
      if(document.getElementById("cb8").checked){result += "[Long Title]: "+course["Long Title"]+" \n ";}
      if(document.getElementById("cb9").checked){result += "[Prereqs]: "+course["Pre Requisite Description"]+" \n ";}
      if(document.getElementById("cb10").checked){result += "[Subject]: "+course.Subject;}
  
    document.getElementById("coursedetail").innerHTML = result;
  }

});
}



