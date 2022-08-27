# Simon Says

## Project description
This is the fifth project I've made in JavaScript. I made this when I was still learning the basics. I really wanted to challenge myself. Because I had already made Simon Says in C and C#, I thought this would be a very interesting assignment. 

## Installation
You can "install" this web page by downloading it and running it on a live server. You could use an external application such as XAMPP for this purpose. IDEs like Visual Studio Code have this feature built in.

When using XAMPP it is important to put the project in the htdocs folder. Then you can click on the Apache module. When you go to your browser and type in localhost/project name, it should open.

In case you have Visual Studio Code installed, you can open the project in there. Clicking on the 'Go Live' button in the status bar will open a live server where you should be able to see the project.

## Usage
If you go to my [school-website](https://i481695.hera.fhict.nl/projects/development%20projects/webpagina's/SimonSays/index.php), you can use the project without installing it.

First, you are shown a sequence of colors. It starts with just one color. When you mimic this sequence by clicking on the large colored buttons, this sequence will get longer and longer. The idea is to memorize as long a sequence of colors as possible. 

Your score is shown at the top left. That is how many colors you have already memorized so far. The high-score shown at the top right is your best score from the session you're currently in. 


## Architecture
The JavaScript file consists of a function that generates a random series of numbers and puts them into an array. Since I have 4 colors, my function generates an array of numbers between 0 and 4. The length of my array is the number of levels there are at that time. So at level 1, the array also consists of only 1 number. After each round, a new number is generated for this array. The maximum number of levels my game can have is 100. 

There is also a function that displays the array by adjusting the opacity of the colored tiles. A tile should turn on for a certain time, and turn off after a certain time. The time between each tile flashing is equal to the difficulty level. After each round this time becomes shorter, and the level becomes more difficult. This function has as parameter the color of the tile you want to flash. 

There is also a function that observes the user's input. This is done by storing the user's input in an array. During play, this array is continuously compared to the array generated at the beginning of each round. When these arrays match, the user advances to the next level. If these arrays do not match, a function follows to indicate to the user that the game is over.
