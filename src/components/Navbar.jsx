import { useEffect, useState } from 'react';

const links = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'],
  ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact']
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      let current = 'home';
      links.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 150) current = id;
      });
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <header className="site-header">
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>M<span>.</span>L</a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>
        <span></span><span></span><span></span>
      </button>
      <div className={`nav-links ${open ? 'show' : ''}`}>
        {links.map(([label, id]) => <a key={id} className={active === id ? 'active' : ''} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-resume" href="/Maha-Lakshmi-Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
      </div>
    </nav>
  </header>;
}
