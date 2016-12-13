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

    @RequestMapping(method = RequestMethod.GET, path = "/{idpatient}/resumes")
    public ResponseEntity<?> getPatientResumeById(@PathVariable Integer idpatient){
        List<DataPOJO> ans=null;
        try {
            ans=services.getResumesById(idpatient);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ans, HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/resumes")
    public ResponseEntity<?> getAllResumes(){
        List<DataPOJO> ans=null;
        try {
            ans=services.getAllResumes();
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ans, HttpStatus.ACCEPTED);
    }

    @RequestMapping(method = RequestMethod.POST, path = "/{idpatient}/resume")
    public ResponseEntity<?> addPatientResumeById(@PathVariable Integer idpatient, @RequestBody DataPOJO resume){
        services.addResumeToId(resume, idpatient);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
    /**
    @RequestMapping(method = RequestMethod.GET, path = "/resumes/top")
    public ResponseEntity<?> getTop10Resumes(){
        List<DataPOJO> ans=null;
        try {
            ans=services.getTop10Resumes();
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(ans, HttpStatus.ACCEPTED);
    }
    */
}
