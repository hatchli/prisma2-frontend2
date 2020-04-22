export default function upperScoreReplace(string) {
  const str = string.toString();
  function c(str) {
    var frags = str.split("_");
    return frags.join(" ");
  }

  function b(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function a(str) {
    return str.replace(/\w\S*/g, function(word) {
      return word.charAt(0) + word.slice(1).toLowerCase();
    });
  }

  return a(b(c(str)));
}
