package com.shyam.attendance.system.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RestController
@RequestMapping("/file")
@CrossOrigin(origins = "*")
public class FileUploadController {

    private final String uploadDir = System.getProperty("user.dir") + File.separator + "uploads";

    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) {
        try {
            File directory = new File(uploadDir);
            if (!directory.exists()) {
                directory.mkdirs();
            }

            String originalFileName = file.getOriginalFilename();
            String extension = "";

            if (originalFileName != null && originalFileName.contains(".")) {
                extension = originalFileName.substring(originalFileName.lastIndexOf("."));
            }

            String newFileName = UUID.randomUUID() + extension;
            File destinationFile = new File(uploadDir + File.separator + newFileName);

            file.transferTo(destinationFile);

            String fileUrl = "/uploads/" + newFileName;
            return ResponseEntity.ok(fileUrl);

        } catch (IOException e) {
            return ResponseEntity.internalServerError().body("File upload failed");
        }
    }
}