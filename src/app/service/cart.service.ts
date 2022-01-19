import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any =[];
  public productItemList = new BehaviorSubject<any>([]) //it act as observable and it emits the data.... we can take the products from here
  //and the products which we are adding is first adds here from here it emits to cart list.
  public search = new BehaviorSubject<string>("");
  constructor() { }
  getProducts() {
    return this.productItemList.asObservable();
  }
  setProducts(product: any) {
    this.cartItemList.push(...product); //pushin the added products into cartlist
    this.productItemList.next(product);
  }
  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productItemList.next(this.cartItemList);
    this.getTotalPrice();
  }
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{ //a means saved product
      grandTotal += a.total;
    });
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{ //when we are performing removing the items we are comparing the id of actual product id with saved product id
    if(product.id === a.id){
      this.cartItemList.splice(index,1)
    }
    })
    this.productItemList.next(this.cartItemList); // when we delete the item in cart to update the badge count
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productItemList.next(this.cartItemList)
  }
}
