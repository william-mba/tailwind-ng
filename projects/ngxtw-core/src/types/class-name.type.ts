import { Config } from './config.type';

export type ShallowUnionOf<T, K extends keyof T = keyof T> = Extract<T[K], string>;

export type ClassName = ShallowUnionOf<Config> | ShallowUnionOf<Config>[] | unknown;
