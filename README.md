# trippler

Build do docker:
```docker build -t shaianeboesing/trippler . ```

levantar aplicação:
``docker-compose up``

acessar bash:
``docker exec -it trippler-app-1  bash``

rodar ddl e seed (necessário especificar o caminho. Exemplo: ./database/scripts/seed.sql)
``` node database/migrate.js <PATH DO .SQL FILE>```

