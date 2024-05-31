import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { mergeObjects } from "../helpers/object.helper";

@Injectable({
  providedIn: 'root'
})
export class ConfigService<T> {
  private configs: Record<string, BehaviorSubject<Partial<T>>> = {};

  get(key: string) {
    return this.configs[key].asObservable();
  }

  set(key: string, target: Partial<T>, source: Partial<T> = {}): ConfigService<T> {

    if (!this.configs[key]?.value) {
      this.configs[key] = new BehaviorSubject<Partial<T>>({});
    }
    const config = mergeObjects(target, source);
    this.configs[key].next(config);

    return this;
  }
}
