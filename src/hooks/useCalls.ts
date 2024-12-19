import { useEffect, useState } from "react";
import type { Call, CallState } from "../types";

export const useCalls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<CallState>("Todas");

  useEffect(() => {
    setLoading(true);

    fetch("src/data/data.json")
      .then((response) => response.json())
      .then((data) => setCalls(data))
      .catch((error) => console.error("Ocurrio un error: ", error))
      .finally(() => setLoading(false));
  }, []);

  const onFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value as CallState);
  };

  const filteredCalls = calls.filter((call) => {
    if (filter === "Todas") return true;
    if (filter === "Exitosa") return call.estado === "Exitosa";
    if (filter === "Fallida") return call.estado === "Fallida";
    if (filter === "En Proceso") return call.estado === "En Proceso";
    return false;
  });

  return {
    filteredCalls,
    loading,
    onFilterChange,
  };
};
