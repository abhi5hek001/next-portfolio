# Next.js Portfolio
A high-performance, SEO-optimized developer portfolio built with Next.js, architected on AWS, and fully automated with GitHub Actions.

## 🚀 Live Demo: 

#### Visit website: [https://sahayabhishek.tech](https://sahayabhishek.tech)

## 🛠 Tech Stack
| Layer    | Technology                                   |
| -------- | -------------------------------------------- |
| Frontend | Next.js, Framer Motion, ShadCN, Tailwind CSS |
| Hosting  | Amazon S3 (Object Storage)                   |
| CDN      | Amazon CloudFront (Global Edge Delivery)     |
| DNS      | Cloudflare (DNS Management)                  |
| CI/CD    | GitHub Actions (Automated Pipelines)         |
| Security | AWS ACM (SSL/TLS Certificates)               |

## 🏗 Architecture Features
- Static Site Generation (SSG): Next.js pre-renders every page into static HTML for near-instant load times and perfect SEO.
- Global Edge Caching: Integrated with Amazon CloudFront to serve content from the nearest global edge location, reducing latency to <30ms.
- Automated Routing: Implemented custom CloudFront Functions to handle clean URL routing (e.g., /about → /about/index.html) on a static host.
- Zero-Touch Deployment: A fully automated pipeline that builds, syncs to S3, and purges both AWS and Cloudflare caches on every git push.

## 🤖 CI/CD Workflow

The deployment pipeline is triggered on every push to the main branch:
- Build: Node.js environment builds the Next.js project into a static out/ directory.
- Sync: The out/ folder is synchronized with the S3 Bucket (ap-south-1) with the --delete flag to ensure a clean state.
- Invalidate: An invalidation command is sent to CloudFront to clear the global edge cache.
- Purge: A final API call to Cloudflare purges the DNS-level cache, ensuring the new version is live globally.