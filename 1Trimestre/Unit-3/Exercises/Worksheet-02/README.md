# Ejercicios selectores
## Actividad 1
Crea una página web y vincúlale una hoja de estilos que contenga lo siguiente:
- El cuerpo del documento debe usar fuente Verdana 10pt, color negro. El color de fondo debe ser gris.

Además crea elementos de tres clases diferentes:
- **.naranja**: el texto será naranja con fondo azul. Aplícalo a párrafos.
- **.consola**: texto verde, fuente Courier, fondo negro. Aplícalo a párrafos.
- **.importante**: se aplica a enlaces. Hace que los enlaces no tengan subrayado y que cuando el ratón se coloca encima les cambia el fondo a amarillo.

Crea también un elemento id `#título` para aplicarlo a una etiqueta `<h1>`, para que use fuente Verdana tamaño 40pt y color gris oscuro

## Actividad 2:
Dado el siguiente código HTML
`
<ul>
 <li><a href="#">United Kingdom</a></li>
 <li><a href="#">Germany</a></li>
 <li><a href="#">Finland</a></li>
 <li><a href="#">Russia</a></li>
 <li><a href="#">Spain</a></li>
 <li><a href="#">Poland</a></li>
</ul>
`
Escribe las reglas CSS necesarias para:
- la lista aparezca sin viñeta
- relleno de la lista 0px
- relleno cada elemento 3px
- margen inferior de cada elemento 5px
- usa pseudo clases para
- añadir franjas tipo cebra a cada enlace de la lista. Usa colores gris claro.
- enlaces no visitados: color azul
- enlaces visitados: color morado
- sobre el enlace: color amarillo
- enlace active: color verde 

## Actividad 3
Dado el siguiente código HTML, y utilizando las pseudo-clases `first-child`, `first-of-type`, `nth-of-type`, `nth-last-of-type`, `last-of-type` y/o `last-child` conseguir el siguiente resultado:
`
 <ul>
 <li>Primero</li>
 <li>Segundo</li>
 <li>Tercero</li>
 <li>Cuarto</li>
 <li>Quinto</li>
 </ul>
`

## Actividad 4
El HTML que sigue es para una lista simple. Tienes que darle formato siguiendo las siguientes reglas:
- los elementos de la lista deben aparecer al menos 20 píxeles desde el borde izquierdo de la página
- los elementos de la lista estarán separados al menos10 píxeles entre sí
- centrar el encabezado
- mantener la lista al menos 50 píxeles del encabezado
- los títulos de los libros en la lista no deben mostrarse en una fuente serif
- el encabezado debe usar una fuente diferente a la lista
- el texto del encabezado debe ser rojo oscuro
- rompe las reglas CSS en dos archivos .css diferentes. Un archivo debe contener las reglas de espaciado, el otro las reglas de fuentes o colores. Enlazar ambos en tu documento HTML.
- En lugar de números, haz que los elementos de la lista estén ordenados alfabéticamente
- Copia la lista en otra diferente. Esta lista será desordenada. Aplica un estilo a los elementos de la lista para que tengan puntos de viñeta cuadrada. El fondo de la lista será Amarillo claro. El fondo de cada element será gris. 
- Haz otra copia. La viñeta será una imagen.
`
<body>
    <h1>Books</h1>
    <ol>
        <li>A la Recherche de Temps Perdu</li>
        <li>Middlemarch</li>
        <li>Ulysses</li>
        <li>Don Quixote</li>
        <li>Moby Dick</li>
        <li>Hamlet</li>
        <li>War and Peace</li>
        <li>The Odyssey</li>
        <li>The Great Gatsby</li>
        <li>The Divine Comedy</li>
        <li>Madame Bovary</li>
        <li>The Brothers Karamazov</li>
        <li>One Hundred Years of Solitude</li>
        <li>The Iliad</li>
        <li>Lolita</li>
        <li>Anna Karenina</li>
        <li>Crime and Punishment</li>
        <li>The Sound and the Fury</li>
        <li>Wuthering Heights</li>
        <li>Le Rouge et le Noir</li>
    </ol>
<body>
`

## Actividad 5
Para el HTML que sigue escribe las siguientes reglas CSS
- Todos los div tienen color de fondo gris claro
- Todos los elementos a que están dentro de un div tienen color de fondo azul y texto blanco
- Añade esta regla a tu CSS. Comprueba el resultado y explica por qué ocurre.
`
div div div a{
    background-color:red;
    color:yellow;
}
`

- Los elementos cuyo identificador es abuelo, tendrán un borde azul de 1 px. 
- Todos los div que son hijos de abuelo tienen borde rojo de 2px.
- Los párrafos adyacentes directos a la `.padre` tendrán fondo verde lima (esto es párrafo3 y párrafo5).
- Los párrafos adyacentes a la `.madre` tendrán fondo rosa claro
- Todos los enlaces que tienen atributo title tienen fondo rojo
- Todos los enlaces que no tienen el atributo `target=_blank` tienen fondo morado
`
<div id="abuelo">
    <p>Párrafo 1</p>
    <p>Párrafo 2</p>
    <div class="padre">
        <div class="hijo"><a title="Título hijo1" target="_blank">HIJO1</a></div>
        <div class="hijo"><a>HIJO2</a></div>
        <div class="hijo"><a title="hijo3" target="_blank">HIJO3</a></div>
    </div>
    <p>Párrafo 3</p>
    <p>Párrafo 4</p>
    <div class="padre">
        <div class="hijo"><a title="hijo4" target="_blank">HIJO4</a></div>
        <div class="hijo"><a title="hijo5" target="_blank">HIJO5</a></div>
        <div class="hijo"><a>HIJO6</a></div>
    </div>
    <p>Párrafo 5</p>
    <p class="madre">Párrafo 6</p>
    <p>Párrafo 7</p>
    <div>Párrafo 8</div>
    <p>Párrafo 9</p>
</div>
`

## Actividad 6
¿qué hacen las reglas
`
.hermano + .padre div {
    font-size: xx-large;
    margin-left: 60px;
} 

div#diva ~ p {
    background-color:lightgreen;
}

div#diva + p {
    background-color:lightgreen;
}

div#diva p {
    background-color:lightgreen;
}
`