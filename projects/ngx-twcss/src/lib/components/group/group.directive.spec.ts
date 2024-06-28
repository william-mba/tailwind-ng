import { ElementRef } from "@angular/core";
import { Group } from "./group.directive";

describe('GroupDirective', () => {
  it('should create an instance', () => {

    const element = new Group(new ElementRef('tw-group'));
    expect(element).toBeTruthy();
  });
});
