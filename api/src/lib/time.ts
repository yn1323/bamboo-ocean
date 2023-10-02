export const jaDateTime = (date = new Date()) => {
  return new Date(date.setHours(date.getHours() + 9))
}
