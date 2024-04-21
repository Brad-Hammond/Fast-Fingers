# Fast Fingers

## My Portfolio 2 Project

### By Bradley Hammond

### [View Live Project Here](https://brad-hammond.github.io/Fast-Fingers/)

![Website Designs](assets/readmeimages/deviceframesView.jpg)

### About Fast Fingers

Fast Fingers is an online typing speed tester designed to help users assess and improve their typing speed and accuracy. Whether you're a seasoned typist looking to refine your skills or a beginner aiming to boost your productivity, Fast Fingers provides an intuitive platform for honing your typing abilities.

## Contents

## Project Goals and User Stories

### Project Goals

- The goal of this website is to create a fun and effective way for users to test their typing speed.

- It has been designed for people who want to keep coming back to improve their score and compete to get the highest score.

### User Stories

#### First Time User

| Story No. | Story                                                                                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1         | As a first time user , <br> I want to be able to know how to play the game <br> so that I can enjoy the game. <br><br>I know I am done when there are clear instructions shown to the user.            |
| 2         | As a first time user, <br> I want to be able to see my CPM and WPM <br> so I can see how fast I am typing <br><br>I know i am done when I can see my CPM and WPM scores.                               |
| 3         | As a first time user, <br> I want to be able to see how long I have been typing for <br> so that I can see if my time is good or bad <br><br>I know I am done when I can see the timer for my session. |

#### Returning Users

| Story No. | Story                                                                                                                                                                                                       |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | As a returning user, <br> I want to refine my typing skills <br> so that I can improve my scores. <br><br>I know I am done when my typing speed has increased.                                              |
| 2         | As a returning user , <br> I want to have new and different sentences to type <br> so that I can keep being challenged.<br><br>I know I am done when their are new sentences and paragraphs for me to type. |

#### All Users

| Story No. | Story                                                                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1         | As a user , <br> I want to be able to try again if I made a mistake<br> so that I can restart and try to improve. <br><br>I know I am done when I have restarted the game                                                |
| 2         | As a user , <br> I want to be able to view my scores after completing the quote<br> so that I can see if I have improved. <br><br>I know I am done when the scores are shown after completion.                           |
| 3         | As a user , <br> I want to be able to see what if I have made any mistakes while typing<br> so that I can go back and correct if need be.<br><br>I know I am done when I can see if the quotes letters are red or green. |

## Design

### Wireframes

The below images are mock up wireframes that I made before starting this project, they helped me in designing my webpage and stayed relatively true to design.

### Desktop

#### Homepage / Landing Page

The below is my mockup wireframe of the home/landing page on desktop, this stayed true to design and was very helpful when styling and designing this webpage.

![Desktop Homepage](assets/readmeimages/landingPage.png)

#### Typing Test Page

The below is my mockup wireframe of the typying test page for desktop, this stayed close to design.<br>However in the end I opted for the count down timer to be at the top of the screen as this was better user experience due to it being easier for the user to see when playing.

![Desktop Typing-Test Page](assets/readmeimages/TypingTest.png)

### Mobile

#### Homepage / Landing Page

The below is my mockup wireframe of the home/landing page on mobile, this stayed true to design and was very helpful when styling and designing this webpage.

![Mobile Homepage](assets/readmeimages/landingPageMobile.png)

#### Typing Test Page

The below is my mockup wireframe of the typying test page for mobile, this also stayed similar to the final product.<br>However, similar to the desktop, the count down timer was moved to the top for better user experience.

![Mobile Typing-Test Page](assets/readmeimages/TypingTestMobile.png)

## Features

### Index / Landing Page

#### Play / How to play Button

The play button lets the user begin by clicking play!
The how to play button is a modal which once clicked, displays the instructions on how to play the game.

![Landing Page](assets/readmeimages/landingPageIButtons.png)
![How to play Modal](assets/readmeimages/howToPlayModal.png)

### Typing Test Page

- There is a timer at the top of the screen which starts once the first character is typed, this timer goes on until the quote is correctly typed.
- When the user gets a letter correct, it is coloured in green - when it is incorrect, it is coloured in red.
- There are mistake, CPM, and WPM counters along the bottom of the white area which accuratley counts each score.
- There is a try again button which refreshes the text-area, all counters and brings forward a new quote.

![Typing Test Page](assets/readmeimages/typingTestPage.png)

There is also a results modal which appears once the quote is correctly typed out which displays the scores and time for the user.

![Results Modal](assets/readmeimages/resultsModal.png)

## Future Features

- In the future, I would like to store users scores and have a leaderboard feature which they could look back at and set new high scores.
- In the future, I would add different gamemodes such as easy mode or hard mode.
- In the future, I would add the option to chose the backgrounds when on the typing test page.

## Languages Used

- [HTML5](https://en.wikipedia.org/wiki/HTML5)

- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

## Validator Testing

### HTML

No errors were returned when passing through the official W3C validator

- https://validator.w3.org/nu/?doc=https%3A%2F%2Fbrad-hammond.github.io%2FFast-Fingers%2F

### CSS

No errors were found when passing through the official Jigsaw validator

- https://jigsaw.w3.org/css-validator/validator

### Javascript

No errors were found when passing through the official Jshint validator - this is for both JS files

- Please see below screen shot of the results:

![JShint Validator Results](assets/readmeimages/Jshint-Validator.png)

### User Stories Testing

#### First Time User

| Story No. | Result    | Story/ Evidence                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1         | Test Pass | As a first time user , <br> I want to be able to know how to play the game <br> so that I can enjoy the game. <br><br>I know I am done when there are clear instructions shown to the user. <br><br>Evidence:<br>The index page has clear how to play button which allows the user to press and see the instructions on how to play the game.<br> ![Index Landing Page](assets/readmeimages/landingPageIButtons.png)<br>![How to play Modal](assets/readmeimages/howToPlayModal.png) |
