import { useState } from 'react';

export default function UpdateRoutineActivity({ routineActivityId }) {
    const [count, setCount] = useState(null);
    const [duration, setDuration] = useState(null);
  
    const handleUpdate = async () => {
      try {
        const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${routineActivityId}`, {
          method: "PATCH",
          body: JSON.stringify({
            count,
            duration
          })
        });
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    
    return (
      <div>
        <label>
          Count:
          <input type="number" value={count} onChange={(event) => setCount(event.target.value)} />
        </label>
        <br />
        <label>
          Duration:
          <input type="number" value={duration} onChange={(event) => setDuration(event.target.value)} />
        </label>
        <br />
        <button onClick={handleUpdate}>Update</button>
      </div>
    );
  }