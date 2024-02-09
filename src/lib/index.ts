import { writable, type Writable } from 'svelte/store';

export interface PageState {}

export const pageState: Writable<PageState> = writable({});