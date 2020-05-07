---
title: Validación personalizada en Angular
date: "2020-01-30T13:42"
description: La validación personalizada en Angular puede llegar a ser un poco complicada de entender. En este post les enseño un sencillo ejemplo para explicarles como yo aprendí a usarla.
---

Angular viene ya con un muy buen número de validaciones para formularios. Te maneja que el campo requerido, que el mínimo, que el máximo, que si el campo debe de cumplir un patrón, de todo.

Sin embargo, hay veces que necesitamos algo más, algo que no cabe dentro de los casos genéricos que vienen incluidos con Angular. He ahí donde entra la validación personalizada o los validadores.

## ¿Qué es un validador?

Un validador, o validator en inglés, es una función que escribes para checar que tu formulario cheque alguna función en específico. Usualmente se crea en un archivo aparte y se importa al componente. También se puede probar para revisar que los casos sean correctos.

Al crear un validador también creas nuevas categorías de errores, mismos que puedes usar en tus plantillas para mostrar mensajes de error y marcar el formulario como válido o inválido.

## Ok, ok, ahora vamos a hacer uno porque sigo sin entender

El caso clásico para un validador personalizado es el de checar que un formulario para registrar una contraseña y luego confirmarla.

Para crear este formulario vamos a usar una forma reactiva:

```javascript
this.form = this.fb.group(
  {
    password: ["", Validators.required],
    confirmarPassword: ["", Validators.required],
  },
  {
    validators: validarQueSeanIguales,
  }
)
```

En este caso estoy declarando dos campos en el formulario, ambos deben de ser requeridos y después el grupo de campos va a tener una validación para ver que sean iguales.

Ahora toca hacer una plantilla sencilla para mostrar nuestros campos:

```html
<form [formGroup]="form">
  <mat-form-field>
    <input
      matInput
      type="password"
      formControlName="password"
      placeholder="Contraseña"
    />
  </mat-form-field>

  <br />

  <mat-form-field>
    <input
      matInput
      type="password"
      formControlName="confirmarPassword"
      placeholder="Confirmar Contraseña"
    />
  </mat-form-field>
</form>
```

**Nota:** En este ejemplo estoy usando Angular Material para darle estilo a la interfaz, pero no es necesario usar Material para hacer validadores personalizados.

El siguiente paso es escribir nuestra función de validación. Esto lo voy a hacer en un archivo separado llamado `app.validator.ts`, me gusta mucho usar la convención `<nombre_del_componente>.validator.ts` para denotar mis validadores, pero depende del caso y la necesidad del proyecto. A veces los validadores se pueden llegar a compartir entre componentes, por lo cual es mejor idea llamarlos de acuerdo a lo que vayan a validar. También cabe notar que pueden haber varias funciones de validación dentro de un mismo archivo de validadores.

```javascript
import { FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms"

export const validarQueSeanIguales: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const password = control.get("password")
  const confirmarPassword = control.get("confirmarPassword")

  return password.value === confirmarPassword.value
    ? null
    : { noSonIguales: true }
}
```

### ¿Qué está pasando aquí?

Lo que estoy haciendo es definir una función de validación o `ValidatorFn`, que recibe como parámetro un grupo de campos , `FormGroup`, y va a regresa o un objeto de errores de validación, `ValidationErrors`, o un `null`.

Ya dentro de la función, podemos encontrar cada campo que necesitamos comparar. En este caso son los dos campos de nuestro formulario `password` y `confirmarPassword`. Posteriormente comparamos los valores de los campos y si son los mismos retornamos un `null`. Si no es así, entonces se retorna el objeto con el error `{ noSonIguales: true }`.

Con esto nuestro formulario va a saber si es válido o si tiene algún error.

## ¿Cómo despliego estos errores?

Para desplegar estos errores, necesitamos indicarle a nuestra plantilla cuando hay un error de validación. En el caso de este validador, va a mostrar un error desde que empecemos a escribir en el primer campo. Esto no es ideal ya que el usuario se va a preguntar que cómo hizo algo malo si apenas empezó a llenar el formulario.

Podemos combinar el resultado de nuestro validador con el estado de los campos del formulario.

En Angular, los campos de un formulario tienen 4 estados: `pristine`, `touched`, `untouched` y `dirty`.

En resumen quedan algo así:

- `pristine` - No se ha tenido interacción alguna con el campo
- `untouched` - Si pusiste el cursor o fuiste al campo con la tecla de tabulador, sólo se activa cuando se llega al campo
- `touched` - Si ya te fuiste del campo, ya cambiaste el cursor de lugar o seguiste a los demás campos
- `dirty` - Si ya se tuvo interacción con el campo

Nuestro usuario necesita saber si las contraseñas son iguales después de que empieza a escribir la confirmación. Así que voy a checar que ambos campos tengan estatus `dirty` y checar si el formulario tiene el error de `noSonInguales`.

```javascript
checarSiSonIguales():  boolean  {
	return  this.form.hasError('noSonIguales')  &&
		this.form.get('password').dirty &&
		this.form.get('confirmarPassword').dirty;
}
```

A mí me gusta hacer funciones que revisen estas cosas en lugar de tener toda la lógica en plantilla, pero si ponen la condición en la plantilla también funciona igual.

En la plantilla queda así:

```html
<mat-error *ngIf="checarSiSonIguales()">Las contraseñas no coinciden</mat-error>
```

Así que cuando las contraseñas no coinciden, se va a mostrar un bonito mensaje de error en color rojo que dice `Las contraseñas no son iguales`.

Incluso si queremos ir un paso más allá, podemos usar el estatus del formulario para bloquear un botón de `Enviar` y una vez que nuestra forma esté libre de errores, habilitarlo y dejar al usuario enviar su formulario.

```html
<button mat-raised-button [disabled]="!form.valid">Enviar</button>
```

Hay muchas otras formas para jugar con mensajes de error, clases, habilitar y deshabilitar campos y botones. Todo depende del formulario con el que se esté trabajando y las condiciones que necesita.

Como siempre, acá les dejo un ejemplo en StackBlitz de este pequeño tutorial:

<iframe width="590" height="600" src="https://stackblitz.com/edit/angular-6ec4zm?embed=1&file=src/app/app.component.ts"></iframe>

En el siguiente tutorial, voy a hacer un formulario dinámico con varios tipos de validaciones para que vean como se pueden combinar.
