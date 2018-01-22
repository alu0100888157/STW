# PROYECTO DE SISTEMAS Y TECNOLOGÍAS WEB

# Enlaces

* [Documentación.](https://javiergonher.github.io/stw-project/)
* [Método de trabajo del equipo.](/método-de-trabajo.md)

## Forma de uso local

Para ejecutar el proyecto se siguen los siguientes pasos.

1. Instalar nodejs y npm.

2. Instalar mongodb.

3. Ejecutar mondogodb: `mongod --dbpath /tmp`

4. En la raíz del proyecto ejecutar `npm install` y `npm start` para ejecutar el servidor.

5. Abrir el navegador e ir a la dirección `localhost:3000`

## Tecnologías

En el desarrollo de la aplicación se han usado diversas tecnologías que serán explicadas a continuación:

### MEAN stack [![mean-logo](https://static.wixstatic.com/media/a6718f_8964b2bc8c7e4de7a5a0eb6a7ef28a55~mv2.png/v1/fill/w_109,h_128,al_c,usm_0.66_1.00_0.01/a6718f_8964b2bc8c7e4de7a5a0eb6a7ef28a55~mv2.png)](http://mean.io/)
MEAN Stack (acrónimo para: MongoDB, ExpressJS, AngularJS, NodeJS), es un framework o conjunto de subsistemas de software para el desarrollo de aplicaciones, y páginas web dinámicas, que están basadas, cada una de estas en el popular lenguaje de programación conocido como JavaScript. Gracias a esta característica el conjunto se integra exitosamente en una plataforma auto-suficiente.

### NODEJS [![nodejs-logo](http://cdn.codesamplez.com/wp-content/uploads/2015/02/nodejs-tips-tricks-120x120.png)](https://nodejs.org/en/)

Node es un intérprete Javascript del lado del servidor que cambia la noción de cómo debería trabajar un servidor. Su meta es permitir a un programador construir aplicaciones altamente escalables y escribir código que maneje decenas de miles de conexiones simultáneas en una sólo una máquina física.

### NPM [![npm-logo](https://goodbits-production.s3.amazonaws.com/uploads/link/thumbnail/3114590/npm-logo.png)](https://www.npmjs.com/)

Npm es el gestor de paquetes por defecto para Node.js, un entorno de ejecución para JavaScript.

La mejor manera de gestionar los paquetes instalados localmente NPM es crear un package.json y eso es lo que se ha hecho, un package.json con la información del paquete, las dependencias necesarias para la ejecución de la app.

## Express [![expressjs-logo](http://isteer.com/wp-content/uploads/2017/09/A-9-150x83.png)](http://expressjs.com/es/)

Express es una infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles. 

Con miles de métodos de programa de utilidad HTTP y middleware a su disposición, la creación de una API sólida es rápida y sencilla. 

### MONGODB [![mongodb-logo](https://www.aadhya-analytics.com/wp-content/uploads/2015/07/mongodb_slide.png)](https://www.mongodb.com/es) 

MongoDB es una base de datos relacional que guarda datos en forma de documentos BSON, donde los BSON son una representación binaria de JSON con información adicional de tipo. 

Para realizar la conexión de mongo en node se necesita de la librería mongoose la cuál es instalada mediante npm.

### ANGULAR [![Angular-logo](https://web-peppers.com/wp-content/uploads/2017/01/mq1-150x150.png)](https://angular.io/)

Angular es un framework de JavaScript de código abierto, mantenido por Google, que se utiliza para crear y mantener aplicaciones web de una sola página. Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad de Modelo Vista Controlador (MVC), en un esfuerzo para hacer que el desarrollo y las pruebas sean más fáciles.

### MATERIALIZE [![Materialize-logo](https://codigofacilito.com/system/courses/white_avatars/000/000/076/thumb/materialize.png?1461776253)](http://materializecss.com/)

Framework de CSS responsivo desarrollado por google y basado en material design.

### CSS3 [![CSS3-logo](http://mikacarbonneau.com/img/css.png)]()

Lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.
