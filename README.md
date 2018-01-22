# PROYECTO DE SISTEMAS Y TECNOLOGÍAS WEB

## Forma de uso local

Para ejecutar el proyecto se siguen los siguientes pasos.

1. Instalar nodejs y npm.

2. Instalar mongodb.

3. Ejecutar mondogodb: `mongod --dbpath /tmp`

4. En la raíz del proyecto ejecutar `npm install` y `npm start`.

5. Abrir el navegdor e ir a la dirección `localhost:3000`

## Tecnologías

Como se dijo anteriormente, para el desarrollo de la aplicación se han usado diversar tecnologías que serán explicadas a continuación y se dirá para que han sido utilizadas. 

### NPM. [![npm-logo](https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/3114590/npm-logo.png)](https://www.npmjs.com/)
Npm es el manejador de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

La mejor manera de gestionar los paquetes instalados localmente NPM es crear un package.json y eso es lo que se ha hecho, un package.json con la información del paquete, las dependencias necesarias para la ejecución de la app y algunas tareas/scripts para ejecutar pruebas.

### NODEJS. [![nodejs-logo](http://cdn.codesamplez.com/wp-content/uploads/2015/02/nodejs-tips-tricks-120x120.png)](https://nodejs.org/en/)
Node es un intérprete Javascript del lado del servidor que cambia la noción de cómo debería trabajar un servidor. Su meta es permitir a un programador construir aplicaciones altamente escalables y escribir código que maneje decenas de miles de conexiones simultáneas en una sólo una máquina física.

Aquí ha sido utilizada de la manera explicada, siendo el método para decirle al servidor como debe operar tras un login, un registro, un cambio de contraseña, etc. Además gestiona la base de datos a través del middleware mongoose.

### MONGODB. [![mongodb-logo](https://www.aadhya-analytics.com/wp-content/uploads/2015/07/mongodb_slide.png)](https://www.mongodb.com/es) 
MongoDB es una base de datos relacional que guarda datos en forma de documentos BSON, donde los BSON son una representación binaria de JSON con información adicional de tipo. 

Para realizar la conexión de mongo en node se necesita de la librería mongoose la cuál es instalada mediante npm.

Mongo es utilizado en nuestro proyecto para guardar los usuarios registrados y consultarlos cuando se realiza un login para ver si éste ya se encuentra registrado o no. Además de para esto, también es utilizado para guardar las puntuaciones de cada jugador cuando acaba una partida y mostrar aquellas que se encuentran en el top 10.

### HTML - CSS - JAVASCRIPT. ![Html-Css-Js-logo](https://www.cmaginet.com/wp-content/themes/cmaginet/static/img/css-html-js.svg)
Para el diseño de la app se ha usado el lenguaje de marcado 'html' y su hoja de estilo 'css'. La parte principal del cliente está basado en ambos, siendo esta un diseño totalmente propio y ayudado por el uso de funciones javascript para el control de acciones y prevención de algunos errores.

Además, el juego en el cual está basada la app web está realizado en javascript, dividido en distintas clases que concretamente se encuentran escritas en EcmaScript6. 