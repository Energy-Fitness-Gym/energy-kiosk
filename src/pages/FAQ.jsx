import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import campFaqs from "../data/campFaqs.jsx";
import "./FAQ.css";

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const itemRefs = useRef([]);

  const handleToggle = (index) => {
    const nextIndex = openIndex === index ? null : index;
    setOpenIndex(nextIndex);

    if (nextIndex !== null) {
      window.setTimeout(() => {
        itemRefs.current[nextIndex]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 80);
    }
  };

  return (
    <main className="faqPage">
      <header className="faqHeader">
        <div className="faqNav">
          <Link to="/" className="faqButton">
            ← Home
          </Link>
          <Link to="/summercamp" className="faqButton">
            Back
          </Link>
        </div>

        <h1>Summer Camp FAQs</h1>
      </header>

      <section
        className="faqPanel"
        aria-label="Summer camp frequently asked questions"
      >
        <div className="faqList">
          {campFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                className={`faqCard ${isOpen ? "isOpen" : ""}`}
                key={faq.question}
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
              >
                <button
                  className="faqToggle"
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => handleToggle(index)}
                >
                  <span className="faqQuestion">{faq.question}</span>
                  <span className="faqIcon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="faqAnswer" id={answerId}>
                    {typeof faq.answer === "string" ? (
                      <p>{faq.answer}</p>
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default FAQ;
