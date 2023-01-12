let data = {
  username: "robbb_J", // No leading @ here
  homeLabel: "r0b.io",
  homeUrl: "https://www.r0b.io/",
};

data.avatar = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
  data.homeUrl
)}/`;

module.exports = data;
