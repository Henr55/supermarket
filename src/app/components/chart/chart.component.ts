import { Poroduct } from './../../models/product.model';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  products:Poroduct[]=[];
  price: number = 0
  constructor(private cartService:CartService) { }

  ngOnInit() {
    this.products=this.cartService.getList();
    for (let i = 0; i < this.products.length; i++)
    {
      this.price += this.products[i].price * this.products[i].count;
    }
  }

  deleteProduct(){
    this.cartService.deleteProducts();
    this.ngOnInit();
    this.price = 0;
  }
  deleteOne(id: number){
    let index = this.products.findIndex(x => x.id === id)
    this.price -= this.products[index].price * this.products[index].count
    this.cartService.deleteOne(index)
  }
}
