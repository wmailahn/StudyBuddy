import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Blobs } from './blobs/blobs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Blobs],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudyBuddy');
}
