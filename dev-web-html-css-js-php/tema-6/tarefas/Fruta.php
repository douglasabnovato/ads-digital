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
        <h1>Programação Orientada a Objetos</h1>
    </div>
    <?php

PDO {
    public __construct ( string $dsn [, string $username [, string $passwd [, array $options ]]] )
    public beginTransaction ( void ) : bool
    public commit ( void ) : bool
    public errorCode ( void ) : string
    public errorInfo ( void ) : array
    public exec ( string $statement ) : int
    public getAttribute ( int $attribute ) : mixed
    public static getAvailableDrivers ( void ) : array
    public inTransaction ( void ) : bool
    public lastInsertId ([ string $name = NULL ] ) : string
    public prepare ( string $statement [, array $driver_options = array() ] ) : PDOStatement
    public query ( string $statement ) : PDOStatement
    public quote ( string $string [, int $parameter_type = PDO::PARAM_STR ] ) : string
    public rollBack ( void ) : bool
    public setAttribute ( int $attribute , mixed $value ) : bool
}

PDOStatement implements Traversable {
    /* Propriedades */
    readonly string $queryString;

    /* Métodos */
    public bindColumn ( mixed $column , mixed &$param [, int $type [, int $maxlen [, mixed $driverdata ]]] ) : bool
    public bindParam ( mixed $parameter , mixed &$variable [, int $data_type = PDO::PARAM_STR [, int $length [, mixed $driver_options ]]] ) : bool
    public bindValue ( mixed $parameter , mixed $value [, int $data_type = PDO::PARAM_STR ] ) : bool
    public closeCursor ( void ) : bool
    public columnCount ( void ) : int
    public debugDumpParams ( void ) : void
    public errorCode ( void ) : string
    public errorInfo ( void ) : array
    public execute ([ array $input_parameters = NULL ] ) : bool
    public fetch ([ int $fetch_style [, int $cursor_orientation = PDO::FETCH_ORI_NEXT [, int       $cursor_offset = 0 ]]] ) : mixed
    public fetchAll ([ int $fetch_style [, mixed $fetch_argument [, array $ctor_args = array() ]]] ) : array
    public fetchColumn ([ int $column_number = 0 ] ) : mixed
    public fetchObject ([ string $class_name = "stdClass" [, array $ctor_args ]] ) : mixed
    public getAttribute ( int $attribute ) : mixed
    public getColumnMeta ( int $column ) : array
    public nextRowset ( void ) : bool
    public rowCount ( void ) : int
    public setAttribute ( int $attribute , mixed $value ) : bool
    public setFetchMode ( int $mode ) : bool
}

/*a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD*/
$qtdeLinhasAfetadas = $dsn->exec("Delete From Cliente Where codigo_cliente = 1");
echo "Quantidade de linhas afetadas: " . $qtdeLinhasAfetadas;

$instrucaoSQL = "Select nome, cpf, telefone From Cliente";
//a variável $dsn, abaixo, corresponde à instação da classe PDO, inicializada na conexão com o BD
$resultSet = $dsn->query($sql);
while ($row = $resultSet->fetch()) {
  echo $row['nome'] . "\t";
  echo $row['cpf'] . "\t";
  echo $row['telefone'] . "\n";
}

//O Ataque SQL injection

//Realizando uma consulta no BD através do login e senha recebidos por POST
$login = $_POST['login'];
$pswd = $_POST['pswd'];
$instrucaoSQL = "Select * From Usuario Where login = '$login' And password = '$pswd'";
$result = mysql_query( $instrucaoSQL ) or die(' Ocorreu um erro na execução da instrução: ' . $instrucaoSQL . ' ' .
mysql_error() );

//Métodos Prepare e Execute

    class Fruta
    {
        //Propriedades ou atributos da Classe
        var $nome;
        var $tipo;
        //Construtor da Classe: Essa função é executada todas as vezes em que uma instância da classe é criada.
        //Como abaixo, essa função pode ser vazia. Ou seja, não realiza nenhuma ação.
        public function __construct()
        {
            $this->nome = "douglas";
            $this->tipo = "dev";
        }

        public function setNome($nome)
        {
            $this->nome = $nome;
        }

        public function getNome()
        {
            return $this->nome;
        }

        public function setTipo($tipo)
        {
            $this->tipo = $tipo;
        }

        public function getTipo()
        {
            return $this->tipo;
        }
    }
    // instanciando um objeto da classe Fruta
    $fruta1 = new Fruta();

    // utilizando o objeto criado para chamar o método “setNome”
    $fruta1->setNome("morango");

    // utilizando o objeto criado para chamar o método “setTipo”
    $fruta1->setTipo("vermelha");

    // utilizando o comando “echo” para imprimir o resultado da chamada ao método “getNome” 
    echo $fruta1->getNome();

    // utilizando o comando “echo” para imprimir o resultado da chamada ao método “getTipo” 
    echo $fruta1->getTipo();

    ?>
</body>

</html>