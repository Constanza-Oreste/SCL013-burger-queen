# ¡Te presentamos BurgerQueen!

### 0. Definición de Producto
BurgerQueen es un pequeño restaurante de hamburguesas estilo ***vintage.*** Este restaurante está creciendo, por lo que fue necesario realizar una interfaz en la que se puedan tomar pedidos usando una *****tablet**.*** Estos pedidos posteriormente podrán ser enviados a la cocina, permitiendo que la orden sea preparada eficientemente.

Esta aplicación posee dos vistas, las cuales se sincronizan en tiempo real. La primera vista corresponde al mesero. Este podrá interactuar con la app pudiendo ingresar en primera instancia su nombre, la mesa a la cual se está atendiendo y el nombre del cliente. Posteriormente será redirigido a una nueva orden en donde podrá ingresar los productos requeridos, los cuales se irán sumando y acumulando en la boleta.
Finalmente, la boleta se despachará  a la cocina con el botón ***"enviar"*,** y el mesero podrá ver su estado  ***(Listo, o entregado).*** La segunda vista corresponde a la del cocinero o chef. Sin necesidad de ingresar un usuario, el chef podrá ingresar directamente al apartado de cocina, en donde podrá visualizar todas las ordenes pendientes, pudiendo marcarlas como ****"listas"**** (las ordenes que ya han sido realizadas).

