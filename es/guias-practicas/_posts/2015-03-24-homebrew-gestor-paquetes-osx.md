---
title: "Homebrew: el gestor de paquetes para OS X"
description: >
    En esta guía encontrarás las instrucciones detalladas para la instalación de Homebrew, el gestor de paquetes para el sistema operativo OS X Yosemite.
tags: osx homebrew packages
layout: post
---

Sí eres un programador de cualquier tipo —web, móvil, escritorio— y tu estación de trabajo es algún Mac de Apple —¿Hackintosh?— entonces seguramente debes estar habituado a la instalación y actualización de entornos de ejecución, lenguajes de programación, herramientas, bibliotecas y un largo etc. Asumo que también debes estar habituado al caos que puede llegar a ser “gestionar” esta labor de manera adecuada, así que lo más conveniente sería delegar esta responsabilidad a una herramienta especializada; en nuestro caso: [Homebrew](http://brew.sh/).

## ¿Qué es Homebrew?

Homebrew es un gestor de paquetes para el sistema operativo OS X de Apple que permite descargar, instalar, actualizar, remover y gestionar versiones de manera rápida y eficiente para un gran número de paquetes de software, herramientas y bibliotecas de desarrollo.

## Instalación

Esta guía de instalación se realizó utilizando OS X 10.10.2.

### Command Line Tools for Xcode

Primero debemos instalar el [Command Line Tools for Xcode](https://developer.apple.com/downloads). En una ventana de la terminal ejecutamos:

{% highlight console %}
$ xcode-select --install
xcode-select: note: install requested for command line developer tools
{% endhighlight %}

En la ventana que se despliega posteriormente seleccionamos la opción: `Instalar` y esperamos a que se realice la descarga e instalación.

### Homebrew

Ahora instalamos la herramienta en cuestión. En una ventana de la terminal ejecutamos:

{% highlight console %}
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

Y seguimos las instrucciones, lo primero que nos solicita el instalador es: `Press RETURN to continue or any other key to abort` para lo cual presionamos la tecla `ENTER`. El instalador continúa y nos solicita nuestra clave de usuario —debe ser un usuario administrador, y usualmente lo es— `To proceed, enter your password, or type Ctrl-C to abort.` ingresamos nuestra clave y esperamos a que finalice la instalación.

Para asegurarnos que todo esta en orden ejecutamos la herramienta de auto-diagnostico incluida `brew doctor` y el resultado deberá ser algo similar a lo siguiente:

{% highlight console %}
$ brew doctor
Your system is ready to brew
{% endhighlight %}

### Actualizando Git

Mi recomendación —muy personal— es que lo primero que debes hacer con tu nueva instalación de Homebrew es actualizar la versión de Git. La versión instalada por defecto en OS X Yosemite de Git —más precisamente con el Command Line Tools— es la versión `1.9.5 (Apple Git-50.3)` y en el momento de escribir esta entrada la última versión oficial liberada de Git es la `2.3.3`.

Entonces, para actualizar Git sólo debemos ejecutar en la terminal el siguiente comando:

{% highlight console %}
$ brew install git
{% endhighlight %}

Cuando la instalación finalice debemos cerrar la ventana actual de la terminal y abrir una nueva, en la cual podremos verificar que la versión de Git fue actualizada:

{% highlight console %}
$ git --version
git version 2.3.3
{% endhighlight %}

## Comandos útiles

La instalación —y creación— de paquetes se realiza a través de lo que en Homebrew denominan como **FÓRMULAS**.

- `brew install <fórmula>` Instala la fórmula —paquete— seleccionado.
- `brew uninstall <fórmula>` Desinstala la fórmula seleccionada.
- `brew list` Listado de fórmulas instaladas.
- `brew doctor` Herramienta de diagnostico.
- `brew update` Actualiza el listado de fórmulas —paquetes— disponibles para ser instalados.
- `brew search <palabra clave>` Buscar fórmulas disponibles. También puedes consultar los paquetes disponibles en: [http://braumeister.org](http://braumeister.org/ "http://braumeister.org").
- `brew upgrade <fórmula>` Actualiza a la última versión disponible la fórmula —paquete— seleccionada.
