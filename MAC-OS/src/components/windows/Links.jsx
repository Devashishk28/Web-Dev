import React,{ useState } from "react";
import MacWindow from "./MacWindow";
import "./links.scss";

const linkGroups=[
    {
        name:"Github",
        description:"Projects and code",
        url:"https://github.com",
        icon:"GH",
        category:"Developer",
        color:"github",
    },
     {
        name:"LinkedIn",
        description:"Professional profile",
        url:"https://linkedin.com",
        icon:"in",
        category:"Social",
        color:"linkedin",
    },
     {
        name:"Portfolio",
        description:"My website",
        url:"#",
        icon:"↗",
        category:"Developer",
        color:"portfolio",
    },
    {
        name:"LeetCode",
        description:"Coding practice",
         url: "https://leetcode.com/",
        icon:"LC",
        category:"Developer",
        color:"leetcode",
    },
    {
        name: "YouTube",
         description: "Favourite videos",
         url: "https://youtube.com/",
        icon: "▶",
        category: "Entertainment",
        color: "youtube",
    },
     {
    name: "Vercel",
    description: "Deployed projects",
    url: "https://vercel.com/",
    icon: "▲",
    category: "Developer",
    color: "vercel",
  },

  {
    name: "Email",
    description: "Contact me",
    url: "mailto:your-email@example.com",
    icon: "✉",
    category: "Contact",
    color: "email",
  },
];

const Links=({onClose,onMinimize,isMinimized,title}) =>{
    const [search,setSearch] = useState("");
    const[activeCategory,setActiveCategory] = useState("All Links")

    const categories=[
        "All Links",
        "Developer",
        "Social",
        "Entertainment",
        "Contact",
    ];

    const filteredLinks = linkGroups.filter((link) => {
        const matchesSearch=link.name.toLowerCase().includes(search.toLowerCase()) ||
      link.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All Links" ||
      link.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <MacWindow
      title={title || "Links"}
      onClose={onClose}
      onMinimize={onMinimize}
      isMinimized={isMinimized}
    >
      <div className="links-app">
        <aside className="links-sidebar">
          <div className="links-brand">
            <span className="brand-icon">↗</span>
            <div>
              <h3>Links</h3>
              <p>Quick access to your world</p>
            </div>
          </div>

          <nav className="links-nav">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category ? "active" : ""
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </nav>

          <div className="sidebar-footer">
            <span>🚀</span>
            <p>Build · Learn · Grow</p>
            <small>Better things ahead ✨</small>
          </div>
        </aside>

        <section className="links-content">
          <header className="links-toolbar">
            <h2>My Links</h2>
            <input
              type="search"
              placeholder="Search links..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </header>

          <div className="links-hero">
            <div className="hero-symbol">↗</div>
            <div>
              <h1>My Links</h1>
              <p>All my important links in one place ✨</p>
            </div>
          </div>

          <div className="links-grid">
            {filteredLinks.map((link) => (
              <a
                key={link.name}
                className="link-card"
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
              >
                <span className={`link-icon ${link.color}`}>
                  {link.icon}
                </span>
                <span className="link-arrow">↗</span>
                <h3>{link.name}</h3>
                <p>{link.description}</p>
              </a>
            ))}
          </div>

          {filteredLinks.length === 0 && (
            <p className="links-empty">No matching links found.</p>
          )}

          <div className="links-signature">Keep Learning :)</div>
        </section>
      </div>
    </MacWindow>
  );
};

export default Links;

    