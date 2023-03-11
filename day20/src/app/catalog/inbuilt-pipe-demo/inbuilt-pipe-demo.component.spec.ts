import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltPipeDemoComponent } from './inbuilt-pipe-demo.component';

describe('InbuiltPipeDemoComponent', () => {
  let component: InbuiltPipeDemoComponent;
  let fixture: ComponentFixture<InbuiltPipeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InbuiltPipeDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InbuiltPipeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
