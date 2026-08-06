package com.portfolio.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Represents a single technical skill displayed as a card in the "Skills" section.
 * The `icon` field stores an identifier (e.g. a react-icons name or emoji)
 * that the frontend maps to an actual icon component/image.
 */
@Entity
@Table(name = "skills")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Skill {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Skill name is required")
    @Column(nullable = false, unique = true)
    private String name;

    /** Icon identifier, e.g. "java", "spring", "react", or an emoji fallback. */
    private String icon;

    /** Optional category, e.g. "Backend", "Frontend", "Database", "Tools". */
    private String category;

    @Column(name = "display_order")
    private Integer displayOrder;
}
