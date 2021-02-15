import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { GoogleChartInterface } from 'ng2-google-charts';
import { ServizioService } from '../servizio.service';
import { ChartData } from '../chartData.model';

@Component({
  selector: 'app-goaltwo',
  templateUrl: './goaltwo.component.html',
  styleUrls: ['./goaltwo.component.css']
})
export class GoaltwoComponent implements OnInit {
  query: string;
  title = 'GOALTWO';
  obsSDG: Observable<Object>;
  results: any;
  dati = [];

  constructor(public servizio: ServizioService,
              private route: ActivatedRoute,
              private location: Location) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  submit(query: HTMLInputElement): void {

    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsSDG = this.servizio.goaltwo(this.query);
    this.obsSDG.subscribe(this.getData);
  }


  getData = (data) => {
    console.log(data);
    this.dati.push(['TimePeriod', 'Value']);
    for (var i of data)
    {
      this.dati.push([i['TimePeriod'], i['Value']]);
    }
    console.log(this.dati);
    this.LineChart.dataTable = this.dati;
  }



  public LineChart: GoogleChartInterface = {
  chartType: 'ColumnChart',
  dataTable: undefined,
  //firstRowIsData: true,
  options: {'TimePeriod': 'Value'},
};



}
