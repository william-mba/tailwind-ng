import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { PrimaryButtonConfig } from "../../components/buttons/primary-button/primary-button.config";
import { mergeObjects } from "../helpers/object.helper";
import { SecondaryButtonConfig } from '../../components/buttons/secondary-button/secondary-button.config';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  private _primaryButtonConfigSubject = new BehaviorSubject<Partial<PrimaryButtonConfig>>(PrimaryButtonConfig);
  private _secondaryButtonConfigSubject = new BehaviorSubject<Partial<SecondaryButtonConfig>>(SecondaryButtonConfig);

  public primaryButtonConfig() {
    return this._primaryButtonConfigSubject.asObservable();
  }

  public setPrimaryButtonConfig(config: Partial<PrimaryButtonConfig>): void {
    const newConfig = mergeObjects(PrimaryButtonConfig, config);
    this._primaryButtonConfigSubject.next(newConfig);
  }

  public secondaryButtonConfig() {
    return this._secondaryButtonConfigSubject.asObservable();
  }

  public setSecondaryButtonConfig(config: Partial<SecondaryButtonConfig>): void {
    const newConfig = mergeObjects(SecondaryButtonConfig, config);
    this._secondaryButtonConfigSubject.next(newConfig);
  }
}
