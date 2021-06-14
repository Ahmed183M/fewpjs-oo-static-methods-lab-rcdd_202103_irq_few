class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str) {
    str = str.replace(/[~!@#$%^&*()_+={}]/gim,"");
    return str.trim();
  }
  
  static capitalize(str) {
     if(!sentence.split) return sentence;
    var _titleizeWord = function(string) {
            return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        },
        result = [];
    sentence.split(" ").forEach(function(w) {
        result.push(_titleizeWord(w));
    });
    return result.join(" ");
  }
}