import { TranslationService } from './../../services/transletion.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  language:string="";
  currency:string="";

  constructor(private TranslationService:TranslationService) { }

  ngOnInit() {
    this.language="Հայերեն";
    this.currency="AMD";
  }

  changeLanguage(s:string){
    localStorage.setItem('language',s);
    this.TranslationService.updateLanguage(s);
    this.language=s;
  }
  changeCurrency(c:string){
    this.currency=c;
  }
}
