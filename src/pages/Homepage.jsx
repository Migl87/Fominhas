import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-orange-600 mb-6">Diário dos Fominhas</h1>
      <div className="space-y-4">
        <button
          onClick={() => navigate("/adicionar")}
          className="bg-orange-500 text-white px-6 py-3 rounded-2xl text-lg shadow hover:bg-orange-600 transition"
        >
          Adicionar Experiência
        </button>
        <button
          onClick={() => navigate("/experiencias")}
          className="bg-white text-orange-500 border border-orange-400 px-6 py-3 rounded-2xl text-lg shadow hover:bg-orange-100 transition"
        >
          Ver Experiências
        </button>
      </div>
    </div>
  );
}
