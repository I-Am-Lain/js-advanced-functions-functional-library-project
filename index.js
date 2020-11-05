const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(c, f) {
      for (let num in c){      // for (let element IN array) iterates over arrays+objects, either/or
        f(c[num])
      }

      return c
    },

    map: function(c, f) {
      let newArray = []
      for (let num in c){
          newArray.push(f(c[num]))
      }
      return newArray
    },

    reduce: function(collect, f, total) {
      let newArray = Array.isArray(collect) ? [...collect] : Object.values(collect)
      if (!total){
        total = newArray.shift()
      }

      for (let i = 0; i<newArray.length; i++){
        total = f(total, newArray[i], newArray) 
      }

      return total
    },

    find: function(c, p) {     // for..in = num = index   for..of = num = actual value per index
      for (let num of c){     // of can be used since we're only passing this arrays (for NOW)
          if (p(num)){  // function(num) => num === target
            return num
          }
      }
    },

    filter: function(c, p) {
      const newArray = []
      for (let num of c){
          if (p(num)){
            newArray.push(num)
          }
      }
      return newArray
    },


    size: function(collection) {
      let counter = 0
      for (let num in collection){
        counter++
      }

      return counter
    },

    first: function(arr, n = 1) {
      const newArray = []

      for (let i = 0; i<n; i++){
        newArray.push(arr[i])
      }
      
      
      if (newArray.length === 1){
        return newArray[0]
      }
      return newArray
    },

    last: function(arr, n = 1){
      const newArray = []
      for (let x = arr.length-n; x<arr.length; x++){
        newArray.push(arr[x])
      }

      if (newArray.length === 1)
        return newArray[0]
      else return newArray
    },
    compact: function(arr) {
      const newArray = []

      for (let i = 0; i<arr.length; i++){
        if (arr[i]){
          newArray.push(arr[i])
        }
      }

      return newArray
    },

    sortBy: function(arr, f) {
      let newArray = [...arr]

      return newArray.sort((function(a, b){return f(a)-f(b)}))
    },

    flatten: function(arr, s) {

    //   // if false
    //   if (s === false) {
    //     for (let i = 0; i<arr.length; i++){ //  [1, [1, 2]]
          
    //       if (!arr[i].length){
    //         newArray.push(arr[i])
    //       } else {
    //         (fi.flatten(arr[i], s))
    //       }
    //   }
    // }
    //   return newArray
    },

    uniq: function(arr, b, f) {
      // const newArray = []
      // for (let i = 0; i<arr.length; i++){
      //   if (!newArray.includes(f(arr[i]))){
      //     newArray.push(f(arr[i]))
      //   }
      // }

      // return newArray
    },

    keys: function(obj) {
      const newArray = []

      for (let key in obj){
        newArray.push(key)
      }

      return newArray
    },

    values: function(obj) {
      const newArray = []

      for (let key in obj){
        newArray.push(obj[key])
      }

      return newArray
    },

    functions: function(lib) {
      const newArray = []

      for (let key in lib){
        if(typeof lib[key] === 'function'){
          newArray.push(key)
        }
      }

      return newArray.sort()
    },


  }
})()

fi.libraryMethod()
