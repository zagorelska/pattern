// Roman Numeral Converter
// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.

var romanNum = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
  ];
  
  var len = romanNum.length;
  
  function convertToRoman(num) {
    if (num > 0) {
        
      for (var i = 0; i < len; i += 1) {
  
        if (num >= romanNum[i][0]) {
          num = romanNum[i][1] + convertToRoman(num - romanNum[i][0]);
        }
  
      }
  
    } else {
      num = '';    
    }
    return num;
  }
  
  convertToRoman(3999);