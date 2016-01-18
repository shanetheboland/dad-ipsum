/* This script and many more are available free online at
The JavaScript Source!! http://www.javascriptsource.com
Created by: Will Munslow | http://subterrane.com */
function objectTag() {
  var lorem = new Array();

  switch(document.loremForm.loremString.value) {
    case "moms-home": {
  				lorem[0] = "You’re the only one who thinks this is funny and you’re the only one who is going to think its not funny when you’re punished. Eat your spaghetti or I’m going to dump it on your head. I told you, you couldn’t fly. That’s why I told you to sit on your butt. I don’t care about your Poke battle i have to pee now. I know its hot...its fire! I don’t suggest you test my Gangsta one more time today! Do that again, I dare you. Get your finger out of the dog’s eye socket. I’m the boss “I’m ah Piggy” Ugh, fine! Go to your room, never mind I’m going to mine. Sit down so I can yell at you at eye level.";
      break;
    }
  		case "moms-not-home": {
  				lorem[0] = "If you drop one more thing I’m kicking you into the fridge. If you shave your armpits one more time you are not my son anymore. No, you are my least favorite kid today. That looked like it hurt...good that’s what you get. Keep it up and you’re off my give a damn list. I don’t care about. I don’t care what your mom said, I’m the boss.";
   			break;
  		}
 	}

  if ("characters" == document.loremForm.type.value) {
    var outputString = '';
    var numOfChars = document.loremForm.numbers.value;
    numOfChars = parseInt( numOfChars );
    var tempString = lorem.join( "\n\n" );
    while (
      outputString.length < numOfChars ) outputString += tempString;
      document.loremForm.output.value = outputString.substring(0, numOfChars ); // changed
    } else if("words" == document.loremForm.type.value) {
      var numOfWords = document.loremForm.numbers.value;
      numOfWords = parseInt( numOfWords );
      var list = new Array();
      var wordList = new Array();
      wordList = lorem[0].split( ' ' );
      var iParagraphCount = 0;
      var iWordCount = 0;

      while( list.length < numOfWords ) {
      	 if( iWordCount > wordList.length ) {
        		iWordCount = 0;
        		iParagraphCount++;
      		  if( iParagraphCount + 1 > lorem.length ) iParagraphCount = 0;
        		wordList = lorem[ iParagraphCount ].split( ' ' );
        		wordList[0] = "\n\n" + wordList[ 0 ];
      	 }
       	list.push( wordList[ iWordCount ] );
       	iWordCount++;
      }
    document.loremForm.output.value = list.join(' '); // changed
  } else {
    var numOfParagraphs = document.loremForm.numbers.value;
    numOfParagraphs = parseInt( numOfParagraphs );
    var list = new Array();
 			var iParagraphCount = 0;

    while(list.length < numOfParagraphs) {
      if(iParagraphCount +1 > lorem.length) {
        iParagraphCount = 0;
      }
      list.push( lorem[iParagraphCount] );
        iParagraphCount++;
    }
    document.loremForm.output.value = list.join( "\n\n" ); // changed
  }
}

function copypaste() {
  document.loremForm.output.focus();
  document.loremForm.output.select();
  therange=document.loremForm.output.createTextRange();
  therange.execCommand("Copy");
}
