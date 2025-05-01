import {Component, ElementRef, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import {ClipboardModule} from 'ngx-clipboard';
import {CdkCopyToClipboard} from '@angular/cdk/clipboard';


@Component({
  standalone: true,
  selector: 'app-downloader',
  imports: [
    NgIf,
    ClipboardModule,
    CdkCopyToClipboard,
  ],
  templateUrl: './downloader.component.html',
  styleUrls: ['./downloader.component.css']
})
export class DownloaderComponent {
  error = '';
  preview: string | null = null;
  selectedFile: File | null = null;
  textResult: string | null = null;
  apiKey = 'HEATGhiJZKHKhe3fCJRgXQ==krhANaJwybZkPf9V';
  constructor(private http: HttpClient) {
    console.log(this.http);
  }

  sendToApi(file: File) {

    if (!this.http) {
      this.error = 'HttpClient not injected properly!';
      return;
    }
    const formData = new FormData();
    formData.append('image', file);

    this.http.post<any[]>('https://api.api-ninjas.com/v1/imagetotext', formData, {
      headers: {
        'X-Api-Key': this.apiKey
      }
    }).subscribe({
      next: (res) => {
        this.textResult = res.map(r => r.text).join('\n');
        this.error = '';
      },
      error: (err) => {
        console.error(err);
        this.error = 'Помилка при розпізнанні тексту';
        this.textResult = null;
      }
    });
  }


  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    console.log('Вибраний файл:', file);
    const allowedTypes = ['image/jpeg', 'image/png'];
    if (!allowedTypes.includes(file.type)) {
      this.error = 'Допустимі тільки файли JPG або PNG';
      this.preview = null;
      return;
    }
    const maxSize = 2 * 1024 * 1024;
    if (file.size > maxSize) {
      this.error = 'Максимальний розмір фото 2MB';
      this.preview = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
      this.selectedFile = file;
      if (this.selectedFile) {
        this.sendToApi(this.selectedFile);
      }
    };

    reader.readAsDataURL(file);
  }


  copyToClipboard() {
    if (this.textResult) {
      navigator.clipboard.writeText(this.textResult)
        .then(() => console.log('Текст скопійований'))
        .catch(() => {
          this.error = 'Помилка бо мені так захотілось';
        });
    }
  }

}
