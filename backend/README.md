## Как развернуть контейнер:
### Создайте Docker-образ: Выполните следующую команду в терминале из директории backend:
```
docker build -t medbro-backend .
```

### Запустите контейнер:
```
docker run -d -p 8000:8000 medbro-backend
```
