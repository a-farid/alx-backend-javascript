export default function iterateThroughObject(reportWithIterator) {
  const result = [...reportWithIterator];
  return result.join(" | ");
}
