console.log("****************************************************************** Exercise 1 ***************************************************************************")

function printInLoop(words) {
    if (words.length === 0) {
      console.log("The array is empty. Please provide words.");
      return;
    }
  
    while (true) {
      for (const word of words) {
        console.log(word);
      }
    }
  }
  printInLoop(["down", "the", "rabbit", "hole"]);  //    >>>>>   Be careful it doesn't stop
  

  console.log("****************************************************************** Exercise 2 ***************************************************************************")

  function findClosest(points, point) {
    if (points.length === 0) {
      console.log("No points provided.");
      return null;
    }
  
    let closestPoint = points[0];
    let minDistance = getDistance(point, closestPoint);
  
    for (let i = 1; i < points.length; i++) {
      const currentDistance = getDistance(point, points[i]);
  
      if (currentDistance < minDistance) {
        minDistance = currentDistance;
        closestPoint = points[i];
      }
    }
  
    return closestPoint;
  }
  
  // distance between two points
  function getDistance(point1, point2) {
    const distX = point2.x - point1.x;
    const distY = point2.y - point1.y;
  
    return Math.sqrt(distX ** 2 + distY ** 2);
  }
  
  
  let pizzaLocations = [
    { x: 6, y: 12 },
    { x: 3, y: 1 },
    { x: 9, y: 0 },
    { x: 4, y: 10 }
  ];
  
  let homeLocation = { x: 4, y: 2 };
  
  const closestPizzaLocation = findClosest(pizzaLocations, homeLocation);
  console.log(closestPizzaLocation);
  
  console.log("****************************************************************** Exercise 3 ***************************************************************************")

  function secretEncrypt(word, secret) {
    if (!word || !secret) {
      console.log("Please provide both word and secret.");
      return null;
    }
  
    let encryptedWord = "";
    for (let i = 0; i < word.length; i++) {
      const secretChar = secret[i % secret.length];

      const shift = secretChar.charCodeAt(0) - 'a'.charCodeAt(0);

      encryptedWord += shiftCharacter(word[i], shift);
    }
  
    return encryptedWord;
  }

  function shiftCharacter(char, shift) {
    const charCode = char.charCodeAt(0);
  
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((charCode - 'a'.charCodeAt(0) + shift) % 26) + 'a'.charCodeAt(0));
    }
    else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((charCode - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
    }
    else {
      return char;
    }
  }
  
  // Example usage:
  const encryptedResult = secretEncrypt("elephant", "cab");
  console.log(encryptedResult);
  


  console.log("****************************************************************** Exercise 4 ***************************************************************************")



  function secretDecrypt(encryptedMessage, secret) {
    if (!encryptedMessage || !secret) {
      console.log("Please provide both encryptedMessage and secret.");
      return null;
    }
  
    let decryptedMessage = "";
  
    for (let i = 0; i < encryptedMessage.length; i++) {
      const secretChar = secret[i % secret.length];
  
      const shift = secretChar.charCodeAt(0) - 'a'.charCodeAt(0);
  
      decryptedMessage += shiftCharacter(encryptedMessage[i], -shift);
    }
  
    return decryptedMessage;
  }
  
  function shiftCharacter(char, shift) {
    const charCode = char.charCodeAt(0);
  
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode(((charCode - 'a'.charCodeAt(0) + shift + 26) % 26) + 'a'.charCodeAt(0));
    }
    else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode(((charCode - 'A'.charCodeAt(0) + shift + 26) % 26) + 'A'.charCodeAt(0));
    }
    else {
      return char;
    }
  }
  const decryptedResult = secretDecrypt("hmgsicqu", "cab");
  console.log(decryptedResult);
  