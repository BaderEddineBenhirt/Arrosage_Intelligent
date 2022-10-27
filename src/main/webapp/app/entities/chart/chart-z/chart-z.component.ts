
import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEspaceVert } from 'app/entities/espace-vert/espace-vert.model';
import { EspaceVertService } from 'app/entities/espace-vert/service/espace-vert.service';
import { ZoneService } from 'app/entities/zone/service/zone.service';
import { IZone } from 'app/entities/zone/zone.model';
import {  ChartData, ChartOptions } from 'chart.js';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
import { GrandeurService } from 'app/entities/grandeur/service/grandeur.service';
@Component({
  selector: 'jhi-chart-z',
  templateUrl: './chart-z.component.html',
  styleUrls: ['./chart-z.component.scss']
})

export class ChartZComponent implements OnInit {
  
  c=0 ;

  result :any ;
  coinPrice :any;
  coinName :any;   
  chart : any = [] ;
  
  data : number[] = [] ;
  zones: IZone[] = [];
  chartDatasets : any[] = [] ;
  chartLabels :string[] = [];
  espaceVertsSharedCollection: IEspaceVert[] = [];
  isLoading=false ;
  chartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  

  chartOptions: ChartOptions = {
    responsive: false,
    plugins: {
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };

  constructor(private httpClient: HttpClient,protected grandeurService: GrandeurService  , protected espaceVertService: EspaceVertService,) {
    Chart.register(...registerables)
  
  }
  


  ngOnInit(): void {
   
    this.grandeurService.cryptoData().then((res: any)=>{
      this.result = res
      console.log( this.result )
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      this.coinPrice = this.result.data.coins.map((coin:any)=> coin.price)
      
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      this.coinName = this.result.data.coins.map((coin:any)=> coin.name)

      console.log(this.coinName, this.coinPrice)

      

      this.chart = new Chart('canvas',{
        type : 'line',
        data: {
          labels: this.coinName ,
          datasets: [{
              label: 'coin price',
              data: this.coinPrice,
              borderWidth: 3,
              fill :false,
              backgroundColor : 'rgba(93, 175, 89, 0.1)',
              borderColor : '#3e95cd'
          }]
      },
      
    
      })
    });
  }
  
}