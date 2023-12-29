import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(3);
  const { title, price, content } = courses[index];
  const indexCheck = (index) => {
    if (index < 0) {
      return courses.length - 1;
    } else if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };
  const prevCourse = () => {
    setIndex((index) => {
      const newIndex = index - 1;
      return indexCheck(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return indexCheck(newIndex);
    });
  };
  const randomCourse = () => {
    const random = Math.floor(Math.random() * courses.length);
    if (random === index) {
      randomCourse();
    }
    setIndex(random);
  };
  return (
    <>
      <div className="container">
        <h1>My Courses</h1>
        <button onClick={randomCourse} className="randomButton">
          Bring a Random Course
        </button>
        <div className="all">
          <button className="prevNextButton" onClick={prevCourse}>
            <FaChevronLeft />
          </button>
          <div className="card-container">
            <div className="card">
              <h2>{title}</h2>
              <div className="price">{price} TL</div>
              <div>{content}</div>
            </div>
          </div>
          <button className="prevNextButton" onClick={nextCourse}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </>
  );
}

export default Courses;
