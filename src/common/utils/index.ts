import * as bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<String> => {
  const saltOrRounds = 10;
  const encryptedPassword = await bcrypt.hash(password, saltOrRounds);
  return encryptedPassword;
};

export const verifyPassword = async (password: string): Promise<String> => {
  const saltOrRounds = 10;
  const encryptedPassword = await bcrypt.hash(password, saltOrRounds);
  return encryptedPassword;
};
