# CRUD SpringBoot y Vue

Aplicación web para realizar operaciones CRUD (crear,leer,actualizar y eliminar) sobre una base de datos de productos, frontend construido usando el framework Vue en conjunto con Bootstrap

## Poner en marcha el proyecto

1. Asegurate que la api de SpringBoot esta corriendo en el puerto 8080 o en el puerto que hayas configurado

2. Clonar el repositorio
```sh
git clone https://github.com/xJesusx0/crud-springboot-vue-frontend.git
```

3. Muevete al directorio donde clonaste el repositorio
```sh
cd crud-springboot-vue-frontend
```

4. Instalar las dependencias 
```sh
npm install
```

> [!WARNING]
> Asegurate de estar usando la ultima version de NodeJs o una que sea compatible con vue3

> [!WARNING]
> En caso de que tu api este corriendo en un puerto diferente al 8080 modifica el archivo src/main.js

```javascript
const urlApi = 'http://localhost:8080' // aqui puedes cambiar el puerto
```

5. Compilar e iniciar el servidor de desarrollo
```sh
npm run dev
```

6. Para iniciar una version de producción
```sh
npm run build
```

7. Dirigete al enlace que se muestra la terminal, deberias ver algo como 
```
  VITE v5.4.4  ready in 550 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
``` 