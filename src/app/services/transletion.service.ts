import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
private language=new Subject<string>();
constructor() { }
  updateLanguage(name:string){
    this.language.next(name);
  }
  getLanguage(){
    return this.language.asObservable();
  }
}
