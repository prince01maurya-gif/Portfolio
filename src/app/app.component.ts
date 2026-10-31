import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SqlExpertiseComponent } from './components/sql-expertise/sql-expertise.component';
import { CodeShowcaseComponent } from './components/code-showcase/code-showcase.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ArchitectureComponent } from './components/architecture/architecture.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioService } from './services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    SqlExpertiseComponent,
    CodeShowcaseComponent,
    ProjectsComponent,
    ProjectModalComponent,
    ExperienceComponent,
    ArchitectureComponent,
    ToolsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  portfolioService = inject(PortfolioService);
  title = 'SQL Developer & Database Architect Portfolio';
}
