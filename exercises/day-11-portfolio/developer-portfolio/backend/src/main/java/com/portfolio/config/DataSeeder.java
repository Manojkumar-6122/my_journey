package com.portfolio.config;

import com.portfolio.entity.Project;
import com.portfolio.entity.Skill;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.List;

/**
 * Seeds the database with sample Projects and Skills on application startup,
 * but only if the tables are currently empty. This means the seed data is
 * inserted once and won't duplicate on every restart.
 */
@Component
@RequiredArgsConstructor
public class DataSeeder implements CommandLineRunner {

    private final ProjectRepository projectRepository;
    private final SkillRepository skillRepository;

    @Override
    public void run(String... args) {
        seedSkills();
        seedProjects();
    }

    private void seedSkills() {
        if (skillRepository.count() > 0) return;

        List<Skill> skills = List.of(
                Skill.builder().name("Java").icon("java").category("Backend").displayOrder(1).build(),
                Skill.builder().name("Spring Boot").icon("spring").category("Backend").displayOrder(2).build(),
                Skill.builder().name("React").icon("react").category("Frontend").displayOrder(3).build(),
                Skill.builder().name("JavaScript").icon("javascript").category("Frontend").displayOrder(4).build(),
                Skill.builder().name("HTML").icon("html5").category("Frontend").displayOrder(5).build(),
                Skill.builder().name("CSS").icon("css3").category("Frontend").displayOrder(6).build(),
                Skill.builder().name("Tailwind CSS").icon("tailwind").category("Frontend").displayOrder(7).build(),
                Skill.builder().name("PostgreSQL").icon("postgresql").category("Database").displayOrder(8).build(),
                Skill.builder().name("Git").icon("git").category("Tools").displayOrder(9).build(),
                Skill.builder().name("Docker").icon("docker").category("Tools").displayOrder(10).build()
        );

        skillRepository.saveAll(skills);
    }

    private void seedProjects() {
        if (projectRepository.count() > 0) return;

        List<Project> projects = List.of(
                Project.builder()
                        .title("E-Commerce Platform")
                        .description("A full-featured e-commerce web application with product catalog, shopping cart, secure checkout, and an admin dashboard for inventory management.")
                        .technologies(List.of("React", "Spring Boot", "PostgreSQL", "Tailwind CSS"))
                        .githubUrl("https://github.com/yourusername/ecommerce-platform")
                        .liveDemo("https://ecommerce-demo.example.com")
                        .imageUrl("https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80")
                        .displayOrder(1)
                        .build(),
                Project.builder()
                        .title("Task Management App")
                        .description("A collaborative task and project management tool featuring drag-and-drop Kanban boards, real-time updates, and team workspace support.")
                        .technologies(List.of("React", "Spring Boot", "PostgreSQL", "REST API"))
                        .githubUrl("https://github.com/yourusername/task-manager")
                        .liveDemo("https://taskmanager-demo.example.com")
                        .imageUrl("https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80")
                        .displayOrder(2)
                        .build(),
                Project.builder()
                        .title("Developer Portfolio (this project)")
                        .description("A full-stack personal portfolio website built with React and Spring Boot, dynamically fetching all content from a PostgreSQL-backed REST API.")
                        .technologies(List.of("React", "Vite", "Spring Boot", "PostgreSQL", "Tailwind CSS"))
                        .githubUrl("https://github.com/yourusername/developer-portfolio")
                        .liveDemo("https://portfolio-demo.example.com")
                        .imageUrl("https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80")
                        .displayOrder(3)
                        .build(),
                Project.builder()
                        .title("Weather Forecast Dashboard")
                        .description("A responsive weather dashboard that consumes a third-party weather API and visualizes forecasts with interactive charts and location search.")
                        .technologies(List.of("React", "JavaScript", "Chart.js", "REST API"))
                        .githubUrl("https://github.com/yourusername/weather-dashboard")
                        .liveDemo("https://weather-demo.example.com")
                        .imageUrl("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80")
                        .displayOrder(4)
                        .build()
        );

        projectRepository.saveAll(projects);
    }
}
