import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DownloaderComponent} from './downloader/downloader.component';
import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    DownloaderComponent,
    CommonModule,
    HttpClientModule,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {
  title = 'angular-ninja';

}
