exports.sumPairs = function(arr, num) {
    // sum_pairs([1,2,3,4,5], 9) # [[4,5]]
    // sum_pairs([1,2,3,4,5], 7) # [[2,5], [3,4]]
    // sum_pairs([3, 1, 5, 8, 2], 27) # 'unable to find pairs'
    // 
    // add every combination of 2 numbers
    // compare sums to num
    // if they are equal, return the sum pair   
    // if not, return 'unable to find pairs'
    let len = arr.length
    let results = []
    let output = []
    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if (i !== j) {
                let pairSum = arr[i] + arr[j]
                if (pairSum === num) {
                    let pairArr = [arr[i],arr[j]].sort(function(a, b){return a-b})
                    results.push (String(pairArr))

                }
            }
        }
    }
    
    let noDupes = [...new Set(results)]
    noDupes.map(elem => {
        let myNums = []
        myNums = elem.split(",")
        myNums[0] = Number(myNums[0])
        myNums[1] = Number(myNums[1])
        output.push(myNums)
    })

    if (output.length === 0) {
        return "unable to find pairs"
    }
    return output
};
