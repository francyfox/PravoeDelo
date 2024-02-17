# Docker php8.1 / msql 8.0

Скопируйте файлы в root директорию проекта.
Скачайте базу [чистая версия](https://drive.google.com/file/d/1kaeyfxEVRTLCOADqaBPfSEqC5kxuZhYd/view?usp=sharing)

### Первый запуск

Билд с нуля и запуск докера как сервис

    docker-compose up --build
    docker-compose up -d --remove-orphans 

Войти внутрь пхп под рутом

    docker exec -it -u root php /bin/bash 

Апдейт композера

    composer install
    
Импорт базы (имя должно быть shop3) пароль по умолчанию 123456    

    docker exec -it db /bin/bash
    mysql -u root -p shop3 < db_name.sql


### Полезные команды

Очистка сетки (если есть конфликты)

    docker network prune 

Очистка дубликатов контейнеров (если запускали другой докер)

    docker rm -f $(docker ps -a -q) 
    
Разрешить запись логов

    sudo chmod -R o+w storage 
    sudo chmod -R o+w bootstrap

Создание папки кэша

    mkdir -m755 bootstrap/cache
    mkdir -m755 storage/framework/views
