/* @ds-bundle: {"format":4,"namespace":"NFCSummit2027DesignSystem_793245","components":[{"name":"PriceRow","sourcePath":"components/data/PriceRow.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"DRAGONS","sourcePath":"components/dragons/DragonFrame.jsx"},{"name":"DragonFrame","sourcePath":"components/dragons/DragonFrame.jsx"},{"name":"AccentBand","sourcePath":"components/layout/AccentBand.jsx"},{"name":"GhostNumber","sourcePath":"components/layout/GhostNumber.jsx"},{"name":"SlideFrame","sourcePath":"components/layout/SlideFrame.jsx"},{"name":"GradeDefs","sourcePath":"components/photo/GradeDefs.jsx"},{"name":"GradedPhoto","sourcePath":"components/photo/GradedPhoto.jsx"},{"name":"VideoBackdrop","sourcePath":"components/photo/VideoBackdrop.jsx"},{"name":"DisplayTitle","sourcePath":"components/type/DisplayTitle.jsx"},{"name":"Lead","sourcePath":"components/type/Lead.jsx"},{"name":"MonoLabel","sourcePath":"components/type/MonoLabel.jsx"},{"name":"QuoteBlock","sourcePath":"components/type/QuoteBlock.jsx"}],"sourceHashes":{"components/data/PriceRow.jsx":"8d3717d957dc","components/data/StatBlock.jsx":"9ff652f1bba2","components/dragons/DragonFrame.jsx":"a452e83bdb9e","components/layout/AccentBand.jsx":"3968e5fa3a09","components/layout/GhostNumber.jsx":"85be4670d427","components/layout/SlideFrame.jsx":"cd52bf7d0cc0","components/photo/GradeDefs.jsx":"99c88c16870b","components/photo/GradedPhoto.jsx":"c1cd30d8603f","components/photo/VideoBackdrop.jsx":"51056e0565c9","components/type/DisplayTitle.jsx":"b3dd5592279c","components/type/Lead.jsx":"1ce05808540a","components/type/MonoLabel.jsx":"382d1b6a3ee8","components/type/QuoteBlock.jsx":"a74ae7935000"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NFCSummit2027DesignSystem_793245 = window.NFCSummit2027DesignSystem_793245 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/PriceRow.jsx
try { (() => {
/**
 * Ligne de prix ou de prestation, pour les pages denses sur fond béton.
 * Prix en Space Mono, jamais en Anton.
 */
