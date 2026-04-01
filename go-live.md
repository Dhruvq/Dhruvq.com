# Going Live: Deploying Dhruvq.com to the Home Cloud

A step-by-step execution plan to deploy your Next.js portfolio (`Dhruvq.com`) onto your Proxmox Home Cloud and seamlessly expose it to the internet at `dhruvq.com` using Cloudflare Tunnels, without opening any ports on your local router.

---

## Phase 1: Containerizing the Portfolio
To run this efficiently on your Proxmox VM alongside your other stacks, define a clean Docker setup.

### 1. Create a `Dockerfile` in `/Users/dhruvs/Dhruvq.com`
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### 2. Create a `docker-compose.yml` in `/Users/dhruvs/Dhruvq.com`
```yaml
version: '3.8'

services:
  portfolio:
    build: .
    container_name: dhruvq-portfolio
    ports:
      - "3001:3000"
    restart: unless-stopped
```

---

## Phase 2: Pushing and Deploying to Node 2 (or Target VM)
Deploying this to your `gpu-node-2` VM over Tailscale (`100.x.x.x`) like the Wildfire project makes the process easy.

1. **SSH into the Node from your Mac:**
   Ensure you can connect via Tailscale.
2. **Code Transfer (Sync):** 
   Use `rsync` to push the Next.js portfolio repository onto the VM.
   ```bash
   rsync -avz --delete \
     --exclude 'node_modules' \
     --exclude '.git' \
     --exclude '.next' \
     ~/Dhruvq.com/ ubuntu@100.x.x.x:~/Dhruvq.com/
   ```
3. **Launch the Stack:** 
   ```bash
   ssh ubuntu@100.x.x.x
   cd ~/Dhruvq.com
   docker compose up -d --build
   ```
4. **Validation:** 
   Run `curl localhost:3001` inside the VM to silently confirm the Next.js app resolves successfully.

---

## Phase 3: Cloudflare Tunnel Integration
This routes external traffic visiting `dhruvq.com` straight through the secure tunnel to your VM.

1. **Configure the Tunnel:** 
   - Navigate to **Cloudflare Zero Trust** Dashboard > **Networks** > **Tunnels**.
   - **CRITICAL:** Because you already installed `cloudflared` on this VM for the Fire project, you **CANNOT** and **SHOULD NOT** install a second tunnel service on the same node. A single Cloudflare Tunnel can handle unlimited domains and ports!
   - Simply click on your existing `home-cloud-fire` tunnel, go to **Configure**, and click the **Public Hostname** tab to add a new route.
2. **Configure Public Hostname Routing:**
   - **Subdomain:** (Leave blank for the root domain, or use `www`)
   - **Domain:** `dhruvq.com`
   - **Service / URL:** `http://localhost:3001`
3. **Save and Test:** Navigate to `https://dhruvq.com` on your phone (off Wi-Fi) to verify Cloudflare is successfully routing the traffic and proxying the SSL certificate!

---

## Phase 4: Pushing Updates Without Breaking Production
A repeatable, safe workflow for deploying code changes (like editing your resume or adding a new project) from your Mac to the live cluster with near-zero downtime.

1. **Validate Locally:**
   Always run `npm run dev` and check `localhost:3000` on your Mac first.
2. **Sync Changes to the VM:**
   Push source files, strictly excluding heavy build artifacts so Docker handles the compilation.
   ```bash
   rsync -avz --delete \
     --exclude 'node_modules' \
     --exclude '.git' \
     --exclude '.next' \
     ~/Dhruvq.com/ ubuntu@100.x.x.x:~/Dhruvq.com/
   ```
3. **Rebuild & Restart:**
   SSH into the VM and run compose. Docker Compose keeps the old container running until the new one builds, resulting in just ~1-2 seconds of downtime during the swap.
   ```bash
   ssh ubuntu@100.x.x.x
   cd ~/Dhruvq.com
   docker compose up -d --build
   ```

### Quick Deploy Cheatsheet
Save this snippet to run whenever you've made local changes you want to publish:

```bash
# 1. Sync
rsync -avz --delete --exclude 'node_modules' --exclude '.git' --exclude '.next' ~/Dhruvq.com/ ubuntu@100.x.x.x:~/Dhruvq.com/

# 2. Rebuild and Swap
ssh ubuntu@100.x.x.x "cd ~/Dhruvq.com && docker compose up -d --build"
```
