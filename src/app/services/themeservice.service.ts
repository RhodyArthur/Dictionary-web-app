import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeserviceService {
  isDarkMode: boolean = false;
  constructor() { }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateTheme();
  }

  private updateTheme() {
    const body = document.getElementsByTagName('body')[0]
    if (this.isDarkMode){
      body.classList.add('dark-mode')
    }
    else {
      body.classList.remove('dark-mode')
    }
  }
}
