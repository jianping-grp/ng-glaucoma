import {DataBrowseComponent} from "./data-browse.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe("DataBrowseComponent", () => {
  let comp : DataBrowseComponent;
  let fixture: ComponentFixture<DataBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBrowseComponent ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBrowseComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp).toBeTruthy()
  })
})
