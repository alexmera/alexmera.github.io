---
title: "Programación funcional: Conceptos básicos"
description: >
    Una breve introducción a los conceptos básicos de la programación funcional: los efectos secundarios o colaterales, la pureza de una función y la transparencia referencial. 
tags: progfun
layout: post
---

Hace un tiempo —y debido a un interés renovado en el tema— me propuse a estudiar seriamente sobre la programación reactiva y su manifiesto. Una cosa llevo a la otra y de un momento a otro estaba enfrentándome a la programación funcional —un enfrentamiento que perdí sin dignidad—, recuerdo no entender absolutamente nada, era como si de un momento a otro se me hubiese olvidado por completo programar —y de hecho así era—. Entonces debí afrontar la realidad, que no tenia ni idea de lo que era la programación funcional.


Debo admitir que es un tema desafiante, pero no por su naturaleza —la cual es muy simple— sino por que exige un **cambio profundo en la mentalidad** de los programadores que estamos demasiado habituados a programar de manera imperativa —que somos la mayoría—. Dicho esto, y sí realmente estas dispuesto a darle una oportunidad real a la PF, debes prepararte para ser nuevamente un principiante, sin importar cuantos años de experiencia tengas como programador.

Mi intención al escribir esta entrada —y probablemente muchas más— es compartir los conocimientos adquiridos sobre el tema durante mi proceso de aprendizaje y espero poder hacerlo de una manera clara y amena —lo puedo intentar ¿no?—. Así que manos a la obra.


## ¿Qué es la programación funcional?

La programación funcional (PF) —en términos simples e informales— la podríamos definir como un paradigma de programación basado en la premisa de construir programas utilizando únicamente **funciones puras**, es decir funciones que no tengan **efectos secundarios o colaterales**.

Hasta aquí esta definición no nos aporta nada nuevo, pero nos permite descomponer su significado utilizando sus conceptos clave.

### Efectos secundarios o colaterales

Una función tiene un efecto secundario sí hace algo **adicional** a simplemente entregar (retornar) su resultado, por ejemplo:

- Modificar una variable.
- Asignar un campo en un objeto.
- Lanzar una excepción o finalizar con un error.
- Escribir en la consola o leer entradas del usuario.
- Leer o escribir en un archivo.
- Dibujar en la pantalla.

En este momento te estarás preguntando sí es acaso posible escribir programas que tengan un uso real con todas estas restricciones. Por ahora vamos a conformarnos con saber que sí es posible; que la programación funcional es una restricción al **como** escribimos los programas y no al **qué** podemos expresar con ellos.

Veamos el siguiente ejemplo **ilustrativo** con Java —sólo con el propósito de hacer más clara la explicación—:

{% highlight java linenos %}
public class Entero {

    private int a;

    public Entero(int a) {
        this.a = a;
    }

    public Entero adicionar(int b) {
        this.a = this.a + b;
        return this;
    }

    public int valor() {
        return this.a;
    }

    @Override
    public String toString() {
        return Integer.toString(a);
    }
}
{% endhighlight %}

La clase `Entero` encapsula un valor primitivo de tipo `int` y se compone de un constructor (`Entero(int a)`) que recibe el valor primitivo, una función —realmente sería un método en el mundo de  Java/POO, pero vamos a tomarnos esta libertad— que obtiene el valor encapsulado (`int valor()`) y la función `Entero adicionar(int b)` la cual analizaremos a continuación:

- En la línea 10 se realiza la suma entre el valor actual de `a` (valor encapsulado del objeto) y el argumento `b` de la función y el resultado de esta operación es asignado como nuevo valor —cambio de estado— de `a`.
- En la línea 11 se devuelve la misma instancia del objeto, con su valor encapsulado modificado, como respuesta.

Entonces, dado que la función `adicionar` además de devolver el resultado de la operación aritmética también modifica el valor encapsulado del objeto, podemos afirmar que **la función tiene efectos secundarios**.    

### Funciones (puras)

Una función es pura sí **carece** de efectos secundarios.

Continuando con el ejemplo anterior, vamos a agregar a `Entero` la siguiente función:

{% highlight java linenos %}
public Entero adicionarSinES(int b) {
    return new Entero(this.a + b);
}
{% endhighlight %}

Como se puede apreciar en la línea 2, la función `adicionarSinES` ejecuta la suma entre el valor actual del objeto `a` y el argumento de la función `b`; el resultado de la operación es utilizado como argumento para el constructor de la clase `Entero` y finalmente esta nueva instancia es entregada como el resultado de la función. En este caso la función se limita a entregar un resultado, incluso sin cambiar el estado del objeto, por lo tanto podemos afirmar que **la función no tiene efectos secundarios**.

Ahora ejecutemos las funciones para que evidenciemos las diferencias.

Con efectos secundarios:

{% highlight java linenos %}
public static void main(String[] args) {
    Entero en1 = new Entero(5);
    Entero en2 = en1.adicionar(8);
    Entero en3 = en2.adicionar(2);

    System.out.println(en1);// print: 15
    System.out.println(en2);// print: 15
    System.out.println(en3);// print: 15
}
{% endhighlight %}

Sin efectos secundarios:

{% highlight java linenos %}
public static void main(String[] args) {
    Entero en1 = new Entero(5);
    Entero en2 = en1.adicionarSinES(8);
    Entero en3 = en2.adicionarSinES(2);

    System.out.println(en1);// print: 5
    System.out.println(en2);// print: 13
    System.out.println(en3);// print: 15
}
{% endhighlight %}

Como se puede observar, la función que tiene efectos secundarios ocasiona que las variables `en1`, `en2` y `en3` compartan su estado (valor). Y por el contrario, la función “pura” construye una instancia independiente para cada variable.

La idea de funciones puras se puede formalizar usando el concepto de **transparencia referencial**.

#### Transparencia referencial

La transparencia referencial no es una propiedad exclusiva de las funciones, es una propiedad de las expresiones en general. Por ejemplo, `6 + 3` es una expresión que aplica la función pura `+` a los valores `6` y `3`. Cada vez que evaluemos esta expresión el resultado siempre será el mismo: `9`. De hecho, sí en un programa encontramos la expresión `6 + 3` podríamos libremente **sustituirla** por su resultado `9` sin que esto represente un cambio en el significado del programa.

Entonces, podríamos decir que una función es _pura_ sí al invocarla con argumentos _referencialmente transparentes_ la función también es _referencialmente transparente_. Por lo tanto, todo lo que una función puede hacer es representado por su valor de retorno.

## Lecturas recomendadas

- [Principios de programación funcional en Scala](https://www.coursera.org/course/progfun), Martin Odersky. _Escuela Politécnica Federal de Lausana – Coursera.org_ (Ingles).
- [Functional Programming in Scala](http://www.manning.com/bjarnason/), Paul Chiusano and Rúnar Bjarnason. _Manning Publications, 2014_ (Ingles).

## Conclusión

En esta entrada hemos intentado definir de una manera sencilla —espero— lo qué es la programación funcional y los conceptos clave de la misma. Sin embargo aún queda un largo camino por delante, apenas arañamos el **Qué** y espero que podamos continuar y zambullirnos en el **Como**.