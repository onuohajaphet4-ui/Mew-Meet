import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./Fact.css";

const catFacts = [
  {
    question: "Cats don't care about their humans?",
    answer:
      "Not necessarily. Cats can form strong bonds with people. They may show affection differently from dogs — by following you around, sitting nearby, slow blinking, grooming you, or simply choosing to stay close.",
  },
  {
    question: "Cats are naturally solitary?",
    answer:
      "Not always. Cats can form social groups and meaningful relationships with other cats and animals when their environment allows it.",
  },
  {
    question: "A cat's purr always means it's happy?",
    answer:
      "Not necessarily. Cats often purr when relaxed, but purring can also happen during stress or discomfort. The rest of the cat's body language gives you better context.",
  },
  {
    question: "Cats can't be trained?",
    answer:
      "They can! Cats can learn routines, behaviors, and even tricks through positive reinforcement. They simply tend to learn differently from dogs.",
  },
  {
    question: "Cats are just lazy?",
    answer:
      "Cats are built for short bursts of activity rather than constant movement. Resting helps them conserve energy between exploring, playing, and other activities.",
  },
  {
    question: "Black cats are unlucky?",
    answer:
      "That's folklore, not biology. A cat's fur color has no supernatural effect on someone's luck. Black cats are just cats with beautiful dark coats.",
  },
];

function CatFacts() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFact = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="cat-facts">
      <div className="facts-heading">
        <span className="facts-kicker">A LITTLE CAT LORE</span>

        <h2>
          Think you know
          <br />
          <span>cats?</span> 🐾
        </h2>

        <p>
          Some things we've heard about cats aren't quite
          what they seem.
        </p>
      </div>

      <div className="facts-list">
        {catFacts.map((fact, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              className={`fact-item ${isOpen ? "open" : ""}`}
              key={index}
            >
              <button
                className="fact-question"
                onClick={() => toggleFact(index)}
              >
                <span>
                  <small>0{index + 1}</small>
                  {fact.question}
                </span>

                <ChevronDown
                  size={20}
                  className="fact-arrow"
                />
              </button>

              <div className="fact-answer">
                <p>{fact.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CatFacts;