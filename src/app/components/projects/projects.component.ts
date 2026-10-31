import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { ProjectItem } from '../../models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  portfolioService = inject(PortfolioService);

  openProject(project: ProjectItem): void {
    this.portfolioService.openProjectModal(project);
  }
}
