import { Loader, Table } from "./components";
import { useCalls } from "./hooks/useCalls";

function App() {
  const { loading, filteredCalls, onFilterChange } = useCalls();

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <main className="container mx-auto p-5 bg-gray-200">
          <div className="text-center">
            <h1 className="mb-8 text-4xl font-semibold">
              Prueba Tecnica React Growfik
            </h1>
            <div className="mb-5">
              <span className="block mb-2 text-lg font-medium text-gray-900">Filtrar por estado: </span>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                name="filter"
                id="filter"
                onChange={onFilterChange}
              >
                <option value="Todas">Todas</option>
                <option value="Exitosa">Exitosas</option>
                <option value="Fallida">Fallidas</option>
                <option value="En Proceso">En proceso</option>
              </select>
            </div>
          </div>
          <Table calls={filteredCalls} />
        </main>
      )}
    </>
  );
}

export default App;
