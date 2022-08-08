const getMoney = (initialAccountBalance, interest, duration) => {
  let nowAccountBalance = initialAccountBalance;
  for (let i = 0; i < duration; i++) {
    let balance = (nowAccountBalance * interest) / 100 / 12 + nowAccountBalance;
    nowAccountBalance = balance;
    console.log(`Month ${i + 1} = ${balance}`);
  }
};

// Write a function that calculates bank interest.
//     initialAccountBalance = 1000000 IDR
//     interest = 2% / year
//     duration = 2 month

//     Month 1 = ((1000000*2%)/12) + 1000000 = 1001666.67 IDR
//     Month 2 = ((Month 1 balance*2%)/12) + Month 1 balance = 1003336.11 IDR
