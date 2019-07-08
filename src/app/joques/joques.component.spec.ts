import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoquesComponent } from './joques.component';

describe('JoquesComponent', () => {
  let component: JoquesComponent;
  let fixture: ComponentFixture<JoquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
