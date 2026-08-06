package com.portfolio.service;

import com.portfolio.dto.ProjectDTO;
import com.portfolio.entity.Project;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Business logic for Project resources.
 * Controllers never talk to the repository directly — they go through this layer.
 */
@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Transactional(readOnly = true)
    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findAllByOrderByDisplayOrderAsc()
                .stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    public ProjectDTO getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        return toDTO(project);
    }

    @Transactional
    public ProjectDTO createProject(ProjectDTO dto) {
        Project project = toEntity(dto);
        Project saved = projectRepository.save(project);
        return toDTO(saved);
    }

    @Transactional
    public ProjectDTO updateProject(Long id, ProjectDTO dto) {
        Project existing = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));

        existing.setTitle(dto.getTitle());
        existing.setDescription(dto.getDescription());
        existing.setTechnologies(dto.getTechnologies());
        existing.setGithubUrl(dto.getGithubUrl());
        existing.setLiveDemo(dto.getLiveDemo());
        existing.setImageUrl(dto.getImageUrl());
        existing.setDisplayOrder(dto.getDisplayOrder());

        return toDTO(projectRepository.save(existing));
    }

    @Transactional
    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new ResourceNotFoundException("Project not found with id: " + id);
        }
        projectRepository.deleteById(id);
    }

    // ---- Entity <-> DTO mapping helpers ----

    private ProjectDTO toDTO(Project project) {
        return ProjectDTO.builder()
                .id(project.getId())
                .title(project.getTitle())
                .description(project.getDescription())
                .technologies(project.getTechnologies())
                .githubUrl(project.getGithubUrl())
                .liveDemo(project.getLiveDemo())
                .imageUrl(project.getImageUrl())
                .displayOrder(project.getDisplayOrder())
                .build();
    }

    private Project toEntity(ProjectDTO dto) {
        return Project.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .description(dto.getDescription())
                .technologies(dto.getTechnologies())
                .githubUrl(dto.getGithubUrl())
                .liveDemo(dto.getLiveDemo())
                .imageUrl(dto.getImageUrl())
                .displayOrder(dto.getDisplayOrder())
                .build();
    }
}
