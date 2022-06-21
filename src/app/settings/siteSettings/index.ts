import { SiteSettingsInterface } from '@App/interfaces/siteSettings';

export const SiteSettings: SiteSettingsInterface = {
  endpoints: {
    roles: 'roles',
    rolesList: 'roles/list',
    users: 'users',
    login: 'auth/login',
    register: 'auth/register',
    forgotPassword: 'auth/forgot_password',
    resetPassword: 'auth/reset_password',
    changePassword: 'auth/change_password',
    checkAuth: 'auth/check_auth',
  },
  routes: {
    home: '/',
    roles: '/roles',
    users: '/users',
    login: '/auth/login',
    register: '/auth/register',
    forgotPassword: '/auth/forgot-password',
    resetPassword: '/auth/reset-password',
    changePassword: '/auth/change-password',
  },
  errors: {
    internalServerError: '/errors/500',
    notFound: '/errors/404',
    unauthorized: '/errors/401',
    permissionDenied: '/errors/403',
  },
};
