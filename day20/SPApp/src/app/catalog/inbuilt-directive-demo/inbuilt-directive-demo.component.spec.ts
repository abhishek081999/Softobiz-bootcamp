import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltDirectiveDemoComponent } from './inbuilt-directive-demo.component';

describe('InbuiltDirectiveDemoComponent', () => {
  let component: InbuiltDirectiveDemoComponent;
  let fixture: ComponentFixture<InbuiltDirectiveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuiltDirectiveDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
