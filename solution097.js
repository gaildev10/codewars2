//Complete the pattern

function pattern(n){
    let result = []
    for(let i=1; i<=n; i++){
        result.push(String(i).repeat(i))
    }
    return result.join('\n')
}