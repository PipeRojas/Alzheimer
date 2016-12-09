package edu.eci.alzheimer.services;

import edu.eci.alzheimer.model.DataPOJO;
import org.springframework.stereotype.Service;

import java.util.*;

/**
 * Created by Andrés Felipe on 12/11/2016.
 */
@Service
public class PatientServices1stImpl implements PatientServices{
    private Map<Integer, List<DataPOJO>> resumes;

    public PatientServices1stImpl() {
        resumes=new TreeMap<Integer, List<DataPOJO>>();
        List<DataPOJO> resumesId=new ArrayList<>();
        DataPOJO resumeId=new DataPOJO();
        resumeId.setPatientName("Maria Camila");
        resumeId.setPatientLastName("Rodriguez Velez");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(7);
        resumeId.setTimeSpendMilisenconds(new Long(30000));
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Maria Camila");
        resumeId.setPatientLastName("Rodriguez Velez");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(8);
        resumeId.setTimeSpendMilisenconds(new Long(50000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Maria Camila");
        resumeId.setPatientLastName("Rodriguez Velez");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(4);
        resumeId.setTimeSpendMilisenconds(new Long(60000));
        resumesId.add(resumeId);
        //
        resumes.put(123456789, resumesId);
    }

    @Override
    public List<DataPOJO> getResumesById(Integer id) throws Exception {
        List<DataPOJO> ans=null;
        for (Integer resId:resumes.keySet()
                ) {
            if(resId.equals(id)){
                ans=resumes.get(resId);
                break;
            }
        }
        if(ans==null){
            throw new Exception("El paciente no se ha registrado.");
        }
        return ans;
    }

    @Override
    public void addResumeToId(DataPOJO resume, Integer id) {
        Boolean found=Boolean.FALSE;
        for (Integer resId:resumes.keySet()
             ) {
            if(resId.equals(id)){
                resumes.get(resId).add(resume);
                found=Boolean.TRUE;
                break;
            }
        }
        if(!found){
            resumes.put(id, new ArrayList<DataPOJO>());
            resumes.get(id).add(resume);
        }
    }

    @Override
    public List<DataPOJO> getAllResumes() {
        List<DataPOJO> ans=new ArrayList<>();
        for (Integer i:resumes.keySet()
             ) {
            for (DataPOJO d:resumes.get(i)
                 ) {
                ans.add(d);
            }
        }
        return ans;
    }
}
