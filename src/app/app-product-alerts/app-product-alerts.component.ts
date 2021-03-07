import { Component, OnInit } from "@angular/core";

import { Input } from "@angular/core";

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-product-alerts",
  templateUrl: "./app-product-alerts.component.html",
  styleUrls: ["./app-product-alerts.component.css"]
})
export class AppProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
