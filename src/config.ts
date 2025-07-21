export interface SiteConfig {
  title: string;
  description: string;
  author: {
    name: string;
    bio: string;
    avatar?: string;
  };
  social: {
    github?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
  siteUrl: string;
}

export const config: SiteConfig = {
  title: "Math-Manepa",
  description: "Website yang membahas mengenai materi Matematika dengan bahasa yang santai dan ringan. Harapannya dapat menjadi tambahan sumber belajar semua orang, khususnya siswa.",
  author: {
    name: "Sahrul Aziz",
    bio: "Math teacher, aspiring programmer, and amateur chess player.",
    avatar: "/images/avatar.png" // Uncomment and add your avatar image to public/images/
  },
  social: {
    github: "https://github.com/Qrulaziz",
    twitter: "https://twitter.com/yourusername",
    linkedin: "https://linkedin.com/in/sahrul-aziz/",
    email: "azizsahrul41@gmail.com"
  },
  siteUrl: "https://math-manepa.netlify.com"
};

// Export constants for SEO component
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;