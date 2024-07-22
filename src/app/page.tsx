import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="min-h-screen p-8 flex flex-col gap-8 mx-auto">
      <p>Hello World</p>
      <FontAwesomeIcon icon={faCoffee} className="size-8" />
    </main>
  );
}
