import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: any; 
  allProducts:any; //here we are storing all products when we click on category getting the data.....when i use productList i am not getting data of second category
  searchKey: string = "";
  filterCategory: any;
  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res => {
      this.productList = res;
      this.filterCategory = res;
      this.allProducts=res;
      this.productList.forEach((a: any) => { //this method is to add the total price of items which are added and quantity
        if(a.category === "women's clothing" || a.category === "men's clothing") {  //here we are gettin the data based on category
          a.category = "fashion";
        }
        Object.assign(a, { quantity: 1, total: a.price })
      });
    })
    this.cartService.search.subscribe((val: any) => { //we emited the data in header component here we are subscribing
      this.searchKey = val;
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
  filter(category:string) {
    this.filterCategory = this.allProducts.filter((a: any) => {
        if(a.category == category || category == '') {
          return a;
        }
      });
      this.productList = this.filterCategory; //storing the filterCategory in productList and displaying th eselected category
  }
}
