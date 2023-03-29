export function getDogAge(dogBirthDate) {
  return `${new Date().getFullYear() - dogBirthDate.slice(0, 4)}살`;
}
