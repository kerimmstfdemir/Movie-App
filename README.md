## MovieApp

* In this project, a Movie App. was created in the React environment using data from The Movie Database (TMDB) API.
* Google Firebase is used for backened operations such as Login and Register.

## Project Skeleton

```
Movie-App (main folder)
|
├── README.md 
├── node_modules
├── LICENSE
├── .gitignore     
├── public
│     └── index.html
├── src
|    ├── assets
|    |     └── images
│    ├── authentication
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
|    |     ├── MovieCard.styled.jsx
|    |     ├── moviecard.css
|    |     ├── PageNumber.jsx
|    |     ├── SearchMovie.jsx 
│    │     └── Navbar.jsx
│    ├── redux
│    │     ├── reducers
|    |     |     └── reduxReducer.js
|    |     ├── types
|    |     |     └── reduxTypes.js 
|    |     └── index.jsx
│    ├── pages
│    │     ├── Login.jsx
|    |     ├── Login.styled.jsx
│    │     ├── Register.jsx
|    |     ├── Register.styled.jsx
│    │     ├── Main.jsx
│    │     ├── MovieDetail.jsx
|    |     └── MovieDetail.styled.jsx
|    ├── helpers
|    |     └── ToastifyNotifies.js
│    ├── router
│    │     └── PrivateRouter.jsx
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```

## API USAGE

* #### Get all movie data

```http
 GET https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `string` | **Necessary**. Your API Key. |

* #### Search Movie

```http
 GET https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query={QUERY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :-------------------------------- |
| `API_KEY` | `string` | **Necessary**. Your API Key. |
| `QUERY`   | `string` | **Necessary**. Search query value. |

* #### To get Videos Key

```http
 GET https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :-------------------------------- |
| `API_KEY` | `string` | **Necessary**. Your API Key. |
| `id`      | `number` | **Necessary**. Can be obtained from results returning data. |

* #### For Movie images `src`

```http
 https://image.tmdb.org/t/p/w1280${poster_path}
```

| Parameter     | Type     | Description                |
| :--------     | :------- | :-------------------------------- |
| `poster_path` | `string` | **Necessary**. Can be obtained from results returning data. |
