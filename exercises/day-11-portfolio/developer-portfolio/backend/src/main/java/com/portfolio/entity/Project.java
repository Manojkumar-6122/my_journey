package com.portfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

/**
 * Represents a portfolio project shown on the "Projects" section of the site.
 */
@Entity
@Table(name = "projects")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Column(nullable = false)
    private String title;

    @NotBlank(message = "Description is required")
    @Column(length = 2000)
    private String description;

    /**
     * Technologies used in the project, stored as a separate table
     * (project_technologies) and eagerly fetched so the frontend
     * always receives the full list in one call.
     */
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "project_technologies", joinColumns = @JoinColumn(name = "project_id"))
    @Column(name = "technology")
    @Builder.Default
    private List<String> technologies = new ArrayList<>();

    @Column(name = "github_url")
    private String githubUrl;

    @Column(name = "live_demo")
    private String liveDemo;

    @Column(name = "image_url")
    private String imageUrl;

    /** Order in which projects should be displayed on the frontend. */
    @Column(name = "display_order")
    private Integer displayOrder;
}
