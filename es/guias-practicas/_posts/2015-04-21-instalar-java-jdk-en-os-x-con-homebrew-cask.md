---
title: "Instalar Java (JDK) en OS X con Homebrew Cask"
description: En esta guía encontrarás las instrucciones detalladas para la instalación del Java Development Kit 8 y 7 en OS X Yosemite utilizando el gestor de aplicaciones Homebrew Cask.
tags: osx homebrew java
layout: post
---


El procedimiento de instalación de Java —más precisamente el del Java Development Kit— más común, se reduce a ingresar en el sitio web de Oracle, buscar el instalador adecuado para nuestro sistema operativo, descargarlo y ejecutar el instalador. Es un procedimiento sin mayores complicaciones, sin embargo cuando lo comparamos con el uso de gestores de paquetes como `apt` o `brew` (_Homebrew_) este procedimiento se parece más a una instalación con disquetes.

## Instalación de Homebrew Cask

_Homebrew Cask_ extiende la funcionalidad de _Homebrew_ y permite la instalación de aplicaciones OS X usando un sencillo comando desde la terminal. Actualmente el proyecto cuenta con 2447 Casks  —aplicaciones + versiones— entre las que podremos encontrar: Google Chrome, Mozilla Firefox, Eclipse, IntelliJ IDEA y Java.

El primer paso consiste en la instalación de _Homebrew_, para lo cual sólo necesitamos seguir las instrucciones expuestas en la entrada [Homebrew: el gestor de paquetes para OS X]({% post_url 2015-03-24-homebrew-gestor-paquetes-osx %}).

Usualmente es una buena idea verificar que tengamos la última versión de _Homebrew_ y del listado de formulas —paquetes—.

{% highlight console %}
$ brew update
Already up-to-date.
{% endhighlight %}

Continuamos con la instalación de _Homebrew Cask_ ejecutando el siguiente comando en la terminal.

{% highlight console %}
$ brew install caskroom/cask/brew-cask
{% endhighlight %}

## Instalación de Java 8 – JDK

Y ahora procedemos a instalar el JDK. En el momento de escribir esta entrada la última versión de java liberada por Oracle es la `1.8.0_45` la cual también es la versión que encontraremos disponible como _Cask_.

{% highlight console %}
$ brew cask install java
{% endhighlight %}

Sí es la primera vez que instalamos un _Cask_ entonces nos solicitará nuestra clave de usuario (sudo), luego iniciará la descarga de los binarios y posteriormente se realizará la instalación. El instalador finalizará su tarea con dos mensajes similares a estos:

{% highlight console %}
==> installer: The install was successful.
🍺  java staged at '/opt/homebrew-cask/Caskroom/java/1.8.0_45' (2 files, 222M)
{% endhighlight %}

Sí queremos verificar la instalación, simplemente ejecutamos:

{% highlight console %}
$ java -version
java version "1.8.0_45"
Java(TM) SE Runtime Environment (build 1.8.0_45-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.45-b02, mixed mode)
{% endhighlight %}

## Instalación de Java 7 – JDK

Sí necesitamos instalar una versión de una aplicación (_Cask_) que no sea la última disponible en el repositorio principal, también podemos usar el repositorio de versiones, donde se podrán encontrar versiones alternativas de las aplicaciones.

Por ejemplo, en el repositorio de versiones están disponibles actualmente las versiones de Java: `1.6.0_65` (Apple JRE) y `1.7.0_79` (Oracle JDK). Procedamos a instalar Java 7.

Primero debemos adicionar el listado de versiones alternativas a _Homebrew_.

{% highlight console %}
$ brew tap caskroom/versions
{% endhighlight %}

Luego instalamos Java 7.

{% highlight console %}
$ brew cask install java7
{% endhighlight %}

Y con esto ya tenemos instaladas las versiones 8 y 7 de Java. La ruta usual de instalación del JDK en OS X es al interior de la carpeta: `/Library/Java/JavaVirtualMachines`. Y este sería su contenido:

{% highlight console %}
$ cd /Library/Java/JavaVirtualMachines
$ ls -l
total 0
drwxr-xr-x  3 root  wheel  102 Apr 21 16:25 jdk1.7.0_79.jdk
drwxr-xr-x  3 root  wheel  102 Apr 20 18:27 jdk1.8.0_45.jdk
{% endhighlight %}

## Cambiar entre las versiones de Java

En la entrada [Gestionar múltiples versiones de Java en OS X con jEnv]({% post_url 2015-06-23-multiples-versiones-java-osx-jenv %}) revisaremos una manera práctica y eficiente de gestionar varias versiones de Java en OS X.

