import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  formVisible = true;
  addresses = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  addAddress(item: Address) {
    this.addresses.push(item);
    this.dataService.addAddress(item);
  }
}
