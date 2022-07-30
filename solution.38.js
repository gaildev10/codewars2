function capitalize(s){
  return [ s
          .split("")
          .map((c, i) => i % 2 === 0 ?  c.toUpperCase() : c.toLowerCase()).join(""),
          s
          .split("")
          .map((c, i) => i % 2 !== 0 ?  c.toUpperCase() : c.toLowerCase()).join(""),
  ]
          
};