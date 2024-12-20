module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' https://apis.google.com; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ];
  },
};
