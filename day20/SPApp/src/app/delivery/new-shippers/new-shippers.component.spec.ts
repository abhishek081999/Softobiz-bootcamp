import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewShippersComponent } from './new-shippers.component';

describe('NewShippersComponent', () => {
  let component: NewShippersComponent;
  let fixture: ComponentFixture<NewShippersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewShippersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewShippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
