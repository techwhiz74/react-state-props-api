const AddStudent = ({handleNameChange, handleAgeChange, handleClick}) => {
     return (
          <div>
               <inupt name="name" onChange={handleNameChange} />
               <inupt name="age" onChange={handleAgeChange} />
               <button onClick={handleClick} />
          </div>
     )
}