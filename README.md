## MovieApp

* In this project, a Movie App. was created in the React environment using data from The Movie Database (TMDB) API.
* Google Firebase is used for backend operations such as Login and Register.
* You can access the live version of the project from the following link.

  https://movieapp-d3xe.onrender.com

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

## DEMO

https://user-images.githubusercontent.com/56498001/206894448-f6aa084e-171b-4721-90f0-0a6ee5ba7e3d.mp4

## API USAGE

* #### Get all movie data

```
 GET https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `API_KEY` | `string` | **Required**. Your API Key. |

* #### Search Movie

```
 GET https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query={QUERY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :-------------------------------- |
| `API_KEY` | `string` | **Required**. Your API Key. |
| `QUERY`   | `string` | **Required**. Search query value. |

* #### To get Videos Key

```
 GET https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :-------------------------------- |
| `API_KEY` | `string` | **Required**. Your API Key. |
| `id`      | `number` | **Required**. Can be obtained from results returning data. |

* #### For Movie images `src`

```
 https://image.tmdb.org/t/p/w1280${poster_path}
```

| Parameter     | Type     | Description                |
| :--------     | :------- | :-------------------------------- |
| `poster_path` | `string` | **Required**. Can be obtained from results returning data. |
