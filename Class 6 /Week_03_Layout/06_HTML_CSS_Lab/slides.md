![GeneralAssemb.ly](../../img/icons/FEWD_Logo.png)

#FEWD - More CSS

---

##Agenda

* Final Project
* Homework Questions
* Background Images
* Margin Auto
* Display
* Startup Matchmaker Lab

---

##Final Projects

--

###Description

* Design and build a real site!
* Topic is your choice
* Demonstrate the process to plan and implement the project
* Use HTML to correctly structure the DOM
* Style using CSS
* Create interactivity using JavaScript

--

###Timeline

* Milestone 1 | Oct. 19 | Project Proposal / Wireframes
* Milestone 2 | Nov. 02 | Draft of HTML / CSS (no JS)
* Milestone 3 | Nov. 09 | First draft of JS
* Milestone 4 | Nov. 16 | Updated Rough Draft
* Milestone 5 | Nov. 30 | Final Presentation

--

###Next Steps

* Start planning your idea.
* [Review the requirements](https://github.com/ga-students/FEWD-DC-17/blob/master/Final_Project/final_project_requirements.md)
* [Take a look at the grading rubric](https://github.com/ga-students/FEWD-DC-17/blob/master/Final_Project/rubric.md)

---

##Homework Review

What are your questions?

---

##Background Images

Add a background image by using the url() value to provide a filepath.

```
header {
  background: url(../images/background.jpg);
}
```

--

##Background Repeat

Background images naturally repeat horizontally and vertically to fill up all the space. You can control the repeat with the `background-repeat`.

* repeat-x
* repeat-y
* no-repeat

```
header {
  background: url(../images/background.jpg) no-repeat;
}
```

--

##Background Position/Focal Point

A background image default position is on the top left corner of the image. What if we want to change where the focus is? You can provide two coordinate values for the x and y values.

* For the y value: top | center | bottom | a number
* For the x value: left | center | right | a number

 ```
header {
  background: url(../images/background.jpg) no-repeat center center;
}
```
--

##Background Size

You can change the size of the background with the background size property.

* cover
* contain
* width and height values

 ```
header {
  background: url(../images/background.jpg) no-repeat center center;
  background-size: cover;
}
```
---

##Margin Auto - Centering

* Set the width of a block-level element. 
* Set the left and right margins to auto.
* Margin will be split evenly, centering the element.

```
.button{
	width: 15%;
	margin: 10px auto;
}
```
---

##Display

Every element has a default display. You can change the way an element behaves by changing its display.

* block
* inline
* inline-block
* none

---

![GeneralAssemb.ly](../../img/icons/exercise_icon_md.png)
##Startup Matchmaker

---

##Homework

* Finish the [Relaxr blog homework assignment](https://github.com/ga-students/FEWD-DC-17/tree/master/Week_03_Layout/Assignment). 

--

##Exit Survey - HTML and CSS Lab
Goodnight!

