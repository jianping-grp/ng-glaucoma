import {UniprotDetailComponent} from "./uniprot-detail.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe("UniprotDetailComponent", () => {
  let comp: UniprotDetailComponent;
  let fixture: ComponentFixture<UniprotDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule( {
      declarations: [UniprotDetailComponent]
    })
      .compileComponents()
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotDetailComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('shounld be created', () => {
    exports(comp).toBeTruthy()
  })
})

