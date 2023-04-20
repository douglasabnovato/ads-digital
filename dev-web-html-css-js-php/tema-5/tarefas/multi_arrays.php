<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php arrays</title>
</head>

<body>
    <h1>php arrays</h1>

    <?php

    echo "<p> --- Frutas : vermelhas, cítricas</p>";

    $frutas = array(
        "vermelhas" => array(
            "melancia",
            "cereja",
            "framboesa",
            "morango"
        ),
        "citricas" => array(
            "laranja",
            "limao",
            "abacaxi",
            "mexerica"
        ),
    );

    foreach ($frutas as $fruta) {
        echo $fruta;
        echo " - \n";
    }

    echo "<p> --- </p>";

    ?>
</body>

</html>