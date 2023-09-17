<!-- Codigo copiado de Agus https://github.com/FloatBatti/ClasesLab4/blob/8ed1756e5d87298620cd568db6983dceffecee57/Clase%203/DOM.md-->

##DOM (Document Object Model)

El DOM es un árbol de nodos, y cada nodo puede tener nodos hijos. Los nodos hijos pueden ser elementos HTML, atributos HTML, texto, comentarios, espacios en blanco o incluso otros nodos DOM. Los nodos HTML se convierten en objetos DOM. Tipos de nodos DOM:

Document: Es el nodo raíz del DOM y representa el documento HTML. De este nodo derivan todos los demás nodos.
Element: Representa un elemento HTML. Los elementos HTML se convierten en objetos Element del DOM.
Attribute: Representa un atributo de un elemento HTML. Los atributos HTML se convierten en objetos Attribute del DOM. Los atributos son, por ejemplo, type, href, src, style, class, etc.
Text: Representa el contenido de un elemento HTML. Los nodos de texto se convierten en objetos Text del DOM.
Comment: Representa un comentario HTML. Los comentarios HTML se convierten en objetos Comment del DOM.
Todos los elementos HTML tienen los siguientes atributos:

id: Identificador único del elemento.
style: Establece el estilo CSS del elemento.
class: Establece la clase del elemento.
title: Establece el título del elemento.
lang: Establece el idioma del elemento.
dir: Establece la dirección del texto del elemento. Los valores pueden ser ltr (left to right) o rtl (right to left).
tabindex: Establece el orden de tabulación del elemento.
accesskey: Establece la tecla de acceso rápido del elemento.
hidden: Indica si el elemento está oculto o no.
contenteditable: Indica si el contenido del elemento es editable o no.
Algunos atributos de los inputs:

type: Establece el tipo de input. Los valores pueden ser text, password, checkbox, radio, submit, reset, button, file, hidden, image, date, datetime, datetime-local, month, week, time, email, number, range, search, tel, url.
value: Establece el valor del input.
name: Establece el nombre del input.
placeholder: Establece el texto de ayuda del input.
readonly: Indica si el input es de solo lectura o no.
disabled: Indica si el input está deshabilitado o no.
maxlength: Establece el número máximo de caracteres que puede tener el input.
size: Establece el tamaño del input.
min: Establece el valor mínimo del input.
max: Establece el valor máximo del input.
step: Establece el incremento del input.
pattern: Establece una expresión regular que debe cumplir el valor del input.
required: Indica si el input es obligatorio o no.
autofocus: Indica si el input tiene el foco o no.
autocomplete: Indica si el input tiene autocompletado o no.
form: Establece el formulario al que pertenece el input.
accept: Establece los tipos de archivos que puede aceptar el input file.
autocapitalize: Establece si el input debe tener la primera letra en mayúscula o no.
autocorrect: Establece si el input debe corregir automáticamente el texto o no.
Métodos de selección de elementos:

document.getElementById(id): Devuelve el elemento que tiene el ID especificado.
document.querySelector(selector): Devuelve el primer elemento que coincide con el selector css especificado (se debe poner un . al principio si es una clase creada por nosotros). Si el elemento tiene más de un selector css, se debe indicar separados por un punto.
document.getElementsByTagName(tagName): Devuelve una lista de elementos con el nombre especificado.
document.getElementsByClassName(className): Devuelve una lista de elementos con la clase especificada.
document.querySelectorAll(selector): Devuelve una lista de elementos que coinciden con el selector css especificado.
Métodos para definir, obtener, modificar y eliminar valores de atributos:

element.setAttribute(attribute, value): Establece el valor de un atributo de un elemento.
element.attribute: Obtiene o establece el valor de un atributo de un elemento (igual que el anterior).
element.getAttribute(attribute): Obtiene el valor de un atributo de un elemento.
element.removeAttribute(attribute): Elimina un atributo de un elemento.
element.style.property: Obtiene o establece el valor de una propiedad de estilo de un elemento.
Métodos para clases, classList y className:

