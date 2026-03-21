package com.shyam.attendance.system.repository;

import com.shyam.attendance.system.model.Timetable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TimetableRepository extends JpaRepository<Timetable, Long> {
    List<Timetable> findByDay(String day);
}