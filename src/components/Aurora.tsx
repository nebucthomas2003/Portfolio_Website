import './Aurora.css';

export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <span className="aurora__blob aurora__blob--a" />
      <span className="aurora__blob aurora__blob--b" />
      <span className="aurora__blob aurora__blob--c" />
      <svg className="aurora__lines" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <path
          className="aurora__path aurora__path--1"
          d="M -100 620 C 250 500, 500 720, 850 560 S 1300 420, 1500 560"
          fill="none"
        />
        <path
          className="aurora__path aurora__path--2"
          d="M -100 220 C 200 340, 480 120, 780 260 S 1250 200, 1400 120"
          fill="none"
        />
      </svg>
    </div>
  );
}
