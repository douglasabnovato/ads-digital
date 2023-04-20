<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>

<body>
    <div>
        <h1>Arrays no PHP</h1>
    </div>
    <?php
    echo "<p>arrays: numérico, associativo e misto</p>";

    //Declarando um array vazio
    $carros = array();

    //Primeira forma de declaração e atribuição de valores
    $carros = array("Fusca", "Monza", "Passat");

    //Segunda forma de declaração e atribuição de valores
    //Esta forma é semelhante à anterior, mas utilizando sintaxe similar a do Javascript
    $carros = ["New Beatle", "Monza", "Passat"];

    //Terceira forma de declaração e atribuição de valores
    $carros[0] = "Fusca 2020";
    $carros[1] = "Monza";
    $carros[2] = "Passat";

    //Quarta forma de declaração e atribuição de valores
    $carros[] = "Gol";
    $carros[] = "Monza";
    $carros[] = "Passat";

    echo "<p> - - - </p>";

    foreach ($carros as $carro) {
        echo $carro;
        echo " - \n";
    }

    echo "<p> - - - </p>";

    //Primeira forma
    $cars = array(
        'vw'        => "Fusca",
        'chevrolet' => "Monza",
        'fiat'      => "Tempra"
    );

    //Segunda forma
    $cars = [
        'vw'        => "Fusca",
        'chevrolet' => "Monza",
        'fiat'      => "Tempra"
    ];

    //Terceira forma
    $cars['vw']        = "Fusca";
    $cars['chevrolet'] = "Monza";
    $cars['fiat']      = "Tempra";

    echo "<p> - - - </p>";

    $cars = array(
        'vw'        => "Fusca VW",
        0           => "Passat VW",
        'chevrolet' => "Monza GM",
        1           => "Chevette GM",
        'fiat'      => "Tempra FIAT",
        2           => "Uno FIAT"
    );

    echo "<p> - - - </p>";

    foreach ($cars as $car) {
        echo $car;
        echo " / \n";
    }

    echo "<p> - - - </p>";
    
    ?>
</body>

</html>