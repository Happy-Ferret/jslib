import { TwoFactorProviderType } from '../enums/twoFactorProviderType';

import { AuthResult } from '../models/domain/authResult';

export abstract class AuthService {
    email: string;
    masterPasswordHash: string;
    twoFactorProviders: Map<TwoFactorProviderType, { [key: string]: string; }>;
    selectedTwoFactorProviderType: TwoFactorProviderType;

    logIn: (email: string, masterPassword: string) => Promise<AuthResult>;
    logInTwoFactor: (twoFactorProvider: TwoFactorProviderType, twoFactorToken: string,
        remember?: boolean) => Promise<AuthResult>;
    logInComplete: (email: string, masterPassword: string, twoFactorProvider: TwoFactorProviderType,
        twoFactorToken: string, remember?: boolean) => Promise<AuthResult>;
    logOut: (callback: Function) => void;
    getSupportedTwoFactorProviders: (win: Window) => any[];
    getDefaultTwoFactorProvider: (u2fSupported: boolean) => TwoFactorProviderType;
}
