const Students = () => {
     const [students, setStudents] = useState([]);
     const [name, setName] = useState("");
     const [age, setAge] = useState("");
     const getAllStudents = async () => {
          const response = await fetch('/api/students', {
               header: '...',
               method: 'post',
               other options...
          });
          const result = await response.json();
          return result;
     }

     const handleNameChange = (e) => {
          setName(e.target.value);
     }

     const handleAgeChange = (e) => {
          setAge(e.target.value);
     }

     const handleClick = async () => {
          try {
               const response = await fetch('/api/addStudent', {
                    ...
               });
               const result = await response.json();
               if (result.status === "Success") {
                    setStudents(result.data);
                    //setStatus([...status, result.data]);
               }
          } catch (error) {
               toast.error()
          }
     }

     useEffect(() => {
          setStudents(getAllStudents());
     })

     return (
          <div>
               <AddStudent handleNameChange={handleNameChange} handleAgeChange={handleAgeChange} handleClick={handleClick} />
               <StudentList students={students} />
          </div>
     )
}

export default Students;