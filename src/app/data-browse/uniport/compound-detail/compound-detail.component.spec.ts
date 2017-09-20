import {CompoundDetailComponent} from "./compound-detail.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";

describe("CompoundDetailComponent", () => {
  let comp : CompoundDetailComponent;
  let fixture: ComponentFixture<CompoundDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompoundDetailComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundDetailComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(comp).toBeTruthy();
  })
})
