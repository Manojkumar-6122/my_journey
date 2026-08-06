package com.portfolio.service;

import com.portfolio.dto.ContactMessageDTO;
import com.portfolio.entity.ContactMessage;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ContactMessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContactMessageService {

    private final ContactMessageRepository contactMessageRepository;

    @Transactional
    public ContactMessageDTO saveMessage(ContactMessageDTO dto) {
        ContactMessage entity = ContactMessage.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .message(dto.getMessage())
                .build();
        ContactMessage saved = contactMessageRepository.save(entity);
        return toDTO(saved);
    }

    @Transactional(readOnly = true)
    public List<ContactMessageDTO> getAllMessages() {
        return contactMessageRepository.findAllByOrderBySubmittedAtDesc()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ContactMessageDTO getMessageById(Long id) {
        ContactMessage message = contactMessageRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Message not found with id: " + id));
        return toDTO(message);
    }

    @Transactional
    public void deleteMessage(Long id) {
        if (!contactMessageRepository.existsById(id)) {
            throw new ResourceNotFoundException("Message not found with id: " + id);
        }
        contactMessageRepository.deleteById(id);
    }

    private ContactMessageDTO toDTO(ContactMessage entity) {
        return ContactMessageDTO.builder()
                .id(entity.getId())
                .name(entity.getName())
                .email(entity.getEmail())
                .message(entity.getMessage())
                .submittedAt(entity.getSubmittedAt())
                .build();
    }
}
