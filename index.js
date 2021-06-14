class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + this.value[0].slice(1);
  }
  
  static sanitize(string){
    string[0]=string[0].toUpperCase();
  }
  
  static titleize(string){
    string[0]=string[0].toUpperCase();
  }
}