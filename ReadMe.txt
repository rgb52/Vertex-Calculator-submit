Technologies Frameworks 
-	 Languages used include HTML, JavaScript, and jQuery. 
-	The app was originally going to use Python, Beautiful soup, as well as flaskScript, browserify, and cherrypy, but these had to be scrapped in order to finish it on time.
-	The entire thing was coded using Atom code editor and was stored in GitHub for the duration of its development.




Instructions 
Inputting equation: 
The equation you wish to solve can be implemented in one of two ways. Firstly you can manually type it by clicking on the bar above the calculator buttons. The other way you can implement it is by clicking on the calculator buttons representing the arguments you would like to input, and equation will appear on the bar. On a final note, if you wish to manually type in the equation it’s important to match the syntax of the calculator buttons. When you are finished typing in the equation simply click the equals sign and you will receive your answer.


More Complex Mathematics:
In order to use the specific features of the buttons on the bottom, like “Math.sqr( ” (which finds the square root), you must first click the button then type in the number you want evaluated, and then close the parenthesis.  Math.pow button (which is used to find a number’s nth power/root) is unique in that it asks you to input two numbers (that must be separated using the comma), the first one being the base number and the second being the power/root you’d rise it to. It’s important to keep in mind that this calculator uses the same syntax as JavaScript does when completing mathematics. 

History Storage:
There are two places where you can view past activity. The first is a space directly below the calculator where recent equations completed in a current session are dynamically stored. Second, to see a complete record of all activity, hit the, “calculation database” button to see a complete record. Once there you can return to the main page by clicking the back button.





Features completed 
Calculation Features:
-	Can perform basic 
o	Subtraction 
o	Addition 
o	Multiplication 
o	Division
-	 Can use parenthesis to prioritize what operations you want to happen first like so 
o	(5+8)/2
-	Can create both whole integers and decimal numbers
-	Can clear out an equation in progress (but does not clear history of completed equations)
-	Can write PI  
-	Can find both the nth power and the nth root of a function
-	Is able to find the sine, cosine, and tangent of a number 
-	Is able to return the natural logarithm of a number 
Storage Features: 
-	All storage is done locally 
-	Recent calculations done in one session are displayed on the same page as the calculator
-	Has separate page for complete calculation history
-	Includes time and date of when an equation was done

Incomplete features
-	Pressing enter in the input bar does not trigger calculator to calculate the equations. 
-If you type in the equation, while the answer is recorded the actual equation itself is not
-	The way the recent activity and complete activity storage space is organized is contradictory where the recent activity is listed as oldest on top. However, for the complete activity storage space sets of completed calculations are organized with newest on top.
-	The recently complete work is only saved if you click on the button to go to the permanent storage space.
-	No way for the calculator to recognize if it has been sent an invalid equation or one that contains letters.












Challenges Faced 
Editing Down the scope:
Originally the app was meant to use Python as well as JavaScript and HTML, and that it would use said Python code to help store calculations in a database. Unfortunately, due to the learning curve being steeper than I originally imagined, in order to complete the app in the time I had to scrap all the python code I had created up to that point, salvage what I could into a simpler app that used local storage. I think one of the biggest difficulties for me wasn’t so much figuring out how python worked but learning how exactly python interacted with html and JavaScript and learning how to make the three work together while simultaneously singling out the source of and fixing any bugs or errors I came across.

Trouble transferring data: 
I think the main crux of my problem with Python was the collecting of data and transferring said data between files. To be more specific, I had trouble where the document write, and document read functions of python seemed to be really inconsistent about when they would work or not. I tried to search message boards online for help, but more often than not, the answer I came across was something I already tried or didn’t seem applicable to my particular problem. Unfortunately, this problem persisted even when I switched over to primarily using JavaScript and HTML, where I tried to use the Export and Import functions but for some reason wouldn’t run properly when I tried to use them in browser. Eventually though I settled on simply using localStorage function to transfer data which worked out ok.


