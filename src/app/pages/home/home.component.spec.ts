import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SliderComponent } from '@App/pages/home/components/slider/slider.component';
import { NoveltiesComponent } from '@App/pages/home/components/novelties/novelties.component';
import { SalesComponent } from '@App/pages/home/components/sales/sales.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductListComponent } from '@App/pages/home/components/product-list/product-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SliderComponent,
        NoveltiesComponent,
        SalesComponent,
        ProductListComponent,
      ],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
