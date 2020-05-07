---
title: Año nuevo, look nuevo
date: "2020-01-26T13:42"
description: Le cambié el look al blog, ¿te gustó? Al fin descubrí como estilizar componentes con GatsbyJS y eso me hizo muy feliz.
tags: ["react", "gatsby", "diseño", "CSS"]
---

## ¡Feliz 2020!

Es un nuevo año y como dicen en mi país: "Año nuevo, vida nueva", aunque en el caso de este blog es cosa de cambiar de look.

Cuando empecé este experimento no sabía estilizar componentes en Gatsby. Como usé el blog starter, no me di el tiempo de intentar usar Gatsby desde cero. El blog starter sirvió muy bien para crear el blog rapidito y de buen modo. No se veía mal, pero el estilo estaba muy simplón para mi gusto.

Ya tenía idea de lo que quería para el nuevo look. Me gustan mucho los diseños sencillos y femeninos que son rosas con blanco y gris. Me gusta que haya detallitos que hagan que todo se vea bonito como el espacio entre las letras, llamado kerning, el interlineado, la animacioncita cuando pasas el cursor sobre los links, que el bordecito.

## ¿Cómo diseñar cuando no sabes diseñar?

Aunque tenía una idea muy clara de lo que quería, no hay cosa más intimidante que abrir un documento en blanco en algún programa de diseño. Soy buenísima codificando diseños pero cuando se trata de sacarme un diseño de la manda, uh-oh. Soy más mala que el más malo de los diseñadores.

Lo que me gusta hacer es buscar plantillas para blogs en Pinterest o en sitios que vendan plantillas y copiar las cosas que me gustan. Pueden ser los colores, la barra de navegación, el pie de página, la distribución del listado de los posts, el look de la página del post, lo que sea.

En el caso del día de hoy, porque me eché el re-diseño hoy, empecé por la barra de navegación y tuve que hacer un componente nuevo para manejar esa barra. Después copié el look del título de otra plantilla y el listado de posts no lo copié pero me inspiré en un blog que me gusta visitar.

El pie de página me gustó mucho porque se ve un poco más editorial. Me gustaron los bordes dobles y por eso los usé en varios lados. Mantuve todo sencillo para que fuera fácil acomodar todo para que fuera responsive. El sitio no está optimizado para ser responsive, pero se ve bien en todas las pantallas. Obviamente, las muestras de código de stackblitz y Glitch no se ven bien en pantallas pequeñas.

## ¿Cómo quedó organizado el CSS?

En lugar de andarme peleando con algún sistema de diseño (Design System), o intentar sobreescribir los estilos que trae el starter, decidí borrar TODO. Desde los estilos que ya había logrado poner, hasta las dependencias de las dependencias que tenían algún diseño. Dejé el sitio con puro HTML, así bien de los 90's.

Entonces empecé a escribir CSS con SASS. Que la verdad lo único que escribí de SASS fueron estilos anidados y variables. Hice una hoja de estilo por componente, porque es lo que se hace más cómodo por Angular, y las importe como debía.

Poco a poco empecé a ver los cambios y a emocionarme por ver cómo cambiaba la interfaz frente a mis ojos. Creo que esa es la parte que más me gusta de mi trabajo. Ver como las cosas cambian al escribir mi CSS.

## ¿No sería más fácil usar un design system?

La verdad es que tal vez sí. Pero para este proyecto se me hizo demasiado. Es un blogcito muy sencillo que por ahora muy poquita gente lee. Tal vez si algún día tengo una audiencia más grande considere optimizar más el sitio. Por ahora esto es más que suficiente y se ve bonito y femenino que era mi objetivo inicial.

## ¿Qué sigue para el blog?

Voy a retomar mis guías de Angular y tal vez pasarles mis recetas de comida mexicana que hago acá en el extranjero. Tengo varios amigos que me han pedido recetas y aunque he intentado grabar videos, tener la receta escrita es mucho mejor y más práctico. Por ahora tengo 3 aprendizajes de mi trabajo del día de hoy:

- _Usa tus talentos para hacer tu trabajo más fácil_: Si no te sale la diseñada, no empieces desde cero. Copia de otros sitios y elige lo que más te guste. Siempre ponle tu propio sello a las cosas y aunque no seas diseñador, podrás hacer cosas bonitas. Claro, siempre puedes contratar a alguien para que te ayude o pedir ayuda a un amigo.
- _Menos es más_: Las cosas que están de moda pueden ser muy engorrosas de aprender en primer instancia. Enfócate en lo que necesitas y si no necesitas la tecnología de moda, no es obligatorio usarla. Yo usé GatsbyJS para este blog para aprenderlo, pero no pienso integrarle muchas cosas que otros sitios hechos en Gatsby tienen.
- _A veces sólo necesitas un domingo_: Me encanta descansar de escribir código porque es algo que hago todos días en mi trabajo. Sin embargo, me encanta tener pequeños proyectitos para mí sola como este blog y sólo necesité este domingo para dejarlo tal y como quería. En lugar de estar viendo YouTube o Netflix, me dediqué a escribir CSS para mi nuevo tema y me encantó el resultado.
