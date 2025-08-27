import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Blobs } from './blobs/blobs';
import { Header } from './header/header';
import { Landingpage } from './landingpage/landingpage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Blobs, Header, Landingpage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudyBuddy');
}
