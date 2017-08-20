import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyspotCardComponent } from './keyspot-card.component';

describe('KeyspotCardComponent', () => {
  let component: KeyspotCardComponent;
  let fixture: ComponentFixture<KeyspotCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyspotCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyspotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
