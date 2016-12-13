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
        resumesId.add(resumeId);
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
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Oscar Andres");
        resumeId.setPatientLastName("Castro Luna");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(15);
        resumeId.setTimeSpendMilisenconds(new Long(80000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Oscar Andres");
        resumeId.setPatientLastName("Castro Luna");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(9);
        resumeId.setTimeSpendMilisenconds(new Long(60000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Oscar Andres");
        resumeId.setPatientLastName("Castro Luna");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(3);
        resumeId.setTimeSpendMilisenconds(new Long(30000));
        resumesId.add(resumeId);
        //
        resumes.put(987654321,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Fabian David");
        resumeId.setPatientLastName("Gomez Lopez");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(6);
        resumeId.setTimeSpendMilisenconds(new Long(20000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Fabian David");
        resumeId.setPatientLastName("Gomez Lopez");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(13);
        resumeId.setTimeSpendMilisenconds(new Long(100000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Fabian David");
        resumeId.setPatientLastName("Gomez Lopez");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(8);
        resumeId.setTimeSpendMilisenconds(new Long(90000));
        resumesId.add(resumeId);
        //
        resumes.put(125698745,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Andrea Carolina");
        resumeId.setPatientLastName("Ruiz Vargas");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(1);
        resumeId.setTimeSpendMilisenconds(new Long(8000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Andrea Carolina");
        resumeId.setPatientLastName("Ruiz Vargas");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(8);
        resumeId.setTimeSpendMilisenconds(new Long(70000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Andrea Carolina");
        resumeId.setPatientLastName("Ruiz Vargas");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(9);
        resumeId.setTimeSpendMilisenconds(new Long(90000));
        resumesId.add(resumeId);
        //
        resumes.put(36598445,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Juan David");
        resumeId.setPatientLastName("Suarez Reyes");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(23);
        resumeId.setTimeSpendMilisenconds(new Long(500000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Juan David");
        resumeId.setPatientLastName("Suarez Reyes");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(9);
        resumeId.setTimeSpendMilisenconds(new Long(90000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Juan David");
        resumeId.setPatientLastName("Suarez Reyes");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(3);
        resumeId.setTimeSpendMilisenconds(new Long(70000));
        resumesId.add(resumeId);
        //
        resumes.put(548965412,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Camila Andrea");
        resumeId.setPatientLastName("Aguirre Reyes");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(8);
        resumeId.setTimeSpendMilisenconds(new Long(80000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Camila Andrea");
        resumeId.setPatientLastName("Aguirre Reyes");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(16);
        resumeId.setTimeSpendMilisenconds(new Long(200000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Camila Andrea");
        resumeId.setPatientLastName("Aguirre Reyes");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(7);
        resumeId.setTimeSpendMilisenconds(new Long(70000));
        resumesId.add(resumeId);
        //
        resumes.put(311254595,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Julian Andres");
        resumeId.setPatientLastName("Avila Fonseca");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(9);
        resumeId.setTimeSpendMilisenconds(new Long(60000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Julian Andres");
        resumeId.setPatientLastName("Avila Fonseca");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(12);
        resumeId.setTimeSpendMilisenconds(new Long(90000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Julian Andres");
        resumeId.setPatientLastName("Avila Fonseca");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(9);
        resumeId.setTimeSpendMilisenconds(new Long(90000));
        resumesId.add(resumeId);
        //
        resumes.put(455878951,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Camilo Andres");
        resumeId.setPatientLastName("Hernandez Vargas");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Concentrate");
        resumeId.setLevelReached(5);
        resumeId.setTimeSpendMilisenconds(new Long(70000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Camilo Andres");
        resumeId.setPatientLastName("Hernandez Vargas");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(8);
        resumeId.setTimeSpendMilisenconds(new Long(90000));
        resumesId.add(resumeId);
        //
        resumes.put(95455423,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Angie Valeria");
        resumeId.setPatientLastName("Blanco Cardona");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(6);
        resumeId.setTimeSpendMilisenconds(new Long(60000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Angie Valeria");
        resumeId.setPatientLastName("Blanco Cardona");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(17);
        resumeId.setTimeSpendMilisenconds(new Long(100000));
        resumesId.add(resumeId);
        //
        resumes.put(75548426,resumesId);
        //
        resumesId=new ArrayList<>();
        resumeId=new DataPOJO();
        resumeId.setPatientName("Felipe Andres");
        resumeId.setPatientLastName("Rojas Oritz");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Diferencias");
        resumeId.setLevelReached(1);
        resumeId.setTimeSpendMilisenconds(new Long(9000));
        resumesId.add(resumeId);
        //
        resumeId=new DataPOJO();
        resumeId.setPatientName("Felipe Andres");
        resumeId.setPatientLastName("Rojas Oritz");
        resumeId.setRegDate(new Date());
        resumeId.setGameName("Sopa Letras");
        resumeId.setLevelReached(2);
        resumeId.setTimeSpendMilisenconds(new Long(20000));
        resumesId.add(resumeId);
        //
        resumes.put(210102258,resumesId);
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
        for (Integer i:resumes.keySet()) {
            for (DataPOJO d:resumes.get(i)) {
                ans.add(d);
            }
        }
        return ans;
    }
    /**
    @Override
    public List<DataPOJO> getTop10AllResumes() {
        List<DataPOJO> r=this.getAllResumes();
        Map<String,Integer> res= new HashMap<String,Integer>();
        for (DataPOJO d:r){
            if(!res.keySet().contains(d.getPatientName())) {
                res.put(d.getPatientName(), res.get(d.getPatientName()) + 1);
            }
        }
        Collection<Integer> cantidad = res.values();
        Iterator<Integer> it = cantidad.iterator();
        int[] numCant=new int[cantidad.size()];
        int c=0;
        while(it.hasNext()) {
            int i = it.next();
            numCant[c]=i;
            c++;
        }

    }
    **/
}