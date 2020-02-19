import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/internal/Observable';
import { Address } from '../address';
import { EMPTY } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent implements OnInit {
  items: Observable<Address[]> = EMPTY;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  load() {
    this.items = this.dataService.loadAddresses();
  }
}
