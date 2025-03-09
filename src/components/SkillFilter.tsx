import '../styles/SkillFilter.css'

type SkillFilterProps = {
    activeCategory: string;
    setActiveCategory: (category: string) => void;
};

function SkillFilter({ activeCategory, setActiveCategory }: SkillFilterProps) {
    const categories = ["All", "Data", "Web", "Backend"];

    return (
        <div className="skill-filter">
            {categories.map(category => (
                <button
                    key={category}
                    className={activeCategory === category ? 'active' : ''}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}

  export default SkillFilter