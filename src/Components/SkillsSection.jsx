import SkillsSectionBar from "./lib/SkillsSectionBar";

const SkillsSection = () => {
  return (
    <section className="skills container my-lg-5 p-lg-3 rounded-3" id="skills">
      {/* Heading */}
      <div className="text-center my-3 mb-lg-5">
        <span className="shadow p-3 rounded-pill px-4 h3">Skills</span>
        <br />
      </div>

      {/* Skills Content */}
      <div className="skills-container">
        <div className="row  d-flex justify-content-evenly">
          {/* Bar 1 */}
          <SkillsSectionBar title="HTML" percentage={95} barClass="html-bar" />

          {/* Bar 2 */}
          <SkillsSectionBar title="CSS" percentage={75} barClass="css-bar" />

          {/* Bar 3 */}
          <SkillsSectionBar
            title="JavaScript"
            percentage={70}
            barClass="js-bar"
          />
        </div>
        <div className="row">
          {/* Bar 4 */}
          <SkillsSectionBar
            title="Bootstrap"
            percentage={85}
            barClass="bootstrap-bar"
          />

          {/* Bar 5 */}
          <SkillsSectionBar
            title="React js"
            percentage={65}
            barClass="react-bar"
          />

          {/* Bar 6 */}
          <SkillsSectionBar
            title="Github"
            percentage={80}
            barClass="github-bar"
          />
        </div>
        <div className="row">
          {/* Bar 7 */}
          <SkillsSectionBar
            title="Wordpress"
            percentage={80}
            barClass="github-bar"
          />

          <SkillsSectionBar
            title="Node Js"
            percentage={80}
            barClass="github-bar"
          />

          <SkillsSectionBar
            title="Mysql"
            percentage={80}
            barClass="github-bar"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
