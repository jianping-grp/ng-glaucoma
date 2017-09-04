
import {CompoundComponent} from "./compound.component";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";


describe('CompoundComponent', () => {
  let comp: CompoundComponent;
  let fixture: ComponentFixture<CompoundComponent>;

  beforeEach(async(() =>{
    TestBed.configureTestingModule({
      declarations: [CompoundComponent]
    })
      .compileComponents()
  }));
  beforeEach(async() => {
    fixture = TestBed.createComponent(CompoundComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should be create', () => {
    expect(comp).toBeTruthy()
  })
});
