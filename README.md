# beer-project

- API: [PunkApi](https://punkapi.com/documentation/v2)
- [Deploy](https://beer-project-seven.vercel.app/)

## Основной функционал

- Регистрация и авторизация пользователей
- Избранные карточки: пользователь может добавлять или удалять из списка избранных
- Поиск по названию , выпадающее меню из карточек
- История поиска: сохранение даты и названия карточки, возможность перейти на страницу поиска после нажатия на название карточки или дату

### **1 уровень (обязательный - необходимый минимум)**

- [x] Реализованы **Требования к функциональности.**
- [ ] Для хранения учетных записей пользователей, их Избранного и Истории поиска, используем **LocalStorage**. [redux-persist](https://www.npmjs.com/package/redux-persist) библиотеку использовать **нельзя** из-за того, что привнесется большая автоматизация процесса сохранения, и это будет неравносильно затратам по времени других людей, которые используют LocalStorage напрямую.

**React**

- [x] **Пишем функциональные компоненты c хуками** [components](src/components), [pages](src/pages).
- [x] Есть разделение на **[умные](src/pages/MainPage/MainPage.tsx) и [глупые](src/components/ui/Button/Button.tsx) компоненты**
- [x] Есть **[рендеринг списков](src/pages/SearchPage/SearchPage.tsx)**
- [x] Реализована хотя бы одна **форма** [Register](src/pages/SignUpPage/SignUpPage.tsx) [Login](src/pages/SignInPage/SignInPage.tsx)
- [x] Есть применение **Контекст API** [ThemeContext](src/providers/ThemeProvider/context/ThemeContext.ts)
- [x] Есть применение **предохранителя** [ErrorBoundary](src/providers/ErrorBoundary/ErrorBoundary.tsx)
- [x] Есть хотя бы один **кастомный хук** [useInit](src/hooks/useInit.ts) [useTheme](src/hooks/useTheme.ts) [useDebounce](src/hooks/useDebounce.ts)
- [x] Хотя бы несколько компонентов используют **PropTypes** [BeerCard](src/components/BeerCard/BeerCard.tsx) [Suggest](src/components/Suggest/Suggest.tsx) [SearchHistoryItem](src/components/SearchHistoryItem/SearchHistoryItem.tsx)
- [x] Поиск не должен триггерить много запросов к серверу [**debounce**](src/components/SearchBar/SearchBar.tsx)
- [x] Есть применение [**lazy + Suspense**](src/router/routerConfig.tsx)

**Redux**

- [x] Используем [**Modern Redux with Redux Toolkit**](src/redux-toolkit/store/store.ts)
- [x] Используем **слайсы** [beerSlice](src/redux-toolkit/reducers/beerSlice.ts) [isAuthSlice](src/redux-toolkit/reducers/isAuthSlice.ts) [userSlice](src/redux-toolkit/reducers/userSlice.ts)
- [x] Есть хотя бы одна [**кастомная мидлвара**](src/redux-toolkit/middleware/isAuthMiddleware.ts)
- [x] Используется [**RTK Query**](src/redux-toolkit/services/BeerService.ts)
- [x] Используется [**Transforming Responses**](src/redux-toolkit/services/BeerService.ts)

### **2 уровень (необязательный)**

- [x] Использование **TypeScript**
- [x] Использование Firebase для учетных записей пользователей и их Избранного и Истории поиска. Тогда пункт из обязательных требований про использования LocalStorage может отпадать за ненадобностью, раз вы используете Firebase. react-firebase-hooks использовать нельзя, чтобы не перепрыгивать базовое API firebase в рамках изучения. [FireBase](src/firebase)
