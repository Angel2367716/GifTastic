HTML page
-create area for all buttons w/ buttons area id
-create a form that allows us to create new buttons 
-form tag with an id tag inside
-also use label for search input, then put in some text for user
-input box with type of text, add a search input id
-add another input with the submit type and a value of submit
-create a div with a searches id
-link js file 

JS file
-create buttons using jquery 
-jquery function {whatever we put inside the brakets will run as soon as you open a page}

- create a searchArray varialbe [dog, cat, etc]

-create a funciton to populateButtons 
*searchArray
*classToAdd
*areaToAddTo
*empty();
*for loop 8:38pm
	-variable
	-addclass
	-text
	-append

-create a document search function
*varibale type, this, .data
*varibale query URL
	-api page
	-type
	-api key
	-ajax
		-url:method:
	-console it
	-for loop
		-response.data.length
			variable searchDiv
			-variable ranting
			-raviable p = text, 'ranting', ranting
			-var animated  
			-variable still
			-variable image,attribute, source still, data-still,data-animated,addclass, searchDiv.append (on paragraph), searcDiv append searchdiv


Adding new buttons with text search box
*use a click funtion and select the add search id
	-varialbe newSearch, input,.eq(0), val
	-add to search array using the push function
	-populate the button
	-return it false so we can prevent the page from reloading


Animate images (place this on top of the addSearch, click function
*document on click funtion and use the search image class
	*use a state variable, remember that all images have a state of still 
	*if statment where you are telling the code that if the image is still then you are adding an animated attribute
	*else statment would be the oposite
	*22:36
	*now after you press on an image the image should animate but if you press it again the image will not stop instead it will go back to the beginning of the animation. You will need to fix this by giving the state varialbe an attribute of still 


14:51