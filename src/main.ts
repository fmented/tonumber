export default function (arg: any): number {
  if (typeof arg === "number") return arg
  if (typeof arg === "string") {
    const numberRegex = /(\-?[0-9]*\.?[0-9]*)/
    const match = numberRegex.exec(arg)
    if (match) return parseFloat(match[1])
    return 0
  }
  return 0
}