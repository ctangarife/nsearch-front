# Docker Nsearch

Este proyecto se encarga de compilar una imagen de python:3.7.4-alpine3.10, tomando como referencia ``https://github.com/jonlabelle/docker-nmap`` como base para instalar nmap y el proyecto raíz de ``https://github.com/jtibaquira/nsearch``


## Compilar la imagen
``` docker-compose build```

## Montar contenedor con docker-compose
``` docker-compose up -d```

Una vez el contenedor se encuentre arriba se debe ingresar con el siguiente comando

``` docker exec -it nsearch-docker /bin/bash ``

Y ejecutar ``nsearch`` como comando

```
> nsearch
```

Para la primera ejecución al momento de evidenciar el error "database is locked", se debe pausar la ejecución del script con "CTRL + c" e iniciar nuevamente 

```
> nsearch
```