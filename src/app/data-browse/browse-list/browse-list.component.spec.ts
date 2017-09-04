import {BrowseListComponent} from "./browse-list.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe('BrowseListComponent', () => {
  let comp : BrowseListComponent;
  let fixture: ComponentFixture<BrowseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseListComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () =>
     expect(comp).toBeTruthy())
})
