import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const my = await Promise.all([uploadPhoto(), createUser()]);
    return {my};
  } catch (e) {
    return { photo: null, user: null };
  }
}
