import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  @Input()
  public productInfo:any;
}
