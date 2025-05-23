import { useState } from 'react';

export default function ProjectFilter() {
  const [filter, setFilter] = useState('all');

  return (
    <div className="filter-container">
      <div className="inner">
        <ul className="actions">
          <li><button className={filter === 'all' ? 'button primary' : 'button'} onClick={() => setFilter('all')}>All</button></li>
          <li><button className={filter === 'web' ? 'button primary' : 'button'} onClick={() => setFilter('web')}>Web Development</button></li>
          <li><button className={filter === 'mobile' ? 'button primary' : 'button'} onClick={() => setFilter('mobile')}>Mobile Apps</button></li>
          <li><button className={filter === 'design' ? 'button primary' : 'button'} onClick={() => setFilter('design')}>Design</button></li>
        </ul>
      </div>
    </div>
  );
}