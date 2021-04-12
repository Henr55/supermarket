import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimarket',
  templateUrl: './minimarket.component.html',
  styleUrls: ['./minimarket.component.scss']
})
export class MinimarketComponent implements OnInit {
  markets:any[]=[{
    id:1,
    img:"../../../assets/image/photo-1498837167922-ddd27525d352.jpg",
  },
  {
    id:2,
    img:"../../../assets/image/photo-1499028344343-cd173ffc68a9.jpg",
  },
  {
    id:3,
    img:"../../../assets/image/photo-1598181151254-e77b18a8f0cb.jpg",
  },
  {
    id:4,
    img:"../../../assets/image/photo-1502197996753-841c0e19d607.jpg",
  },
  {
    id:5,
    img:"../../../assets/image/photo-1516128043650-037fbdbd0b6e.jpg",
  },
  {
    id:6,
    img:"../../../assets/image/photo-1498837167922-ddd27525d352.jpg",
  },
  {
    id:7,
    img:"../../../assets/image/photo-1552620896-a6ac30992d63.jpg",
  },{
    id:8,
    img:"../../../assets/image/photo-1499028344343-cd173ffc68a9.jpg",
  },{
    id:9,
    img:"../../../assets/image/photo-1516128043650-037fbdbd0b6e.jpg",
  },{
    id:10,
    img:"../../../assets/image/photo-1516128043650-037fbdbd0b6e.jpg",
  },
  {
    id:11,
    img:"../../../assets/image/photo-1502197996753-841c0e19d607.jpg",
  }]
  constructor() { }

  ngOnInit() {
  }

}
