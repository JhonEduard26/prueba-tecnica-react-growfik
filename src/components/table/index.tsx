import { Call } from "../../types";

interface Props {
  calls: Call[];
}

export const Table = ({ calls }: Props) => {
  return (
    <div className="relative overflow-x-auto">

      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr className="text-black">
            <th scope="col" className="px-6 py-3">Id</th>
            <th scope="col" className="px-6 py-3">Duración (Min)</th>
            <th scope="col" className="px-6 py-3">Estado</th>
            <th scope="col" className="px-6 py-3">Fecha y hora</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call) => (
            <tr key={call.id} className="bg-white border-b">
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{call.id}</td>
              <td className="px-6 py-3">{call.duracion}</td>
              <td className="px-6 py-3">{call.estado}</td>
              <td className="px-6 py-3">{call.fecha}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
