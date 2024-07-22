import { Component, EventEmitter, Output } from '@angular/core';
import { ThemeserviceService } from '../services/themeservice.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

@Output()
toggleThemeEvent = new EventEmitter<void>();
themeService: ThemeserviceService | undefined
// themeService: any

showDropDown:boolean = false;
fonts: string[] = ['Sans Serif', 'Serif', 'Mono'];
selectedFont:string = 'Sans serif'
isDarkMode:boolean = false;

// toggle dropdown menu
toggleDropDown(){
  this.showDropDown = !this.showDropDown
}

// font family selection
selectFont(fontType:string){
  this.selectedFont = fontType;
  this.applyFontToBody();
  this.showDropDown = false;
}

// Apply selected font to body content
applyFontToBody() {
  document.body.style.fontFamily = this.selectedFont;
}

// toggle theme to dark and light mode
toggleTheme() {
  this.toggleThemeEvent.emit()
}
}
