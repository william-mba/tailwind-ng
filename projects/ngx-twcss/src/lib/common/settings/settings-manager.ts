import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { PrimaryButtonSettings } from "../../components/buttons/primary-button/primary-button.settings";
import { mergeObjects } from "../helpers/object.helper";

@Injectable({
  providedIn: 'root'
})
export class SettingsManager {

  private _primaryButtonSettingsSubject: BehaviorSubject<PrimaryButtonSettings> = new BehaviorSubject<PrimaryButtonSettings>(PrimaryButtonSettings);

  public primaryButtonSettings() {
    return this._primaryButtonSettingsSubject.asObservable();
  }

  /** Set Primary Button settings through a merge of default settings and new settings
   * @param settings new settings
   * */
  public setPrimaryButtonSettings(settings: PrimaryButtonSettings): void {
    const newSettings = mergeObjects(PrimaryButtonSettings, settings);
    this._primaryButtonSettingsSubject.next(newSettings);
  }
}
