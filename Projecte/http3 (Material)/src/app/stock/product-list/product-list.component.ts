import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/shared/classes/stock.model';
import { ApiProductsService } from 'src/app/shared/services/api-products.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  public products: Product = this.api.initProduct();
  public order: Product[] = [this.api.initProduct()];
  dataSource = this.products;
  displayedColumns: string[] = ['name', 'value', 'qty'];
  constructor(private api: ApiProductsService) {}

  getProducts() {
    this.api.getProducts$().subscribe(arg => {
      this.products = arg;
      this.matTable();
    });
  }
  matTable() {
    /*this.dataSource = new MatTableDataSource(this.products);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;*/
    this.dataSource = this.products;
  }
  drop(event: CdkDragDrop<Product[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  ngOnInit() {
    this.getProducts();
  }
}
