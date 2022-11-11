// get the current date and display it to user
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDate").text(currentDate);

var inputFieldIdArr = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM']

var ButtonIDArr = ['save9amEvent', 'save10amEvent', 'save11amEvent', 'save12pmEvent', 'save1pmEvent', 'save2pmEvent', 'save3pmEvent', 'save4pmEvent', 'save5pmEvent']

var localStorageItemArr = ['nineAM', 'tenAM', 'elevenAM', 'twelvePM', 'onePM', 'twoPM', 'threePM', 'fourPM', 'fivePM']

console.log("Current Date: ",currentDate);
var currentHour = moment().format("hA"); 
console.log("Current Hour:", currentHour);


let timestamp = moment().unix();
console.log("Unix Timestamp: ", timestamp);          // 1651648727

var amPM = extractAMorPM(inputFieldIdArr)
console.log("AM..PM", amPM)

assignGreenColorBlocks(inputFieldIdArr, amPM);
//assignGreyColorBlocks(inputFieldIdArr, amPM);
assignRedColorBlocks();


function extractAMorPM(ID_arr){
  var amOrPMarr = []
  for(var i=0; i<ID_arr.length; i++)
  {

    console.log("ID before slicing:", ID_arr[i])
    var thenumAmOrPm = ID_arr[i].slice(-2);

    console.log("Element ID hour:", thenumAmOrPm)
    amOrPMarr.push(thenumAmOrPm);
    console.log("AM/PM array:", amOrPMarr)  
  }
    return amOrPMarr;
}


function IsPm(suffixID)
{


        //value to add 12 to pm ids
        var addTwelve;
        if(suffixID = "PM")
        {
            suffixID = "true"
            addTwelve = (suffixID === 'true');
            console.log("AddTwelve", addTwelve)
        }
        else{
            addTwelve = false
        }

        return addTwelve;
        /*
        if(CurrentHourAmOrPm === "PM")
        {
            isLater = true;
        }
        else{
            isLater = false;
        }

        console.log("Current hour am or pm: ". CurrentHourAmOrPm);}
        if(thenumAmOrPm === "PM")
        {
            isLater = true;
        }
        else
        {
            isLater = false;
        }
        return isLater;
        */

}


var inputfieldArraySize = inputFieldIdArr.length;
console.log("size:",inputfieldArraySize)

//function to assign red color block to cell
//this will indicate current time in calendar block
function assignRedColorBlocks(){
for(var i=0; i<inputFieldIdArr.length; i++)
{
    console.log("looping:", inputFieldIdArr[i])
if( currentHour == inputFieldIdArr[i])
{
    //assign red color block
    const input = document.getElementById(inputFieldIdArr[i]);
    console.log("Color block assignment", input)
    input.style.backgroundColor = "red"

}}}


//function to assign green color blocks to cell(s)
//this will indicate future time blocks
function assignGreenColorBlocks(IDArr, amPmlist ){
for(var i=0; i<IDArr.length; i++)
{
    console.log("Print ID array:", IDArr)
    //extract digits from the current hour
    var digitHour = currentHour.replace(/\D/g, ''); 
    //convert hour string to number
    var intDigitHour = parseInt(digitHour)
    console.log("looping:", IDArr[i])
    //extract digits from input field hour
    //var holdFirstAmPm = extractAMorPM(IDArr[i])
    var thenum = IDArr[i].replace( /^\D+/g, ''); 
    //convert hour string to number
    var digitInput = parseInt(thenum)

    console.log("The Num: ". thenum);

    //console.log("Hold first:", holdFirstAmPm)
    

    for(var i=0; i<amPmlist.length; i++)
    {

    var holdPM = IsPm(amPmlist[i])

    console.log("Hold PM value:",holdPM)
    if(holdPM = true)
    {
        digitInput = digitInput + 12;

    }
    console.log("Digit Hour:", digitHour)
    console.log("Digit Input:", digitInput)

  if( intDigitHour < digitInput)
{
    //assign green color block
    const input = document.getElementById(inputFieldIdArr[i]);
    console.log("Color block assignment", input)
    input.style.backgroundColor = "green"

}
else{
  const input = document.getElementById(inputFieldIdArr[i]);
  console.log("Color block assignment", input)
  input.style.backgroundColor = "grey"


}

}
}
}


