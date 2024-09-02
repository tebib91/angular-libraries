# Taskbar Angular Library

[![npm version](https://badge.fury.io/js/taskbar-angular.svg)](https://badge.fury.io/js/taskbar-angular)
[![Build Status](https://travis-ci.com/tebib91/taskbar-angular.svg?branch=main)](https://travis-ci.com/tebib91/taskbar-angular)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

`taskbar-angular` is an Angular library that provides a customizable taskbar component, offering a modern and sleek interface for your Angular applications. It is compatible with Angular versions 16, 17, and 18.

![Taskbar Example](./assets/taskbar/image.png)
![Taskbar Example](./assets/taskbar/image2.png)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Standalone Component Usage](#standalone-component-usage)
  - [TaskbarComponent Inputs](#taskbarcomponent-inputs)
  - [TaskbarComponent Outputs](#taskbarcomponent-outputs)
  - [TaskbarIcon Interface](#taskbaricon-interface)
  - [Example](#example)
- [Customization](#customization)
- [Building the Library](#building-the-library)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the library, use npm:

```bash
npm install taskbar-angular
```

Ensure that your project is using a compatible Angular version (`^16.0.0`, `^17.0.0`, or `^18.0.0`).

## Usage

### Standalone Component Usage

To use the `TaskbarComponent` in your Angular project, import it into the relevant module or component.

```typescript
import { Component } from '@angular/core';
import { TaskbarComponent, TaskbarIcon } from 'taskbar-angular';

@Component({
  selector: 'app-root',
  template: `
    <lib-taskbar
      [icons]="taskbarIcons"
      [showThemeToggle]="true"
      [fullWidth]="true"
      [backgroundColor]="'rgba(255, 255, 255, 1)'"
      [darkThemeBackgroundColor]="'rgba(34, 34, 34, 1)'"
      [borderColor]="'rgba(0, 0, 0, 0.2)'"
      [borderDarkMode]="'rgba(255, 255, 255, 0.2)'"
      [borderRadius]="'0.5rem'"
      [iconSize]="'4rem'"
      (program)="handleProgram($event)"
      (themeToggled)="handleThemeToggle($event)"
    ></lib-taskbar>
  `,
  standalone: true,
  imports: [TaskbarComponent]
})
export class AppComponent {
  taskbarIcons: TaskbarIcon[] = [
    { icon: 'assets/icons/app1.png', label: 'App 1' },
    { icon: 'assets/icons/app2.png', label: 'App 2' }
  ];

  handleProgram(icon: TaskbarIcon) {
    console.log('Program clicked:', icon);
  }

  handleThemeToggle(isDarkTheme: boolean) {
    console.log('Dark theme enabled:', isDarkTheme);
  }
}
```

### TaskbarComponent Inputs

- **`icons`** (`TaskbarIcon[]`): Array of icons to display on the taskbar. Each `TaskbarIcon` contains:
  - `icon` (string): The path to the icon image.
  - `label` (string): A label for the icon.
  - `id` (string, optional): An optional identifier for the icon.

- **`showThemeToggle`** (`boolean`, default: `false`): Whether to display a theme toggle switch on the taskbar.

- **`fullWidth`** (`boolean`, default: `false`): Whether the taskbar should occupy the full width of its container.

- **`backgroundColor`** (`string`, default: `'rgba(244, 245, 245, 1)'`): The background color of the taskbar in light theme. Can be controlled via CSS variables.

- **`darkThemeBackgroundColor`** (`string`, default: `'rgba(50, 50, 50, 1)'`): The background color of the taskbar in dark theme. Can be controlled via CSS variables.

- **`borderColor`** (`string`, default: `'rgba(0, 0, 0, 0.1)'`): The border color of the taskbar in light theme. Can be controlled via CSS variables.

- **`borderDarkMode`** (`string`, default: `'rgba(255, 255, 255, 0.1)'`): The border color of the taskbar in dark theme. Can be controlled via CSS variables.

- **`borderRadius`** (`string`, default: `'1rem'`): The border radius of the taskbar. Can be controlled via CSS variables.

- **`iconSize`** (`string`, default: `'3rem'`): The size of the icons in the taskbar. Can be controlled via CSS variables.

### TaskbarComponent Outputs

- **`program`** (`EventEmitter<TaskbarIcon>`): Emits the clicked `TaskbarIcon`.

- **`themeToggled`** (`EventEmitter<boolean>`): Emits `true` if the dark theme is enabled, otherwise `false`.

### TaskbarIcon Interface

```typescript
export interface TaskbarIcon {
  icon: string;
  label: string;
  id?: string;
}
```

## Example

Here is a complete example of using the `TaskbarComponent` in an Angular project:

```typescript
import { Component } from '@angular/core';
import { TaskbarComponent, TaskbarIcon } from 'taskbar-angular';

@Component({
  selector: 'app-root',
  template: `
    <lib-taskbar
      [icons]="taskbarIcons"
      [showThemeToggle]="true"
      [fullWidth]="true"
      [backgroundColor]="'#ffffff'"
      [darkThemeBackgroundColor]="'#333333'"
      [borderColor]="'#dddddd'"
      [borderDarkMode]="'#444444'"
      [borderRadius]="'1rem'"
      [iconSize]="'3.5rem'"
      (program)="handleProgram($event)"
      (themeToggled)="handleThemeToggle($event)"
    ></lib-taskbar>
  `,
  standalone: true,
  imports: [TaskbarComponent]
})
export class AppComponent {
  taskbarIcons: TaskbarIcon[] = [
    { icon: 'assets/icons/app1.png', label: 'App 1' },
    { icon: 'assets/icons/app2.png', label: 'App 2' },
    { icon: 'assets/icons/app3.png', label: 'App 3' }
  ];

  handleProgram(icon: TaskbarIcon) {
    console.log('Program clicked:', icon);
  }

  handleThemeToggle(isDarkTheme: boolean) {
    console.log('Dark theme enabled:', isDarkTheme);
  }
}
```

## Customization

You can easily customize the `TaskbarComponent` by adjusting the following properties:
- `backgroundColor`: Sets the background color for the light theme using a CSS variable.
- `darkThemeBackgroundColor`: Sets the background color for the dark theme using a CSS variable.
- `borderColor`: Sets the border color for the light theme using a CSS variable.
- `borderDarkMode`: Sets the border color for the dark theme using a CSS variable.
- `borderRadius`: Sets the border radius using a CSS variable.
- `iconSize`: Sets the size of the icons using a CSS variable.

### Example with Custom Styles

```typescript
<lib-taskbar
  [icons]="taskbarIcons"
  [backgroundColor]="'#f8f9fa'"
  [darkThemeBackgroundColor]="'#343a40'"
  [borderColor]="'#ced4da'"
  [borderDarkMode]="'#495057'"
  [borderRadius]="'0.25rem'"
  [iconSize]="'4rem'"
  [showThemeToggle]="true"
  (program)="handleProgram($event)"
  (themeToggled)="handleThemeToggle($event)"
></lib-taskbar>
```

## Building the Library

If you want to build the library from the source code, clone the repository and run:

```bash
npm install
npm run build
```

The output will be located in the `dist/` directory.

## Contributing

We welcome contributions! If you find a bug or have a feature request, please open an issue or submit a pull request on [GitHub](https://github.com/tebib91/angular-libraries).

### How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
