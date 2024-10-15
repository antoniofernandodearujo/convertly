'use client';
import Navbar from "@/components/Navbar";
import InputFile from "@/components/InputFile";
import ButtonOptions from "@/components/ButtonOptions";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import { useButtonContext } from "@/context/ButtonContenxt";

export default function Index() {

  const { selectedButtonId } = useButtonContext();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Title />
      <ButtonOptions qtdButtonsOptios={2} label={['PDF para Word', 'Word para PDF'] } />
      {
        selectedButtonId !== null && (
          <InputFile />
        )
      }
      <Footer />
    </div>
  );
}