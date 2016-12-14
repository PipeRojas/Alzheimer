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

_______

-Encuentre el manual con mayor detalle en el siguiente link: https://drive.google.com/file/d/0BwmYDg94_Oz4Y3VnMV93cllzUmc/view?usp=sharing

_______

#### Descarga de la aplicación

Para descargar la aplicación siga estas instrucciones:

1. Abrir el repositorio de la aplicación en GitHub. (https://github.com/PipeRojas/Alzheimer.git)

2. Copiar el enlace para clonar el proyecto

3. Abrir la terminal y ubicarse en el directorio en donde se desea guardar el proyecto con el comando cd:
	- cd Directorio deseado

4. Una vez ubicados en el directorio deseado procedemos a clonar el proyecto con el comando git clone y la dirección copiada anteriormente en la página del repositorio:
	- git clone https://github.com/PipeRojas/Alzheimer.git

5. Una vez clonado el proyecto, vamos a realizar la instalación de los componentes de bower, para esto debemos ubicarnos en la carpeta static ubicada en el proyecto con el comando:
	- cd Alzheimer/src/main/resources/static
ubicados en este directorio ejecutamos el comando:
	- bower install
En el momento en el que se nos pide digitar alguna respuesta, digitamos 1 y damos enter para continuar con la descarga
	- ? Answer

6. para poder ejecutar el proyecto vamos a utilizar el comando de maven para compilarlo y después de este el comando para correrlo:
	- mvn compile
	- mvn spring-boot:run
Debemos ubicarnos en el directorio del proyecto:
	- cd Alzheimer/

7. Para probar el funcionamiento de la aplicación abrimos en el browser la dirección:
	- localhost:8080

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

.8. Para detener el servidor volvemos a la terminal en la que se encuentra corriendo el proyecto y oprimimos ctrl+c lo que detendrá el proceso.

#### Despliegue de la aplicación en Heroku


_______
