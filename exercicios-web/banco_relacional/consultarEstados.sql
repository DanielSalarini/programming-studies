-- CONSULTAR TODA A TABELA
SELECT * FROM estados 

-- CONSULTAR SOMENTE SIGLA E NOME // TROCANDO O NOME POR NOME DO ESTADO
SELECT sigla, nome as 'Nome do Estado' from estados
-- FILTRAR A REGIAO
WHERE regiao = 'Sul'

SELECT nome, regiao, populacao from estados 
WHERE populacao >= 10
-- ORDENANDO POR QUANTIDADE DE POPULACAO // USANDO DESC INVERTE A ORDEM
ORDER BY populacao desc