package com.portfolio.controller;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.service.ContactMessageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST endpoints for the Contact form.
 * Base path: /api/contact
 */
@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactMessageController {

    private final ContactMessageService contactMessageService;

    // Called by the frontend Contact form on submit
    @PostMapping
    public ResponseEntity<ContactMessageDTO> submitMessage(@Valid @RequestBody ContactMessageDTO dto) {
        ContactMessageDTO saved = contactMessageService.saveMessage(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    // Admin-style endpoints to review submitted messages
    @GetMapping
    public ResponseEntity<List<ContactMessageDTO>> getAllMessages() {
        return ResponseEntity.ok(contactMessageService.getAllMessages());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactMessageDTO> getMessageById(@PathVariable Long id) {
        return ResponseEntity.ok(contactMessageService.getMessageById(id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        contactMessageService.deleteMessage(id);
        return ResponseEntity.noContent().build();
    }
}
