const normalizeSlug = (slug) =>
  slug
    .split("_")
    .map((nameEle) => nameEle[0].toUpperCase() + nameEle.substring(1))
    .join(" ");

module.exports.normalizeSlug = normalizeSlug;
