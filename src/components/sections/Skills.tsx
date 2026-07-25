import { skills } from '@/data/skills';

function levelColor(level: string): string {
  switch (level) {
    case 'Advanced':
      return '#FF6B35';
    case 'Proficient':
      return '#004E98';
    default:
      return '#FFD700';
  }
}

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="neo-section-title">Skills</h2>

      <div className="grid gap-8 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="neo-card">
            <h3
              className="mb-4 text-lg font-black uppercase tracking-tight"
              style={{ color: 'var(--neo-accent-1)' }}
            >
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2">
                  <span
                    className="neo-tag"
                    style={{
                      background: levelColor(skill.level),
                      color: skill.level === 'Advanced' ? '#FFF' : '#000',
                    }}
                  >
                    {skill.name}
                  </span>
                  <span className="text-[10px] font-bold uppercase opacity-50">
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
