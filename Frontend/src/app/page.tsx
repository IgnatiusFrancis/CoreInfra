
import CardProfile from "./card-profile/page";
import CardRequest from "./card-request/page";
import Dashboard from "./dashboard/page";

export default function Home() {
  return (
    <main>
      <CardProfile />
      <CardRequest />
      <Dashboard />
    </main>
  );
}