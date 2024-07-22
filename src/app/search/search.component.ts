import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { response } from '../interfaces/response.interface';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{

  data: response[] = [];
  
  constructor(private apiService: ApiService) {}

  searchTerm: string = '';
  // display error message
  showErrorMsg:boolean = false;
  fetchError:boolean = false;
  isLoading:boolean = false;

  @Output()
  searchResult = new EventEmitter<any>();

  ngOnInit(): void {
  }

  searchWord(){
    // validating input field
    if (!this.searchTerm.trim()){
      this.showErrorMsg = true;
      return;
    }

    this.showErrorMsg = false;
    this.isLoading = true;
    this.apiService.fetchDefinition(this.searchTerm.trim())
    .pipe(catchError(error => {
      this.isLoading = false;
      this.fetchError = true;
      return of([]);
    }))
    .subscribe(data => {
      this.isLoading = false;
      this.fetchError = false;
      console.log(data)
      this.searchResult.emit(data)
      this.searchTerm = ''
    }) 
    
    
  }

}
