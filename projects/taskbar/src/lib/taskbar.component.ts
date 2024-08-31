import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


export interface TaskbarIcon {
  icon: string;
  label: string;
  id?: string;
}


@Component({
  selector: 'lib-taskbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="taskbar"
      [ngClass]="{ 'full-width': fullWidth }"
      [ngStyle]="{ 
        '--background-color': backgroundColor, 
        '--dark-theme-background-color': darkThemeBackgroundColor,
        '--border-color': isDarkTheme ? borderDarkMode : borderColor,
        '--border-radius': borderRadius 
      }"
      [style.backgroundColor]="isDarkTheme ? 'var(--dark-theme-background-color)' : 'var(--background-color)'"
      [style.borderColor]="'var(--border-color)'"
      [style.borderRadius]="'var(--border-radius)'"
    >
      <div class="taskbar-item" *ngFor="let item of icons; let i = index" [ngStyle]="{ 'width': iconSize }">
        <img
          tabindex="0"
          class="taskbar-icon"
          [src]="item.icon"
          (click)="onClick(item)"
          (keyup.enter)="onClick(item)"
          [alt]="item.label"
          [title]="item.label"
        />
      </div>
      <div class="taskbar-item" *ngIf="showThemeToggle">
        <input
          #ico
          id="theme"
          aria-label="theme"
          class="toggle ico"
          type="checkbox"
          (change)="onThemeToggle($event)"
        />
      </div>
    </div>
  `,
  styleUrls: ['./taskbar.component.scss']
})
export class TaskbarComponent {
  @Input() icons: TaskbarIcon[] = [];
  @Input() showThemeToggle = false;
  @Input() fullWidth = false;
  @Input() backgroundColor = 'rgba(244, 245, 245, 1)';  // Default light theme background color
  @Input() darkThemeBackgroundColor = 'rgba(50, 50, 50, 1)';  // Default dark theme background color
  @Input() borderColor = 'rgba(0, 0, 0, 0.1)';  // Default border color
  @Input() borderDarkMode = 'rgba(255, 255, 255, 0.1)'; // Dark mode border color
  @Input() borderRadius = '1rem'; // Custom border radius
  @Input() iconSize = '3rem'; // Custom icon size
  @Output() program = new EventEmitter<TaskbarIcon>();
  @Output() themeToggled = new EventEmitter<boolean>();

  isDarkTheme = false;

  onClick(item: TaskbarIcon) {
    this.program.emit(item);
  }

  onThemeToggle(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isDarkTheme = isChecked;
    this.themeToggled.emit(isChecked);
  }
}
