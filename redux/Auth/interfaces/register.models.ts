export interface UserAuthRegister {
  email?: string;
  nickname?: string;
  password?: string;
  re_password?: string;
  last_name?: string;
  first_name?: string;
}

export interface RegisterErrors {
  detail?: string;
  first_name?: string[];
  last_name?: string[];
  email?: string[];
  password?: string[];
  re_password?: string[];
  username?: string[];
  non_field_errors?: string[];
  token?: string[];
}

export interface UserRegisterData {
  first_name?: string;
  last_name?: string;
  email: string;
  username: string;
  password: string;
  re_password: string;
}

export interface DataActivation {
  uid?: string;
  token?: string;
}

export interface DataResendActivation {
  email?: string;
}

export interface DataResponseFetch {
  state?: number;
  isSuccess?: boolean;
  errors?: RegisterErrors;
}

export interface DataUserLogin {
  email?: string;
  password?: string;
}
