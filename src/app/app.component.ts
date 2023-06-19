import { Component } from '@angular/core';
import { IonicStorageService } from './services/ionic-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private dataService: IonicStorageService) {
    this.dataService.init();
  }
}
