package edu.eci.alzheimer.model;

import java.util.Date;

/**
 * Created by Andrés Felipe on 12/11/2016.
 */
public class DataPOJO {
    private String patientName;
    private String patientLastName;
    private String gameName;
    private Integer levelReached;
    private Date regDate;
    private Long timeSpendMilisenconds;

    public DataPOJO() {
    }

    public String getPatientName() {
        return patientName;
    }

    public void setPatientName(String patientName) {
        this.patientName = patientName;
    }

    public String getPatientLastName() {
        return patientLastName;
    }

    public void setPatientLastName(String patientLastName) {
        this.patientLastName = patientLastName;
    }

    public String getGameName() {
        return gameName;
    }

    public void setGameName(String gameName) {
        this.gameName = gameName;
    }

    public Integer getLevelReached() {
        return levelReached;
    }

    public void setLevelReached(Integer levelReached) {
        this.levelReached = levelReached;
    }

    public Date getRegDate() {
        return regDate;
    }

    public void setRegDate(Date regDate) {
        this.regDate = regDate;
    }

    public Long getTimeSpendMilisenconds() {
        return timeSpendMilisenconds;
    }

    public void setTimeSpendMilisenconds(Long timeSpendMilisenconds) {
        this.timeSpendMilisenconds = timeSpendMilisenconds;
    }
}
