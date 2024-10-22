import Image from "next/image";

import { Hero5 } from "@/components/hero";
import { FAQ1 } from "@/components/faq";
import { Footer1 } from "@/components/footer";
import { Testimonials1 } from "@/components/testimonials";

export default function Home() {
  return (
    <div>
        <Hero5></Hero5>
        <Testimonials1></Testimonials1>
        <FAQ1></FAQ1>
        <Footer1></Footer1>
    </div>
  );
}
