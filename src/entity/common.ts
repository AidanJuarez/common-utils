import type { BaseAttrs } from './base';
import { BaseEntity } from './base';

interface CommonResponseAttr extends BaseAttrs {
    result: boolean;
}

export class CommonResponse extends BaseEntity implements CommonResponseAttr {
    declare result: boolean;

    constructor(attrs?: Partial<CommonResponseAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const response = new CommonResponse();
        json = CommonResponse.tryParseJSON(json);

        if (json.result !== undefined) {
            response.result = json.result;
        }

        return response;
    }
}
