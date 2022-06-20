import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinkDescriptionComponent } from './quicklink-description.component';

describe('QuicklinkDescriptionComponent', () => {
  let component: QuicklinkDescriptionComponent;
  let fixture: ComponentFixture<QuicklinkDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicklinkDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicklinkDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
