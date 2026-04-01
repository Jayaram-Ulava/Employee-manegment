import { Component } from '@angular/core';
import { AllproductsService } from '../allproducts.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent {

  displaypro: any[] = [];
  allProducts: any[] = [];
  selectedCategory: string = 'all';

  constructor(private allproducts: AllproductsService) {
    this.getProducts();
  }

  /* ✅ GET ALL PRODUCTS */
  getProducts() {
    this.allproducts.getAllProducts().subscribe((res: any) => {
      this.allProducts = res.products;   // API structure
      this.displaypro = this.allProducts;
      console.log(this.allProducts);
    });
  }

  /* ✅ CATEGORY FILTER */
  filterCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'all') {
      this.displaypro = this.allProducts;
    } else {
      this.displaypro = this.allProducts.filter(
        p => p.category.toLowerCase().includes(category.toLowerCase())
      );
    }
  }
}