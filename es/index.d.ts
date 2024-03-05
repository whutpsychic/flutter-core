import Fc from "./base/core";
import Service_base from "./service_base";
import Service_device from "./service_device";
export declare enum PermissionStatus {
    denied = "PermissionStatus.denied",
    granted = "PermissionStatus.granted",
    restricted = "PermissionStatus.restricted",
    limited = "PermissionStatus.limited",
    permanentlyDenied = "PermissionStatus.permanentlyDenied"
}
export declare class fp {
    static openAppSettings: () => Promise<void>;
    static request: (name: string) => Promise<any>;
}
export declare class fc extends Fc implements Service_base, Service_device {
    static init: () => Promise<boolean>;
    static done: () => Promise<void>;
    static toast: (msg: string) => Promise<void>;
    static modalTips: (title: string, msg: string) => Promise<void>;
    static modalConfirm: (title: string, msg: string) => Promise<void>;
    static modalLoading: (content: string) => Promise<boolean>;
    static modalProgress: (content: string) => Promise<boolean>;
    static modalProgressSet: (value: string | number) => Promise<boolean>;
    static modalProgressAdd: (value: string | number) => Promise<boolean>;
    static recordLocal: (key: string, value: string | number) => Promise<boolean>;
    static readLocal: (key: string) => Promise<string>;
    static ipConfig: () => Promise<void>;
    static appUpdate: (url: string, filename: string) => Promise<void>;
    static phonecall: (number: string) => Promise<void>;
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
