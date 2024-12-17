export const regex = {
  space: /\s/,
  firstSpace: /^\S/, // 첫번째 글자 공백 체크
  lastSpace: /\S$/, // 마지막 글자 공백 체크
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&^]{8,}$/,
  phoneNumber: /^\d{10,15}$/,
  url: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]{1,63}\.[a-zA-Z]{2,6}(:[0-9]{1,5})?(\/.*)?$/,
};
