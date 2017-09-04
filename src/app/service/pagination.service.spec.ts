import {inject, TestBed} from "@angular/core/testing";
import {PaginationService,} from "./pagination.service";

describe('QueryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaginationService]
    })
  });
});

it('should be create', inject([PaginationService], (service: PaginationService) => {
  expect(service).toBeTruthy();
}));
