package com.shyam.attendance.system.controller;

import com.shyam.attendance.system.model.Attendance;
import com.shyam.attendance.system.repository.AttendanceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "*")
public class AttendanceController {

    @Autowired
    private AttendanceRepository repository;

    @PostMapping
    public Attendance addAttendance(@RequestBody Attendance attendance) {
        return repository.save(attendance);
    }

    @GetMapping
    public List<Attendance> getAllAttendance() {
        return repository.findAll();
    }

    @PutMapping("/{id}")
    public Attendance updateAttendance(@PathVariable("id") Long id, @RequestBody Attendance updated) {
        updated.setId(id);
        return repository.save(updated);
    }

    @DeleteMapping("/{id}")
    public void deleteAttendance(@PathVariable("id") Long id) {
        repository.deleteById(id);
    }

}