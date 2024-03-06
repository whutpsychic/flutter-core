export default class ServiceBase {
    static done: () => Promise<void>;
    static toast: (msg: string) => Promise<void>;
    static modalTips: (title: string, msg: string) => Promise<void>;
    static modalConfirm: (title: string, msg: string) => Promise<void>;
    static modalLoading: (content: string) => Promise<void>;
    static modalProgress: (content: string) => Promise<void>;
    static modalProgressSet: (value: string | number) => Promise<void>;
    static modalProgressAdd: (value: string | number) => Promise<void>;
    static recordLocal: (key: string, value: string | number) => Promise<boolean>;
    static readLocal: (key: string) => Promise<string>;
    static ipConfig: () => Promise<void>;
}
