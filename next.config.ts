import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // The design bundle in `project/` is a Claude Design prototype, not app source.
  outputFileTracingExcludes: { '*': ['./project/**', './chats/**'] },
}

export default nextConfig
