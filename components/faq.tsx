import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40 bg-white">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="hidden lg:block ml-4">
          <Image
            src="/brain chemistry-amico.svg"
            alt="Neuroscience illustration"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* FAQ Section */}
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline" className="text-base text-white bg-purple-700">
                FAQ
              </Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-semibold text-purple-800">
                Frequently Asked Questions
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left text-purple-500">
                Have questions? We have answers!
              </p>
            </div>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-is-neuroreach">
              <AccordionTrigger>
                What is Neuroreach?
              </AccordionTrigger>
              <AccordionContent>
                Neuroreach connects students and professionals in the field of neuroscience through events, resources, and networking opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="how-can-i-join">
              <AccordionTrigger>
                How can I join up?
              </AccordionTrigger>
              <AccordionContent>
                Check the Get Involved Section for steps to join Neuroreach. We welcome all individuals passionate about neuroscience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="events-hosted">
              <AccordionTrigger>
                What kind of events do you host?
              </AccordionTrigger>
              <AccordionContent>
                We host a variety of events including workshops, symposiums, and networking events focused on neuroscience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  </div>
);
