
function toggle(id){
    
    var embedded = document.getElementById(id);
    if(embedded.style.display == 'none')
    {
        embedded.style.display = 'block';
    }
    else
    {
        embedded.style.display = 'none';
    }

}
function Step(){

}

var person_setting = {
    program     : "",
    scheme      : "",
    numCourse   : "",
    takeSummer  : "",
};
Step.step_num = 0;

function next(){
    if(Step.step_num==0){
        document.getElementById("quiz_title").innerHTML = "Step 1";
        document.getElementById("quiz_content_text").innerHTML = "Two more Steps to go.";
        var div_quiz = document.getElementById("quiz_content");
        
        //ask for program
        if(!document.getElementById("q1"))
        {
            var p_ask_for_major = document.createElement("p");
            p_ask_for_major.setAttribute("class","question");
            p_ask_for_major.id = "q1";
            p_ask_for_major.innerHTML = "What is your program?";
            div_quiz.appendChild(p_ask_for_major);
        }
        
        if(!document.getElementById("input_program"))
        {
            var input_program = document.createElement("input");
            input_program.setAttribute('placeholder',"ELEC");
            input_program.id = "input_program";
            input_program.setAttribute('id','input_program');
            div_quiz.appendChild(input_program);
        }


        // ask for scheme
        if(!document.getElementById("q2"))
        {
            var p_ask_for_scheme = document.createElement("p");
            p_ask_for_scheme.setAttribute("class","question");
            p_ask_for_scheme.id = "q2";
            p_ask_for_scheme.innerHTML = "What is your scheme?";
            div_quiz.appendChild(p_ask_for_scheme);
        }


        // full time check box
        if(!document.getElementById("label_fulltime"))
        {
            var radio_fulltime = document.createElement("input");
            radio_fulltime.type = "radio";
            radio_fulltime.value = "Full Time";
            radio_fulltime.className = "checkbox";
            radio_fulltime.id = "radio_fulltime";
            radio_fulltime.name = "fullPartTime";
            radio_fulltime.checked = "checked";
            var label_fulltime = document.createElement("label");
            label_fulltime.innerHTML = "Full Time";
            label_fulltime.id = "label_fulltime";
            label_fulltime.appendChild(radio_fulltime);
            div_quiz.appendChild(label_fulltime);
        }


        // part time check box
        if(!document.getElementById("label_parttime"))
        {
            var radio_parttime = document.createElement("input");
            radio_parttime.type = "radio";
            radio_parttime.value = "Part Time";
            radio_parttime.className = "checkbox";
            radio_parttime.id = "radio_parttime";
            radio_parttime.name = "fullPartTime";
            var label_parttime = document.createElement("label");
            label_parttime.innerHTML = "Part Time";
            label_parttime.id = "label_parttime";
            label_parttime.appendChild(radio_parttime);
            div_quiz.appendChild(label_parttime);
        }


        Step.step_num = Step.step_num +1;

    }else if(Step.step_num==1){
        //save data
        person_setting.program = document.getElementById("input_program").value;
        console.log(person_setting.program);
        if(person_setting.program ==="ELEC" || person_setting.program === 'COEN')
        {
            document.getElementById("error_message").innerHTML = "";
            console.log("correct format: "+person_setting.program);
            if(document.getElementById("radio_fulltime").checked)
                {person_setting.scheme = "Full Time";}
            else
                {person_setting.scheme = "Part Time";}


            // main function starts here
            document.getElementById("quiz_title").innerHTML = "Step 2"
            document.getElementById("quiz_content_text").innerHTML = "We are almost there!";
            var div_quiz = document.getElementById("quiz_content");

            //clean up
            var remove = document.getElementById("input_program");
            remove.parentNode.removeChild(remove);
            remove = document.getElementById("radio_fulltime");
            remove.parentNode.removeChild(remove);
            remove = document.getElementById("radio_parttime");
            remove.parentNode.removeChild(remove);
            remove = document.getElementById("label_fulltime");
            remove.parentNode.removeChild(remove);
            remove = document.getElementById("label_parttime");
            remove.parentNode.removeChild(remove);

            //take how many courses each semester
            var p_num_course_to_take = document.getElementById("q1");
            p_num_course_to_take.innerHTML = "How many courses would you like to take per semester?";

            var div_radios = document.createElement("div");
            div_radios.id = "div_radios";

            var form_radios = document.createElement("form");

            var radio_less_than_3 = document.createElement("input");
            radio_less_than_3.type = "radio";
            radio_less_than_3.className = "radiobutton";
            radio_less_than_3.id = "radio_less_than_3";
            radio_less_than_3.name = "choose_course_load";
            radio_less_than_3.checked = "checked";
            var label_less_than_3 = document.createElement("label");
            label_less_than_3.innerHTML = "less than 3";
            label_less_than_3.id = "label_less_than_3";
            label_less_than_3.appendChild(radio_less_than_3);

            var radio_4_or_5 = document.createElement("input");
            radio_4_or_5.type = "radio";
            radio_4_or_5.className = "radiobutton";
            radio_4_or_5.id = "radio_4_or_5";
            radio_4_or_5.name = "choose_course_load";
            var label_4_or_5 = document.createElement("label");
            label_4_or_5.innerHTML = "  4 or 5";
            label_4_or_5.id = "label_4_or_5";
            label_4_or_5.appendChild(radio_4_or_5);

            form_radios.appendChild(label_less_than_3);
            form_radios.appendChild(label_4_or_5);
            div_radios.appendChild(form_radios);
            // consider summer
            var p_consider_summer = document.getElementById("q2");
            p_consider_summer.innerHTML = "Would you consider taking class in the summer?";
            var cb_yes = document.createElement("input");
            cb_yes.type = "checkbox";
            cb_yes.className = "checkbox";
            cb_yes.id = "cb_yes";
            var label_yes = document.createElement("label");
            label_yes.innerHTML = "Yes";
            label_yes.id = "label_yes";
            label_yes.appendChild(cb_yes);

            div_quiz.appendChild(p_num_course_to_take);
            div_quiz.appendChild(div_radios);
            div_quiz.appendChild(p_consider_summer);
            div_quiz.appendChild(label_yes);

            Step.step_num = Step.step_num +1;
        }else
        {
            console.log("error: "+person_setting.program);
            document.getElementById("error_message").innerHTML = "*Please make sure to enter in a correct format.<br/> EX: ELEC";
            document.getElementById("input_program").style.borderColor = "red";
            Step.step_num = 0;
            next();
        }

    }else if(Step.step_num==2){

        //save data
        if(document.getElementById("radio_less_than_3").checked)
        {
            person_setting.numCourse = 3;
        }else
        {
            person_setting.numCourse = 5;
        }

        if(document.getElementById("cb_yes").checked)
        {
            person_setting.takeSummer = true;
        }
        else
        {
            person_setting.takeSummer = false;
        }

        document.getElementById("quiz_title").innerHTML = "Congratulations!"
        document.getElementById("quiz_content_text").innerHTML = "Press finish now and you will see your generated course sequence!";
        document.getElementById("next_btn").innerText = "Finish!";

        //clean up
        var remove = document.getElementById("div_radios");
        remove.parentNode.removeChild(remove);
        remove = document.getElementById("q1");
        remove.parentNode.removeChild(remove);
        remove = document.getElementById("q2");
        remove.parentNode.removeChild(remove);
        remove = document.getElementById("label_yes");
        remove.parentNode.removeChild(remove);

        Step.step_num = Step.step_num + 1;
    }else if(Step.step_num==3){
        var user = firebase.auth().currentUser;
        if(user != null)
        {
            writeUserData(user.uid,person_setting.program,person_setting.scheme,person_setting.numCourse,person_setting.takeSummer);
            Step.step_num = 0;
            window.location = "classbuilder.html";  
        }else
        {
            console.log("cannot find user");
        }

    }
    console.log(person_setting);
}

function writeUserData(userId, program, scheme, numCourse, takeSummer) {
    firebase.database().ref('users/' + userId).set({
        program: program,
        scheme: scheme,
        numCourse : numCourse,
        takeSummer :takeSummer
    });
  }

var myVar;

function myFunction() {
myVar = setTimeout(showPage, 1600);
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("main_content").style.display = "block";
}