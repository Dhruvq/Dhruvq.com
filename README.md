# Dhruv Thippasandra — Personal Portfolio

> [!NOTE]
> **Live Deployment:** This application is currently live and actively hosted at **[dhruvq.com](https://dhruvq.com)**.  
> *Please note that the code in this public repository may occasionally be out of date or slightly out of sync with the live production deployment.*

Welcome to the source code for my personal portfolio. Designed to be ultra-fast, minimalist, and scannable, this iteration was built specifically to give recruiters and engineers an immediate, high-impact overview of my background, active ML/Systems projects, and current education.

## Design System: "Neon Noir"
The UI strictly adheres to a **Neon Noir** aesthetic:
- **Pitch Black (`#000000`)** and **Deep Charcoal (`#1e1e1e`)** surfaces.
- **Neon Purple (`#BF00FF`)** for interactive primary actions and glowing hover states.
- **Neon Green (`#2CFF05`)** for chronological data, status indicators, and badges.
- **Glassmorphism** panels with subtle glowing borders mapped to a pure CSS grid.

## Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4 (Using native CSS variables and `@theme` integrations)
- **Language:** TypeScript
- **Fonts:** `Inter` (Sans) and `JetBrains Mono` (Monospace for metadata)

## Deployment & Infrastructure
This portfolio is completely self-managed and hosted on a private **Proxmox Virtual Environment** bare-metal cluster (The "Home Cloud").

It runs inside a lightweight Next.js **Docker** container on an Ubuntu VM, securely routed to the public internet via **Cloudflare Zero Trust Tunnels**. This fully bypasses traditional router port-forwarding while granting automated SSL edge security and massive bandwidth elasticity.

### Local Development
If you wish to run the app locally:
```bash
# 1. Clone the repository
git clone https://github.com/Dhruvq/Dhruvq.com.git
cd Dhruvq.com

# 2. Install dependencies
npm install

# 3. Spin up the dev server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 License
© 2026 Dhruv Thippasandra. All rights reserved.
