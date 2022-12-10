//You Got Change
giveChange = (amount, bills = [100, 50, 20, 10, 5, 1]) => 
  bills.map( bill => 
            ( [bill, amount] = [Math.floor(amount / bill), amount % bill] ) [0]
).reverse()