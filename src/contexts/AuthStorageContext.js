import React from 'react';
import AuthStorage from '../utils/authStorage';

const authStorage = new AuthStorage();

export const authReducer = async (token, action) => {
    switch (action.type) {
        case 'setToken':
            await authStorage.setAccessToken(token);
            return;
        case 'resetToken':
            await authStorage.removeAccessToken();
            return;
        default:
            await authStorage.getAccessToken();
            return;
    }
};

const AuthStorageContext = React.createContext();

export default AuthStorageContext;