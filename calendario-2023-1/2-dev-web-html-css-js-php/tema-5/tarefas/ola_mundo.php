<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP</title>
</head>

<body>
  <h1>PHP e HTML</h1>
  <p>
    <?php
    echo "<p>Olá, mundo!</p>";

    $var1 = 2 + 2;

    echo "<p>O Resultado da soma é igual a: " . $var1 . ".</p>";

    $var2 = 10;
    $var3 = 20;

    if ($var2 > $var3) {
      echo "$var2 é maior que $var3";
    } else {
      echo "$var2 é menor que $var3";
    }

    echo "<p> --- </p>";

    $var4 = 10;
    $var5 = 10;

    if ($var4 > $var5) {
      echo "$var4 é maior que $var5";
    } elseif ($var4 < $var5) {
      echo "$var4é menor que $var5";
    } else {
      echo "$var4 e $var5 são iguais";
    }

    echo "<p> --- </p>";

    $var6 = 14;
    switch ($var6) {
      case 10:
        echo "var6 é igual a 10";
      case 20:
        echo "var6 é igual a 20";
        break;
      default:
        echo "var6 não é igual a 10 e nem a 20";
        break;
    }

    echo "<p> --- </p>";

    $l = 2;
    while ($l <= 20) {
      echo $l;
      $l += 2;
      echo "\n";
    }

    echo "<p> --- </p>";

    $i = 2;
    while ($i <= 20) :
      echo $i;
      $i += 2;
      echo "\n";
    endwhile;

    echo "<p> --- </p>";

    $j = 2;
    do {
      echo $j;
      $j += 2;
      echo "\n";
    } while ($j <= 20);

    echo "<p> --- </p>";

    for ($k = 1; $k <= 20; $k++) {
      echo $k;
      echo "\n";
    }

    echo "<p> --- </p>"; 

    $carros = array("Fusca", "Monza", "Passat");

    foreach ($carros as $carro) {
      echo $carro;
      echo "\n";
    }

    echo "<p> --- </p>";

    for ($m = 0; $m < count($carros); $m++) {
      echo $carros[$m];
      echo "\n";
    }
    ?>
  </p>
</body>

</html>