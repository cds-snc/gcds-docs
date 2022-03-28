const slugify = (s) =>
  encodeURIComponent(
    String(s)
      .trim()
      .toLowerCase()
      .replace(/[ÀÁÂÃÄÅ]/g,"A")
      .replace(/[àáâãäå]/g,"a")
      .replace(/[ÈÉÊË]/g,"E")
      .replace(/[èéêë]/g,"e")
      .replace(/[ÍÌÎÏ]/g,"I")
      .replace(/[íìîï]/g,"i")
      .replace(/[ÓÒÔÕÖ]/g,"O")
      .replace(/[óòôõö]/g,"o")
      .replace(/[ÚÙÛÜ]/g,"U")
      .replace(/[úùûü]/g,"u")
      .replace(/[Ç]/g,"C")
      .replace(/[ç]/g,"c")
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, '-')
  );

  module.exports = slugify;