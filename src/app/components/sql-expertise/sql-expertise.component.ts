import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { ArchitectureLayer, ExpertisePillar } from '../../models/portfolio.model';

@Component({
  selector: 'app-sql-expertise',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sql-expertise.component.html',
  styleUrl: './sql-expertise.component.scss'
})
export class SqlExpertiseComponent {
  portfolioService = inject(PortfolioService);

  activeLayer = signal<number>(3); // Default Stored Procedures
  selectedPillar = signal<string>('query-optimization');

  selectLayer(step: number): void {
    this.activeLayer.set(step);
  }

  selectPillar(id: string): void {
    this.selectedPillar.set(id);
  }
}
