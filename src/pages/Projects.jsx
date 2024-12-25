import Card from "../components/Card";

function Projects() {
  return (
    <div className="mt-6 flex-1 flex flex-col items-center">
      <h2 className="text-3xl text-center">Projects</h2>
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Projects;
