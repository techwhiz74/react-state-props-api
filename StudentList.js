const StudentList = ({students}) => {
     const [studentList, setStudentList] = useState([]);
     useEffect(() => {
          setStudentList(students);
     });
     return (
          <div>
               {studentList.map((student, index) => (
                    <div key={index}>
                         <div>{student.name}</div>
                         <div>{student.age}</div>
                    </div>
               ))}
          </div>
     )
}