import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatabindingassignmentComponent } from './satabindingassignment.component';

describe('SatabindingassignmentComponent', () => {
  let component: SatabindingassignmentComponent;
  let fixture: ComponentFixture<SatabindingassignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SatabindingassignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SatabindingassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
