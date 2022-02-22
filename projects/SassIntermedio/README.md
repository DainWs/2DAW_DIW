# Grid and Sass project - DIW
**Author:** Jose Antonio Duarte Perez

## Commands
To compile the project use: `npm run compile`
And for sass watch use: `npm run sass`

## Requirements

### Fuentes
- Titillium Web con  pesos 200, 300, 400, 600, 700, 900

### Iconos
Iconos Font-awesome
https://fontawesome.com/account/cdn

### Favicon
Imagen hotel tipo svg. 
Puedes descargarla de fontawesome o sitio similar

### Colores
#### Colores primarios
Principal: #730039 
Principal claro: hsla(330, 100%, 23%, 0.55);
Principal oscuro: hsla(330, 100%, 23%, 0.85);
#### Colores secundarios
Secundario: #ffc513; 
Secundario claro: hsla(45, 100%, 54%, 0.55);
Secundario oscuro: rgba(255, 196, 19, 0.85);
#### Colores terciarios
Terciario: #ff724c 
Terciario claro: hsla(13, 100%, 65%, 0.55);
Terciario oscuro: rgba(255, 115, 76, 0.85);
#### Colores cuaternarios
Cuaternario: #f6eedf
Cuaternario claro: hsla(39, 56%, 92%, 0.55); 
Cuaternario oscuro: hsla(39, 56%, 92%, 0.85);

### Valores iniciales
Establecemos valores iniciales, por ejemplo:
- Fuente principal (Font-family)
- Tamaño de la fuente en raíz (:root) (Font-size): 10px (62.5% si quiero ser más responsive)
- Alto de línea (line-height): 1.8
- Todos los margin y paddings inicializados a 0
- Para todos los elementos establecemos box-sizing: border-box (aconsejado para contenedores flex)

### Efectos
Menú hamburguesa: aparece en todas las vistas. 
Botón hamburguesa siempre en el mismo lugar
Al hacer clic: las opciones de menú aparecen en el centro con fondo transparente y ocupa toda la vista
Podemos hacer los efectos que queramos para hacer el aspa.

### Herramientas a usar:
Herramienta principal: Grid y media querie
Otras herramientas: flexbox, transformaciones, animaciones, posición, ….

### Secciones
**Header -> menú navegación, logo, presentación sitio**

**Sección booking información**
**Sección booking reserva**

**Sección villas**
**Sección publicitaria, lema, …**

**Sección eventos**
**Sección galería**
**Sección características**

**Sección testimonios**
**Footer**

La única sección que ocupa todo el alto de la vista es header. Para el resto de secciones su alto depende del contenido 

### ¿Cómo trabajar?

En este ejemplo, body es el contenedor grid principal. En el hay que definir el grid principal que contendrá todas las secciones del ejercicio.

Cada sección, primero tiene que ser colocada en el grid principal. Después hay que maquetarla, en este caso podemos decidir usar otro grid o bien usar flexbox según nos convenga. Una vez maquetada la sección añadimos los estilos específicos de elementos y terminamos con los efectos, si los hay.

### ¿Cuándo hacer la media query?
Tenemos dos opciones: 
O bien, primero hacemos todo desktop y después añadimos las MQ con las secciones que necesiten una adaptación.
O bien, por cada sección, una vez terminada, hacemos la adaptación a la MQ.

En cualquier caso, hay que respetar el orden siguiente en tu documento CSS:

Valores iniciales
Diseño desktop

Diseño hasta 800px
 /* aquí solo hay q escribir aquello q cambia, el resto no es necesario*/

Diseño hasta 600px
/* aquí solo hay q escribir aquello q cambia, el resto no es necesario*/

Diseño hasta 400px
/* aquí solo hay q escribir aquello q cambia, el resto no es necesario*/

El grid principal no cambia. No tengo que definir un grid diferente en cada MQ, solo tengo q ubicar los ítems de forma distinta.

