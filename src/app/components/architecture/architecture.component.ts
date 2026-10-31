import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { SchemaTable } from '../../models/portfolio.model';

@Component({
  selector: 'app-architecture',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './architecture.component.html',
  styleUrl: './architecture.component.scss'
})
export class ArchitectureComponent {
  portfolioService = inject(PortfolioService);

  activeDomain = signal<'Security & Auth' | 'CRM & Billing'>('Security & Auth');
  selectedTableId = signal<string>('users');

  domainTables = computed<SchemaTable[]>(() => {
    return this.portfolioService.schemaTables().filter(t => t.group === this.activeDomain());
  });

  activeTable = computed<SchemaTable>(() => {
    const list = this.portfolioService.schemaTables();
    return list.find(t => t.id === this.selectedTableId()) || list[0];
  });

  setDomain(domain: 'Security & Auth' | 'CRM & Billing'): void {
    this.activeDomain.set(domain);
    if (domain === 'Security & Auth') {
      this.selectedTableId.set('users');
    } else {
      this.selectedTableId.set('customers');
    }
  }

  selectTable(id: string): void {
    this.selectedTableId.set(id);
  }
}
