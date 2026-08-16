import { useState } from 'react';
import { products } from '../data/mockData';

interface ProductShowcaseProps {
  title?: string;
}

export default function ProductShowcase({ title = 'Productos Destacados' }: ProductShowcaseProps) {
  const categories = ['Todos', ...Array.from(new Set(products.map((p) => p.category)))];
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filtered = activeCategory === 'Todos' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <section data-cmp="ProductShowcase" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-2xl md:text-[28px] text-center text-foreground mb-8">{title}</h2>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white border border-border text-muted-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-custom border border-border group hover:shadow-lg transition-shadow"
            >
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover" loading="lazy" />
              <div className="p-3">
                <h4 className="font-semibold text-sm text-foreground mb-1 truncate">{product.name}</h4>
                <p className="text-xs text-muted-foreground mb-2 truncate">{product.producer}</p>
                <span className="text-sm font-bold text-primary">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
