import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configurateur',
  templateUrl: './configurateur.component.html',
  styleUrls: ['./configurateur.component.css']
})
export class ConfigurateurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
