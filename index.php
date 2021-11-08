<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="style.css" rel="stylesheet">
    <title>Mette's Simon Says</title>
</head>
<body>

<section id="startScreen">
    <div class="container-startScreen">
        <img src="img/simonsayslogo.png" alt="simonsayslogo">
        <div class="buttonStartArea">
            <input onclick="startRound()" type="submit" id="buttonStart" class="buttonStart" value="START">
        </div>
    </div>
</section>

<section id="playScreen" style="display: none">
    <div class="container">
        <div class="grid-container">
                <div class="areaScore">
                    <p id="winsplayer" class="winsplayer">SCORE: 1</p>
                    <p id="highscore" class="highscore">HIGHSCORE: 1</p>
                </div>
            <div class="areaRed">
                <input onclick="Choice(0)" type="submit" id="buttonRed" class="buttonRed" value="">
            </div>
            <div class="areaYellow">
                <input onclick="Choice(1)" type="submit" id="buttonYellow" class="buttonYellow" value="">
            </div>
            <div class="areaGreen">
                <input onclick="Choice(2)" type="submit" id="buttonGreen" class="buttonGreen" value="">
            </div>
            <div class="areaBlue">
                <input onclick="Choice(3)" type="submit" id="buttonBlue" class="buttonBlue" value="">
            </div>
        </div>
    </div>
</section>

<section id="endScreen" style="display: none;">
    <div class="alles">
        <div class="textboxenknop">
            <input type="text" id="textbox" class="textbox"><br>
            <input onclick="AddScore()" type="submit" id="button" class="" value="Add your score to the list!">
        </div>
        <br>
        <div class="todolistje">
            <ul id="scoreList" class="todolist">
            </ul>
        </div>
    </div>
</section>

</body>
<script src="script.js"></script>
</html>
