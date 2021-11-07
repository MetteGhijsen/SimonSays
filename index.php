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

<div class="score">
    <div class="scoreplayer">
        <h1>SCORE</h1>
        <p id="winsplayer">1</p>
    </div>

    <div class="buttonStartArea">
        <input onclick="startRound()" type="submit" id="buttonStart" class="buttonStart" value="START">
    </div>

    <div class="container">
        <div class="grid-container">
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
</div>
</body>
<script src="script.js"></script>
</html>
