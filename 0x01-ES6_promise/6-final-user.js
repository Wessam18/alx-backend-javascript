import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const results = await Promise.allSettled(promises);

  return results.map(result => {
    if (result.status === 'fulfilled') {
      return { status: result.status, value: result.value };
    } else {
      return { status: result.status, value: result.reason };
    }
  });
}