element.classList.add(class): Agrega una clase a un elemento
element.className: Obtiene o establece el valor del atributo class de un elemento (igual que el anterior).
element.classList.remove(class): Elimina una clase de un elemento.
element.classList.toggle(class): Alterna una clase de un elemento, es decir, si la clase existe la elimina y si no existe la agrega. Devuelve true si la clase existe y false si no.
element.classList.contains(class): Devuelve true si un elemento contiene una clase, y false si no.
element.classList.replace(oldClass, newClass): Reemplaza una clase por otra en un elemento.
element.className.item(index): Devuelve el nombre de la clase de un elemento en la posición especificada. Por ejemplo, si un elemento tiene las clases "clase1 clase2 clase3", el método className.item(0) devolverá "clase1".
Métodos para obtener y modificar elementos:

element.textContent: Obtiene o establece el contenido de texto de un elemento ignorando el estilo CSS.
element.innerHTML: Obtiene o establece el contenido HTML de un elemento.
element.outerHTML: Obtiene o establece el contenido HTML de un elemento. Devuelve una cadena de texto con el HTML contenido en el elemento, incluyendo el elemento en sí.
Métodos para crear elementos:

document.createElement(tagName): Crea un elemento HTML indicando el tag en mayúsculas.
document.createTextNode(text): Crea un nodo de texto.
document.createDocumetFragment(): Crea un fragmento de documento, que es un nodo que contiene una lista de nodos hijos.
parentNode.appendChild(node): Agrega un nodo como último hijo de un nodo padre.
element.parentNode: Devuelve el nodo padre de un elemento.
Cuando se agrega un nodo el DOM borra todo y lo vuelve a crear, por lo que se considera una mala práctica, ya que consume muchos recursos. Para evitar esto se puede usar un fragmento de documento, que es un nodo que contiene una lista de nodos hijos. De esta forma, se agrega el fragmento de documento y no cada nodo por separado.

Métodos para la obtener y modificar childs:

element.firstChild: Devuelve el primer nodo hijo de un elemento.
element.lastChild: Devuelve el último nodo hijo de un elemento.
element.childNodes: Devuelve un nodeList (no es un arreglo) de los nodos hijos de un elemento.
element.children: Devuelve una colección HTML de los elementos hijos de un elemento.
element.firstElementChild: Devuelve el primer elemento hijo de un elemento. Ignora los nodos de texto y comentarios.
element.lastElementChild: Devuelve el último elemento hijo de un elemento. Ignora los nodos de texto y comentarios.
element.replaceChild(newChild, oldChild): Reemplaza un nodo hijo de un elemento por otro.
element.removeChild(child): Elimina un nodo hijo de un elemento.
element.insertBefore(newChild, referenceChild): Inserta un nodo hijo antes de otro nodo hijo de un elemento.
element.hasChildNodes(): Devuelve true si un elemento tiene nodos hijos, y false si no.
element.childElementCount: Devuelve el número de elementos hijos de un elemento. Ignora los nodos de texto y comentarios.
Aunque la nodeList y la colección HTML no son arreglos, se pueden recorrer con un for of.

Métodos para obtener y modificar padres:

element.parentNode: Devuelve el nodo padre de un elemento.
element.parentElement: Devuelve el elemento padre de un elemento. Ignora los nodos de texto y comentarios.
Métodos para obtener y modificar hermanos (siblings):

element.previousSibling: Devuelve el nodo hermano anterior de un elemento.
element.nextSibling: Devuelve el nodo hermano siguiente de un elemento.
element.previousElementSibling: Devuelve el elemento hermano anterior de un elemento. Ignora los nodos de texto y comentarios.
element.nextElementSibling: Devuelve el elemento hermano siguiente de un elemento. Ignora los nodos de texto y comentarios.