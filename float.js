/*
Authors : Biloni Kim, Fleury Malik, Bulloni Lucas
Description : float class
*/
class Float
{

  constructor(num, bits)
  {
    this.exponent = [];
    this.fraction = [];
    this.intNum = num.split(".")[0];
    this.decNum = num.split(".")[1];
    this.bits = bits;
    this.sign = !(parseInt(this.intNum) >= 0);

    let decBinaryPart = this.convertDecToBin();
    //let intBinaryPart = this.convertIntToBin();

    console.log(intBinaryPart);
    console.log(decBinaryPart);
  }

  convertDecToBin()
  {
    let goalNumber = Math.pow(10, this.decNum.length)
    let temp = parseInt(this.decNum);
    let binary = [];

    while(temp != goalNumber)
    {
      temp *= 2;

      binary.push(temp >= goalNumber);

      if(binary[binary.length-1] && temp != goalNumber)
      {
        temp = temp-goalNumber;
      }

      console.log(binary);
    }

    return binary;
  }

  convertIntToBin()
  {
    var binary = [];
    let value = Math.floor(this.num);

    do
    {
      binary.unshift(!!(value%2));
      value = parseInt(value/2);
    }
    while (value >= 1);

    return binary;
  }

  add(float)
  {

  }

  soustract(float)
  {

  }


}

function createFloat()
{
  let inputVal = document.getElementById("float").value;
  let nbBits = document.getElementById("nbBits").value;

  let float = new Float(inputVal, nbBits);
}
