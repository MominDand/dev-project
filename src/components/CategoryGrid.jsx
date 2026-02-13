import { categories } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const CategoryGrid = () => {
    const navigate = useNavigate();

    return (
        <section className="container" style={{ marginBottom: '4rem' }}>
            <h2 className="section-title">What are you looking for?</h2>
            <div className="categories-grid">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="category-card"
                        onClick={() => navigate(`/category/${category.slug}`)}
                    >
                        <div className="category-icon">{category.icon}</div>
                        <h3 className="category-title">{category.title}</h3>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            {category.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryGrid;
