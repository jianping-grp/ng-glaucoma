import {inject, TestBed} from "@angular/core/testing";
import {RestGlauService} from "./rest-glau.service";

describe('RestGlauService', () => {
  beforeEach( () => {
    TestBed.configureTestingModule({
      providers: [RestGlauService]
    });
  });

  it('should be created', inject([RestGlauService],(service: RestGlauService) => {
    expect(service).toBeTruthy();
  }))
})
