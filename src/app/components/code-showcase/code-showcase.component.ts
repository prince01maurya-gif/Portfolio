import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';
import { CodeSnippet } from '../../models/portfolio.model';

@Component({
  selector: 'app-code-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-showcase.component.html',
  styleUrl: './code-showcase.component.scss'
})
export class CodeShowcaseComponent {
  portfolioService = inject(PortfolioService);

  activeTabId = signal<string>('complex-queries');
  isCopied = signal<boolean>(false);

  currentSnippet = computed<CodeSnippet>(() => {
    const list = this.portfolioService.codeSnippets();
    return list.find(s => s.id === this.activeTabId()) || list[0];
  });

  codeLines = computed<string[]>(() => {
    return this.currentSnippet().code.split('\n');
  });

  setActiveTab(id: string): void {
    this.activeTabId.set(id);
    this.isCopied.set(false);
  }

  copyCode(): void {
    const code = this.currentSnippet().code;
    navigator.clipboard.writeText(code).then(() => {
      this.isCopied.set(true);
      setTimeout(() => this.isCopied.set(false), 2000);
    });
  }
}
