export default function Footer() {
  return <footer className="footer">
    <div className="container footer-inner">
      <a className="brand" href="#home">M<span>.</span>L</a>
      <p>Designed & built by Maha Lakshmi · © {new Date().getFullYear()}</p>
      <a href="#home" className="back-top">Back to top ↑</a>
    </div>
  </footer>;
}
