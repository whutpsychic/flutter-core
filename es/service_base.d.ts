export default class ServiceBase {
    static done: () => Promise<void>;
    static toast: (msg: string) => Promise<void>;
    static modalTips: (title: string, msg: string) => Promise<boolean>;
    static modalConfirm: (title: string, msg: string) => Promise<boolean>;
    static modalLoading: (content: string) => Promise<boolean>;
    static modalProgress: (content: string) => Promise<boolean>;
    static modalProgressSet: (value: string | number) => Promise<boolean>;
    static modalProgressAdd: (value: string | number) => Promise<boolean>;
    static recordLocal: (key: string, value: string | number) => Promise<boolean>;
    static readLocal: (key: string) => Promise<boolean>;
    static ipconfig: () => Promise<void>;
}
