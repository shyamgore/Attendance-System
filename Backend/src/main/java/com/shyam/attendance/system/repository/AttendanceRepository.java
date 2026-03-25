package com.shyam.attendance.system.repository;

import com.shyam.attendance.system.model.Attendance;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.Optional;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    Optional<Attendance> findByRollAndSubjectAndDate(String roll, String subject, LocalDate date);
}