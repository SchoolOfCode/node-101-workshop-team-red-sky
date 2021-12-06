let myCollection = [
    {
      name: "School of Code mug",
      count: 1,
      whatILike: "It has my cute pixel character on it!"
    },
    {
      name: "School of Code hat",
      count: 2,
      whatILike: "An often overlooked fashion accessory"
    },
    {
      name: "School of Code pillow",
      count: 1,
      whatILike: "Eat. Sleep. Code. Repeat :)"
    }
  ];

  console.log(myCollection)

///////////// PLAN ///////////
// check the count of each item 
// check the value of a key of an object nested in an array
// store count in a variable
// store name in a variable
// if count > 1 then return `I have ${count} ${name}s. Here's what I like about them: ${whatILike}`
// else return `I have a ${name}. Here's what I like about it: ${whatILike}`

 


  function describeItem(item){
      let thingName =  myCollection[item]["name"]
      let count = myCollection[item]["count"]
      let whatILike = myCollection[item]["whatILike"]

      if(count>1){
          console.log(`I have ${count} ${thingName}s. Here's what I like about them: ${whatILike}`)
      } else {
          console.log(`I have a ${thingName}. Here's what I like about it: ${whatILike}`)
      }
        }

  describeItem(0)