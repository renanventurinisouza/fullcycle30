# Utiliza a imagem oficial do MySQL como base
FROM mysql:latest

# Definição de base e senha root MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=nodedb

# Exporta a porta 3306 para permitir conexões externas
EXPOSE 3306

# Copia scripts SQL personalizados para o container (opcional)
COPY createdatabase.sql /docker-entrypoint-initdb.d/

# Comando para iniciar o servidor MySQL
CMD ["mysqld"]