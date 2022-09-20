import React from "react";
import { Button, Nav } from "react-bootstrap";
function About() {
  return (
    <div style={{ marginTop: 30 }}>
      <div className="container d-flex">
        <div className="col-md-6 text-center py-3 px-2 ">
          <h3>Read About Us</h3>
          <hr />
          <p style={{ fontWeight: 400 }}>
            A paragraph is a collection of words strung together to make a
            longer unit than a sentence. Several sentences often make a
            paragraph. There are normally three to eight sentences in a
            paragraph. Paragraphs can start with a five-space indentation or by
            skipping a line and then starting over. This makes it simpler to
            tell when one paragraph ends and the next starts simply it has 3-9
            lines. A topic phrase appears in most ordered types of writing, such
            as essays. This paragraph's topic sentence informs the reader about
            the topic of the paragraph. In most essays, numerous paragraphs make
            statements to support a thesis statement, which is the essay's
            fundamental point. Paragraphs may signal when the writer changes
            topics. Each paragraph may have a number of sentences, depending on
            the topic. A pilcrow mark (¶) is sometimes used to show where a
            paragraph begins.
          </p>
          <Nav.Link href="/contact">
            <Button variant="outline-primary" size="sm">
              Contact Us
            </Button>
          </Nav.Link>
        </div>
        <div className="col-md-6 py-5 px-5">
          <img
            src="https://media.istockphoto.com/photos/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-picture-id1146472948?k=20&m=1146472948&s=612x612&w=0&h=uJMkt7Jtt7sv73o77K3WcqleE6Jlsl5fhKG_6ug1jPA="
            alt="group"
            height={500}
            width={600}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
