import { InjectionToken } from "@angular/core";

/**
 * Basic cryptography features available in the root EnvironmentInjector.
 * It allows access to a cryptographically strong random number generator and to cryptographic primitives.
 *
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Crypto)
 */
export const CRYPTO = new InjectionToken<Crypto>('Basic Cryptography', {
  providedIn: 'root',
  factory: () => crypto
});
