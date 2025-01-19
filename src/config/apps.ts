export interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  logo: string;
  website: string;
  downloads?: string;
  company: string;
}

export const apps: App[] = [
  {
    id: "wechat",
    name: "WeChat",
    description: "China's most popular messaging app with over 1.2 billion monthly active users. Combines messaging, social media, and mobile payment features.",
    category: "Social Media",
    logo: "/images/wechat.png",
    website: "https://www.wechat.com",
    downloads: "1.2B+ Monthly Active Users",
    company: "Tencent"
  },
  {
    id: "tiktok",
    name: "TikTok",
    description: "Global short-form video platform known as Douyin in China. Features user-generated content, live streaming, and social commerce.",
    category: "Entertainment",
    logo: "/images/tiktok.png",
    website: "https://www.tiktok.com",
    downloads: "1B+ Global Downloads",
    company: "ByteDance"
  },
  {
    id: "alipay",
    name: "Alipay",
    description: "Leading digital payment and lifestyle platform in China, offering financial services, mobile payments, and daily life services.",
    category: "Finance",
    logo: "/images/alipay.png",
    website: "https://www.alipay.com",
    downloads: "1B+ Users",
    company: "Ant Group"
  }
];
