import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my financial data secure with FinAd?",
    answer: "Yes, we take security very seriously. We use bank-level encryption to protect your data and never store your bank credentials. Our systems are regularly audited by third-party security experts.",
  },
  {
    question: "Can I connect multiple bank accounts?",
    answer: "You can connect multiple bank accounts, credit cards, and investment accounts to get a comprehensive view of your finances.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, we offer mobile apps for both iOS and Android devices, allowing you to track your finances on the go.",
  },
  {
    question: "How often is my financial data updated?",
    answer: "We update your data several times a day to ensure you have the most current information. You can also manually refresh your accounts at any time.",
  },
  {
    question: "Can I export my financial data?",
    answer: "Yes, you can export your data in various formats, including CSV and PDF, for your records or to use with other financial tools.",
  },
]

export default function FAQ() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq,
index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

