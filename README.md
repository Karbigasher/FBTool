# FBTool
Скачиваем и копируем репозиторий в пустую(не обязательно) папку.
Далее нужно установить Node.js. Ссылка:https://nodejs.org/en/download/
После установки node.js нужно установить React.
Для этого в консоли нужно написать "npm i -g create-react-app".
После установки React нужно доустановить node_modules используемые в проекте.
Для этого находясь в папке /Frontend нужно написать команду "npm i".
После всех дейсвтий настройка должна быть завершена и приложение должно запуститься.
Для запуска сервера необходимо, находясь в папке /Backend, написать команду "npm run dev".
После этого в консоли выведится примерно следующее:

[nodemon] 2.0.7
[0] [nodemon] to restart at any time, enter `rs`
[0] [nodemon] watching path(s): *.*
[0] [nodemon] watching extensions: js,mjs,json
[0] [nodemon] starting `node app.js`
[0] App has been started on port 5000...
[1] i ｢wds｣: Project is running at http://192.168.1.104/
[1] i ｢wds｣: webpack output is served from
[1] i ｢wds｣: Content not from webpack is served from D:\Download\FBTool\FBTool-main\Frontend\public
[1] i ｢wds｣: 404s will fallback to /
[1] Starting the development server...
[1]
[1] Compiled successfully!

что будет означать, что сервер и клиентская часть успешно запущены.

Известные ошибки: База данных MongoDB не пускает пользователей с другими ipшниками. Для устранения ошибки нужно либо добавить в проект на MongoDB нового пользователя либо как-то добавить ip в список исключений.