function PriceRow({
  label,
  value,
  detail,
  emphasis = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "32px",
      padding: "20px 0",
      borderBottom: "var(--rule-hairline) solid var(--rule-on-dense)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-on-dense)"
    }
  }, label), detail && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "8px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-regular)",
      fontSize: "var(--type-body-sm)",
      lineHeight: 1.4,
      color: "var(--text-on-dense-secondary)",
      maxWidth: "42ch"
    }
  }, detail)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      fontFamily: "var(--font-mono)",
      fontWeight: emphasis ? 700 : 400,
      fontSize: "var(--type-price)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: emphasis ? "var(--accent-urgent)" : "var(--text-on-dense)"
    }
  }, value));
}
Object.assign(__ds_scope, { PriceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/PriceRow.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
/**
 * Un chiffre clé. Nu, en Anton, sans « plus de ».
 * Un chiffre faux tue le deck : on ne l'arrondit pas vers le haut.
 */
function StatBlock({
  value,
  label,
  unit,
  accent = "var(--accent-default)",
  color = "var(--text-primary)",
  size = "var(--type-statement)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "72px",
      height: "var(--rule-accent)",
      background: accent
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "12px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      lineHeight: "var(--leading-display)",
      letterSpacing: "var(--tracking-display)",
      color
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-label-sm)",
      letterSpacing: "var(--tracking-mono-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/dragons/DragonFrame.jsx
try { (() => {
const DRAGONS = {
  "01": {
    name: "Le collectionneur",
    accent: "var(--nfc-dragon-01)",
    src: null,
    note: "plastron NFT — rendu manquant"
  },
  "02": {
    name: "L'analyste",
    accent: "var(--nfc-dragon-02)",
    src: "assets/dragons/02-analyste-glitch.png"
  },
  "03": {
    name: "Le vidéaste",
    accent: "var(--nfc-dragon-03)",
    src: "assets/dragons/03-videaste-clean.png"
  },
  "04": {
    name: "La journaliste",
    accent: "var(--nfc-dragon-04)",
    src: "assets/dragons/04-journaliste-clean.png"
  },
  "05": {
    name: "Le chercheur",
    accent: "var(--nfc-dragon-05)",
    src: "assets/dragons/05-chercheur-clean.png"
  },
  "06": {
    name: "Le dev",
    accent: "var(--nfc-dragon-06)",
    src: "assets/dragons/06-dev-clean.png"
  },
  "07": {
    name: "L'hôte",
    accent: "var(--nfc-dragon-07)",
    src: "assets/dragons/07-hote-clean.png"
  },
  "08": {
    name: "Le street artist",
    accent: "var(--nfc-dragon-08)",
    src: "assets/dragons/08-street-artist-clean.png"
  }
};
const CROPS = {
  full: {
    left: "50%",
    bottom: "-4%",
    transform: "translateX(-50%)",
    height: "104%"
  },
  head: {
    left: "50%",
    top: "-22%",
    transform: "translateX(-50%)",
    height: "130%"
  },
  offframe: {
    left: "-32%",
    bottom: 0,
    height: "96%"
  },
  bust: {
    right: "-18%",
    bottom: "-34%",
    height: "152%"
  }
};

/**
 * Un dragon dans un cadre. Toujours coupé par au moins un bord : posé au
 * milieu du vide il devient un sticker. Gris pendant tout le deck ; chacun
 * porte une seule ligne d'accent, la sienne.
 */
function DragonFrame({
  id = "06",
  crop = "full",
  accentLine = true,
  base = "",
  background = "transparent",
  style = {},
  children
}) {
  const dragon = DRAGONS[id] || DRAGONS["06"];
  const pos = CROPS[crop] || CROPS.full;
  const src = dragon.src ? base + dragon.src : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background,
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: dragon.name,
    style: {
      position: "absolute",
      objectFit: "contain",
      ...pos
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "8%",
      border: "1px dashed var(--rule)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-label-sm)",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, dragon.note), accentLine && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: crop === "offframe" ? "56%" : "8%",
      right: crop === "bust" ? "52%" : "8%",
      bottom: "8%",
      height: "4px",
      background: dragon.accent
    }
  }), children);
}
Object.assign(__ds_scope, { DRAGONS, DragonFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/dragons/DragonFrame.jsx", error: String((e && e.message) || e) }); }

// components/layout/AccentBand.jsx
try { (() => {
/**
 * Bande d'accent plein cadre. C'est l'unique occurrence d'accent d'une slide
 * d'intercalaire — elle coupe le sujet, elle ne l'encadre pas.
 */
function AccentBand({
  color = "var(--accent-default)",
  thickness = "var(--rule-band)",
  top = "44%",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top,
      height: thickness,
      background: color,
      ...style
    }
  });
}
Object.assign(__ds_scope, { AccentBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/AccentBand.jsx", error: String((e && e.message) || e) }); }

// components/layout/GhostNumber.jsx
try { (() => {
/**
 * Numéro fantôme des intercalaires : Anton 320 px en graphite, calé sur un bord,
 * débordant sous le titre. Il se lit sans être lu.
 */
function GhostNumber({
  children,
  size = "var(--type-ghost)",
  color = "var(--surface-raised)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      fontFamily: "var(--font-display)",
      fontSize: size,
      lineHeight: 0.7,
      letterSpacing: "var(--tracking-display)",
      color,
      userSelect: "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { GhostNumber });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/GhostNumber.jsx", error: String((e && e.message) || e) }); }

// components/layout/SlideFrame.jsx
try { (() => {
const SURFACES = {
  ink: {
    background: "var(--surface-primary)",
    color: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    rule: "var(--rule)"
  },
  concrete: {
    background: "var(--surface-dense)",
    color: "var(--text-on-dense)",
    secondary: "var(--text-on-dense-secondary)",
    rule: "var(--rule-on-dense)"
  }
};

/**
 * Cadre de slide 1920 × 1080 avec marges à 5 %, header et footer optionnels.
 * Deux fonds, pas trois : encre pour tout ce qui porte une image,
 * béton pour tout ce qui porte des chiffres.
 */
function SlideFrame({
  surface = "ink",
  eyebrow,
  eyebrowRight,
  footerLeft,
  footerRight,
  bleed,
  width = 1920,
  height = 1080,
  children,
  style = {}
}) {
  const s = SURFACES[surface] || SURFACES.ink;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      width,
      height,
      overflow: "hidden",
      background: s.background,
      color: s.color,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, bleed, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      padding: "var(--frame-margin-ratio)",
      display: "flex",
      flexDirection: "column"
    }
  }, (eyebrow || eyebrowRight) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "48px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--tracking-mono-wide)",
      textTransform: "uppercase",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.secondary
    }
  }, eyebrow), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--accent-default)"
    }
  }, eyebrowRight)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 0,
      position: "relative"
    }
  }, children), (footerLeft || footerRight) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: "48px",
      borderTop: `var(--rule-hairline) solid ${s.rule}`,
      paddingTop: "20px",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--type-label-sm)",
      letterSpacing: "var(--tracking-mono-wide)",
      textTransform: "uppercase",
      color: s.secondary,
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", null, footerLeft), /*#__PURE__*/React.createElement("span", null, footerRight))));
}
Object.assign(__ds_scope, { SlideFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SlideFrame.jsx", error: String((e && e.message) || e) }); }

// components/photo/GradeDefs.jsx
try { (() => {
/**
 * Définitions des deux filtres d'étalonnage NFC (#nfc-grade, #nfc-bw).
 * Monté automatiquement par GradedPhoto et VideoBackdrop — les définitions
 * étant identiques, un doublon dans le document est inoffensif.
 */
function GradeDefs() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "0",
    height: "0",
    style: {
      position: "absolute",
      pointerEvents: "none"
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("filter", {
    id: "nfc-grade",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "saturate",
    values: "0.62",
    result: "sat"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "sat",
    type: "matrix",
    values: "1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0",
    result: "rch"
  }), /*#__PURE__*/React.createElement("feOffset", {
    in: "rch",
    dx: "-4",
    dy: "0",
    result: "rsh"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "sat",
    type: "matrix",
    values: "0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0",
    result: "gch"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    in: "sat",
    type: "matrix",
    values: "0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0",
    result: "bch"
  }), /*#__PURE__*/React.createElement("feOffset", {
    in: "bch",
    dx: "4",
    dy: "0",
    result: "bsh"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "rsh",
    in2: "gch",
    mode: "screen",
    result: "rg"
  }), /*#__PURE__*/React.createElement("feBlend", {
    in: "rg",
    in2: "bsh",
    mode: "screen",
    result: "fringed"
  }), /*#__PURE__*/React.createElement("feComposite", {
    in: "fringed",
    in2: "sat",
    operator: "arithmetic",
    k1: "0",
    k2: "0.55",
    k3: "0.45",
    k4: "0",
    result: "mixed"
  }), /*#__PURE__*/React.createElement("feComponentTransfer", {
    in: "mixed",
    result: "contrast"
  }, /*#__PURE__*/React.createElement("feFuncR", {
    type: "linear",
    slope: "1.06",
    intercept: "-0.03"
  }), /*#__PURE__*/React.createElement("feFuncG", {
    type: "linear",
    slope: "1.06",
    intercept: "-0.03"
  }), /*#__PURE__*/React.createElement("feFuncB", {
    type: "linear",
    slope: "1.06",
    intercept: "-0.03"
  })), /*#__PURE__*/React.createElement("feComponentTransfer", {
    in: "contrast"
  }, /*#__PURE__*/React.createElement("feFuncR", {
    type: "table",
    tableValues: "0.092 0.901"
  }), /*#__PURE__*/React.createElement("feFuncG", {
    type: "table",
    tableValues: "0.186 0.959"
  }), /*#__PURE__*/React.createElement("feFuncB", {
    type: "table",
    tableValues: "0.162 0.759"
  }))), /*#__PURE__*/React.createElement("filter", {
    id: "nfc-bw",
    colorInterpolationFilters: "sRGB"
  }, /*#__PURE__*/React.createElement("feColorMatrix", {
    type: "saturate",
    values: "0"
  }), /*#__PURE__*/React.createElement("feComponentTransfer", null, /*#__PURE__*/React.createElement("feFuncR", {
    type: "linear",
    slope: "1.06",
    intercept: "-0.03"
  }), /*#__PURE__*/React.createElement("feFuncG", {
    type: "linear",
    slope: "1.06",
    intercept: "-0.03"
  }), /*#__PURE__*/React.createElement("feFuncB", {
    type: "linear",
    slope: "1.06",
    intercept: "-0.03"
  })), /*#__PURE__*/React.createElement("feComponentTransfer", null, /*#__PURE__*/React.createElement("feFuncR", {
    type: "table",
    tableValues: "0.043 0.949"
  }), /*#__PURE__*/React.createElement("feFuncG", {
    type: "table",
    tableValues: "0.043 0.949"
  }), /*#__PURE__*/React.createElement("feFuncB", {
    type: "table",
    tableValues: "0.043 0.949"
  }))));
}
Object.assign(__ds_scope, { GradeDefs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/photo/GradeDefs.jsx", error: String((e && e.message) || e) }); }

// components/photo/GradedPhoto.jsx
try { (() => {
/**
 * Toute photo entrant dans une mise en page passe par ce composant.
 * Une image non étalonnée se repère au premier coup d'œil et casse le deck.
 */
function GradedPhoto({
  src,
  alt = "",
  mode = "color",
  scanlines = true,
  protect = "none",
  objectPosition = "center",
  style = {},
  children
}) {
  const protectGradient = protect === "bottom" ? "var(--protect-bottom)" : protect === "left" ? "var(--protect-left)" : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--nfc-graphite)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GradeDefs, null), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition,
      filter: mode === "bw" ? "url(#nfc-bw)" : "url(#nfc-grade)"
    }
  }), scanlines && mode === "color" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scanlines)"
    }
  }), protectGradient && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: protectGradient
    }
  }), children);
}
Object.assign(__ds_scope, { GradedPhoto });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/photo/GradedPhoto.jsx", error: String((e && e.message) || e) }); }

