
import { Component, OnInit } from '@angular/core';
import {JsonService} from 'src/app/service/json.service';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
})

export class Tab4Component implements OnInit {
  data: any={};

  constructor(public json:JsonService) { }

  ngOnInit() {
    this.response();
  }

  response(){
    this.json.getJson('https://invessoft.com/api/eventos/1').subscribe((response: any) =>{
    this.data = response;

    
  })
}

}
