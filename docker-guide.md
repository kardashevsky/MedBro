# Шпаргалка по основным командам Docker

## 1. Управление контейнерами

- **Посмотреть запущенные контейнеры:**
  ```bash
  docker ps
  ```

- **Посмотреть все контейнеры (включая остановленные):**
  ```bash
  docker ps -a
  ```

- **Остановить контейнер:**
  ```bash
  docker stop <container_id>
  ```

- **Остановить все контейнеры:**
  ```bash
  docker stop $(docker ps -aq)
  ```

- **Удалить контейнер:**
  ```bash
  docker rm <container_id>
  ```

- **Удалить все контейнеры:**
  ```bash
  docker rm $(docker ps -aq)
  ```

- **Удалить все остановленные контейнеры:**
  ```bash
  docker container prune
  ```

---

## 2. Управление образами

- **Посмотреть все локальные образы:**
  ```bash
  docker images
  ```

- **Удалить образ:**
  ```bash
  docker rmi <image_id>
  ```

- **Удалить все образы:**
  ```bash
  docker rmi $(docker images -q)
  ```

- **Удалить все неиспользуемые образы:**
  ```bash
  docker image prune
  ```

- **Удалить все неиспользуемые данные (контейнеры, образы, сети):**
  ```bash
  docker system prune -a
  ```

---

## 3. Сборка и запуск

- **Собрать образ из Dockerfile:**
  ```bash
  docker build -t <image_name> .
  ```

- **Запустить контейнер:**
  ```bash
  docker run -d -p <host_port>:<container_port> <image_name>
  ```

- **Запуск с автоматическим удалением после остановки:**
  ```bash
  docker run --rm -d -p <host_port>:<container_port> <image_name>
  ```

---

## 4. Мониторинг и отладка

- **Посмотреть логи контейнера:**
  ```bash
  docker logs <container_id>
  ```

- **Подключиться к работающему контейнеру:**
  ```bash
  docker exec -it <container_id> /bin/bash
  ```

- **Проверить использование ресурсов:**
  ```bash
  docker stats
  ```

---

## 5. Управление сетями

- **Посмотреть все сети:**
  ```bash
  docker network ls
  ```

- **Удалить сеть:**
  ```bash
  docker network rm <network_name>
  ```

- **Удалить все неиспользуемые сети:**
  ```bash
  docker network prune
  ```

- **Создать сеть:**
  ```bash
  docker network create <network_name>
  ```

- **Подключить контейнер к сети:**
  ```bash
  docker network connect <network_name> <container_name>
  ```

---

## 6. Работа с Docker Compose

- **Запустить все сервисы из `docker-compose.yml`:**
  ```bash
  docker-compose up
  ```

- **Остановить все сервисы:**
  ```bash
  docker-compose down
  ```

- **Пересобрать образы и перезапустить:**
  ```bash
  docker-compose up --build
  ```

- **Запустить в фоне:**
  ```bash
  docker-compose up -d
  ```

---

## 7. Удаление всего (осторожно!)

- **Удалить все контейнеры:**
  ```bash
  docker rm $(docker ps -aq)
  ```

- **Удалить все образы:**
  ```bash
  docker rmi $(docker images -q)
  ```

- **Удалить все тома:**
  ```bash
  docker volume prune
  ```

- **Удалить всё, включая сети и кэш:**
  ```bash
  docker system prune -a --volumes
  ```

---

## Полезные советы

- Если вы часто забываете идентификатор контейнера или образа, используйте его имя:
  ```bash
  docker stop <container_name>
  docker rm <container_name>
  ```

- Для комплексных проектов используйте **Docker Compose**, чтобы управлять сервисами централизованно.

---

Эта шпаргалка покрывает все основные команды. Если нужно больше деталей — спрашивайте!
