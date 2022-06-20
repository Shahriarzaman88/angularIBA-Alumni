import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklinkListComponent } from './quicklink-list.component';

describe('QuicklinkListComponent', () => {
  let component: QuicklinkListComponent;
  let fixture: ComponentFixture<QuicklinkListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicklinkListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuicklinkListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
