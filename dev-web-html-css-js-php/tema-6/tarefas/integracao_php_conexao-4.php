<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cliente, PHP e DB</title>
</head>

<body>
    <div>
        <h1>Conexão com drive pgsql</h1>
    </div>
    <?php
    //Constantes para armazenamento das variáveis de conexão.
    define('HOST', '127.0.0.1');
    define('PORT', '5432');
    define('DBNAME', 'test');
    define('USER', 'user');
    define('PASSWORD', 'psswd');

    try {
        $dsn = new PDO("pgsql:host=" . HOST . ";port=" . PORT . ";dbname=" . DBNAME . ";user=" . USER . ";password=" . PASSWORD );
    } catch (PDOException $e) {
        echo 'A conexão falhou e retornou a seguinte mensagem de erro: ' . $e->getMessage();
    }

    $dsn = null;

    ?>
</body>

</html>