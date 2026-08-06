package com.portfolio.repository;

import com.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {

    // Returns projects sorted by their display order for consistent UI rendering
    List<Project> findAllByOrderByDisplayOrderAsc();
}
