import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable()
export class UserDataService {
  private positions = ["Manager", "Employee"];
  private educations = ["PhD", "Master", "University"];

  getPositions(): Observable<string[]> {
    return of(this.positions);
  }

  getEducations(): Observable<string[]> {
    return of(this.educations);
  }
}
