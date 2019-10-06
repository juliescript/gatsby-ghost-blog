---
title: ¿Cómo usar formularios dinámicos en Angular?
date: "2019-10-05T13:42"
description: Los formularios dinámicos son excelentes herramientas para conseguir información sobre tus usuarios. La verdad es que a veces son confusos de construir pero aquí les escribo sobre como resolví este problema.
---

**Disclaimer**: Esta tarea la hice originalmente en Angular 7 y estamos en proceso de actualizar a Angular 8 por esta razón puede que las cosas cambien en versiones más recientes.

----------

Uno de los retos más raros que he tenido ha sido trabajar con formularios dinámicas en Angular.

### ¿Qué es un formulario dinámico?

Un formulario dinámico es cuando un formulario permite a un usuario generar campos con una acción. El formulario nunca va a saber cuantos campos quiere tener un usuario, por lo que el usuario tiene todo el control sobre la cantidad de campos que se generan. El usuario también puede quitar campos y eso es lo que hace la forma dinámica.

Un ejemplo es un típico formulario para hacer un currículum en internet. La parte de educación y experiencia laboral se ven algo como así:

![Formulario de experiencia laboral](./formulario_dinamico.png)


Angular nos permite tener formularios dinámicos con su módulo de
