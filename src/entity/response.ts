import { type BaseAttrs, BaseEntity } from './base';

interface ResponseAttr extends BaseAttrs {
    code: number;
    message: string;
    data: any;
}

export class Response extends BaseEntity implements ResponseAttr {
    declare code: number;
    declare message: string;
    declare data: any;

    constructor(attrs?: Partial<ResponseAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const response = new Response();
        json = Response.tryParseJSON(json);

        if (json.code !== undefined) {
            response.code = json.code;
        }
        if (json.message !== undefined) {
            response.message = json.message;
        }
        if (json.data !== undefined) {
            response.data = json.data;
        }
        return response;
    }
}
