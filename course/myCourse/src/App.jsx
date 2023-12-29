import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Courses from "./Courses";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const removeCourse = (id) => {
    const afterDeleted = courses.filter((course) => id != course.id);
    setCourses(afterDeleted);
  };
  const getFetch = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      setCourses(response.data);
    } catch (error) {
      setLoading(false);
    }
    setLoading(false);
  };
  useEffect(() => {
    getFetch();
  }, []);
  return (
    <>
      {loading ? (
        <div>Loading......</div>
      ) : (
        <>
          {" "}
          {courses.length === 0 ? (
            <div className="refresh">
              <h2>There is No New Course</h2>
              <button className="button" onClick={getFetch}>
                Refresh
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={removeCourse} />
          )}
        </>
      )}
    </>
  );
}

export default App;
