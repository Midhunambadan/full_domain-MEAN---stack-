import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourChangeComponent } from './colour-change.component';

describe('ColourChangeComponent', () => {
  let component: ColourChangeComponent;
  let fixture: ComponentFixture<ColourChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColourChangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColourChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
