import { Poroduct } from './../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private list:Poroduct[]=[];
  constructor() { }

  price: number = 0
  getList(){
    return this.list;
  }
  addList(p:Poroduct){
    for(let i = 0; i < this.list.length; i++){
      if(p.id === this.list[i].id){
        // p.count += 1
        this.list[i].count+=1;
        return;
      }
    }
    // p.count=1;
    this.list.push(p);
  }
  deleteOne(id: number){
    let index = this.list.indexOf(this.list[id])
    this.list.splice(index, 1)
  }
  deleteProducts(){
    this.list=[];
  }

}
