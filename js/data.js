/*
 * All page content lives here. Edit this file to update the site —
 * no HTML changes needed.
 */
window.SITE_DATA = {
  me: 'Yujin Jo', // bolded wherever it appears in an author list

  // Newest first. Items after `newsVisible` are hidden behind "Show older news".
  newsVisible: 5,
  news: [
    { date: '2026.03', text: 'Started the integrated M.S./Ph.D. in Artificial Intelligence at <b>Sungkyunkwan University</b>, advised by Prof. Eunil Park.' },
    { date: '2025.11', text: 'Started an internship at the <b>Korea Evaluation Institute of Industrial Technology (KEIT)</b>, Digital Transformation Office.' },
    { date: '2025.02', text: 'Received my B.S. in Software Engineering from <b>Soongsil University</b>.' },
    { date: '2024.12', text: 'Wrapped up a project on sentiment analysis and text generation with hotel review data.' },
    { date: '2024.07', text: 'Joined the <b>Naver Boost Course</b> data science program.' },
    { date: '2023.05', text: 'Our paper received the <b>Bronze Prize</b> at the ASK 2023 Paper Competition (KIPS). 🏅' },
    { date: '2022.03', text: 'Joined <b>ASC</b>, the Soongsil hacking & security club.' },
  ],

  // Each entry: image, title, authors, venue, year, links { paper, code, ... }, optional award.
  // Empty or missing links are not shown. Duplicate the object to add a paper.
  publications: [
    {
      image: 'assets/img/pub-perfume.svg',
      title: 'Implementation of Perfume Recommendation Service using Web Crawling and Image Color Extraction Artificial Intelligence',
      authors: ['Yu-jin Kim', 'Ye-lim Lee', 'Sung-Yoon Jung', 'Yujin Jo', 'Young-Jong Kim'],
      venue: 'ASK 2023',
      venueFull: 'Annual Spring Conference of the Korea Information Processing Society (KIPS)',
      year: '2023',
      award: 'Bronze Prize',
      links: { paper: 'https://doi.org/10.3745/PKIPS.y2023m05a.758', code: '' }, // add a GitHub URL to `code` to show the Code button
    },
  ],

  research: [
    {
      title: 'Graduate Researcher',
      org: 'Sungkyunkwan University',
      place: 'Suwon, Korea',
      period: 'Mar. 2026 – Present',
      bullets: [
        'Integrated M.S./Ph.D. research advised by Prof. Eunil Park.',
        'Studying multi-hop reasoning in language models and learning on high-dimensional, multi-modal data.',
      ],
    },
    {
      title: 'Intern, Digital Transformation Office',
      org: 'Korea Evaluation Institute of Industrial Technology (KEIT, 한국산업기술기획평가원)',
      place: '',
      period: 'Nov. 2025 – Jan. 2026',
      bullets: [],
    },
    {
      title: 'Sentiment Analysis & Natural Language Generation on Hotel Reviews',
      org: 'Soongsil University',
      place: 'Seoul, Korea',
      period: 'Sep. 2024 – Dec. 2024',
      bullets: [
        'Built sentiment classifiers and text-generation models on a hotel review dataset.',
        'Tools: Python, Pandas, TensorFlow.',
      ],
    },
    {
      title: 'Recommendation System with Web Crawling & Image Color Extraction',
      org: 'Soongsil University',
      place: 'Seoul, Korea',
      period: 'Mar. 2023 – May 2023',
      bullets: [
        'Combined crawled product data with AI-based color extraction from images to recommend perfumes.',
        'Result published at ASK 2023 and awarded the Bronze Prize. Tools: Python, Java.',
      ],
    },
  ],

  education: [
    {
      title: 'Integrated M.S./Ph.D. in Artificial Intelligence',
      org: 'Sungkyunkwan University',
      place: 'Suwon, Korea',
      period: 'Mar. 2026 – Present',
      bullets: ['Advisor: Prof. Eunil Park'],
    },
    {
      title: 'B.S. in Software Engineering',
      org: 'Soongsil University',
      place: 'Seoul, Korea',
      period: 'Mar. 2020 – Feb. 2025',
      bullets: [],
    },
  ],

  activities: [
    {
      title: 'Bronze Prize, ASK 2023 Paper Competition',
      org: 'Korea Information Processing Society (KIPS)',
      place: '',
      period: 'May 2023',
      tag: 'Award',
      bullets: ['For the perfume recommendation paper using web crawling and image color extraction.'],
    },
    {
      title: 'Naver Boost Course — Data Science',
      org: 'NAVER Connect Foundation',
      place: 'Seoul, Korea',
      period: 'Jul. 2024 – Aug. 2024',
      tag: 'Program',
      bullets: ['Carried out end-to-end data analysis in Python, including sales and distribution analysis.'],
    },
    {
      title: 'Member, ASC Hacking & Security Club',
      org: 'Soongsil University',
      place: 'Seoul, Korea',
      period: 'Mar. 2022 – Dec. 2023',
      tag: 'Club',
      bullets: [
        'Competed in domestic and international CTF competitions.',
        'Led security study groups and designed competition challenges.',
      ],
    },
  ],
};
