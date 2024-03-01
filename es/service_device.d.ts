export default class ServiceDevice {
    static appUpdate: (url: string, filename: string) => Promise<void>;
    static phonecall: (number: string | number) => Promise<void>;
    static launchInExplorer: (url: string) => Promise<void>;
    static launchInnerExplorer: (url: string) => Promise<void>;
    static scanQR: () => Promise<string>;
    static scanBarcode: () => Promise<string>;
    static scan: () => Promise<string>;
    static checkNetworkType: () => Promise<string>;
    static getSafeHeight: () => Promise<number[]>;
    static setTopbarStyleToDark: () => Promise<void>;
    static setTopbarStyleToLight: () => Promise<void>;
    static takePhoto: () => Promise<string>;
    static vibrate: () => Promise<void>;
    static heavyImpact: () => Promise<void>;
    static immersed: () => Promise<void>;
    static unImmersed: () => Promise<void>;
    static beep: () => Promise<void>;
    static notification: (title: string, content: string) => Promise<void>;
    static periodNotification: (title: string, content: string, timer: number) => Promise<void>;
}
