export interface Filter<T> {
    fields: (keyof T)[],
    filterMode: FilterMode
}

export enum FilterMode {
    Include,
    Exclude
}