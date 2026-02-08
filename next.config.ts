/**
 * Next.js configuration for Gotchu landing page.
 * 
 * Note: This application is temporarily hosted on GitHub Pages.
 * Migration to Firebase Hosting is planned for the upcoming weeks.
 * 
 * @author Tristan Mahinay
 */
import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Enable static HTML export for GitHub Pages
  output: "export",

  // Base path for GitHub Pages (repository name)
  // Remove this when migrating to Firebase Hosting
  basePath: isGitHubPages ? "/gotchu-landing" : "",

  // Asset prefix for GitHub Pages
  assetPrefix: isGitHubPages ? "/gotchu-landing/" : "",

  // Disable image optimization (not supported in static export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
