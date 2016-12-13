# fHealth
___

URL: https://alzheimerpersistence.hrokuapp.com/

## Diseño e implementación de una plataforma genérica de eHealth y mHealth 

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
