<!-- Codigo copiado de Agus https://github.com/FloatBatti/ClasesLab4/blob/main/Clase%203/EventListener.md?plain=1-->
## Event Listeners

**addEvenListener()** es un método que permite agregar un evento a un elemento del DOM. Un evento es una acción que se  realiza en un elemento del DOM, por ejemplo, hacer click en un botón, escribir en un input, etc.

*Pueden haber eventos de ...*

####Mouse:

- **click**: Cuando se hace click en un elemento.
- **dblclick**: Cuando se hace doble click en un elemento.
- **mouseenter**: Cuando el mouse entra en un elemento.
- **mouseleave**: Cuando el mouse sale de un elemento.
- **mousemove**: Cuando el mouse se mueve en un elemento.
- **mouseover**: Cuando el mouse pasa por encima de un elemento.
- **mouseout**: Cuando el mouse sale de por encima de un elemento.
- **mousedown**: Cuando se presiona un botón del mouse sobre un elemento.
- **mouseup**: Cuando se suelta un botón del mouse sobre un elemento.
- **wheel**: Cuando se mueve la rueda del mouse sobre un elemento.

*Para ponerlos como funciones en la etiqueta HTML se hace agregando el nombre del evento con la palabra on adelante, por ejemplo: onclick, ondblclick, onmouseenter, etc. Solo con los eventos de mouse se puede hacer esto.*

####Teclado:

- **keydown**: Cuando se presiona una tecla.
- **keypress**: Cuando se presiona y se suelta una tecla.
- **keyup**: Cuando se suelta una tecla.

####Formulario:

- **submit**: Cuando se envía un formulario.
- **reset**: Cuando se resetea un formulario.
- **change**: Cuando se cambia el valor de un input.
- **focus**: Cuando un elemento recibe el foco.
- **blur**: Cuando un elemento pierde el foco.
- **input**: Cuando un elemento recibe un input.
- **cut**: Cuando se corta un texto.
- **copy**: Cuando se copia un texto.
- **paste**: Cuando se pega un texto.
- **select**: Cuando se selecciona un texto.

####Ventana:

- **resize**: Cuando se cambia el tamaño de la ventana.
- **scroll**: Cuando se hace scroll en la ventana.

####Interfaz:

- **DOMContentLoaded**: Cuando se termina de cargar el HTML.
load: Cuando se termina de cargar el HTML y todos los recursos (CSS, imágenes, etc).
- **unload**: Cuando se cierra la ventana o se recarga la página.
- **beforeunload**: Lo mismo que unload pero se ejecuta antes.
- **error**: Cuando se produce un error al cargar un recurso.