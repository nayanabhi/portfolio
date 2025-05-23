import config from "../config";

function getFaviconFromUrl(url: string): string {
  try {
    if (url.includes("leetcode.com")) {
        return "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg";
      }
    const domain = new URL(url).hostname;
    return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
  } catch {
    return "/default.png"; // fallback image
  }
}

const CodingProfiles = () => {
  if (!config.platforms || config.platforms.length === 0) return null;

  return (
    <div
      id="coding-profiles"
      className="coding-profiles section"
      style={{ backgroundColor: "#121212", color: "#ffffff" }}
    >
      <div className="container section-title">
        <h2>Coding Profiles</h2>
        <div className="title-shape">
          <svg viewBox="0 0 200 20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 0,10 C 40,0 60,20 100,10 C 140,0 160,20 200,10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
        <p>
          Here are some platforms where I actively participate in coding
          challenges and contribute.
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {config.platforms.map((profile, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="portfolio-card text-center p-4"
                style={{ backgroundColor: "#1e1e1e", borderRadius: "8px" }}
              >
                <div className="portfolio-image mb-3">
                  <div className="d-inline-block text-light">
                    <img
                      src={getFaviconFromUrl(profile.link)}
                      alt={`${profile.platform} favicon`}
                      style={{
                        width: 48,
                        height: 48,
                        objectFit: "contain",
                        borderRadius: 8,
                        backgroundColor: "#fff",
                        padding: "4px",
                      }}
                    />
                  </div>
                </div>
                <div className="portfolio-content">
                  <h5 className="mb-2">{profile.platform}</h5>
                  <a
                    href={profile.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm custom-hover"
                  >
                    Visit Profile
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodingProfiles;
