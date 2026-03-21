package com.shyam.attendance.system.controller;

import com.shyam.attendance.system.model.Timetable;
import com.shyam.attendance.system.repository.TimetableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/timetable")
@CrossOrigin(origins = "*")
public class TimetableController {

    @Autowired
    private TimetableRepository timetableRepository;

    @PostMapping
    public Timetable addLecture(@RequestBody @org.springframework.lang.NonNull Timetable timetable) {
        return timetableRepository.save(timetable);
    }

    @GetMapping
    public List<Timetable> getAllLectures() {
        return timetableRepository.findAll();
    }

    @GetMapping("/today")
    public List<Timetable> getTodayLectures() {
        DayOfWeek dayOfWeek = LocalDate.now().getDayOfWeek();
        String today = dayOfWeek.toString();
        return timetableRepository.findByDay(today);
    }

    @PutMapping("/{id}")
    public Timetable updateLecture(@PathVariable @NonNull Long id, @RequestBody Timetable updatedLecture) {
        updatedLecture.setId(id);
        return timetableRepository.save(updatedLecture);
    }

    @DeleteMapping("/{id}")
    public String deleteLecture(@PathVariable @NonNull Long id) {
        if (!timetableRepository.existsById(id)) {
            return "Lecture not found";
        }

        timetableRepository.deleteById(id);
        return "Lecture deleted successfully";
    }
}