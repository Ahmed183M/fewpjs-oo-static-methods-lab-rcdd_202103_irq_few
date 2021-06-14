class Formatter {
  
  constructor(value){
    this.value = value;
  }
  
  static capitalize(string){
    this.value[0] = this.value[0].charAt(0).toUpperCase() + this.value[0].slice(1);
  }
  
  static sanitize(string){
    string[0]=string[0].toUpperCase();
  }
  
  static titleize(string){
    string[0]=string[0].toUpperCase();
  }
}