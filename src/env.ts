export class Env {
    public env: string;

    public constructor() {
        this.env = '';
    }

    public setEnv(env: string) {
        this.env = env;
    }

    public getEnv() {
        return this.env;
    }
}

export const env = new Env();
export default env;
