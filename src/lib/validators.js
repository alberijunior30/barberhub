const MIN_BIRTH_YEAR = 1900;

export function isValidBirthDate(date) {
  if (date.length !== 10) {
    return false;
  }

  const [day, month, year] = date.split("/").map(Number);
  const birth = new Date(year, month - 1, day);

  if (birth.getDate() !== day || birth.getMonth() !== month - 1 || birth.getFullYear() !== year) {
    return false;
  }

  if (birth > new Date() || year < MIN_BIRTH_YEAR) {
    return false;
  }
  return true;
}
