import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-custom',
  imports: [CommonModule],
  templateUrl: './button-custom.component.html',
  styleUrl: './button-custom.component.scss',
})
export class ButtonCustomComponent {
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() disabled = false;
  @Input() loading = false;
}
