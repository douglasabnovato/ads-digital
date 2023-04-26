# código 1
nick = "Douglas"

if(nick == "Douglas"):
    print('você é incrível.')
elif (nick != "Douglas"):
    print('você está progredindo.')

# código 2
for item in range(2, 9, 3):
    print(item)

# código 3
apelido = input("Entre com seu nome: \n")
for letra in apelido:
    print(letra)

# código 4
nomes = ['Laura', 'Lis', 'Guilherme', 'Enzo', 'Arthur']
for nome in nomes:
    print(nome)

# código 5
palavra = input('Entre com uma palavra: \n ')
while palavra != 'sair':
    palavra = input('Digite sair para encerrar o laço: \n')
print('Você digitou sair e agora está fora do laço')

# código 6
while True:
    palavra = input('Entre com uma palavra: \n')
    if palavra == 'sair':
        break
print('Você digitou sair e agora está fora do laço')

# código 7
while True:
    print('Você está no primeiro laço.')
    opcao1 = input('Deseja sair dele? Digite SIM para isso. \n')
    if opcao1 == 'SIM':
        break  # este break é do primeiro laço
    else:
        while True:
            print('Você está no segundo laço.')
            opcao2 = input('Deseja sair dele? Digite SIM para isso. \n')
            if opcao2 == 'SIM':
                break  # este break é do segundo laço
        print('Você saiu do segundo laço.')

print('Você saiu do primeiro laço')

# código 8
for num in range(1, 11):
    if num == 5:
        continue
    else:
        print(num)
print('Laço encerrado')

# código 9
for num in range(1, 11):
    if num % 2 == 0:
        pass
    else:
        print(num)
print('Laço encerrado')

# código 10
s = 0
for i in range(5):
    s += 3 * i
print(s)

# código 11
s = 0
a = 1
while s < 5:
  s = 3 * a
  a += 1
  print(s)

# codigo 12
escolha = input("Escolha uma opção de função: 1 ou 2\n")
if escolha == "1":
    def func1(x):
        return x + 1
    s = func1(10)

else:
    def func2(x):
        return x + 2
    s = func2(10)

print(s)

# codigo 13
def taximetro(distancia, multiplicador=1):
    largada = 3
    km_rodado = 2
    valor = (largada + distancia *
    km_rodado) * multiplicador
    return valor

pagamento = taximetro(3.5)
print(pagamento)

# codigo 14
def func1(x):
    x = 10
    print(f'Função func1 - x = {x}')


def func2(x):
    x = 20
    print(f'Função func2 - x = {x}')


x = 0
func1(x)
func2(x)
print(f'Programa principal - x = {x}')

# codigo 15
def taximetro(distancia):
    def calculaMult():
        if distancia < 5:
            return 1.2
        else:
            return 1

    multiplicador = calculaMult()
    largada = 3
    km_rodado = 2
    valor = (largada + distancia * km_rodado) * multiplicador
    return valor


dist = eval(input("Entre com a distancia a ser percorrida em km: \n"))
pagamento = taximetro(dist)
print(f'O valor a pagar é R$ {pagamento}')