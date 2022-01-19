import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalItems : number =0;
  searchTerm !: string;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{ //this is to update the badge count
      this.totalItems = res.length;
    })
  }
search(event:any){
  this.searchTerm = (event.target as HTMLInputElement).value; //event.target is used to send the serach product
  console.log(this.searchTerm);
  this.cartService.search.next(this.searchTerm) //it act as emitter
}
}
