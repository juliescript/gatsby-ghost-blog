---
title: ¿Cómo hacer un blog fácil con GastbyJS, GitHub y Netlify?
date: "2019-10-01T13:42"
description: En este post te cuento como es que construí este blog. Te cuento como usé GatsbyJS y sus plantillas para hacer este sencillo sitio y como funciona Netlify junto con GitHub para ponerlo en línea. Los pasos son sencillos para empezar, pero como siempre, los detalles son lo más difícil.
tags: ["react", "gatsby", ]
---

*O ¿cómo fue que hice este blog?*

**Disclaimer:** este blog es un trabajo en progreso y siempre lo será. No considero que sea un sitio web terminado ni personalizado pero igual y hay alguien como yo que nunca ha probado esto y se le hace interesante.

## Pre-requisitos

 - Tener la versión más reciente de Node instalada. Al momento de escribir este post, yo tengo la 11.9.0 en mi compu.
 - Tener instalado `npm` que si ya tienes Node, seguro tienes npm instalado.
 - Tener una cuenta de [GitHub](https://github.com)
 - Tener una cuenta de [Netlify](https://netflify.com)
 - Tener tu editor de código favorito. Actualmente uso VS Code en mi máquina personal pero para el trabajo uso IntelliJ.

## GatsbyJS

### Instalar GatsbyJS

Vamos a comenzar a construir esto de manera local. Me gusta mucho hacerlo todo local primero para tener más control. Instalar los ambientes después será muy fácil con GitHub y Netlify. Tan fácil que te sorprenderás de no haberlo intentado antes.

Para usar [GatsbyJS](https://www.gatsbyjs.org/) hay que instalar su interfaz de línea de comando o CLI, por sus siglas en inglés. Esto es bien sencillo de hacer en npm:

```shell
npm install -g gatsby-cli
```

La `-g`en este caso significa global y se usa para instalar herramientas que se pueden usar en muchos proyectos como la interfaz de línea de comando de Angular, la herramienta de `create-react-app`, o en este caso la herramienta de Gatsby.

### Iniciar un proyecto nuevo

Empezar un proyecto nuevo es también cuestión de una línea de comando. En el fólder donde quieres guardar tu proyecto escribes:

```shell
gatsby new <nombre-de-tu-proyecto>
```

Por supuesto que tienes que sustituir el `<nombre-de-tu-proyecto>` por el nombre que tú quieras. 

Después de esto puedes cambiarte al directorio del proyecto y empezar a desarrollar con el siguiente comando:

```shell
cd <nombre-de-tu-proyecto>
gatsby develop
```

La verdad yo intenté hacer este blog sin plantilla pero no pude. Hay muchos conceptos nuevos que vienen con Gatsby como GraphQL y, en mi caso, muchas cosas de React que nunca había usado. Tampoco supe como hacerle para cambiar el CSS y hacer mis propios diseños.

**Disclaimer:** Ya sé que hay mil formas de hacer CSS-in-JS pero no me gustan. Será por mi edad avanzada pero prefiero el CSS solito o a lo mucho con SASS. Que tengo entendido que también se puede usar con Gatsby pero aún no aprendo como. Igual y es tema de otra entrada de blog.

### Usar una plantilla

Algo muy padre de Gatsby es que la comunidad ya se encargó de hacer plantillas, o `starters` para que puedas tener la funcionalidad básica de una aplicación y te encargues de estilizar y poner contenido. 

Para este sitio usé la plantilla de blog que se encuentra en [este repositorio](https://github.com/gatsbyjs/gatsby-starter-blog).

Instalarla necesita sólo un comando. En lugar de escribir `gatsby new`, el comando es el siguiente:

```shell
# create a new Gatsby site using the blog starter
gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
```

Este comando lo que hace es indicarle a Gatsby que necesita la plantilla para crear el sitio. La ventaja de la plantilla es que ya trae varias cosas que se necesitan en un blog como el manejo de la estructura de los posts, el listado de la página principal, plugin para Google Analytics y la instalación de los scripts necesarios para compartir tu página en redes sociales de forma correcta.

No es difícil hacerlo por tu cuenta y hay muchos tutoriales para hacerlo. Aquí te dejo la [muestra de uno en inglés](https://blog.bitsrc.io/build-your-own-blog-using-gatsby-and-react-a1255a5ab086). 

Personalmente, me latió más hacerlo con la plantilla para sacar el sitio más rápido sin perderme en la infinidad del diseño. Aunque no lo crean, el diseño no se me da y pues no quería dejar de publicar este proyecto sólo por cuestiones estéticas.

Claro que la ventaja de hacer el tuyo propio es poderle poner lo que quieras, pero las plantillas también se pueden extender para incluir funcionalidades que te falten.

## La estructura del proyecto

El proyecto viene dividido en varias partes, las que voy a mencionar en esta entrada son:
```md
 - content
	 - assets
	 - blog
 - src
	 - components
	 - pages
	 - templates
	 - utils
	 - gatsby-config.js
```
La parte donde vamos a escribir y guardar las imágenes está en `content`.

Dentro de la carpeta de `blog` va a existir un folder por cada entrada que queramos escribir. Dentro de la carpeta existirá un archivo llamado `index.md` y las imágenes que queramos incluir en esa entrada.

**Importante:** Las entradas de este blog están escritas en formato `.md` llamado MarkDown. MarkDown es un lenguaje de formato de texto para crear documentos. Es muy sencillo de usar y existen editores en línea para poder escribir documentos en MarkDown. Uno de ellos es [StackEdit](https://stackedit.io/), que es el que estoy usando para escribir esta entrada.

Hay que mencionar que todo lo que tiene que ver con contenido del blog se va a encontrar en la carpeta de `content` y todo lo que tiene que ver con la estructura de la página se encuentra en `src`.

En el archivo `gatsby-config.js` se encuentra toda la configuración de nuestro sitio. Desde cómo se llama hasta qué plugins de Gatsby están instalados y cómo se obtiene la información.

En las demás carpetas se encuentran los archivos de los componentes del sitio. En ellos están los componentes para la biografía del autor, la información de SEO, y la estructura principal de la página. Como este es un sitio muy chico, sólo tenemos un tipo de estructura pero si hubiera una función de búsqueda o tipos diferentes de entradas con diferentes necesidades, entonces habrían más tipos de estructuras.

Por ahora no vamos a modificar estos archivos, con excepción de `bio.js`. Ahí te recomiendo agregar tu propia información, porque por muy bien que nos caiga el fundador de Gatsby, dudo mucho que quieras que su biografía aparezca en tu sitio.

### Estilizar

Si hay algo que ha sido mi dolor de cabeza con Gatsby, eso ha sido estilizar. 

El proyecto básico no viene con algún tipo de sistema para estilizar con CSS integrado. Entonces ahí es decisión tuya decidir que usar. Agregar estilos se puede hacer en cada componente, con hojas de CSS o con sistemas más complejos como [emotion](https://emotion.sh/docs/introduction) o [styled-components](https://www.styled-components.com/).

En el caso del blog starter, todo viene con base en una dependencia llamada [Typography Theme Wordpress 2016](https://www.npmjs.com/package/typography-theme-wordpress-2016). Esta dependencia es un tema de un sistema llamado [Typography.JS](https://github.com/kyleamathews/typography.js). 

La buena noticia es que es posible sobrescribir los estilos. En el archivo de `typography.js`. 

Ahí se encuentra un objeto que se ve algo así: 

```js
Wordpress2016.overrideThemeStyles  =  ()  => {
	return {
		"a.gatsby-resp-image-link": {
			boxShadow: `none`,
		},
	}
}
```

Ahí es donde puedes escribir tus estilos propios y agregar diferentes colores.

La plantilla por default trae estilos en línea en la mayoría de los componentes así que lo que recomiendo es editarlos en cada componente. Cuando tenga una solución que me guste para este problema, escribiré otra entrada.

## GitHub

Por default, Gatsby viene con `git` integrado. Así que puedes crear un repositorio nuevo en GitHub y conectar el repositorio local con el repositorio en GitHub.

Esto se hace con los siguientes comandos:

```shell
git remote add origin <dirección del repo>
git push -u origin master
```

Una vez que el repositorio esté listo, hay que desplegar o implementarlo en un servidor.

## Netlify

Netlify es una plataforma para administrar proyectos modernos de web. Te ayuda a manejar todo el despliegue o implementación de una aplicación. La instalación es bien sencilla y cada que se hace un cambio o push en master, el código se despliega a producción.

La mejor parte es que tienen un plan que es gratis para pequeños proyectos, como este blog. También te permiten conectar con tu propio dominio y tienen muchas funcionalidades más.

Bueno, ya que tienes tu cuenta, puedes apretar el botón que dice `New site from Git` y conectas con tu cuenta de GitHub.

**AGUAS:** La conexión con GitHub te permite agregar cualquier repositorio a la aplicación. En mi caso, tengo los repos de mi trabajo en la misma cuenta de GitHub, así que me dio opción de agregarlos. No hagas esto con repositorios que deben de ser privados.

Ya que hayas seleccionado tu repo o repos, el siguiente paso te pedirá datos sobre cómo construir tu proyecto para producción. En el caso de este blog, con lo que vino default funcionó perfecto, pero si tienes una configuración personalizada habría que cambiar estos parámetros.

El último paso es desplegar la aplicación y ¡LISTO! Ya tienes tu sitio en Netlify.

Netlify te da una URL de ellos para tu proyecto, pero puedes aplicar tu propio dominio de forma muy sencilla.

## ¿Ahora qué?

El último paso sería quitar la información que viene de muestra en el proyecto y empezar a escribir tus propias entradas.

En mi caso estoy manejando todo con Pull Requests en GitHub para poder participar en Hacktoberfest. Pero también puedes hacer push directo a master si quieres vivir al límite.

Y así fue como hice este pequeño blog. Poco a poco iré añadiendo más cosas y creando más entradas en este blog.
