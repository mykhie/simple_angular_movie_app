import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsComponent } from './artists.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Router, RouterModule} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsComponent ],
      imports:[
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`isLoading has default value`, () => {
    expect(component.isLoading).toBeDefined();
  });

  it(`search has default value`, () => {
    expect(component.searchString).toEqual('');
  });


  it(`Should return an shorted string from a number`, () => {
    expect(component.returnShortNumberString('2021')).toEqual('2k');
  });


});
