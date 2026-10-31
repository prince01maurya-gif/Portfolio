import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  portfolioService = inject(PortfolioService);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = signal<boolean>(false);
  isSubmitted = signal<boolean>(false);
  isCopiedEmail = signal<boolean>(false);

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting.set(true);

    // Simulate sending network latency
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };

      // Reset submission banner after 6 seconds
      setTimeout(() => {
        this.isSubmitted.set(false);
      }, 6000);
    }, 850);
  }

  copyEmail(): void {
    navigator.clipboard.writeText(this.portfolioService.contactInfo().email).then(() => {
      this.isCopiedEmail.set(true);
      setTimeout(() => this.isCopiedEmail.set(false), 2000);
    });
  }

  onDownloadResume(): void {
    this.portfolioService.downloadResume();
  }
}
