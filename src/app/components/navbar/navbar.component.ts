import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  portfolioService = inject(PortfolioService);
  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'expertise', label: 'SQL Expertise' },
    { id: 'code-showcase', label: 'Code Showcase' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'tools', label: 'Tools' },
    { id: 'contact', label: 'Contact' }
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 40);

    // Dynamic section spy
    const sections = this.navItems.map(item => item.id);
    for (const sectionId of [...sections].reverse()) {
      const el = document.getElementById(sectionId);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.portfolioService.setActiveSection(sectionId);
          break;
        }
      }
    }
  }

  scrollToSection(sectionId: string): void {
    this.portfolioService.setActiveSection(sectionId);
    this.isMobileMenuOpen.set(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
  }

  onDownloadResume(): void {
    this.portfolioService.downloadResume();
  }
}
