package com.portfolio.service;

import com.portfolio.dto.SkillDTO;
import com.portfolio.entity.Skill;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository skillRepository;

    @Transactional(readOnly = true)
    public List<SkillDTO> getAllSkills() {
        return skillRepository.findAllByOrderByDisplayOrderAsc()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public SkillDTO getSkillById(Long id) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found with id: " + id));
        return toDTO(skill);
    }

    @Transactional
    public SkillDTO createSkill(SkillDTO dto) {
        Skill skill = toEntity(dto);
        return toDTO(skillRepository.save(skill));
    }

    @Transactional
    public SkillDTO updateSkill(Long id, SkillDTO dto) {
        Skill existing = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found with id: " + id));

        existing.setName(dto.getName());
        existing.setIcon(dto.getIcon());
        existing.setCategory(dto.getCategory());
        existing.setDisplayOrder(dto.getDisplayOrder());

        return toDTO(skillRepository.save(existing));
    }

    @Transactional
    public void deleteSkill(Long id) {
        if (!skillRepository.existsById(id)) {
            throw new ResourceNotFoundException("Skill not found with id: " + id);
        }
        skillRepository.deleteById(id);
    }

    private SkillDTO toDTO(Skill skill) {
        return SkillDTO.builder()
                .id(skill.getId())
                .name(skill.getName())
                .icon(skill.getIcon())
                .category(skill.getCategory())
                .displayOrder(skill.getDisplayOrder())
                .build();
    }

    private Skill toEntity(SkillDTO dto) {
        return Skill.builder()
                .id(dto.getId())
                .name(dto.getName())
                .icon(dto.getIcon())
                .category(dto.getCategory())
                .displayOrder(dto.getDisplayOrder())
                .build();
    }
}
