export default function concatArrays(array1, array2, string) {
  const answer = [...array1, ...array2, ...string];
  return answer;
}
