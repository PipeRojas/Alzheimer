package edu.eci.alzheimer.services;

import edu.eci.alzheimer.model.DataPOJO;

import java.util.List;

/**
 * Created by Andrés Felipe on 12/11/2016.
 */
public interface PatientServices {
    public List<DataPOJO> getResumesById(Integer id) throws Exception;
    public void addResumeToId(DataPOJO resume,Integer id);
    public  List<DataPOJO> getAllResumes();
}
