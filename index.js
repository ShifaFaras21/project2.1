const express=require('express')
const app=express()
app.use(express.json())
let students=[
    {class:1,name:"Shifa",address:"khanapur",branch:"BCA"},
    {class:2,name:"Fiza",address:"Belgaum",branch:"Bcom"},
    {class:3,name:"Shahid",address:"Bengalore",branch:"Bsc"}
    
]

app.get('/students',(req,res)=>{
    res.json(students)
})
app.post('/students',(req,res)=>{
    const{name,address,branch}=req.body
    const newStudent={class:student.length+1,name,address,branch}
    students.push(newStudent);
    res.status(201).json(newStudents);
})
app.put('/students/:class',(req,res)=>
{
    const student=students.find(u=>u.class===parseInt(req.params.class))
const{name,address,branch}=req.body
    if(!student)return res.status(404).json({message:"student not found"})
        student.name=req.body.name||student.name
    student.address=req.body.address|| student.address
student.branch=req.body.branch||student.branch
    res.json(student)
})
app.delete('/student/:class',(req,res)=>{
    students=students.filter(student=>student.class!==parseInt(req.params.id))
    res.json({message:'student deleted'})
})
app.listen(8000,()=>console.log("server is running in the port 9000"))
// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON request bodies
// app.use(express.json());

// // In-memory students data storage
// let students = [
//   { id: 1, name: 'Alice', age: 20, grade: 'A' },
//   { id: 2, name: 'Bob', age: 22, grade: 'B' },
//   { id: 3, name: 'Charlie', age: 21, grade: 'C' }
// ];

// // GET request - Retrieve all students
// app.get('/students', (req, res) => {
//   res.json(students);
// });

// // POST request - Create a new student
// app.post('/students', (req, res) => {
//   const { name, age, grade } = req.body;
//   const newStudent = { id: students.length + 1, name, age, grade };
//   students.push(newStudent);
//   res.status(201).json(newStudent);
// });

// // PUT request - Update a student by id
// app.put('/students/:id', (req, res) => {
//   const studentId = parseInt(req.params.id, 10);
//   const { name, age, grade } = req.body;
  
//   let student = students.find(s => s.id === studentId);
//   if (!student) {
//     return res.status(404).send('Student not found');
//   }

//   student.name = name;
//   student.age = age;
//   student.grade = grade;
//   res.json(student);
// });

// // DELETE request - Delete a student by id
// app.delete('/students/:id', (req, res) => {
//   const studentId = parseInt(req.params.id, 10);
//   const index = students.findIndex(s => s.id === studentId);
  
//   if (index === -1) {
//     return res.status(404).send('Student not found');
//   }

//   const deletedStudent = students.splice(index, 1);
//   res.json(deletedStudent);
// });

// // Start the server
// app.listen(9000, () => 
//   console.log("Server running at port 9000"))

