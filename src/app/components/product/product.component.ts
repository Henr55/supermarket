import { CartService } from './../../services/cart.service';
import { Poroduct } from './../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private cartService:CartService) { }
  count:number=1;
  prods:any[]=[];
  page:number=1;
  products:any[]=[{
    id:1,
    img:"../../../assets/image/photo-1552620896-a6ac30992d63.jpg",
    name:"Merlot",
    price:5000,
    count:1
  },
  {
    id:2,
    img:"../../../assets/image/photo-1499028344343-cd173ffc68a9.jpg",
    name:"Burger",
    price:2500,
    count:1
  },
  {
    id:3,
    img:"../../../assets/image/photo-1598181151254-e77b18a8f0cb.jpg",
    name:"Winston",
    price:7000,
    count:1
  },
  {
    id:4,
    img:"../../../assets/image/photo-1502197996753-841c0e19d607.jpg",
    name:"Jack Daniels",
    price:1350,
    count:1
  },
  {
    id:5,
    img:"../../../assets/image/photo-1552620896-a6ac30992d63.jpg",
    name:"Melot",
    price:7800,
    count:1
  },
  {
    id:6,
    img:"../../../assets/image/photo-1598181151254-e77b18a8f0cb.jpg",
    name:"Winston",
    price:1000,
    count:1
  },
  {
    id:7,
    img:"../../../assets/image/photo-1502197996753-841c0e19d607.jpg",
    name:"Jack Daniels",
    price:500,
    count:1
  },
  {
    id:8,
    img:"../../../assets/image/photo-1552620896-a6ac30992d63.jpg",
    name:"Merlot",
    price:11000,
    count:1
  },
  {
    id:9,
    img:"../../../assets/image/photo-1499028344343-cd173ffc68a9.jpg",
    name:"Burger",
    price:5200,
    count:1
  },
  {
    id:10,
    img:"../../../assets/image/photo-1552620896-a6ac30992d63.jpg",
    name:"Merlot",
    price:6600,
    count:1
  }
]

  onlyNumber(event:any):boolean{
    const charcode = (event.which) ? event.which: event.keyCode

    if(charcode > 31 && (charcode < 48 || charcode > 57)){
      return false
    }
    return true
  }
  ngOnInit() {
    for(let i=0;i<4;i++){
      this.prods.push(this.products[i])
    }
  }
  price: number = 0
  next(){
    if(this.page>=this.products.length-3)
      return
    this.page++;
    this.prods.splice(0,1);
    this.prods.push(this.products[this.page+2]);
  }
  add(p:Poroduct){
    // for(let i = 0; i < this.count; i++){
    this.cartService.addList(p);
    // }
  }
  previous(){
    if(this.page<=1)
      return
    this.page--;
    this.prods.splice(3,1);
    this.prods.unshift(this.products[this.page-1])
  }

}
