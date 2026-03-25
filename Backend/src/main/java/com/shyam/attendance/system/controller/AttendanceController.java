package com.shyam.attendance.system.controller;

import com.shyam.attendance.system.model.Attendance;
import com.shyam.attendance.system.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/attendance")
@CrossOrigin(origins = "*")
public class AttendanceController {

    @Autowired
    private AttendanceRepository repository;

    @PostMapping
    public ResponseEntity<?> addAttendance(@RequestBody Attendance attendance) {
        if (attendance == null) {
            return ResponseEntity.badRequest().body("Attendance data is missing");
        }

        if (repository.findByRollAndSubjectAndDate(
                attendance.getRoll(),
                attendance.getSubject(),
                attendance.getDate()
        ).isPresent()) {
            return ResponseEntity.status(409).body("Attendance already marked for today");
        }

        Attendance savedAttendance = repository.save(attendance);
        return ResponseEntity.ok(savedAttendance);
    }

    @GetMapping
    public List<Attendance> getAllAttendance() {
        return repository.findAll();
    }

    @PutMapping("/{id}")
    public Attendance updateAttendance(@PathVariable("id") @NonNull Long id, @RequestBody Attendance updated) {
        if (updated == null) {
            throw new RuntimeException("Updated attendance data is missing");
        }

        updated.setId(id);
        return repository.save(updated);
    }

    @DeleteMapping("/{id}")
    public String deleteAttendance(@PathVariable("id") @NonNull Long id) {
        if (!repository.existsById(id)) {
            return "Attendance not found";
        }

        repository.deleteById(id);
        return "Attendance deleted successfully";
    }
}