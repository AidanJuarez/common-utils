import { type BaseAttrs, BaseEntity } from '../base';

interface UserSettingAttr extends BaseAttrs {
    anti_mev: boolean;
    anti_rug: boolean;
    skip_duplicate: boolean;
}

export class UserSetting extends BaseEntity implements UserSettingAttr {
    public anti_mev = false;
    public anti_rug = false;
    public skip_duplicate = false;

    constructor(attrs?: Partial<UserSettingAttr>) {
        super();
        this.assign(attrs);
    }

    public static fromJson(json: any) {
        const setting = new UserSetting();
        json = UserSetting.tryParseJSON(json);

        if (json.anti_mev !== undefined) {
            setting.anti_mev = json.anti_mev;
        }
        if (json.anti_rug !== undefined) {
            setting.anti_rug = json.anti_rug;
        }
        if (json.skip_duplicate !== undefined) {
            setting.skip_duplicate = json.skip_duplicate;
        }
        return setting;
    }

    public toJson() {
        return JSON.stringify(this);
    }
}
