import { BehaviorSubject } from 'rxjs';
import { Injectable } from "@angular/core";
import { PrimaryButtonConfig } from "../../components/buttons/primary-button/primary-button.config";
import { mergeObjects } from "../helpers/object.helper";

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  private _primaryButtonConfigSubject: BehaviorSubject<PrimaryButtonConfig> = new BehaviorSubject<PrimaryButtonConfig>(PrimaryButtonConfig);

  public primaryButtonConfig() {
    return this._primaryButtonConfigSubject.asObservable();
  }

  /** Set Primary Button config through a merge of default config and new config
   * @param config new config
   * */
  public setPrimaryButtonConfig(config: PrimaryButtonConfig): void {
    const newConfig = mergeObjects(PrimaryButtonConfig, config);
    this._primaryButtonConfigSubject.next(newConfig);
  }
}
