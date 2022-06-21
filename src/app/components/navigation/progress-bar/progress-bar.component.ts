import { Component } from '@angular/core';
import { LoaderService } from '@App/services/loader.service';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  public show: boolean = false;

  constructor(private progressBar: LoaderService) {
    this.progressBar.progressBarEvent.subscribe((event: boolean) => {
      this.show = event;
    });
  }
}
