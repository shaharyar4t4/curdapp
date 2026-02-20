# CURD APPLICATION BY USING THE GRAPHQL

 --->>>

 # # Write your query or mutation here
mutation{
   createBook(input: {
    title: "Freedom at the mightnight",
     author: "Fahad",
   }){
    id,
     title,
     author
   }
 }

# find the data
 query{
   getAllBooks{
      id,
     title,
      author
   }
 }

#find by Id 
 query{
   getBook(id : "6996d6bda755b615d899daed"){
     id,
      title,
      author
   }
 }

#Delete the Data
 mutation{
  removeBook(id: "6996d6bda755b615d899daed")
 }

#Update the data..
 mutation{
  updateBook(input:{
    id: "6996cc56d6d0ae383d146b10",
    title: "FLutter Mobile application"
  }){
    id,
    title,
    author
  }
# }
