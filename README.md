# Fullstack Angular Node

Asignatura vista en el Semestre VII
Docente: Carlos Andrés


## Comandos y Herramientas Relevantes:

Conocer la versión de Node.js (preferible las versiones superiores a 10.x.x) :
```
node -v
```

Conocer la versión de npm:
```
npm --version
```

Para instalar Angular CLI:
```
npm install -g @angular/cli
```

Conocer la versión de Angular CLI:
```
ng v
```


## Principios de un proyecto

Durante la clase se hace uso del editor de código Visual Studio Code y/o Atom. Se hace uso de Angular para las secciones de Frontend, y Node para Backend con Typescript; es por ello que los proyectos de Angular se almacenan en un directorio diferente a los proyectos de Node.

Creación de un proyecto
```
ng new [nombre-proyecto]
```

Para desplegar un servidor desde ng
```
ng serve
```


## Añadir algunas librerias
```
npm i --save jquery
```
```
npm i --save popper.js
```
```
npm i --save angular-popper
```
```
npm i @popperjs/core
```
```
npm i --save bootstrap
```
```
npm i --save @fortawesome/fontawesome-free
```
```
npm i --save ngx-pagination
```
Para revisar si las dependencias estan instaladas, revisar en el archivo package.json  

Posteriormente, modificar lo siguiente en el archivo angular.json:
```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "node_modules/@fortawesome/fontawesome-free/css/all.css",
    "src/styles.css"
],
"scripts": [
    "./node_modules/jquery/dist/jquery.js",
    "./node_modules/@popperjs/core/dist/umd/popper.js",
    "./node_modules/popper.js/dist/popper.js",
    "./node_modules/bootstrap/dist/js/bootstrap.js"
]
```
Es posible que en caso de no funcionar los fragmentos de codigo copiados de Bootstrap, entonces es mejor ingresar los siguintes codigos:
```json
"styles": [
    ...,
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    ...
],
"scripts": [
    ...,
    "./node_modules/bootstrap/dist/js/bootstrap.min.js"
    ...
]
```

## Cambiar el puerto del server

Para cambiar el puerto del servidor, ir al archivo angular.json, y añadir en la sección de "serve":
```json
"options": {
    "browserTarget": "name:build",
    "port": 8098
},
```


## Crear un nuevo componente

```
ng g c <nombre-componente>
```

## Para usar ngModel
En el archivo de app.module.ts, ingresar lo siguiente:
```typescript
import {FormsModule} from '@angular/forms';
```

```typescript
imports: [
    ...,
    FormsModule
  ],
```


Otras librerias, para modales son:
```
npm install ngx-bootstrap --save
```
```
npm i --save ngx-toastr
```
```
npm i --save @ng-bootstrap/ng-bootstrap
```


En el archivo angular.json, añadir:
```json
"styles": [
    ...,
    "node_modules/ngx-toastr/toastr.css",
    "src/styles.css"
],
```
Luego importarlas en app.module.ts:
```typescript
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxPaginationModule } from 'ngx-pagination';

imports: [
    ...,
    ToastrModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    NgxPaginationModule
  ],
```

Para hacer uso de estas librerias en el componente:
```typescript
import { ToastrService } from 'ngx-toastr';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

// Dentro del constructor, añadir los parametros:
constructor(public modalService:BsModalService, private toastr:ToastrService) {...}
```
## Crear un nuevo modelo

```
ng g cl <carpeta/nombre-modelo>
```

## Crear un nuevo pipe

```
ng g p <carpeta/nombre-pipe>
```

Para implementar un pipe, se debe hacer iyección de dependencias en el constructor de la clase a implementar, y hacer uso de un provider en el component:

```typescript
@Component({
  ...,
  providers: [ArrayPipe]
})

constructor(private order: ArrayPipe) {}
```



## Extensiones para Visual Studio Code

Algunas de las extensiones practicas para Angular desde VS Code, son:

- Angular Language Service
- Angular Snippets (Version 11)
- Angular Essentials (Version 11)


## Extensiones para Atom

Para la parte del Backend podemos hacer uso del editor Atom, y en este caso, instale las siguientes extensiones:

- atom-beautify
- atom-typescript
- file-icons
- goto-definition
- kite
- linter-ui
- linter-ui-default
- platformio-ide-terminal



# Backend

Para hacer una instalación global de typescript, ingresamos el siguiente comando:
```
npm i -g typescript
```

Para iniciar un proyecto, ingresamos en la terminal el siguiente comando:
```
npm init --yes
```

Hay algunas dependencias "obligatorias" y para instalarlas se ingresa:
```
npm i express morgan cors promise-mysql
```
Express es un componente de node que permite administrar el servidor
morgan permite hacer conexiones de tipo Http
cors permite manejar cabeceras de envio y recepcion de información
promise-mysql permite administrar las promesas que se reciben desde la BBDD.


Para visualizar los errores en el uso de mysql, existe la siguiente librería:
```
npm i --save mysql-error-codes
```

La '-D' es para grabar en desarrollo
```
npm i nodemon -D
```

Las siguientes librerías son bastante famosas y utiles:
```
npm i jsonwebtoken
```

Cuando hacemos la instalación con @types, podemos ingresar
```
npm i --save @types/jsonwebtoken
```

```
npm i --save @types/morgan -D
```

```
npm i --save @types/cors -D
```

```
npm i --save @types/express
```


Para generar el archivo de tsconfig.json ingresamos el siguiente comando:
```
tsc --init
```

Dentro de este último archivo, podemos modificar algunas opciones basicas:

```json
{
  "compilerOptions": {
      "target": "es6",
      //...,
      "outDir": "./build",      /* build para ser el directorio de compilado */
  }
}
```

Para correr la configuración, debemos hacer un cambio en el archivo package.json:
```json
{
  "scripts": {
    ...,
    "build": "tsc -w",
    "dev": "nodemon build/index.js"
  },
}
```


Para ejecutarlo ingresamos el siguiente comando:
```
npm run build
```
```
npm run dev
```

Estamos haciendo pruebas en Postman para observar la actividad de la API REST, las rutas que ingresamos serían las siguientes:

- http://localhost:8099/ con método GET para:

- http://localhost:8099/api/public/roles con método GET para obtener una lista de todos los roles.

- http://localhost:8099/api/public/roles/create con método POST para crear un nuevo rol dentro de la base de datos. Tener en cuenta que en los *Headers*, debemos cambiar el *Content-Type* por *application/json*. En este caso, debemos ir a *Body*, en opción *raw* y poner algo por este estilo:
```json
{
    "namerol": "Nuevo rol"
}
``` 

- http://localhost:8099/api/public/roles/:número con método DELETE para eliminar un rol de la base de datos.

- http://localhost:8099/api/public/roles/update/:número con método PUT para actualizar algun registro. En los *Headers*, debemos añadir un *Content-Type = application/json*. Y por medio de *Body* en opción *raw* ingresamos algo por este estilo:
```json
{
    "namerol": "Registro cambiado"
}
```

Es importante aclarar que cuando estamos haciendo el update, debemos prevenir que nos pasen dentro del json el codigo, puesto que este último no se debe modificar, solo su contenido. Para evitar esto, dentro de la función que maneje el update, ingresamos la siguiente línea:

```typescript
delete req.body.codrol;
```

Se decidio que tambien se hara una API REST pero que conecte con PostgreSQL, por lo que para instalar las dependencias, uso los siguientes comandos para hacer las configuraciones con PostgreSQL:

```
npm i express morgan cors pg-promise
```

```
npm i @drdgvhbh/postgres-error-codes
```

```
npm i pg
```
