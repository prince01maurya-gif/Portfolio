import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SkillItem } from '../../models/portfolio.model';

export type SkillCategory = 'all' | 'database' | 'sql-dev' | 'performance' | 'advanced-sql';

interface CategoryTab {
  id: SkillCategory;
  label: string;
  count: number;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  portfolioService = inject(PortfolioService);

  activeCategory = signal<SkillCategory>('all');

  categories: CategoryTab[] = [
    { id: 'all', label: 'All Disciplines', count: 28, icon: 'fa-solid fa-shapes' },
    { id: 'database', label: 'Database & Engines', count: 6, icon: 'fa-solid fa-server' },
    { id: 'sql-dev', label: 'SQL Development', count: 8, icon: 'fa-solid fa-code' },
    { id: 'performance', label: 'Performance Optimization', count: 7, icon: 'fa-solid fa-bolt' },
    { id: 'advanced-sql', label: 'Advanced SQL & Analytics', count: 7, icon: 'fa-solid fa-chart-line' }
  ];

  filteredSkills = computed(() => {
    const category = this.activeCategory();
    const all = this.portfolioService.skills();
    if (category === 'all') {
      return all;
    }
    return all.filter(s => s.category === category);
  });

  setCategory(category: SkillCategory): void {
    this.activeCategory.set(category);
  }
}
