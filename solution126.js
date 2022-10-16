//Testing 1-2-3

function minValue(values){
    return +[...new Set(values)].sort((a, b) => a-b).join('');
   }