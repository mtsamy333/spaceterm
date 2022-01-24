import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css']
})
export class AirplaneComponent implements OnInit {
  success: boolean = true;
  LandSucc: boolean = true;
  showError: any;
  name = 'Samy18';
  constructor(private http: ApiserviceService) { }
  flightData: any = []
  dev_name = "Samy";
  ngOnInit(): void {
    this.http.fetchFlights().subscribe(data => {
      console.log("responce recived ",data),
      this.flightData = data;
      if (this.flightData.length == 0) {
      }
      console.log("Data :", this.flightData)
    })
  }
  sendYear(header6:any): void {
    console.log(header6);
    this.http.fetchAll(header6, this.success, this.LandSucc).subscribe(data => {
      this.flightData = data;
      console.log("success :", this.flightData)
    })
  }
  sendSuccess(succ:any) {
    this.success = succ;
    console.log(succ);
    this.http.fetchLanchSucess(succ).subscribe(data => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }
  LandSuccLuanchSucc(val:any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe(data => {
      this.flightData = data;
      console.log("Land :", this.flightData)
    })
  }
}
