import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I use TechShelf?",
          "answer": "TechShelf offers a curated selection of tech books with a seamless user experience for purchasing and managing eBooks."
        },
        {
          "id": 2,
          "question": "Can I access my eBook on mobile?",
          "answer": "Yes, TechShelf is mobile-friendly, allowing you to access your purchased eBooks on any mobile device seamlessly."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Currently, we do not offer refunds for eBooks. However, if you face any issues, feel free to contact our support team."
        },
        {
          "id": 4,
          "question": "Do you support Internation payments?",
          "answer": "Yes, TechShelf supports international payments through secure and trusted global payment gateways."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-violet-500 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold text-violet-950 dark:text-white mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-violet-900 text-violet-900 dark:text-violet-900" data-inactive-classes="text-violet-500 dark:text-violet-400">
              { faqs.map((faq) => (//individual faq component accessed 
                <Accordion key={faq.id} faq={faq} />   //passing 2 attributes in accordian key and faq
                                                        //key has the id , faq is faq itself
              )) }
            </div>
      </section>
  )
}
