---
title: "GRADLE: Build Tool – Presentación"
description: En esta presentación sobre las herramientas de build para la JVM se mencionan herramientas como Ant, Ivy y Maven; y se crea una aplicación web con Spring MVC y Gradle.  
tags: java spring-mvc gradle maven ant
layout: post
---

<img src="/img/presentacion-gradle-build-tool-image_1024x768.jpg" class="img-responsive" alt="Presentación Gradle por Alexander Mera" />

Esta es la presentación de la charla que ofrecí sobre _build tools_ y especificamente sobre **Gradle**. La charla fue organizada por el <a href="http://www.meetup.com/cali-java-users-group/" target="_blank">Grupo de Usuarios de Java de Cali (@CLOJUG)</a> y realizada el día 23 de Mayo de 2015 en las instalaciones de la **Universidad Javeriana (@javerianacali)**. 

## La presentación

- ¿Por que necesitamos una _build tool_?
- La evolución de las _build tools_ para Java.
	- Apache Ant + Ivy
	- Apache Maven
	- Gradle
- ¿Qué es la gestión de dependencias?
	- Apache Maven
	- Ivy
- Introducción a Gradle: Project Automation Tool
	- Principales características y funcionalidades
	- Instalación y configuración
	- Gradle Wrapper
- Demostración: Aplicación Spring MVC sencilla.

<iframe src="//www.slideshare.net/slideshow/embed_code/key/dmih6UWaYX5AYg" width="510" height="420" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/alex.mera/gradle-clojug23-may2015" title="Gradle: BUILD SUCCESSFUL – CLOJUG 23 MAYO 2015" target="_blank">Gradle: BUILD SUCCESSFUL – CLOJUG 23 MAYO 2015</a> </strong> from <strong><a href="//www.slideshare.net/alex.mera" target="_blank">Alexander Mera</a></strong> </div>

## El código fuente

El código fuente de los fragmentos presentados, así como el de la aplicación web de demostración se pueden consultar y descargar desde el repositorio de GitHub: [https://github.com/alexmera/gradle-clojug-may2015](https://github.com/alexmera/gradle-clojug-may2015). Para descargar el código fuente usando git:

{% highlight console %}
$ git clone https://github.com/alexmera/gradle-clojug-may2015.git
Cloning into 'gradle-clojug-may2015'...
remote: Counting objects: 98, done.
remote: Compressing objects: 100% (66/66), done.
remote: Total 98 (delta 11), reused 95 (delta 11), pack-reused 0
Unpacking objects: 100% (98/98), done.
Checking connectivity... done.
{% endhighlight %}

### Ejecutar la aplicación web de demostración

Se debe ingresar a la sub-carpeta `gradle-demo`. 

{% highlight console %}
$ cd gradle-clojug-may2015/gradle-demo
~/gradle-clojug-may2015/gradle-demo
{% endhighlight %}

Y en interior de ella se debe ejecutar el comando:

{% highlight console %}
$ ./gradlew jettyEclipseRun
:compileJava
:processResources
:classes
:war
:jettyEclipseRun
Empty contextPath
SLF4J: Class path contains multiple SLF4J bindings.
SLF4J: Found binding in [jar:file:/Users/alex/temp/gradle-clojug-may2015/gradle-demo/build/tmp/jettyEclipseRun/webapp/WEB-INF/lib/logback-classic-1.1.3.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: Found binding in [jar:file:/Users/alex/.gradle/wrapper/dists/gradle-2.4-all/6r4uqcc6ovnq6ac6s0txzcpc0/gradle-2.4/lib/gradle-core-2.4.jar!/org/slf4j/impl/StaticLoggerBinder.class]
SLF4J: See http://www.slf4j.org/codes.html#multiple_bindings for an explanation.
SLF4J: Actual binding is of type [ch.qos.logback.classic.util.ContextSelectorStaticBinder]
!RequestLog

Hit <ENTER> to reload the webapp.
Hit r + <ENTER> to rebuild and reload the webapp.
Hit R + <ENTER> to rebuild the webapp without reload

> Building 80% > :jettyEclipseRun > Running at http://localhost:8080/
{% endhighlight %}

Esta `task`de Gradle desplegará la aplicación en un servidor web embebido (_Jetty 9_) y se ejecutará en la URL: `http://localhost:8080`.