//function to assign grey color blocks to cell(s)
//this will indicate future time blocks
function assignGreyColorBlocks(IDArr, amPmlist){
    for(var i=0; i<IDArr.length; i++)
    {
        var digitHour = currentHour.replace(/\D/g, ''); // replace all leading non-digits with nothing
        var intDigitHour = parseInt(digitHour)
        console.log("looping:", IDArr[i])

        //var holdFirstAmPm = extractAMorPM(IDArr[i])

        var thenum = IDArr[i].replace(/\D/g, ''); // replace all leading non-digits with nothing
        var digitInput = parseInt(thenum)
        
        console.log("The Num: ". thenum);

        for(var i=0; i<amPmlist.length; i++)
        {
    
        var holdPM = IsPm(amPmlist)
    
        console.log("Hold PM value:",holdPM)
        if(holdPM = true)
        {
            digitInput = digitInput + 12;
    
        }
        console.log("Digit Hour:", digitHour)
        console.log("Digit Input:", digitInput)
    
    if( intDigitHour < digitInput)
    {
        //assign green color block
        const input = document.getElementById(inputFieldIdArr[i]);
        console.log("Color block assignment", input)
        input.style.backgroundColor = "grey"
    
    }}
    }
    }


/*
if(currentDate > inputfiledID)
{

    //assigned grey color block to indicate past
}
*/


inputFieldIdArr.forEach((num1, index) => {
    const num2 = localStorageItemArr[index];
    var getDataOutput = getData(num2, num1);
    //console.log(getDataOutput)
    //console.log(num1, num2);
  });


  const saveButton9am = document.getElementById(ButtonIDArr[0]);
  saveButton9am.addEventListener('click', function(){

    addData(localStorageItemArr[0], inputFieldIdArr[0]);
    console.log(localStorageItemArr[0], inputFieldIdArr[0]);

  });

  const saveButton10am = document.getElementById(ButtonIDArr[1]);
  saveButton10am.addEventListener('click', function(){

    addData(localStorageItemArr[1], inputFieldIdArr[1])
    console.log(localStorageItemArr[1], inputFieldIdArr[1]);

  });

  const saveButton11am = document.getElementById(ButtonIDArr[2]);
  saveButton11am.addEventListener('click', function(){

    addData(localStorageItemArr[2], inputFieldIdArr[2])
    console.log(localStorageItemArr[2], inputFieldIdArr[2]);

  });

  const saveButton12pm = document.getElementById(ButtonIDArr[3]);
  saveButton12pm.addEventListener('click', function(){

    addData(localStorageItemArr[3], inputFieldIdArr[3])
    console.log(localStorageItemArr[3], inputFieldIdArr[3]);
  });

  const saveButton1pm = document.getElementById(ButtonIDArr[4]);
  saveButton1pm.addEventListener('click', function(){

    addData(localStorageItemArr[4], inputFieldIdArr[4])
    console.log(localStorageItemArr[4], inputFieldIdArr[4]);
  });

  const saveButton2pm = document.getElementById(ButtonIDArr[5]);
  saveButton2pm.addEventListener('click', function(){

    addData(localStorageItemArr[5], inputFieldIdArr[5])
    console.log(localStorageItemArr[5], inputFieldIdArr[5]);
  });

  const saveButton3pm = document.getElementById(ButtonIDArr[6]);
  saveButton3pm.addEventListener('click', function(){

    addData(localStorageItemArr[6], inputFieldIdArr[6])
    console.log(localStorageItemArr[6], inputFieldIdArr[6]);
  });

  const saveButton4pm = document.getElementById(ButtonIDArr[7]);
  saveButton4pm.addEventListener('click', function(){

    addData(localStorageItemArr[7], inputFieldIdArr[7])
    console.log(localStorageItemArr[7], inputFieldIdArr[7]);
  });

  const saveButton5pm = document.getElementById(ButtonIDArr[8]);
  saveButton5pm.addEventListener('click', function(){

    addData(localStorageItemArr[8], inputFieldIdArr[8])
    console.log(localStorageItemArr[8], inputFieldIdArr[8]);
  });


function addData(localStorageItem, inputFieldID){
    //DeleteData();
    
        var eventArr = document.getElementById(inputFieldID).value;
        localStorage.setItem(localStorageItem, JSON.stringify(eventArr));
        console.log("Local storage: ", eventArr);
}

function getData(localStorageItem, inputFieldID){
    var str = JSON.parse(localStorage.getItem(localStorageItem));
    if( str != null){
    document.getElementById(inputFieldID).value = str;
    console.log("Local storage after refresh:", str);
    }
    //if (str!= null)
    //eventArr = JSON.parse(eventArr);
    //eventArr = JSON.parse(localStorage.eventArr || '[]');=
}


function DeleteData(){
localStorage.clear();
}