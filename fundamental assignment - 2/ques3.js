const students=[
    {
        name:"Mithun",
        marks:95,
    },
    {
        name:"Prabir",
        marks:75,
    },
    {
        name:"Alka",
        marks:92,
    },
    {
        name:"Shivam",
        marks:70,
    },
    {
        name:"Farman",
        marks:99,
    },
];
function grade(students){
   for(let i of students){
    if(i['marks']>90){
        console.log("Congratulations ",i['name'],"! You have cleared the exam")
    }
   }

}
grade(students)