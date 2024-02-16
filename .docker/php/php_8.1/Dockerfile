FROM php:7.4-fpm-alpine

RUN apk add --no-cache \
    alpine-sdk \
    libmcrypt-dev \
    freetype \
    freetype-dev \
    libjpeg-turbo \
    libjpeg-turbo-dev \
    libpng \
    libxml2-dev \
    libzip-dev \
    icu-dev \
    bash \
    nano \
    libzip-dev \
    zip

RUN docker-php-ext-configure gd --with-freetype --with-jpeg && docker-php-ext-install -j$(getconf _NPROCESSORS_ONLN) gd

RUN docker-php-ext-install -j$(nproc) intl
RUN docker-php-ext-install pdo pdo_mysql pcntl exif zip

RUN apk add --no-cache pcre-dev $PHPIZE_DEPS \
&& pecl install redis \
&& docker-php-ext-enable redis.so

#RUN pecl install xdebug && docker-php-ext-enable xdebug
#
#RUN echo "xdebug.mode=debug" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.start_with_request=yes" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.discover_client_host=1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.idekey=\"PHPSTORM\"" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.log=/tmp/xdebug.log" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.output_dir=/var/www/.docker/xdebug_profiler/" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.var_display_max_depth = -1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.var_display_max_children = -1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
#    && echo "xdebug.var_display_max_data = -1" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

#RUN pecl install opcache
#RUN docker-php-ext-enable opcache

#RUN echo "opcache.enable=1" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.revalidate_freq=0" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.validate_timestamps=0" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.max_accelerated_files=10000" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.memory_consumption=192" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.max_wasted_percentage=10" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.interned_strings_buffer=16" >> /usr/local/etc/php/conf.d/opcache.ini \
#    && echo "opcache.fast_shutdown=1" >> /usr/local/etc/php/conf.d/opcache.ini

#RUN curl -OoL /var/www/phpcs.phar https://squizlabs.github.io/PHP_CodeSniffer/phpcs.phar
#RUN curl -OoL /var/www/phpcbf.phar https://squizlabs.github.io/PHP_CodeSniffer/phpcbf.phar

RUN curl -sS https://getcomposer.org/installer | \
    php -- --install-dir=/usr/bin/ --filename=composer

ENV COMPOSER_ALLOW_SUPERUSER=1

ADD ./.docker/php/php_8.1/php.ini /usr/local/etc/php/php.ini

ENV USER=denisl
ENV UID=1000
ENV GID=1000

RUN addgroup -g "$GID" "$USER"
RUN adduser \
    --disabled-password \
    --gecos "" \
    --ingroup "$USER" \
    --uid "$UID" \
    "$USER"

USER "$USER"

WORKDIR /var/www
