import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerDeclarationComponent } from './winner-declaration.component';

describe('WinnerDeclarationComponent', () => {
  let component: WinnerDeclarationComponent;
  let fixture: ComponentFixture<WinnerDeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnerDeclarationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinnerDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
