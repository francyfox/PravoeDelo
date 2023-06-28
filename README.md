<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400"></a></p>

<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## О проекте

В тестовый проекте используется laravel v.8.82 + vue3 inertia.
Для успешной установки и разворачивания проекта необходим:

1. Node.js (https://nodejs.org)
2. Composer https://getcomposer.org/

## установка Laravel

1)Установка через Composer

```
composer create-project laravel/laravel LegalAdvice
```

2)Установка компонентов laravel для авторизации/регистрации

```
composer require laravel/ui
```

```
php artisan ui vue --auth
```

2)Установка node

```
npm install
npm run dev
```

Установка vue-router v3

```
npm install vue-router@3
```

Установка vuex v3

```
npm install vuex@3
```

Установка vform

```
npm install axios vform
```

## Настройка соединения с базой данных

Редактировать файл `/.env`:

```
APP_NAME=Юридическая-консультация
APP_ENV=local
APP_URL=http://localhost

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=legal_advice
DB_USERNAME=root
DB_PASSWORD=root

```

## Запуск проекта на локальном сервере(OpenServer v5.4.0)

Перейти в папку с проектом и в консоли openServer или windows ввести команду

```
php artisan serve
```

Запуск webpack

```
npm run watch
```
