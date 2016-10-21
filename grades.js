// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

// Use console.log to output the following criteria:
// What is the highest grade?
// How many of each grade?
// What is the lowest grade?



//Student Scores
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var a = 0
var b = 0
var c = 0
var d = 0
var f = 0

var sortedScores = scores.sort();
	console.log("The Grades Are:", sortedScores);

var highestGrade = sortedScores[sortedScores.length - 1];
	console.log("Highest Grade", highestGrade);

var lowestGrade = sortedScores[sortedScores.length - sortedScores.length];
	console.log("Lowest Grade", lowestGrade);

	for (var i = 0; i < scores.length; i++) {
		var score = scores[i]
		if ( score > 90) {
			a++
			} else if (score > 80){
			b++
			}else if (score > 70){
			c++
			}else if (score > 60){
			d++
			}else{
			f++
			}

		};
console.log("A's", a);
console.log("B's", b);
console.log("C's", c);
console.log("D's", d);
console.log("F's", f);
