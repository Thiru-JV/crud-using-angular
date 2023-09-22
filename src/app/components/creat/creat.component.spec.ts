import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatComponent } from './creat.component';

describe('CreatComponent', () => {
  let component: CreatComponent;
  let fixture: ComponentFixture<CreatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatComponent]
    });
    fixture = TestBed.createComponent(CreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
