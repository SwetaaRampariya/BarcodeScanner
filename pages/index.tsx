import Image from "next/image";
import { Inter } from "next/font/google";
import Barcode from './components/barcode'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <Barcode />
  );
}
