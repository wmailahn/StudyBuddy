import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Blobs } from './blobs';

describe('Blobs', () => {
  let component: Blobs;
  let fixture: ComponentFixture<Blobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Blobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Blobs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
