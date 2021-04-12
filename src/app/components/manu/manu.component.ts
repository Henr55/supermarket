import { TranslationService } from './../../services/transletion.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-manu',
  templateUrl: './manu.component.html',
  styleUrls: ['./manu.component.scss']
})
export class ManuComponent implements OnInit {

  languageSub:Subscription|string="";
  constructor(private TranslationService:TranslationService) { }
  language:string='';
  ngOnInit() {
    this.languageSub=this.TranslationService.getLanguage().subscribe(
      res=>{
        this.language=res;
      }
    )

  }

}
