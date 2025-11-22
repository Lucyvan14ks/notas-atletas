# notas-atletas
Este projeto tem como objetivo processar uma lista de atletas, analisar suas notas atribuídas por cinco jurados e calcular automaticamente a média válida, seguindo a regra da competição:

A média é calculada com base nas três notas centrais, após remover a maior e a menor nota.

A aplicação foi desenvolvida utilizando JavaScript, com foco na clareza, organização e uso dos métodos nativos da linguagem.

Métodos Utilizados

### .sort()
Utilizado para ordenar as notas em ordem crescente, tornando simples a remoção da maior e da menor nota.

### .slice()
Responsável por selecionar apenas as três notas centrais, excluindo automaticamente a menor e a maior.

### .forEach()
Usado para somar as notas válidas antes de calcular a média.

### for
Laço principal que percorre toda a lista de atletas, processando suas notas individualmente.