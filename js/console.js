// ****************************************************************
//  Cassandra Nicolak
//
//*****************************************************************

// Initialization
var printIndex = 0;
var arrayIndex = 0;
var inputString = "";

// list of statements to 'print' to the console
var prints = {
	
	'Cassandra.location()': '"Hamilton, ON"',
	'Cassandra.education(institution)': '"McMaster University"',
	'Cassandra.education(major)': '"Software Engineering"',
	//'Cassandra.education(expectedGraduation)': '"May 2021"',
	
	'Cassandra.interests()': '["Programming", "Game Development", "Digital Art", "Design", "Cats"]',
	'Cassandra.workExperience(recent)': '"ArcelorMittal Dofasco - Process Automation Analyst"',
	
	'Cassandra.resume()': '"CassandraNicolak_resume.pdf"',
	'Cassandra.skills(summary)': '["Programming", "Web Development", "Data Modelling", "Databases"]',
	'Cassandra.contact(email)': '"c_nicolak@hotmail.com"',
	'Cassandra.lastUpdated(date)': '"July 2018"',
}



// handles the blinking input sign '_'
var inputTxt = setInterval(function() {
    $(".inputTxt").toggleClass("blink");
}, 500); // speed of '_' blinks


// Sets the interval of the input _
var userInput = setInterval(function() {
	
	// concatenate input strings
    inputString += Object.keys(prints)[arrayIndex][printIndex];

	// displays the 'typing effect' of the input
    $(".inputTxt").text(inputString);
	
	// cycle through list
    if (printIndex >= Object.keys(prints)[arrayIndex].length - 1) {
	
		// this order allows the prints to appear after the previous input+output
		if (Object.keys(prints)[arrayIndex][printIndex] != "*") {
			// appends the input line
            $(".prints").append("<li>" + "> "+ inputString + "</li>");
        }	

		// appends the output line
        $(".prints").append("<li class='system'>" + prints[Object.keys(prints)[arrayIndex]] + "</li>");
  
		// clears the input line so that the last item in the list doesn't remain at the input
        $(".inputTxt").text("");  

		// reset variables
        inputString = "";
        printIndex = 0;
		
		// increment arrayIndex
        arrayIndex++;
		
		
    } 
	
	else {
		// increment printIndex	
        printIndex++;
    }
	
	
	// clear the interval once all list items are printed
    if (arrayIndex >= Object.keys(prints).length) {
        clearInterval(userInput);
    }

}, 50); // 'typing' speed
