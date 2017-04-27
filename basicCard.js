var BasicCard = function(front, back){
  this.front = front;
  this.back = back;
};
var ClozeCard = function(text, cloze){
  this.text = text;
  this.cloze = cloze;
  this.fullText = function (){
    console.log(this.text);
    return this.text;
  }
  this.partial = function (){
    var str = this.text.split(" ").slice(2).join(' ');
    var dots = '...';
  //console.log error - if the words in cloze are not inside the text argument.
    var isInside = this.text.includes(this.cloze);
     if (!isInside){
       console.log ("Ruh, Roh Rorge!")
     } else {
      return dots + ' ' + str
    }
  }
};
var firstPresident = new ClozeCard ("George Washington was the first president of the United States.", "George Washington");
  firstPresident.cloze;
  firstPresident.partial();
  firstPresident.fullText();
