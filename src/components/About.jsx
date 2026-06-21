import aboutImage from "../assets/goddess-june-16.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="container reveal">
        <h1 className="section-label">ABOUT ME</h1>
       
        <div className="about-card card">
          <img src={aboutImage} alt="Nilani Subramaniyam" />
          <p>
            I am a UI/UX Designer passionate about creating meaningful and
            user-friendly digital experiences. I enjoy designing mobile apps,
            websites, and interactive interfaces that solve real user problems.
            My design process includes user research, wireframing, prototyping,
            usability testing, and creating visually appealing designs using
            Figma.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
