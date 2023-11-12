# Тестовое задание для Adwin
## Технологии
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React-router-dom](https://reactrouter.com/en/main)
- [React-hook-form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
## Запуск проекта

```console
npm install
npm run dev 
```
## Docker compose запуск
- docker-compose up --build --no-recreate -d
- docker exec -it app_container sh
- npm i && npm run dev
## Скрипты
- `npm run dev` - Запуск frontend-части проекта
- `npm run build` - Сборка проекта `production` в режиме
- `npm run lint` - Проверка ts файлов линтером
-  npm run start` - Запуск frontend и json server
---

## Архитектура проекта

Проект написан в соответствии с методологией Feature-Sliced.

Документация FSD - [Feature-Sliced Design](https://feature-sliced.design/)

## Стили

Для стилизации в проекте используетя UI библеотека [Chakra UI](https://chakra-ui.com/)


