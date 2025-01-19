export interface App {
  id: string;
  name: string;
  description: string;
  category: AppCategory;
  logo: string;
  website: string;
  downloads?: string;
  company: string;
  features?: string[];
  platforms?: Platform[];
  globalAvailability?: boolean;
}

export type AppCategory = 
  | "Social Media"
  | "Entertainment"
  | "Finance"
  | "E-commerce"
  | "Transportation"
  | "Communication"
  | "Lifestyle"
  | "Education"
  | "Productivity";

export type Platform = "iOS" | "Android" | "Web" | "Desktop";

export const apps: App[] = [
  {
    id: "wechat",
    name: "WeChat",
    description: "A multi-purpose messaging, social media and mobile payment app with over 1.2 billion monthly active users globally.",
    category: "Social Media",
    logo: "/images/wechat/logo.png",
    website: "https://www.wechat.com",
    downloads: "1.2B+ Monthly Active Users",
    company: "Tencent",
    features: [
      "Instant Messaging",
      "Social Networking",
      "Mobile Payments",
      "Mini Programs"
    ],
    platforms: ["iOS", "Android", "Web", "Desktop"],
    globalAvailability: true
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "A leading short-form video platform known for its viral content and creative tools, popular among younger generations worldwide.",
    category: "Entertainment",
    logo: "/images/tiktok/logo.png",
    website: "https://www.tiktok.com",
    downloads: "1B+ Global Downloads",
    company: "ByteDance",
    features: [
      "Short Videos",
      "Live Streaming",
      "Video Effects",
      "Social Commerce"
    ],
    platforms: ["iOS", "Android", "Web"],
    globalAvailability: true
  },
  {
    id: "douyin",
    name: "Douyin",
    description: "The Chinese version of TikTok, featuring short-form videos, live streaming, and extensive e-commerce integration.",
    category: "Entertainment",
    logo: "/images/douyin/logo.png",
    website: "https://www.douyin.com",
    downloads: "600M+ Daily Active Users",
    company: "ByteDance",
    features: [
      "Short Videos",
      "Live Commerce",
      "Social Shopping",
      "Content Creation"
    ],
    platforms: ["iOS", "Android"],
    globalAvailability: false
  },
  {
    id: "taobao",
    name: "Taobao",
    description: "China's largest online shopping platform featuring a vast selection of products, live streaming shopping, and social commerce features.",
    category: "E-commerce",
    logo: "/images/taobao/logo.png",
    website: "https://www.taobao.com",
    downloads: "800M+ Monthly Active Users",
    company: "Alibaba Group",
    features: [
      "Online Shopping",
      "Live Commerce",
      "Social Shopping",
      "Mobile Payments"
    ],
    platforms: ["iOS", "Android", "Web"],
    globalAvailability: false
  },
  {
    id: "bilibili",
    name: "Bilibili",
    description: "A popular video sharing platform focusing on animation, gaming, and youth culture, known for its interactive commenting system.",
    category: "Entertainment",
    logo: "/images/bilibili/logo.png",
    website: "https://www.bilibili.com",
    downloads: "200M+ Monthly Active Users",
    company: "Bilibili Inc.",
    features: [
      "Video Streaming",
      "Live Broadcasting",
      "Interactive Comments",
      "Community Features"
    ],
    platforms: ["iOS", "Android", "Web"],
    globalAvailability: true
  },
  {
    id: "xiaohongshu",
    name: "RED",
    description: "A lifestyle sharing and social commerce platform where users share product reviews, travel experiences, and lifestyle tips.",
    category: "Lifestyle",
    logo: "/images/xiaohongshu/logo.png",
    website: "https://www.xiaohongshu.com",
    downloads: "200M+ Users",
    company: "Xiaohongshu",
    features: [
      "Social Shopping",
      "Lifestyle Sharing",
      "Product Reviews",
      "Community Engagement"
    ],
    platforms: ["iOS", "Android"],
    globalAvailability: false
  },
  {
    id: "meituan",
    name: "Meituan",
    description: "A leading platform for food delivery, hotel bookings, and local services, serving millions of merchants and consumers.",
    category: "Lifestyle",
    logo: "/images/meituan/logo.png",
    website: "https://www.meituan.com",
    downloads: "600M+ Users",
    company: "Meituan Dianping",
    features: [
      "Food Delivery",
      "Hotel Booking",
      "Movie Tickets",
      "Local Services"
    ],
    platforms: ["iOS", "Android", "Web"],
    globalAvailability: false
  },
  {
    id: "netease-cloud-music",
    name: "NetEase Cloud Music",
    description: "A popular music streaming platform known for its social features and personalized recommendations.",
    category: "Entertainment",
    logo: "/images/netease/logo.png",
    website: "https://music.163.com",
    downloads: "800M+ Users",
    company: "NetEase",
    features: [
      "Music Streaming",
      "Social Networking",
      "Playlist Sharing",
      "Lyrics Translation"
    ],
    platforms: ["iOS", "Android", "Web", "Desktop"],
    globalAvailability: false
  },
  {
    id: "zhihu",
    name: "Zhihu",
    description: "China's largest knowledge-sharing platform where experts and professionals share insights across various topics.",
    category: "Education",
    logo: "/images/zhihu/logo.png",
    website: "https://www.zhihu.com",
    downloads: "100M+ Monthly Active Users",
    company: "Zhihu Inc.",
    features: [
      "Q&A Platform",
      "Knowledge Sharing",
      "Professional Content",
      "Community Discussion"
    ],
    platforms: ["iOS", "Android", "Web"],
    globalAvailability: false
  }
];
