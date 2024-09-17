import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { NgFor, getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductItemComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  ngOnInit(): void {
    this.loadProductInfo();
  }

  public productList: any = [];

  async loadProductInfo() {
    
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => {
        this.productList=data;
      });

        

    // let data = await fetch('https://fakestoreapi.com/products').then(res=> res.json())
    // this.productList=data
     
  }
}
