export interface BaseAttrs {}

export class BaseEntity {
    constructor(attrs?: Partial<BaseAttrs>) {
        Object.assign(this, attrs);
    }

    assign<T extends BaseAttrs>(this: T, attrs?: Partial<T>) {
        Object.assign(this, attrs);
    }

    toJSON() {
        return this;
    }

    public static tryParseJSON<T extends object>(json: any): Partial<T> | null {
        let result: Partial<T> | null = null;
        if (typeof json === 'string') {
            try {
                result = JSON.parse(json);
            } catch (err) {}
        }
        return result;
    }
}
