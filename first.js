// console.log("Question 11");
// let temp=[32,31,30,29,28,27,26];

// temp[3]= temp[3]+2

// let updatedtemp= temp+""
//   console.log("Updated Temperature:")
//   console.log(updatedtemp);



//   console.log("");
//   console.log("");


//   console.log("Question 12");
//   let todoList = ["Bathing", "Eating", "Exercise", "Classes", "Walking"] 
   
//    todoList.unshift("Brushing");
   
//    todoList.pop();
   
//    console.log(todoList);



//    console.log("");
//    console.log("");


//  console.log("Question 13");
//  let pendingTasks = [ "Check emails", "Attend team meeting","Finish project report","Update task management system",
//     "Prepare presentation for tomorrow"]
    
    
//        pendingTasks.shift();
       
//        pendingTasks[4] = ("Submitting the reports")
       
//        console.log(pendingTasks);


//     console.log("");
//     console.log("");

//     console.log("Question 14");
//     let studentScore= [36,54,78,19,65,99,18.90,97,37];
 
//  for (let i=0; i<studentScore.length; i++){
//   if(studentScore[i]<40){
//      studentScore[i]+=20
//   } else if (studentScore[i]>90){
//     studentScore[i]=90
//   }
// }
// let passedStudents=0
// for(let i=0; i<studentScore.length; i++){
//   if (studentScore[i]>=50){
//     passedStudents++
//   }
// }
// console.log("Number of Students Passed:",passedStudents)























function checkColor() {
  let inputColor = prompt("Enter a color:");  
  if (inputColor === "red"){
      console.log("Red is present.");
  } else {
      console.log("Color not found.");
  }
}
checkColor();