# *The Movies Single Page Application*

<p align="left">
  <img height="150" src="./src/images/background01.png" />
</p>

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app). Utiliza la API pública [The Movie Database (TMDB) API](https://developers.themoviedb.org/3)

La aplicación al iniciar, muestra un listado de películas sugeridas, ordenadas por popularidad. Tiene una barra de busqueda para buscar por nombre de pélicula, y también se pueden filtrar las películas por puntuación, mediante un menú de clasificación en forma de estrellas. En caso de no existir películas en el filtrado o búsqueda, muestra una imágen ilustrativa. Al hacer click sobre la imágen de una película se accede a un detalle de la misma, que muestra otra imágen, sinopsis y fecha de realización entre otros.

## **Probar la aplicación en modo desarrollo**

Puedes descargar una copia del repositorio -> [Repositorio](https://github.com/Ernest2104/challenge_movies)

__IMPORTANTE:__ Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr la aplicación.

Para usar la aplicación debes de obtener una api key propia en https://www.themoviedb.org/settings/api

En el `directorio raiz del proyecto` crea un archivo llamado: `.env`, que tenga la siguiente forma:

```
REACT_APP_API_KEY=apikey
```
Reemplaza `apikey` con tu propia credencial.

En el directorio del proyecto debes correr:

### `npm install` 

para instalar las dependencias, y luego:

### `npm start`

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación en tu navegador.

## **Probar la aplicación en producción**

Abre https://sage-madeleine-c01f05.netlify.app/ para ver la aplicación deployada en tu navegador.