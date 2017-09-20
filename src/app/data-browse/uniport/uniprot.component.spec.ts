import {UniprotComponent} from "./uniprot.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe("UniprotComponent", () => {
  let comp : UniprotComponent;
  let fixture: ComponentFixture<UniprotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UniprotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniprotComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  })
})
