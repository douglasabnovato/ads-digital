<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>php arrays</title>
</head>

<body>
    <h1>PHP arrays</h1>

    <div>
        <h2>Módulo 3 | Atividade 1 / 2: vetor multidimensional</h2>

        <ol>
            <li>Crie mais um array dentro do array $frutas, para armazenar outro tipo de fruta:<br>
                Frutas tropicais: goiaba, maracujá, banana e manga.
            </li>
            <li>Altere o código para que o array seja impresso na tela (campo CONSOLE do emulador).</li>
            <li>Execute novamente o código e compare o que será impresso no campo CONSOLE do emulador com o conteúdo do botão ”Mostrar solução” abaixo.</li>
        </ol>
        <p>
            Essas estruturas de dados são similares às vistas na disciplina de Matemática, na qual temos também as matrizes, que podem ser chamadas de vetores de vetores.
        </p>
        <p>
            Trazendo esse conceito ao contexto em questão, temos um array de arrays, ou um array dentro de outro array.
        </p>
    </div>

    <?php

    echo "<p> --- Frutas : vermelhas e cítricas + tropicais</p>";

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
        "tropicais" => array(
            "goiaba",
            "maracuja",
            "banana",
            "manga"
        ),
    );

    foreach ($frutas as $type) {
        foreach ($type as $fruta => $value) {
            echo "{$fruta} => {$value}<br>";
        }
        echo "<br>";
    }

    echo "<p> --- </p>";

    ?>

    <div>
        <h2>Módulo 3 | Conceito 2 / 2: Funções em PHP</h2>

        <p>
            Funções, em linguagens de programação, são pedaços de código, encapsulados, que podem ser chamados em qualquer outro trecho do programa ou do código.
        </p>
    </div>

    <?php

    echo "<p> --- Funções </p>";

    $numero1 = 14;
    $numero2 = 12;

    imprimir_resultado($numero1, $numero2);

    function soma($num1, $num2)
    {
        return $num1 + $num2;
    }

    function imprimir_resultado($num1, $num2)
    {
        echo "O resultado da operação é igual a: " . soma($num1, $num2);
    }

    echo "<p> --- </p>";

    ?>
</body>

</html>