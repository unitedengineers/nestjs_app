import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const saltOrRounds = 10;
  const encryptedPassword: string = await bcrypt.hash(password, saltOrRounds);
  return encryptedPassword;
};

export const verifyPassword = async (hashPassword: string, password: string): Promise<boolean> => {
  const isValidPassword: boolean = await bcrypt.compare(password, hashPassword);
  return isValidPassword;
};