![imagen burger queen](http://imgfz.com/i/gKFHiM2.png)

Conoce BurgerQueen haciendo click [aquí](https://burger-queen-2bad6.web.app/)

# Índice

 [0. Definición de Producto](#0-definición-de-producto)
 * [1. Definición de Usuario](#1-definición-de-usuario)
 * [2. Flujo de proyecto](#2-flujo-de-proyecto)
 * [3. Historias de usuario](#3-historias-de-usuario)
	 * Historia de usuario 1
	 * Historia de usuario 2
	 * Historia de usuario 3
 * [4. Proceso de Diseño](#4-proceso-de-diseño)
	 * Prototipo de baja fidelidad
	 * Prototipo de alta fidelidad
	 * Decisiones de diseño
	 * Paleta de colores utilizada
 * [5. Investigación UX](#5-investigación-ux)
 * [6. Planificación](#6-planificación)
 * [7. Objetivos de aprendizaje](#7-objetivos-de-aprendizaje)
 * [8. Testing](#8-testing)
 * [9. Git Tags](#9-git-tags)
 * [10. Aspectos a mejorar](#10-aspectos-a-mejorar)
 

## 1. Definición de usuario

![collage burger queen](http://imgfz.com/i/NqGgDFi.jpeg)

Para definir a nuestros usuarios, fue necesario tomar en cuenta la identidad de BurgerQueen y de sus propios trabajadores. Principalmente nos centramos en meseros y cocineros a los que el tiempo los apremia y que necesitan simplificar y acelerar lo máximo posible sus ordenes. Es por esto que nuestro diseño se basó principalmente y sus necesidades, creando una app simple, intuitiva, con botones grandes y vistosos que facilitara toda interacción que se realice en ella.  

## 2. Flujo de proyecto
![flujo del proyecto](http://imgfz.com/i/uHliwUj.jpeg)

## 3. Historias de usuario

**[HISTORIA DE USUARIO 1]**
**Mesero/a debe poder tomar pedido de cliente**

 - Yo como mesero/a quiero tomar el pedido de un cliente para no depender
   de mi mala memoria, para saber cuánto cobrar, y enviarlo a la cocina
   para evitar errores y que se puedan ir preparando en orden.

##### Criterios de aceptación

* Anotar nombre de cliente.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una *tablet*

##### Definición de terminado

* Debes haber recibido *code review* de al menos una compañera.
* Haces *test* unitarios y, además, has testeado tu producto manualmente.
* Hiciste *tests* de usabilidad e incorporaste el *feedback* del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
**[HISTORIA DE USUARIO 2]**
**Jefe de cocina debe ver los pedidos**

Yo como jefe/a de cocina quiero ver los pedidos de los clientes en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a los/as meseros/as
que un pedido está listo para servirlo a un cliente.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

##### Definición de terminado

* Debes haber recibido *code review* de al menos una compañera.
* Haces *test* unitarios y, además, has testeado tu producto manualmente.
* Hiciste *tests* de usabilidad e incorporaste el *feedback* del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).

***
**[HISTORIA DE USUARIO 3]**
**Mesero/a debe ver pedidos listos para servir**

Yo como mesero/a quiero ver los pedidos que están preparados para entregarlos
rápidamente a los clientes que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

##### Definición de terminado

* Debes haber recibido *code review* de al menos una compañera.
* Haces *test* unitarios y, además, has testeado tu producto manualmente.
* Hiciste *tests* de usabilidad e incorporaste el *feedback* del usuario.
* Desplegaste tu aplicación y has etiquetado tu versión (git tag).
* Los datos se deben mantener íntegros, incluso después de que un pedido ha
  terminado. Todo esto para poder tener estadísticas en el futuro.

## 4. Proceso de Diseño

### Prototipo de baja fidelidad

![enter image description here](http://imgfz.com/i/xPWZB2M.jpeg)
*Conoce el prototipo de baja haciendo click [aquí](https://nia891374.invisionapp.com/freehand/Burger-Queen-bL2OmyHwR)*
***

### Prototipo de alta fidelidad
![enter image description here](http://imgfz.com/i/dHRIT0w.jpeg)
*Conoce el prototipo de alta haciendo click [aquí](https://www.figma.com/proto/2rjIuTtVIgK1w6dnOxjfxz/Untitled?node-id=35%3A2&viewport=413%2C351%2C0.28036612272262573&scaling=min-zoom)*
***
### Decisiones de diseño
Como podrán en ver el prototipo, quisimos basar nuestro proyecto en un restaurante con estilo vintage, el cual direccionó todo el diseño de nuestra aplicación. 
Partimos creando una paleta de colores acorde al tema, utilizando una gama de colores un tanto apagados en la saturación pero muy colorida en cuanto a su tonalidad.
Para seguir la misma linea, buscamos referentes de iconos al igual que una tipografía que nos parecieran apropiados al tema.
Esto resultó en una aplicación que nos recuerda totalmente un estilo vintage, retro y colorido.
![iconos y tipografía](http://imgfz.com/i/gBZVuPp.jpeg)
***
### Paleta de colores utilizada
![enter image description here](http://imgfz.com/i/snvwXkC.jpeg)

## 5. Investigación UX

Utilizando el prototipo de alta fidelidad, se realizaron testeos de usabilidad y de diseño en  **Maze**, hecho con  **7 testers**. 
Recibimos buenos comentarios respecto a la página, tanto en lo funcional como en lo gráfico. Sin embargo, con ese feedback pudimos recopilar respuestas en las que nos basamos para algunas mejoras en el proyecto final. Algunos de los cambios hechos fueron los siguientes:

-   Agrandar las imágenes para que el mesero o quien tome el pedido, pueda relacionarlas y encontrarlas fácilmente.
-   Agrandar la letra de los productos en cada botón.
-   Que el producto sea un botón en si, para que quede mucho más claro que se está agregando ese producto a la lista de la orden.

Para visitar el detalle de los resultados de los testeos de usabilidad haz click  [**aquí**](https://maze.design/projects/13632793/mazes/13632806/results)

## 6. Planificación
Realizamos  nuestra planificación mediante la página ***miro***, semana a semana, poniéndonos metas por día y para garantizar una buena organización del proyecto.

![Planificacion](http://imgfz.com/i/hZ5Nb3G.png)

## 7. Objetivos de aprendizaje

A continuación detallamos los objetivos de aprendizaje que logramos en este proyecto:

### HTML y CSS
* [x] Uso de HTML semántico.
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] Uso de flexbox en CSS.
* [x] Uso de Media Queries.

### JavaScript
* [x] Uso de condicionales (`if-else`| `switch`|`operador ternario`)
* [x] Uso de funciones (`parámetros`|`argumentos`| `valor de retorno`)
* [x] Manipular arrays (`filter`| `map`|`sort`| `reduce`)
* [x] Manipular objects (`key`| `value`)
* [x] Uso ES modules (`import`| `export`)
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.
* [x] Uso de callbacks.
* [x] Consumo de Promesas.

### Testing
* [x] Testeo unitario.

### Estructura del código y guía de estilo
* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y Github
* [x] Uso de comandos de git (`add`| `commit`|`pull`| `status`| `push`)
* [x] Manejo de repositorios de GitHub (`clone`| `fork`|`gh-pages`)
* [x] Colaboración en Github (`branches`| `pull requests`|`tags`)
* [ ] Organización en Github (`projects`| `issues`|`labels`| `milestones`)

### Firebase
* [x] Firestore.
* [ ] Firebase Auth.
* [ ] Firebase security rules.
* [x] Observadores. (`OnAuthStateChanged`| `onSnapshot`)


### React
* [x] `JSX`
* [x] Componentes `class` y componentes `function`
* [x] `props`
* [x] Eventos en React.
* [x] Listas y keys.
* [x] Renderizado condicional.
* [x] Elevación de estados.
* [x] `hooks`
* [x] `CSS` modules.
* [x] React Router.

### UX
* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 8. Testing
![Testing](http://imgfz.com/i/6qdomlC.jpeg)
## 9. Git tags
![GitTags](http://imgfz.com/i/S1fd5HI.png)
## 10. Aspectos a mejorar

- Hacer funcional el timer 
- Mover funciones al Context 

