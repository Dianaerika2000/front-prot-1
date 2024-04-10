import { useState } from "react";
import useSectionStore from "../hook/useStore";

export default function DatePeriodComponent() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [message, setMessage] = useState('');
  const [editMode, setEditMode] = useState(false); // Variable para controlar el modo de edición
  const [periodToEdit, setPeriodToEdit] = useState(null); // Estado para almacenar el período que se está editando
  const { startDate: startDatePeriod, endDate: endDatePeriod } = useSectionStore(); // Obtener las fechas almacenadas

  const addPeriodDate = useSectionStore((state) => state.addPeriodDate);
  const updatePeriodDate = useSectionStore((state) => state.updatePeriodDate);

  const handleSubmitPeriod = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setMessage('Todos los campos son obligatorios');
      return;
    }

    if (editMode) {
      // Si estamos en modo de edición, actualizamos el período existente
      updatePeriodDate({ startDate, endDate });
      setMessage('El período fue actualizado exitosamente');
    } else {
      // Si no estamos en modo de edición, agregamos un nuevo período
      addPeriodDate({ startDate, endDate });
      setMessage('El período fue registrado exitosamente');
    }

    // Limpiar campos y mensajes después de la presentación
    setStartDate('');
    setEndDate('');
    setMessage('');
    setEditMode(false);
    setPeriodToEdit(null);
  };

  // Función para cargar los datos del período a editar
  const handleEditPeriod = () => {
    setStartDate(startDatePeriod);
    setEndDate(endDatePeriod);
    setEditMode(true);
    setPeriodToEdit({ startDate: startDatePeriod, endDate: endDatePeriod });
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md w-1/4">
      <h2 className="text-xl font-bold mb-4">Fechas de Período Académico</h2>
      {startDatePeriod && endDatePeriod && (
        <div className="mt-4 bg-blue-200 p-2 rounded-md">
          <div className="flex justify-end">
            <div>
              <p className="text-left">Fecha de Inicio: {new Date(startDatePeriod).toLocaleDateString('es-ES')}</p>
              <p className="text-left">Fecha de Fin: {new Date(endDatePeriod).toLocaleDateString('es-ES')}</p>
            </div>
            <button onClick={handleEditPeriod} className="bg-yellow-500 text-white p-1 rounded-lg text-end size-8">
              <i className="bi bi-pencil-square"></i>
            </button>
          </div>

        </div>
      )}
      <form onSubmit={handleSubmitPeriod} className="text-start mt-4">
        <label className="block mb-2">
          Fecha de Inicio:
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full p-2 border rounded-md" />
        </label>
        <label className="block mb-2">
          Fecha de Fin:
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full p-2 border rounded-md" />
        </label>
        {startDatePeriod && endDatePeriod && editMode ? (
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Editar Período</button>
        ) : (
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">Registrar</button>
        )}

      </form>
      {message && <p className="text-green-500 mt-2">{message}</p>}
    </div>
  );
}
