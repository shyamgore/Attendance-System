package com.shyam.attendance.system.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.shyam.attendance.system.model.Attendance;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
}
