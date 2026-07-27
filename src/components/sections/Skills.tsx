import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="magic-section">
      <div className="magic-section__heading">
        <p className="magic-section__kicker mb-3">Tools I reach for</p>
        <h2 className="magic-section__title">Skills</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="magic-card magic-card--interactive">
            <h3 className="mb-5 text-lg font-semibold tracking-[-0.035em] text-(--text-strong)">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <span className="magic-tag">{skill.name}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wide text-(--text-weak)">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
