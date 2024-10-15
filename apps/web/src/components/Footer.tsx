import { FiMail, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ position: 'absolute', bottom: 0, width: '100%' }} className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          Antonio Fernando - {currentYear} &copy; Todos os direitos reservados.
        </p>
        <p className="flex justify-center items-center space-x-4 mt-2">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=afas@academico.ufpb.br"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 flex items-center space-x-1"
          >
            <FiMail size={18} />
            <span>afas@academico.ufpb.br</span>
          </a>

          <a
            href="https://www.linkedin.com/in/antonio-fernando"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 flex items-center space-x-1"
          >
            <FiLinkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
