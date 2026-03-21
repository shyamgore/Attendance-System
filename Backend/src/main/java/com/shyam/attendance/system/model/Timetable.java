package com.shyam.attendance.system.model;

import jakarta.persistence.*;

@Entity
@Table(name = "timetable")
public class Timetable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;
    private String teacherName;
    private String lectureHall;
    private String day;
    private String startTime;
    private String endTime;
    private String note;

    public Timetable() {
    }

    public Timetable(Long id, String subject, String teacherName, String lectureHall, String day, String startTime, String endTime, String note) {
        this.id = id;
        this.subject = subject;
        this.teacherName = teacherName;
        this.lectureHall = lectureHall;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
        this.note = note;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getTeacherName() {
        return teacherName;
    }

    public void setTeacherName(String teacherName) {
        this.teacherName = teacherName;
    }

    public String getLectureHall() {
        return lectureHall;
    }

    public void setLectureHall(String lectureHall) {
        this.lectureHall = lectureHall;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }
}