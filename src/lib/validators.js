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

export function isValidCpf(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 11) {
    return false;
  }

  if (digits[0].repeat(11) === digits) {
    return false;
  }

  if (calculateCheckDigit(digits.slice(0, 9)) !== Number(digits[9])) {
    return false;
  }

  return calculateCheckDigit(digits.slice(0, 10)) === Number(digits[10]);
}

function calculateCheckDigit(base) {
  let weight = base.length + 1;
  let sum = 0;
  for (let i = 0; i < base.length; i++) {
    sum += Number(base[i]) * weight;
    weight -= 1;
  }
  const remainder = (sum * 10) % 11;

  return remainder === 10 ? 0 : remainder;
}
