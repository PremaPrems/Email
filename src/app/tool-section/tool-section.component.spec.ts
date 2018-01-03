import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolSectionComponent } from './tool-section.component';

describe('ToolSectionComponent', () => {
  let component: ToolSectionComponent;
  let fixture: ComponentFixture<ToolSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToolSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});