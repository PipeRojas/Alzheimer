# Alzheimer
Some services for Alzheimer project\n
Services:
-Check:
  path: patients/check
  return: A string
-GetResumesById:
  path: patients/{idPatient}/resume
  parameters:Integer, The ID of the patient to get resumes
  return: The list of resumes of a patient by his ID
-PostResumeById:
  path: patients/{idPatient}/resume
  paramethers: Integer, The ID of the patient to post the resume
  requestBody: The resume of the patient of type DataPOJO, Example:
      {"patientName":"Maria Camila",
      "patientLastName":"Rodriguez Velez",
      "gameName":"Sopa Letras",
      "levelReached":7,
      "regDate":1478982104144,
      "timeSpendMilisenconds":30000}
