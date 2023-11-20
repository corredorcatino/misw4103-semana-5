# Equipo 27

- ALBENIZ MARTINEZ RESTREPO - a.martinezr23@uniandes.edu.co
- MIGUEL ANGEL AVILA TORRES - ma.avilat12@uniandes.edu.co
- DAVID LEONARDO ESLAVA RINCON - d.eslavar@uniandes.edu.co
- GIANCARLO CORREDOR CATINO - g.corredor2@uniandes.edu.co

# Pre-requisitos
- Node.js >= 18

# Instrucciones
Inicializar ghost con las siguientes credenciales, el nombre del sitio no interesa.

| username                         | password       |
|:--------------------------------:|:--------------:|
| e2e@thesoftwaredesigncompany.com | Contraseña123# |

## Cypress

### Setup cypress
- Entrar a la carpeta `cypress-installation`
- Ejecutar
    ```shell
    npm install
    ```

### Iniciar cypress
- Ejecutar
    ```shell
    npx cypress open --e2e --browser chrome
    ```
    o también
    ```shell
    npm run cypress:runner
    ```

### Ejecutar tests sobre GHOST desplegado en docker
#### Para GHOST 5.68.0
Se ha de traer ghost arriba con el siguiente comando (comprobado para fedora linux)

    docker run -d --name some-ghost -e NODE_ENV=development -e url=http://localhost:2368 -p 2368:2368 ghost:5.68.0

Al momento de ejecutar nuestros tests para GHOST 5.68.0 lo podemos conseguir
mediante la ejecución de todos los tests excepto `tags_v5_0.js` ya que estos escenarios
no son compatibles con 5.68.

#### Para GHOST 5.0.0
se ha de traer ghost arriba con el siguiente comando (comprobado para fedora linux)

    docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_5.0.0 ghost:5.0.0

El cual nos ayudara a traer GHOST ghost:5.0.0

Para ejecutar los escenarios de GHOST 5.0.0 ejecutamos el archivo `tags_v5_0.js`, este
contiene +10 casos a ser ejecutados.


## Kraken

- Entrar a la carpeta kraken
- Ejecutar `npm install``
- Definir que versión de ghost se desea testear
- Instalar ghost, se recomienda usar el siguite comando:
- `docker run -d -e url=http://localhost:2368 -p 2368:2368 --name ghost_5.0.0 ghost:5.0.0`
- En esta sección del comando puede definir la versión `--name ghost_5.0.0 ghost:5.0.0`
- Las pruebas tienen definido que se usara el puerto 2368 para ghost, si se cambia se tendría que modificar en los test.
- Al interior del proyecto de kraken navegar hasta el archivo `kraken/features/web/step_definitions/step.js`
- En la línea 3 hay una constante que se llama versión, por favor define la versión que elegiste previamente `const version = "v5.0.0"` Esto permitira organizar los screenshots de las pruebas.
- Para correr los test `./node_modules/kraken-node/bin/kraken-node run`
