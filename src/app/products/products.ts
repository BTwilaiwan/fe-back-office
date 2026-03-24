import { Component } from '@angular/core';
import { DefaultModules } from '../shared/modules/default-module';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-products',
  imports: [ DefaultModules ],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class ProductsComponent {

  constructor(
    private translateService: TranslateService
  ) {}

}

