export const account_Regex = '(^[-_]{2,})^[a-zA-Z0-9.-_]{6,20}$';
export const password_Regex =
  '^(?=.*[A-Za-z])(?=.*d)(?=.*[$@$!%*#?&])[A-Za-zd$@$!%*#?&]{8,12}$';
export const email_Regex = '^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
export const mobile_Regex = 'd{3,4}-d{4}';
export const name_Regex = '[가-힣]';
