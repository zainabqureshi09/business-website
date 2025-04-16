export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
}

export interface Project {
  category: React.ReactNode;
  id: number;
  title: string;
  description: string;
  image: string;
  details: {
    overview: string;
    technologies: string[];
    link?: string;
  };
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  company: string;
}

export interface BlogPost {
  image: string ;
  _id: string;
  title: string;
  params: {
    slug: string;
  };
  excerpt: string;
  mainImage: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  content: string[];
  publishedAt: string;
}