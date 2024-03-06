import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  const { body } = await uploadPhoto();
  const { firstName, lastName } = await createUser();
  console.log(body, firstName, lastName);
}
