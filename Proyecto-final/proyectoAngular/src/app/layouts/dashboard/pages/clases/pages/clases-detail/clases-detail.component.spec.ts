import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesDetailComponent } from './clases-detail.component';

describe('ClasesDetailComponent', () => {
  let component: ClasesDetailComponent;
  let fixture: ComponentFixture<ClasesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClasesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
