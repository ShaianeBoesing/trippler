# trippler

Build do docker: <br>
`docker build -t shaianeboesing/trippler .`

Levantar aplicação: <br>
`docker-compose up`

Acessar bash: <br>
`docker exec -it trippler-app-1  bash`

Rodar ddl e seed <br>
`node database/migrate.js ./database/scripts/seed.sql`
