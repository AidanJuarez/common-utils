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

    public static tryParseJSON(json: any) {
        if (typeof json === 'string') {
            try {
                return JSON.parse(json);
            } catch (err) {}
        }
        return json;
    }
}
