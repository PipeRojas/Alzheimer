# f-Health
___

URL: https://alzheimerpersistence.hrokuapp.com/

## Diseño e implementación de una plataforma genérica para el desarrollo de aplicaciones de e-Health y m-Health 

## fHealth API REST

Tipo de datos manejado:  ***JSON***

### Recursos

El API ofrece el siguiente recurso principal:

- patients

Estos se pueden usar solos así:

### Componentes de los recursos

| Recurso | Metodo | Descripción | Parametro | Retorno |
| :------ | :----- | :---------- | :-------- | :------ |
| `/patients/check` | **GET** | Retorna el estado en el que se encuentra el servidor | | **String** |
| `/patients/{idpatient}/resumes` | **GET** | Retorna el reporte de todos los juegos jugados por el paciente dado | **Integer**| **List<DataPOJO>** |
| `/pacientes/resumes` | **GET** | Retorna el reporte de todos los juegos jugados por todos los pacientes | | **List<DataPOJO>** |
| `/pacientes/{idpatient}/resume` | **POST** | Guarda el resumen de juego dado para el recurso de paciente específicado por el id| **Integer, DataPOJO** | |


### Parametros de URL

| Nombre | Tipo | Descripción |
| :----- | :--- | :---------- |
| *idpatient* | **Integer**| Número de identificación del paciente |

### Forma de datos

#### Paciente

	{	
		"patientName":String,
		"patientLastName":String,
		"gameName":String,
		"levelReached":Integer,
		"regDate":Date,
		"timeSpendMilisenconds":Long
	}
_______

### Manual de descarga, instalación y despliegue de la aplicación
_______

Para realizar el proceso es necesario contar previamente con:
- git (descarga en https://git-scm.com/downloads)
- maven (descarga en https://maven.apache.org/download.cgi)
- bower (descarga en https://bower.io/#install-bower)
- heroku (descarga en https://devcenter.heroku.com/articles/heroku-cli)
- Tener una cuenta activa en Heroku y en GitHub

_______

-Encuentre el manual con mayor detalle en el siguiente link: 
https://drive.google.com/file/d/0BwmYDg94_Oz4bUtJOG94dFVscjQ/view?usp=sharing

_______

#### Descarga de la aplicación

Para descargar la aplicación siga estas instrucciones:

1. Abrir el repositorio de la aplicación en GitHub. (https://github.com/fHealth/Alzheimer.git)

2. Copiar el enlace para clonar el proyecto

3. Abrir la terminal y ubicarse en el directorio en donde se desea guardar el proyecto con el comando cd:
	- cd Directorio deseado

4. Una vez ubicados en el directorio deseado procedemos a clonar el proyecto con el comando git clone y la dirección copiada anteriormente en la página del repositorio:
	- git clone https://github.com/fHealth/Alzheimer.git

#### Ejecutar el proyecto de manera local

1. para poder ejecutar el proyecto vamos a utilizar el comando de maven para compilarlo y después de este el comando para correrlo:
	- mvn compile
	- mvn spring-boot:run
Debemos ubicarnos en el directorio del proyecto:
	- cd Alzheimer/

2. Para probar el funcionamiento de la aplicación abrimos en el browser la dirección:
	- localhost:8080

3. Para detener el servidor volvemos a la terminal en la que se encuentra corriendo el proyecto y oprimimos ctrl+c lo que detendrá el proceso.

#### Despliegue de la aplicación en Heroku

1. Entrar a la página de heroku (https://www.heroku.com/) e iniciar sesión, escoger la opción de crear una nueva aplicación y poner el nombre que deseamos.

2. Crear una nueva carpeta en la que se va a crear el proyecto para desplegar, para esto nos ubicamos en el directorio deseado y creamos la carpeta desde la terminal:
	- cd DirectorioDeseado
	- mkdir NombreCarpeta

3. En la carpeta creada se deben copiar los archivos del repositorio (https://github.com/fHealth/Alzheimer.git) a excepción de la carpeta .git, el archivo README.md y el archivo .gitignore que se encuentran en el directorio raíz del proyecto.

4. Abrir la terminal y ubicarnos en el directorio de la carpeta creada antes con el comando cd:
	- cd DirectorioProyecto

5. Iniciar sesión en la cuenta de heroku con el comando:
	- heroku login

6. Crear un nuevo repositorio en GitHub y conectarlo con heroku:
	- git init
	- heroku git:remote -a NombreDeMiAplicación (nombre de la aplicación creada en el paso 1)

7. Si desea realizar cambios en el proyecto puede realizarlos ahora.

8. Después de realizar los cambios se debe hacer commit de los mismos en el nuevo repositorio:
	- git add .
	- git commit -am "Descripción del commit"
	
9. Desplegar la aplicación en heroku:
	- git push heroku master

10. Para acceder a la aplicación desplegada nos dirijimos al link https://NombreDeMiAplicación.herokuapp.com/

#### Manual de usuario

	1. Dentro de la aplicación iniciaremos sesión en la opción que se encuentra en la esquina superior izquierda:
	- Usuario: user
	- Contraseña: password

	2. Una vez dentro de la aplicación podemos se nos muestran dos opciones:
	- Consultar los resultados para un paciente específico
	- Consultar los resultados para todos los pacientes

		2.1 Si escogemos la primera opción debemos escribir el identificador del paciente deseado y oprimir el botón de cargar datos para poder generar las gráficas.

		2.2 Para la segunda opción se mostrarán diferentes botones para cada gráfica, así mismo sucede con la primero opción después de realizar la carga de los datos.

		2.3 Para cualquiera de las dos opciones al dar click en alguno de los botones se mostrará la gráfica respectiva

		2.4 Para cerrar sesión elegimos la opción que se encuentra en la parte superior izquierda


_______
