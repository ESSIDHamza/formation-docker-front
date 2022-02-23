import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { TechnologieService } from './services/technologie.service';
import { Technologie } from './models/technologie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  technologies: Technologie[];
  lines: string[];

  technologiesSubscription: Subscription;
  fillTechnologiesDataSubscription: Subscription;
  readFileSubscription: Subscription;

  constructor(private technologieService: TechnologieService) { }

  ngOnInit(): void {
    this.loadTechnologiesData();
    setInterval(() => {
      this.readFile();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.technologiesSubscription) {
      this.technologiesSubscription.unsubscribe();
    }

    if (this.fillTechnologiesDataSubscription) {
      this.fillTechnologiesDataSubscription.unsubscribe();
    }

    if (this.readFileSubscription) {
      this.readFileSubscription.unsubscribe();
    }
  }

  fillTechnologiesData(): void {
    this.fillTechnologiesDataSubscription = this.technologieService.fillTechnologiesData().subscribe((_: void) => {
      this.loadTechnologiesData();
    });
  }

  private loadTechnologiesData(): void {
    this.technologiesSubscription = this.technologieService.getAllTechnologies().subscribe((response: Technologie[]) => {
      this.technologies = response;
    });
  }

  private readFile(): void {
    this.readFileSubscription = this.technologieService.readFile().subscribe((response: string[]) => {
      this.lines = response;
    });
  }

}
