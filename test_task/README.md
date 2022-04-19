Развернуть проект у себя на компьютере нужно так:
заходим в папку infra с терминала и выполняем команду
sudo docker-compose up

После этого выполняем команду
sudo docker exec -ti infra_web_1 /bin/sh
Создаем суперпользователя
python manage.py createsuperuser
заполняем необходимые поля
собираем статику
python manage.py collectstatic --noinput
переходим на localhost/admin, заходим в админку где можем создавать полятаблицы в Table
на localhost. находится сама таблица

