import { team } from "../../data/team";
import KiuHub from "../../components/KiuHub";

export default function UserPage({ params }: { params: { user: string } }) {
  const profile = team[params.user];

  // Si el usuario no existe en el objeto "team"
  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#0C0E2B]">
        <h1 className="text-xl font-semibold mb-2">User not found</h1>
        <p className="text-gray-400 text-sm">
          The requested KIU Hub profile does not exist.
        </p>
      </div>
    );
  }

  // ✅ Pasamos correctamente el perfil al componente
  return <KiuHub profile={profile} />;
}
