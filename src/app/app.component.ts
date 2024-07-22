import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { WordDetailsComponent } from "./word-details/word-details.component";
import { ThemeserviceService } from './services/themeservice.service';
import { FormsModule } from '@angular/forms';
import { response } from './interfaces/response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, WordDetailsComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'dictionary-app';
  searchResult:response[] = []

  constructor (private themeService: ThemeserviceService){}

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  handleSearchResult(meaning:response[]) {
    this.searchResult = meaning;
  }

  ngOnInit(){
    
  }
}
