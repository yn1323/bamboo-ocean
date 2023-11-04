export const hiraToKana = (str: string) => {
  return str.replace(/[\u3041-\u3096]/g, function (match) {
    const chr = match.charCodeAt(0) + 0x60
    return String.fromCharCode(chr)
  })
}
