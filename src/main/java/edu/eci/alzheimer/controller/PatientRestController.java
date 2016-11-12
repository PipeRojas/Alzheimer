package edu.eci.alzheimer.controller;

import edu.eci.alzheimer.model.DataPOJO;
import edu.eci.alzheimer.services.PatientServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Andrés Felipe on 12/11/2016.
 */
@RestController
@RequestMapping(value = "/patients")
public class PatientRestController {
    @Autowired
    PatientServices services;
    @RequestMapping(value = "/check")
    public String getCheck(){
        return "Patients REST Controller Works";
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{idPatient}/resume")
    public ResponseEntity<?> getPatientResumeById(@PathVariable Integer idPatient){
        List<DataPOJO> ans=null;
        try {
            ans=services.getResumesById(idPatient);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ans, HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{idPatient}/resume")
    public ResponseEntity<?> addPatientResumeById(@PathVariable Integer idPatient, @RequestBody DataPOJO resume){
        services.addResumeToId(resume, idPatient);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
}
