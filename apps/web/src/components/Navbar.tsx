import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-7">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image
            src="/imgs/logotipo.png"
            alt="Convertly"
            width={189}
            height={75}
          />
        </div>

        {/* Botões para ver a aplicação no Expo e o repositório no GitHub */}
        <div className="flex space-x-6">
          {/* Botão para ver o repositório no GitHub */}
          <a
            href="https://github.com/antoniofernandodearujo/convertly/tree/main/apps/mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-600 text-white px-4 py-2 rounded flex items-center space-x-2 hover:bg-gray-500 transition"
          >
            <FaGithub className="w-5 h-5" />
            <span>Ver versão Mobile</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
