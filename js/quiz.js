var pos = 0, test, test_status, question, choice, choices, choiceA, choiceB, choiceC, correct=0, name = 0; 
//setting variables
		
//Place the questions array here
var questions=[
['What is 99 divided by 3?',30,33,36, "B"],
['What is 34 multiplied by 2?',36,68,66, "B"],
['What is 25% of 200?',100,80,50,"C"],
['What is one third of 900?',100,300,150, "B"],
['What is 5 multiplied by 25?',100,150,125, "C"],
['Divide 4/8 by 0.5.',0.25,2.25,0.5, "A"],
['Multiply 0.75 by 100. ',75,25,50, "A"],
['What is 40% of 200?',40,80,60, "B"],
['Take 39 away from 92.',43,53,63, "B"],
['What is 66x2?',122,132,120, "B"]
];

function _(x) 
{ 
	return document.getElementById(x);
}
//Setting underscore equal to document.getElementById (handy shortcut)
		
function percent()
{
    var perc = Math.round((correct/questions.length)*100);
    return perc;//gets percentage and returns to form
}

//Insert Javascript functions renderQuestion() & checkAnswer() here
function renderQuestion()

{
		test = _("test");
		if(pos >= questions.length)//If position is greater or equal to the number of questions
		{
			test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct ("+percent() + "%)</h2>";//Print # correct out of 20
			_("test_status").innerHTML +=" Thank you for completing the quiz";//Print "thank you...."
			pos = 0;
			correct = 0;
			return false;
		}
		
		var bar=document.getElementById("progressBar");//Progress bar value
		
		_("test_status").innerHTML = "Question"+(pos+1)+" of "+questions.length;
		
		bar.value = (pos+1);  //Progress bar increments as we go through questions, starts at 1 
		
		question = questions[pos][0];
		choiceA = questions[pos][1];
		choiceB = questions[pos][2];
		choiceC = questions[pos][3];
		test.innerHTML = "<h3>"+question+"</h3>";
		test.innerHTML+= "<input type='radio' name='choices' value='A' checked> "+choiceA+" <br>";//Radio button
		test.innerHTML += "<input type='radio' name='choices' value='B'> "+choiceB+"<br>";
		//Radio button
		test.innerHTML += "<input type='radio' name='choices' value='C'> "+choiceC+"<br><br>";
		//Radio button
		test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}


function checkAnswer()
{
	choices = document.getElementsByName("choices"); //Creates an array
	for(var i=0; i<choices.length; i++)//variable i=0, when i is less than the length of the choices, increment it by one
	{
		if(choices[i].checked) //if a choice is checked
		{
			choice = choices[i].value; //take the value of that choice and put it into choice
			
		}
	}
	if(choice == questions[pos][4])//If the value of choices is equal to position 4
	{
		alert('Correct!');//Alert correct
		correct++;//Increment your correct answers by one
	}
	else//or else
	{
		alert('Sorry wrong answer. The correct answer is ' + questions[pos][4]);
	}
	pos++; //Increment position by one ie go to the next question
	
	renderQuestion();//go to render question again
}


























//Call the question with an event handler
window.addEventListener("load", renderQuestion, false);