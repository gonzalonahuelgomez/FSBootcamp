import Header from "./Header";
import Part from "./Part";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <>
    {course.map(course => (
      <div key={course.id}>
          <Header name={course.name} />
          {course.parts.map((part) => (
                <Part key={part.id} part={part} />
            ))}
            <Total parts={course.parts} />
        </div>
    ))}
    </>
  );
};

export default Course;
