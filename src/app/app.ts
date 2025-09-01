import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Blobs } from './blobs/blobs';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Homepage } from './homepage/homepage';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Blobs, Header, Footer, Homepage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('StudyBuddy');
}
