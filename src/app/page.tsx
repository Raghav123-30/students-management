export default function Home() {
  return (
    <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 px-8 py-20 ">
      <div className="card px-10 py-20 shadow-lg rounded-lg">Graph</div>
      <div className="card  px-10 py-20 shadow-lg rounded-lg">
        List of students
      </div>
      <div className="card  px-10 py-20 shadow-lg rounded-lg">
        List of faculty
      </div>
      <div className="card   px-10 py-20 shadow-lg rounded-lg">
        Additional info
      </div>
    </div>
  );
}