// components/photo/VideoBackdrop.jsx
try { (() => {
/**
 * Boucle vidéo de fond. Même étalonnage que la photo, muette, sans coupe.
 * Le dégradé de protection est latéral par défaut : le mouvement reste
 * visible à droite du texte.
 */
function VideoBackdrop({
  src,
  poster,
  protect = "left",
  scanlines = true,
  style = {},
  children
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    v.play().catch(() => {});
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--nfc-graphite)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.GradeDefs, null), /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: src,
    poster: poster,
    autoPlay: true,
    playsInline: true,
    muted: true,
    loop: true,
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "url(#nfc-grade)"
    }
  }), scanlines && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scanlines)"
    }
  }), protect !== "none" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: protect === "bottom" ? "var(--protect-bottom)" : "var(--protect-left)"
    }
  }), children);
}
Object.assign(__ds_scope, { VideoBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/photo/VideoBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/type/DisplayTitle.jsx
try { (() => {
const LEADING = {
  tight: "var(--leading-display-tight)",
  normal: "var(--leading-display)",
  loose: "var(--leading-display-loose)"
};

/**
 * Titre Anton. Capitales imposées, jamais en dessous de 40 px.
 * `glitch` ajoute la frange magenta / jade : un artefact, pas un accent —
 * il ne compte pas dans les 5 % de surface d'accent autorisés.
 */
function DisplayTitle({
  children,
  size = "var(--type-page-title)",
  leading = "normal",
  color = "var(--text-primary)",
  glitch = false,
  as = "h2",
  style = {}
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: size,
      lineHeight: LEADING[leading] || LEADING.normal,
      letterSpacing: "var(--tracking-display)",
      textTransform: "uppercase",
      color,
      textShadow: glitch ? "var(--glitch-shadow)" : "none",
      textWrap: "pretty",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { DisplayTitle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/DisplayTitle.jsx", error: String((e && e.message) || e) }); }

// components/type/Lead.jsx
try { (() => {
/**
 * Chapô Space Grotesk Light. Une phrase, deux au maximum, sous le titre.
 * `size="body"` passe en Regular 21 px pour le corps de texte des pages denses.
 */
function Lead({
  children,
  size = "lead",
  color = "var(--text-primary)",
  measure = true,
  style = {}
}) {
  const isBody = size === "body";
  return /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: isBody ? "var(--weight-regular)" : "var(--weight-light)",
      fontSize: isBody ? "var(--type-body)" : "var(--type-lead)",
      lineHeight: isBody ? "var(--leading-body)" : "var(--leading-lead)",
      color,
      maxWidth: measure ? "var(--measure-body)" : "none",
      textWrap: "pretty",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Lead });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/Lead.jsx", error: String((e && e.message) || e) }); }

// components/type/MonoLabel.jsx
try { (() => {
/**
 * Label Space Mono : dates, prix, numéros de page, sur-titres.
 * Toujours en capitales. Plus le corps est petit, plus l'interlettrage est ouvert.
 * Jamais pour une phrase entière.
 */
function MonoLabel({
  children,
  size = "var(--type-label)",
  tracking = "var(--tracking-mono)",
  color = "var(--text-secondary)",
  as = "span",
  style = {}
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: size,
      letterSpacing: tracking,
      textTransform: "uppercase",
      color,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { MonoLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/MonoLabel.jsx", error: String((e && e.message) || e) }); }

// components/type/QuoteBlock.jsx
try { (() => {
/**
 * Citation. Space Grotesk Light, jamais Anton — une citation est une voix,
 * pas un titre. Le filet remplace le guillemet ouvrant décoratif.
 */
function QuoteBlock({
  children,
  attribution,
  accent = "var(--accent-urgent)",
  color = "var(--text-on-dense)",
  size = "var(--type-quote)",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "40px",
      alignItems: "stretch",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "var(--rule-quote)",
      background: accent,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-light)",
      fontSize: size,
      lineHeight: 1.22,
      color,
      textWrap: "pretty"
    }
  }, children), attribution && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "32px",
      fontFamily: "var(--font-mono)",
      fontSize: "20px",
      letterSpacing: "var(--tracking-mono)",
      textTransform: "uppercase",
      color: "var(--text-on-dense-secondary)"
    }
  }, attribution)));
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/type/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

__ds_ns.PriceRow = __ds_scope.PriceRow;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.DRAGONS = __ds_scope.DRAGONS;

__ds_ns.DragonFrame = __ds_scope.DragonFrame;

__ds_ns.AccentBand = __ds_scope.AccentBand;

__ds_ns.GhostNumber = __ds_scope.GhostNumber;

__ds_ns.SlideFrame = __ds_scope.SlideFrame;

__ds_ns.GradeDefs = __ds_scope.GradeDefs;

__ds_ns.GradedPhoto = __ds_scope.GradedPhoto;

__ds_ns.VideoBackdrop = __ds_scope.VideoBackdrop;

__ds_ns.DisplayTitle = __ds_scope.DisplayTitle;

__ds_ns.Lead = __ds_scope.Lead;

__ds_ns.MonoLabel = __ds_scope.MonoLabel;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

})();
