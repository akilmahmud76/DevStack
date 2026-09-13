import logo from "../assets/logo-text.png";

const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#top" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const SOCIALS = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:px-8">
        <div>
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-slate-500">
            {SOCIALS.map((social) => (
              <a key={social} href="#" className="hover:text-slate-800">
                {social}
              </a>
            ))}
          </div>
        </div>

        {LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-sm font-semibold text-slate-900">{group.title}</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 hover:text-slate-800">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-200 px-5 py-5 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-slate-600">Privacy</a>
            <a href="#terms" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
