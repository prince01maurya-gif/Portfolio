import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  portfolioService = inject(PortfolioService);

  corePrinciples = [
    {
      title: 'ACID Transaction Durability',
      description: 'Strict double-entry validation, isolated lock escalation control, and resilient rollback trapping with XACT_ABORT.',
      icon: 'fa-solid fa-shield-halved',
      badge: 'Zero Corruption'
    },
    {
      title: 'Execution Plan Surgery',
      description: 'Dissecting graphical and XML execution plans, hunting down implicit type conversions, and transforming scans into direct seeks.',
      icon: 'fa-solid fa-microscope',
      badge: 'Sub-Millisecond'
    },
    {
      title: '3NF Relational Architecture',
      description: 'Disciplined normalization eliminating duplicate states while pragmatically engineering indexed views for analytics.',
      icon: 'fa-solid fa-sitemap',
      badge: 'Scalable Schemas'
    },
    {
      title: 'Set-Based Over Procedural',
      description: 'Banishing slow RBAR (Row-By-Agonizing-Row) loops and scalar UDF bottlenecks in favor of high-throughput vector queries.',
      icon: 'fa-solid fa-bolt-lightning',
      badge: 'High Throughput'
    }
  ];
}
