import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="brand">
          PROJECT LOGOS
        </Link>
        <div className="nav__links">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About Me</Link>
          <Link href="/architecture">Architecture</Link>
          <Link href="/status">Status</Link>
          <Link href="https://github.com/c-daly/LOGOS" target="_blank" rel="noopener">
            GitHub
          </Link>
        </div>
      </div>
    </nav>
  );
}
