import { InjectionToken } from '@angular/core';

export abstract class InjectionTokenFactory {
	static create<T>(token: T, desc: string): InjectionToken<T> {
		return new InjectionToken<T>(desc, {
			providedIn: 'root',
			factory: () => token,
		});
	}
}
