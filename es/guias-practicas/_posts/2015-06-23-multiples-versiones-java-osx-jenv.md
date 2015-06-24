---
title: "Gestionar múltiples versiones de Java en OS X con jEnv"
description: Con jEnv podremos configurar y seleccionar la versión de Java que deseamos usar en un momento determinado, incluso de manera automática por cada proyecto.
tags: java osx homebrew
layout: post
---

Como programadores Java es muy común que necesitemos trabajar en más de un proyecto a la vez y es muy probable que no todos dependan de la última versión de Java y si además han tenido la “oportunidad desafiante” de mantener algún software legado entenderán que cambiar constantemente de versiones del JDK sin las herramientas adecuadas puede convertirse en una tarea “vacía y sin propósito”.

Pero como para (casi) toda necesidad de un programador existe un proyecto _open source_ de otro(s), entonces tenemos [**jEnv**](http://www.jenv.be/) una herramienta que permite de una manera “elegante” gestionar múltiples versiones de Java/JDK, que incluso permite que asignemos por defecto una versión diferente a la **global** a un proyecto especifico (**local**).

## Instalación

###### Homebrew
Mi método preferido, si aún no han instalado **Homebrew** pueden consultar la entrada [Homebrew: el gestor de paquetes para OS X]({% post_url 2015-03-24-homebrew-gestor-paquetes-osx %}) y también les podría interesar [Instalar Java (JDK) en OS X con Homebrew Cask]({% post_url 2015-04-21-instalar-java-jdk-en-os-x-con-homebrew-cask %}).

{% highlight console %}
$ brew update
Already up-to-date.
$ brew install jenv
==> Downloading https://homebrew.bintray.com/bottles/jenv-0.4.3.yosemite.bottle.
######################################################################## 100.0%
==> Pouring jenv-0.4.3.yosemite.bottle.tar.gz
==> Caveats
To enable shims and autocompletion add to your profile:
  if which jenv > /dev/null; then eval "$(jenv init -)"; fi

To use Homebrew's directories rather than ~/.jenv add to your profile:
  export JENV_ROOT=/usr/local/opt/jenv

==> Summary
🍺  /usr/local/Cellar/jenv/0.4.3: 74 files, 308K
{% endhighlight %}

###### Git clone
{% highlight console %}
$ git clone https://github.com/gcuisinier/jenv.git ~/.jenv
{% endhighlight %}

## Configuración

###### Scripts de configuración

{% highlight console %}
//- Para Bash:
$ echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.bash_profile
$ echo 'eval "$(jenv init -)"' >> ~/.bash_profile
//- Para Zsh:
$ echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
$ echo 'eval "$(jenv init -)"' >> ~/.zshrc
{% endhighlight %}

{% highlight console %}
$ exec $SHELL -l
{% endhighlight %}

###### Máquinas virtuales – JVM

Se deben adicionar a _jEnv_ las máquinas virtuales actualmente instaladas en nuestro sistema (y cada vez que instalemos una nueva).

{% highlight console %}
$ cd /Library/Java/JavaVirtualMachines/
$ jenv add jdk1.7.0_79.jdk/Contents/Home
oracle64-1.7.0.79 added
1.7.0.79 added
1.7 added
$ jenv add jdk1.8.0_45.jdk/Contents/Home
oracle64-1.8.0.45 added
1.8.0.45 added
1.8 added
$ jenv rehash
{% endhighlight %}

## Uso

###### Listado de JDKs gestionados

{% highlight console %}
$ jenv versions
  system
  1.7
  1.7.0.79
* 1.8 (set by /Users/alex/.jenv/version)
  1.8.0.45
  oracle64-1.7.0.79
  oracle64-1.8.0.45
{% endhighlight %}

###### Configurar versión global

La versión **global** será la utilizada por todo el sistema, excepto en las carpetas donde se asigne una versión local.

{% highlight console %}
$ jenv global 1.7
$ jenv versions
  system
* 1.7 (set by /Users/alex/.jenv/version)
  1.7.0.79
  1.8
  1.8.0.45
  oracle64-1.7.0.79
  oracle64-1.8.0.45
$ java -version
java version "1.7.0_79"
Java(TM) SE Runtime Environment (build 1.7.0_79-b15)
Java HotSpot(TM) 64-Bit Server VM (build 24.79-b02, mixed mode)
{% endhighlight %}

###### Configurar versión local

La versión **local** será utilizada únicamente al interior de la carpeta (por proyecto) donde se ejecute el comando.

{% highlight console %}
$ mkdir with-java8
$ cd with-java8
$ jenv local 1.8
$ java -version
java version "1.8.0_45"
Java(TM) SE Runtime Environment (build 1.8.0_45-b14)
Java HotSpot(TM) 64-Bit Server VM (build 25.45-b02, mixed mode)
$ jenv versions
  system
  1.7
  1.7.0.79
* 1.8 (set by /Users/alex/with-java8/.java-version)
  1.8.0.45
  oracle64-1.7.0.79
  oracle64-1.8.0.45
{% endhighlight %}

<p>Pueden ver una demostración (asciicast) de la ejecución de este comando en <a href="https://asciinema.org/a/22328" target="_blank">Asciinema.org</a>.</p>

###### Plugins

JEnv ofrece plugins que permiten que herramientas como _ant_ o _maven_ identifiquen que JDK esta actualmente activo.

{% highlight console %}
$ jenv plugins
ant
export
golo
gradle
grails
groovy
lein
maven
sbt
scala
springboot
$ jenv enable-plugin maven
maven plugin activated
$ jenv disable-plugin maven
maven disabled
{% endhighlight %}

###### Otros comandos

La lista completa de configuraciones y comandos la pueden consultar en el [GitHub del proyecto](https://github.com/gcuisinier/jenv).
 


