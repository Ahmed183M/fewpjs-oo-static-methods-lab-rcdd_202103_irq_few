class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  static sanitize(str) {
    str = str.replace(/[^0-9áéíóúñü\.,_]/gim,"");
    return str.trim();
  }
  
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}