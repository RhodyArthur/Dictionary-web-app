import { Component, Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { response } from '../interfaces/response.interface';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-word-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './word-details.component.html',
  styleUrl: './word-details.component.css'
})
export class WordDetailsComponent {
  constructor(private apiService: ApiService){}

@Input() data!:response[]


// word pronounciation
playAudio() {
  const phonetics = this.data?.[0]?.phonetics;
  if (phonetics && phonetics.length > 0) {
    const phoneticWithAudio = phonetics.find(p => p.audio);
    if (phoneticWithAudio) {
      const audio = new Audio(phoneticWithAudio.audio);
      audio.play();
    } else {
      console.error('No audio URL found');
    }
  } else {
    console.error('Phonetics data not found');
  }
}

copyLink(){
  navigator.clipboard.writeText(this.data[0].sourceUrls[0])
}
}

