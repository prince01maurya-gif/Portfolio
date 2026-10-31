import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  portfolioService = inject(PortfolioService);

  techBadges = [
    { label: 'SQL Server', icon: 'fa-solid fa-server' },
    { label: 'T-SQL', icon: 'fa-solid fa-code' },
    { label: 'PostgreSQL', icon: 'fa-solid fa-database' },
    { label: 'MySQL', icon: 'fa-solid fa-database' },
    { label: 'Database Design', icon: 'fa-solid fa-sitemap' },
    { label: 'Stored Procedures', icon: 'fa-solid fa-gears' },
    { label: 'Query Optimization', icon: 'fa-solid fa-bolt' }
  ];

  isExecuting = signal<boolean>(false);
  hasExecuted = signal<boolean>(true);
  executionTime = signal<string>('0.018s');
  rowsAffected = signal<number>(1);
  activeTab = signal<'code' | 'results' | 'plan'>('results');

  heroQuery = `SELECT
    Developer,
    Database,
    Performance
FROM Portfolio
WHERE Expertise = 'SQL';`;

  queryResult = [
    {
      Developer: 'Alex Mercer',
      Database: 'SQL Server / PostgreSQL / MySQL',
      Performance: 'Sub-millisecond Execution & 3NF Arch'
    }
  ];

  executeHeroQuery(): void {
    this.isExecuting.set(true);
    setTimeout(() => {
      this.isExecuting.set(false);
      this.hasExecuted.set(true);
      this.activeTab.set('results');
    }, 450);
  }

  scrollToSection(sectionId: string): void {
    this.portfolioService.setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onDownloadResume(): void {
    this.portfolioService.downloadResume();
  }
}
