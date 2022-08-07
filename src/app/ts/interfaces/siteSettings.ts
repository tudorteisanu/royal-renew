export interface EndpointsInterface {
  users: string;
  roles: string;
  rolesList: string;
  register: string;
  login: string;
  forgotPassword: string;
  resetPassword: string;
  changePassword: string;
  checkAuth: string;
}

export interface RoutesInterface {
  home: string;
  users: string;
  roles: string;
  login: string;
  register: string;
  forgotPassword: string;
  resetPassword: string;
  changePassword: string;
}

export interface SiteSettingsInterface {
  endpoints: EndpointsInterface;
  routes: RoutesInterface;
  errors: HttpErrorsInterface;
}

export interface HttpErrorsInterface {
  notFound: string;
  unauthorized: string;
  internalServerError: string;
  permissionDenied: string;
}
