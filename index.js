function shout(string){
  return string.toUpperCase();
}

function whisper(string){
  return string.toLowerCase();
}

function logShout(string){
  console.log(string.toUpperCase());
}

function logWhisper(string){
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){
  var saying
  if (string == "I love you, Grandma.")
    saying = "I love you, too.";
  else if (string == string.toUpperCase())
    saying = "YES INDEED!";
  else if (string == string.toLowerCase()) {
    saying = "I can't hear you!";
  }
  return saying
}
