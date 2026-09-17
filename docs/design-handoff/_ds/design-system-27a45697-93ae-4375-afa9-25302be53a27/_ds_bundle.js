/* @ds-bundle: {"format":4,"namespace":"DesignSystem_27a456","components":[{"name":"FaqItem","sourcePath":"components/content/FaqItem.jsx"},{"name":"PersonCard","sourcePath":"components/content/PersonCard.jsx"},{"name":"PriceCard","sourcePath":"components/content/PriceCard.jsx"},{"name":"Quote","sourcePath":"components/content/Quote.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"SectionLabel","sourcePath":"components/content/SectionLabel.jsx"},{"name":"StatBlock","sourcePath":"components/content/StatBlock.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"StripeRule","sourcePath":"components/core/StripeRule.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"}],"sourceHashes":{"components/content/FaqItem.jsx":"682543a0b559","components/content/PersonCard.jsx":"fe396fd1e9c0","components/content/PriceCard.jsx":"19a5e3bf8169","components/content/Quote.jsx":"3233818480ef","components/content/SectionHeading.jsx":"92b79d34bc9e","components/content/SectionLabel.jsx":"7688568f8aa3","components/content/StatBlock.jsx":"c66941101c42","components/core/Button.jsx":"993674c2eeef","components/core/Card.jsx":"794bf2ae85f5","components/core/Logo.jsx":"9a948531818c","components/core/StripeRule.jsx":"8b94ecefe535","components/core/Tag.jsx":"4436aef1709d","components/forms/Checkbox.jsx":"b90211295129","components/forms/Input.jsx":"df5fc7f1d915","components/forms/Select.jsx":"7dbb74911fd8","components/forms/Textarea.jsx":"4229c3ef4a11","components/navigation/SiteFooter.jsx":"5cdde8bf65d0","components/navigation/SiteHeader.jsx":"e2b93bc45761","ui_kits/website/Booking.jsx":"062702d6c4f0","ui_kits/website/Home.jsx":"f2f7a40fafd9","ui_kits/website/Prices.jsx":"bb07b745d376"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_27a456 = window.DesignSystem_27a456 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FaqItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FaqItem({
  question,
  answer,
  defaultOpen = false,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderTop: "1px solid var(--line-hairline)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(o => !o),
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      background: "transparent",
      border: 0,
      cursor: "pointer",
      padding: "var(--space-5) 0",
      textAlign: "left",
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--h4)",
      letterSpacing: "var(--ls-heading)",
      color: open ? "var(--text-accent)" : "var(--text-strong)",
      transition: "var(--transition-ui)"
    }
  }, question, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "14px",
      height: "14px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "6px",
      left: 0,
      width: "14px",
      height: "2px",
      background: "currentColor"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "6px",
      left: 0,
      width: "14px",
      height: "2px",
      background: "currentColor",
      transform: open ? "rotate(0deg)" : "rotate(90deg)",
      transition: "transform var(--dur-2) var(--ease-out)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden",
      maxHeight: open ? "400px" : "0",
      opacity: open ? 1 : 0,
      transition: "max-height var(--dur-3) var(--ease-out),opacity var(--dur-2) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingBottom: "var(--space-6)",
      maxWidth: "var(--measure)",
      color: "var(--text-body)"
    }
  }, answer)));
}
Object.assign(__ds_scope, { FaqItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FaqItem.jsx", error: String((e && e.message) || e) }); }

// components/content/PersonCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PersonCard({
  name,
  role,
  photo,
  bio,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4/5",
      background: "var(--surface-sunken)",
      overflow: "hidden",
      borderRadius: "var(--radius-2)"
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "grayscale(1) contrast(1.05)",
      transform: h ? "scale(1.03)" : "none",
      transition: "transform var(--dur-4) var(--ease-out)"
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: "var(--h4)",
      letterSpacing: "var(--ls-heading)",
      color: "var(--text-strong)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, role)), bio ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--body-sm)",
      color: "var(--text-body)",
      margin: 0,
      maxWidth: "34ch"
    }
  }, bio) : null);
}
Object.assign(__ds_scope, { PersonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PersonCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Quote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Quote({
  children,
  author,
  meta,
  tone = "ink",
  style,
  ...rest
}) {
  const onInk = tone === "onInk";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "var(--h3)",
      lineHeight: 1.25,
      letterSpacing: "-0.015em",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      borderLeft: "var(--border-heavy) solid var(--line-accent)",
      paddingLeft: "var(--space-5)"
    }
  }, children), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
      paddingLeft: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)"
    }
  }, author), meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono)",
      letterSpacing: "var(--ls-mono)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, meta) : null));
}
Object.assign(__ds_scope, { Quote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Quote.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  size = "display-3",
  tone = "ink",
  align = "left",
  lead,
  children,
  style,
  ...rest
}) {
  const fs = {
    "display-1": "var(--display-1)",
    "display-2": "var(--display-2)",
    "display-3": "var(--display-3)",
    "h2": "var(--h2)"
  }[size];
  const color = tone === "onInk" ? "var(--text-on-ink)" : tone === "accent" ? "var(--text-accent)" : "var(--text-strong)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-display)",
      fontSize: fs,
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color,
      margin: 0
    }
  }, children), lead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-lg)",
      lineHeight: "var(--lh-body)",
      color: tone === "onInk" ? "var(--text-on-ink-muted)" : "var(--text-body)",
      maxWidth: "var(--measure-tight)",
      margin: 0
    }
  }, lead) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionLabel({
  index,
  tone = "ink",
  children,
  style,
  ...rest
}) {
  const color = tone === "onInk" ? "var(--text-on-ink-muted)" : tone === "accent" ? "var(--text-accent)" : "var(--text-muted)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), index ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--text-accent)"
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color
    }
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/content/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatBlock({
  value,
  label,
  note,
  tone = "ink",
  style,
  ...rest
}) {
  const onInk = tone === "onInk";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--display-3)",
      lineHeight: .95,
      letterSpacing: "var(--ls-display)",
      color: tone === "accent" ? "var(--text-accent)" : onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label), note ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-faint)"
    }
  }, note) : null);
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: "var(--font-text)",
  fontWeight: 600,
  letterSpacing: ".02em",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "var(--space-3)",
  border: "var(--border-strong) solid transparent",
  cursor: "pointer",
  textDecoration: "none",
  transition: "var(--transition-ui),var(--transition-move)",
  whiteSpace: "nowrap"
};
const sizes = {
  sm: {
    fontSize: "var(--body-sm)",
    padding: "8px 16px"
  },
  md: {
    fontSize: "var(--body)",
    padding: "13px 24px"
  },
  lg: {
    fontSize: "var(--body-lg)",
    padding: "17px 34px"
  }
};
function Button({
  variant = "primary",
  size = "md",
  shape = "square",
  full = false,
  disabled = false,
  as = "button",
  href,
  children,
  onClick,
  style,
  ...rest
}) {
  const v = {
    primary: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      borderColor: "var(--surface-accent)"
    },
    ink: {
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      borderColor: "var(--surface-ink)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "var(--line-ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-strong)",
      borderColor: "transparent",
      padding: sizes[size].padding.replace(/\d+px (\d+)px/, (m, a) => "0 0")
    },
    onInk: {
      background: "var(--cream-100)",
      color: "var(--ink-900)",
      borderColor: "var(--cream-100)"
    }
  }[variant] || {};
  const hover = {
    primary: {
      background: "var(--state-hover-accent)",
      borderColor: "var(--state-hover-accent)"
    },
    ink: {
      background: "var(--state-hover-ink)",
      borderColor: "var(--state-hover-ink)"
    },
    outline: {
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      borderColor: "var(--surface-ink)"
    },
    ghost: {
      color: "var(--text-accent)"
    },
    onInk: {
      background: "var(--sand-300)",
      borderColor: "var(--sand-300)"
    }
  }[variant] || {};
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      ...base,
      ...sizes[size],
      ...v,
      ...(h && !disabled ? hover : null),
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-1)",
      width: full ? "100%" : undefined,
      transform: p && !disabled ? "translateY(1px)" : "none",
      opacity: disabled ? .4 : 1,
      pointerEvents: disabled ? "none" : undefined,
      borderBottomColor: variant === "ghost" ? h ? "var(--line-accent)" : "var(--line-strong)" : undefined,
      borderBottomWidth: variant === "ghost" ? "var(--border-strong)" : undefined,
      paddingBottom: variant === "ghost" ? "4px" : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  tone = "paper",
  interactive = false,
  padding = "lg",
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const tones = {
    paper: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--line-hairline)"
    },
    sunken: {
      background: "var(--surface-sunken)",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    ink: {
      background: "var(--surface-card-ink)",
      color: "var(--text-on-ink)",
      border: "1px solid var(--line-on-ink)"
    },
    accent: {
      background: "var(--surface-accent)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--surface-accent)"
    },
    outline: {
      background: "transparent",
      color: "var(--text-body)",
      border: "var(--border-strong) solid var(--line-ink)"
    }
  }[tone];
  const pads = {
    none: "0",
    sm: "var(--space-4)",
    md: "var(--space-5)",
    lg: "var(--space-6)",
    xl: "var(--space-7)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      borderRadius: "var(--radius-2)",
      padding: pads[padding],
      transition: "var(--transition-ui),var(--transition-move)",
      ...tones,
      borderColor: interactive && h ? "var(--line-accent)" : tones.border.split(" ").slice(2).join(" "),
      transform: interactive && h ? "translateY(-2px)" : "none",
      boxShadow: interactive && h ? "var(--shadow-2)" : "var(--shadow-none)",
      cursor: interactive ? "pointer" : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Logo({
  tone = "ink",
  size = "md",
  tagline = true,
  markSrc,
  style,
  ...rest
}) {
  const color = tone === "ink" ? "var(--ink-900)" : tone === "accent" ? "var(--red-500)" : "var(--cream-100)";
  const sizes = {
    sm: {
      name: "15px",
      tag: "8px",
      mark: 28
    },
    md: {
      name: "20px",
      tag: "9.5px",
      mark: 38
    },
    lg: {
      name: "30px",
      tag: "12px",
      mark: 56
    }
  }[size];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), markSrc ? /*#__PURE__*/React.createElement("img", {
    src: markSrc,
    alt: "\u0420\u0438\u0442\u043C\u043E\u043B\u043E\u0433\u0438\u044F",
    style: {
      width: sizes.mark,
      height: sizes.mark,
      objectFit: "contain"
    }
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "3px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 900,
      fontSize: sizes.name,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color,
      lineHeight: 1
    }
  }, "\u0420\u0438\u0442\u043C\u043E\u043B\u043E\u0433\u0438\u044F"), tagline ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontWeight: 600,
      fontSize: sizes.tag,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color,
      opacity: .62,
      lineHeight: 1
    }
  }, "\u0428\u043A\u043E\u043B\u0430 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u043E\u0432") : null));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/StripeRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StripeRule({
  orientation = "horizontal",
  tone = "accent",
  count = 16,
  length = "100%",
  thickness = 28,
  style,
  ...rest
}) {
  const color = tone === "accent" ? "var(--red-500)" : tone === "ink" ? "var(--ink-900)" : "var(--sand-300)";
  const horiz = orientation === "horizontal";
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      display: "flex",
      flexDirection: horiz ? "row" : "column",
      gap: "var(--space-1)",
      width: horiz ? length : thickness + "px",
      height: horiz ? thickness + "px" : length,
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: color,
      flex: "1 1 0",
      minWidth: horiz ? "3px" : undefined,
      minHeight: horiz ? undefined : "3px",
      opacity: 1 - i / count * 0.75
    }
  })));
}
Object.assign(__ds_scope, { StripeRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StripeRule.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  tone = "neutral",
  children,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      color: "var(--text-muted)",
      borderColor: "var(--line-strong)",
      background: "transparent"
    },
    accent: {
      color: "var(--text-on-accent)",
      borderColor: "var(--surface-accent)",
      background: "var(--surface-accent)"
    },
    soft: {
      color: "var(--red-700)",
      borderColor: "transparent",
      background: "var(--surface-accent-soft)"
    },
    ink: {
      color: "var(--text-on-ink)",
      borderColor: "var(--surface-ink)",
      background: "var(--surface-ink)"
    },
    onInk: {
      color: "var(--text-on-ink-muted)",
      borderColor: "var(--line-on-ink)",
      background: "transparent"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      padding: "5px 10px 4px",
      borderRadius: "var(--radius-pill)",
      border: "1px solid",
      ...tones,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/PriceCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function PriceCard({
  title,
  price,
  unit,
  note,
  features = [],
  featured = false,
  cta = "Записаться",
  onCta,
  style,
  ...rest
}) {
  const tone = featured ? "ink" : "paper";
  const onInk = featured;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, _extends({
    tone: tone,
    padding: "lg",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)"
    }
  }, title), featured ? /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "accent"
  }, "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u043E") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--h1)",
      letterSpacing: "var(--ls-display)",
      lineHeight: 1,
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, price), unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono)",
      letterSpacing: "var(--ls-mono)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, unit) : null), features.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      borderTop: "1px solid " + (onInk ? "var(--line-on-ink)" : "var(--line-hairline)"),
      paddingTop: "var(--space-5)"
    }
  }, features.map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono)"
    }
  }, String(i + 1).padStart(2, "0")), t))) : null, note ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-faint)",
      margin: 0
    }
  }, note) : null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: featured ? "onInk" : "outline",
    full: true,
    onClick: onCta,
    style: {
      marginTop: "auto"
    }
  }, cta));
}
Object.assign(__ds_scope, { PriceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PriceCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  checked,
  onChange,
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-3)",
      cursor: "pointer",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "0 0 auto",
      width: "18px",
      height: "18px",
      marginTop: "3px",
      borderRadius: "var(--radius-1)",
      border: "var(--border-strong) solid " + (checked ? "var(--surface-accent)" : onInk ? "var(--line-on-ink)" : "var(--line-strong)"),
      background: checked ? "var(--surface-accent)" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "var(--transition-ui)"
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: "8px",
      height: "8px",
      background: "var(--text-on-accent)"
    }
  }) : null), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: !!checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  tone = "paper",
  type = "text",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    style: {
      font: "inherit",
      fontSize: "var(--body)",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      background: "transparent",
      border: "0",
      borderBottom: "var(--border-strong) solid " + (error ? "var(--status-error)" : onInk ? "var(--line-on-ink)" : "var(--line-strong)"),
      padding: "10px 2px",
      borderRadius: "0",
      outlineOffset: "4px",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest)), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-sm)",
      color: "var(--status-error)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-faint)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  hint,
  options = [],
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      font: "inherit",
      fontSize: "var(--body)",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      background: "transparent",
      border: "0",
      borderBottom: "var(--border-strong) solid " + (onInk ? "var(--line-on-ink)" : "var(--line-strong)"),
      padding: "10px 2px",
      borderRadius: "0",
      appearance: "none",
      cursor: "pointer",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest), options.map(o => {
    const v = typeof o === "string" ? o : o.value,
      l = typeof o === "string" ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-faint)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  hint,
  rows = 4,
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      width: "100%"
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)"
    }
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: {
      font: "inherit",
      fontSize: "var(--body)",
      color: onInk ? "var(--text-on-ink)" : "var(--text-strong)",
      background: "transparent",
      border: "1px solid " + (onInk ? "var(--line-on-ink)" : "var(--line-strong)"),
      borderRadius: "var(--radius-2)",
      padding: "var(--space-3)",
      resize: "vertical",
      transition: "var(--transition-ui)",
      ...style
    }
  }, rest)), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-text)",
      fontSize: "var(--body-sm)",
      color: onInk ? "var(--text-on-ink-muted)" : "var(--text-faint)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteFooter({
  columns = [],
  contacts = [],
  note,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: "var(--surface-ink)",
      color: "var(--text-on-ink)",
      padding: "var(--space-9) var(--gutter) var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.4fr) repeat(auto-fit,minmax(140px,1fr))",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: "cream",
    size: "lg"
  }), /*#__PURE__*/React.createElement(__ds_scope.StripeRule, {
    tone: "accent",
    count: 14,
    thickness: 18,
    length: "180px"
  })), columns.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-on-ink-muted)",
      opacity: .7
    }
  }, c.title), c.links.map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontSize: "var(--body-sm)",
      color: "var(--text-on-ink)"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--label-sm)",
      fontWeight: "var(--weight-label)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--text-on-ink-muted)",
      opacity: .7
    }
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), contacts.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--text-on-ink)"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line-on-ink)",
      paddingTop: "var(--space-5)",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--mono)",
      letterSpacing: "var(--ls-mono)",
      color: "var(--text-on-ink-muted)"
    }
  }, note)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SiteHeader({
  items = [],
  active,
  onNavigate,
  markSrc,
  cta = "Бесплатный урок",
  onCta,
  tone = "paper",
  style,
  ...rest
}) {
  const onInk = tone === "ink";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      padding: "var(--space-5) var(--gutter)",
      borderBottom: "1px solid " + (onInk ? "var(--line-on-ink)" : "var(--line-hairline)"),
      background: onInk ? "var(--surface-ink)" : "var(--surface-page)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate && onNavigate(items[0] && items[0].id),
    style: {
      background: "none",
      border: 0,
      padding: 0,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    tone: onInk ? "cream" : "ink",
    size: "md",
    markSrc: markSrc
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNavigate && onNavigate(it.id),
      style: {
        background: "none",
        border: 0,
        padding: "4px 0",
        cursor: "pointer",
        fontFamily: "var(--font-text)",
        fontSize: "var(--label)",
        fontWeight: "var(--weight-label)",
        letterSpacing: "var(--ls-label)",
        textTransform: "uppercase",
        color: on ? "var(--text-accent)" : onInk ? "var(--text-on-ink-muted)" : "var(--text-muted)",
        borderBottom: "var(--border-strong) solid " + (on ? "var(--line-accent)" : "transparent"),
        transition: "var(--transition-ui)"
      }
    }, it.label);
  }), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: onInk ? "onInk" : "primary",
    size: "sm",
    onClick: onCta
  }, cta)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
const {
  Button,
  Card,
  Tag,
  Input,
  Select,
  Textarea,
  Checkbox,
  SectionLabel,
  SectionHeading,
  StripeRule
} = window.DesignSystem_27a456;
const {
  Wrap,
  Section
} = window;
const SLOTS = ["Пн 19:00", "Ср 18:00", "Ср 20:00", "Чт 19:00", "Сб 12:00", "Сб 14:00", "Вс 11:00", "Вс 13:00"];
function Booking() {
  const [slot, setSlot] = React.useState("Ср 20:00");
  const [ok, setOk] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "05"
  }, "\u0417\u0430\u043F\u0438\u0441\u044C"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display-2",
    lead: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0434\u043D\u044F \u0438 \u043D\u0430\u043F\u043E\u043C\u043D\u0438\u043C \u043F\u0435\u0440\u0435\u0434 \u0443\u0440\u043E\u043A\u043E\u043C."
  }, "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043F\u0435\u0440\u0432\u044B\u0439 \u0443\u0440\u043E\u043A"), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-studio.jpg",
    alt: "\u0421\u0442\u0443\u0434\u0438\u044F",
    style: {
      width: "100%",
      aspectRatio: "16/10",
      objectFit: "cover",
      borderRadius: "var(--radius-2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rt-mono",
    style: {
      color: "var(--text-muted)"
    }
  }, "8 (931) 00-77-390"), /*#__PURE__*/React.createElement("span", {
    className: "rt-mono",
    style: {
      color: "var(--text-muted)"
    }
  }, "@iveivs"))), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "xl",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(StripeRule, {
    count: 16,
    thickness: 20,
    length: "120px"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--h2)",
      margin: 0,
      textTransform: "uppercase",
      letterSpacing: "var(--ls-display)"
    }
  }, "\u0413\u043E\u0442\u043E\u0432\u043E"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u043B\u0438 \u0432\u0430\u0441 \u043D\u0430 ", /*#__PURE__*/React.createElement("b", null, slot), ". \u041D\u0430\u043F\u0438\u0448\u0435\u043C \u0432 \u043C\u0435\u0441\u0441\u0435\u043D\u0434\u0436\u0435\u0440, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rt-label",
    style: {
      color: "var(--text-muted)"
    }
  }, "\u0421\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-2)"
    }
  }, SLOTS.map(s => {
    const on = s === slot;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      onClick: () => setSlot(s),
      style: {
        padding: "10px 6px",
        cursor: "pointer",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
        letterSpacing: ".03em",
        background: on ? "var(--surface-ink)" : "transparent",
        color: on ? "var(--text-on-ink)" : "var(--text-body)",
        border: "1px solid " + (on ? "var(--surface-ink)" : "var(--line-hairline)"),
        borderRadius: "var(--radius-1)",
        transition: "var(--transition-ui)"
      }
    }, s);
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "\u0418\u043C\u044F",
    placeholder: "\u041A\u0430\u043A \u043A \u0432\u0430\u043C \u043E\u0431\u0440\u0430\u0449\u0430\u0442\u044C\u0441\u044F"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
    type: "tel",
    placeholder: "+7",
    hint: "\u041D\u0430\u043F\u0438\u0448\u0435\u043C \u0432 Telegram \u0438\u043B\u0438 WhatsApp"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "\u041E\u043F\u044B\u0442",
    options: ["Никогда не играл", "Играл немного", "Играю давно"]
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "\u0427\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0438\u0433\u0440\u0430\u0442\u044C",
    rows: 2,
    hint: "\u041D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\u0421\u043E\u0433\u043B\u0430\u0441\u0435\u043D \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445",
    checked: ok,
    onChange: e => setOk(e.target.checked)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    disabled: !ok,
    onClick: () => setSent(true)
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F"), /*#__PURE__*/React.createElement(Tag, {
    tone: "soft"
  }, "0 \u20BD / 60 \u043C\u0438\u043D\u0443\u0442"))))));
}
Object.assign(window, {
  Booking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  StripeRule,
  SectionLabel,
  SectionHeading,
  StatBlock,
  PersonCard,
  FaqItem,
  Quote
} = window.DesignSystem_27a456;
const Wrap = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    maxWidth: "var(--container)",
    margin: "0 auto",
    padding: "0 var(--gutter)",
    ...style
  }
}, children);
const Section = ({
  children,
  tone,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    padding: "var(--section-y) 0",
    background: tone === "ink" ? "var(--surface-ink)" : tone === "sunken" ? "var(--surface-sunken)" : "transparent",
    ...style
  }
}, children);
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.85fr)",
      gap: "var(--space-8)",
      alignItems: "end",
      paddingTop: "var(--space-9)",
      paddingBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(StripeRule, {
    count: 12,
    thickness: 16,
    length: "96px"
  }), /*#__PURE__*/React.createElement("span", {
    className: "rt-label",
    style: {
      color: "var(--text-muted)"
    }
  }, "\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433 \xB7 \u0448\u043A\u043E\u043B\u0430 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u043E\u0432")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--display-1)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      margin: 0
    }
  }, "\u0420\u0438\u0442\u043C", /*#__PURE__*/React.createElement("br", null), "\u0441\u0442\u0430\u0432\u0438\u0442\u0441\u044F", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "\u0441 \u043D\u0443\u043B\u044F")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--body-lg)",
      maxWidth: "42ch",
      margin: 0
    }
  }, "\u0423\u0447\u0438\u043C \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445 \u0438\u0433\u0440\u0430\u0442\u044C \u043D\u0430 \u0431\u0430\u0440\u0430\u0431\u0430\u043D\u0430\u0445 \u2014 \u0431\u0435\u0437 \u043D\u043E\u0442 \u043D\u0430\u0438\u0437\u0443\u0441\u0442\u044C, \u0431\u0435\u0437 \u0433\u0430\u043C\u043C \u0434\u043E \u043F\u043E\u0441\u0438\u043D\u0435\u043D\u0438\u044F. \u0421\u0442\u0430\u0432\u0438\u043C \u0440\u0443\u043A\u0438, \u0447\u0443\u0432\u0441\u0442\u0432\u043E \u0440\u0438\u0442\u043C\u0430 \u0438 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044E."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBook
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0443\u0440\u043E\u043A"), /*#__PURE__*/React.createElement("span", {
    className: "rt-mono",
    style: {
      color: "var(--text-muted)"
    }
  }, "60 \u043C\u0438\u043D\u0443\u0442 \xB7 \u0431\u0435\u0437 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 12% 18% auto",
      width: "210px",
      height: "210px",
      borderRadius: "999px",
      background: "var(--red-500)"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/poster-skills.jpg",
    alt: "",
    style: {
      position: "relative",
      width: "100%",
      aspectRatio: "3/4",
      objectFit: "cover",
      objectPosition: "center 22%",
      borderRadius: "var(--radius-2)"
    }
  }))));
}
const SKILLS = [["Постановка", "Руки, посадка, звук — то, что потом не придётся переучивать."], ["Чувство ритма", "Работаем с метрономом и грувом, а не с абстрактной теорией."], ["Координация", "Четыре конечности начинают слушаться по отдельности и вместе."], ["Мышление", "Разбираем, как устроена музыка, чтобы играть своё, а не только чужое."]];
function Skills() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1.2fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01"
  }, "\u0427\u0435\u043C\u0443 \u0443\u0447\u0438\u043C"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display-3"
  }, "\u0427\u0435\u0442\u044B\u0440\u0435 \u0432\u0435\u0449\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432\u043C\u0435\u0441\u0442\u0435")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-6)"
    }
  }, SKILLS.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      borderTop: "var(--border-heavy) solid var(--line-ink)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rt-mono",
    style: {
      color: "var(--text-accent)"
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: "var(--h4)",
      margin: 0
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--body-sm)",
      margin: 0,
      color: "var(--text-body)"
    }
  }, d)))))));
}
function HowItGoes() {
  const steps = [["Знакомство", "Слушаем, что вы хотите играть, и пробуем сесть за инструмент."], ["Первая партия", "К концу урока вы играете простой бит целиком."], ["План", "Договариваемся о расписании и программе — или расходимся без обид."]];
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photo-studio.jpg",
    alt: "\u0421\u0442\u0443\u0434\u0438\u044F",
    style: {
      width: "100%",
      aspectRatio: "4/3",
      objectFit: "cover",
      borderRadius: "var(--radius-2)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "02"
  }, "\u041A\u0430\u043A \u043F\u0440\u043E\u0445\u043E\u0434\u0438\u0442 \u043F\u0435\u0440\u0432\u044B\u0439 \u0443\u0440\u043E\u043A"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display-3",
    lead: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u2014 \u044D\u0442\u043E \u043D\u0435 \u0434\u0435\u043C\u043E-\u0432\u0435\u0440\u0441\u0438\u044F, \u0430 \u043E\u0431\u044B\u0447\u043D\u044B\u0439 \u043F\u043E\u043B\u043D\u044B\u0439 \u0443\u0440\u043E\u043A."
  }, "60 \u043C\u0438\u043D\u0443\u0442, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u043F\u0440\u043E\u0431\u043E\u0432\u0430\u0442\u044C"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "48px 1fr",
      gap: "var(--space-4)",
      padding: "var(--space-5) 0",
      borderTop: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rt-mono",
    style: {
      color: "var(--text-accent)"
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--h4)",
      margin: "0 0 4px"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--body-sm)"
    }
  }, d))))))));
}
function Facts() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "ink",
    style: {
      padding: "var(--space-9) 0"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    tone: "onInk",
    value: "60",
    label: "\u043C\u0438\u043D\u0443\u0442 \u0437\u0430\u043D\u044F\u0442\u0438\u0435"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "onInk",
    value: "1500 \u20BD",
    label: "\u0440\u0430\u0437\u043E\u0432\u044B\u0439 \u0443\u0440\u043E\u043A",
    note: "\u041F\u0435\u0440\u0432\u044B\u0439 \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "onInk",
    value: "1:1",
    label: "\u0438\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u043E"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    tone: "onInk",
    value: "\u0421\u041F\u0431",
    label: "\u0441\u0432\u043E\u044F \u0441\u0442\u0443\u0434\u0438\u044F",
    note: "\u041E\u0431\u043E\u0440\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0435 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435"
  })));
}
function People() {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "03"
  }, "\u041A\u0442\u043E \u0443\u0447\u0438\u0442"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(PersonCard, {
    name: "\u0418\u0432\u0430\u043D",
    role: "\u041E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C \xB7 \u043F\u0435\u0434\u0430\u0433\u043E\u0433",
    photo: "../../assets/photo-free-lesson.jpg",
    bio: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0441\u043E \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u043C\u0438 \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u043C\u0438. \u0421\u0442\u0430\u0432\u0438\u0442 \u0440\u0443\u043A\u0438 \u0438 \u0433\u0440\u0443\u0432 \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0437\u0430\u043D\u044F\u0442\u0438\u044F."
  }), /*#__PURE__*/React.createElement(PersonCard, {
    name: "\u041F\u0435\u0434\u0430\u0433\u043E\u0433",
    role: "\u0420\u0438\u0442\u043C \xB7 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0446\u0438\u044F",
    bio: "\u0424\u043E\u0442\u043E \u0438 \u0431\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u2014 \u043E\u0442 \u0448\u043A\u043E\u043B\u044B."
  }), /*#__PURE__*/React.createElement(PersonCard, {
    name: "\u041F\u0435\u0434\u0430\u0433\u043E\u0433",
    role: "\u0414\u0435\u0442\u0438 \u0438 \u043F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u0438",
    bio: "\u0424\u043E\u0442\u043E \u0438 \u0431\u0438\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u2014 \u043E\u0442 \u0448\u043A\u043E\u043B\u044B."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-7)",
      borderTop: "1px solid var(--line-hairline)",
      paddingTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Quote, {
    author: "\u0410\u043D\u043D\u0430",
    meta: "\u0443\u0447\u0438\u0442\u0441\u044F 4 \u043C\u0435\u0441\u044F\u0446\u0430"
  }, "\u041F\u0440\u0438\u0448\u043B\u0430 \u0431\u0435\u0437 \u043E\u043F\u044B\u0442\u0430, \u0447\u0435\u0440\u0435\u0437 \u043C\u0435\u0441\u044F\u0446 \u0441\u044B\u0433\u0440\u0430\u043B\u0430 \u043F\u0435\u0440\u0432\u0443\u044E \u043F\u0435\u0441\u043D\u044E \u0446\u0435\u043B\u0438\u043A\u043E\u043C."), /*#__PURE__*/React.createElement(Quote, {
    author: "\u0421\u0435\u0440\u0433\u0435\u0439",
    meta: "\u0443\u0447\u0438\u0442\u0441\u044F \u0433\u043E\u0434"
  }, "\u0414\u0443\u043C\u0430\u043B, \u0432 38 \u0443\u0436\u0435 \u043F\u043E\u0437\u0434\u043D\u043E. \u041E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0434\u0435\u043B\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E\u0441\u0442\u0438."))));
}
function Faq() {
  const qs = [["Нужны свои барабаны?", "Нет. В студии есть акустическая установка и всё необходимое. Дома для занятий достаточно тренировочного пэда."], ["Я взрослый и никогда не играл. Не поздно?", "Нет. Большинство наших учеников начали после 25 — программа для начинающих построена именно под это."], ["Сколько нужно заниматься?", "Один урок в неделю плюс 15–20 минут самостоятельно. Этого хватает, чтобы слышать прогресс каждый месяц."], ["Можно прийти с ребёнком?", "Да, занимаемся с подростками и детьми. Формат подбираем на первом уроке."]];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,.7fr) minmax(0,1.3fr)",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "04"
  }, "\u0412\u043E\u043F\u0440\u043E\u0441\u044B"), /*#__PURE__*/React.createElement("div", null, qs.map(([q, a], i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: q,
    question: q,
    answer: a,
    defaultOpen: i === 0
  })))));
}
function FinalCta({
  onBook
}) {
  return /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, null, /*#__PURE__*/React.createElement(Card, {
    tone: "accent",
    padding: "xl",
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rt-label",
    style: {
      color: "var(--text-on-accent)",
      opacity: .8
    }
  }, "\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0443\u0440\u043E\u043A \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: "var(--display-3)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--text-on-accent)",
      margin: 0
    }
  }, "\u041F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u0438 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-on-accent)",
      opacity: .85,
      margin: 0,
      maxWidth: "46ch"
    }
  }, "\u0417\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0447\u0430\u0441, \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u043F\u0440\u0438\u043D\u043E\u0441\u0438\u0442\u044C \u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0443\u0436\u043D\u043E \u0440\u0435\u0448\u0430\u0442\u044C \u0441\u0440\u0430\u0437\u0443.")), /*#__PURE__*/React.createElement(Button, {
    variant: "onInk",
    size: "lg",
    onClick: onBook
  }, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0432\u0440\u0435\u043C\u044F"))));
}
function Home({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
    onBook: onBook
  }), /*#__PURE__*/React.createElement(Skills, null), /*#__PURE__*/React.createElement(HowItGoes, null), /*#__PURE__*/React.createElement(Facts, null), /*#__PURE__*/React.createElement(People, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(FinalCta, {
    onBook: onBook
  }));
}
Object.assign(window, {
  Home,
  Wrap,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Prices.jsx
try { (() => {
const {
  Button,
  Tag,
  Card,
  PriceCard,
  SectionLabel,
  SectionHeading,
  StripeRule
} = window.DesignSystem_27a456;
const {
  Wrap,
  Section
} = window;
function Prices({
  onBook
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    index: "01"
  }, "\u0426\u0435\u043D\u044B"), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display-2",
    lead: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u044F \u043F\u043E 60 \u043C\u0438\u043D\u0443\u0442. \u041F\u0435\u0440\u0432\u044B\u0439 \u0443\u0440\u043E\u043A \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439, \u0434\u0430\u043B\u044C\u0448\u0435 \u2014 \u043A\u0430\u043A \u0443\u0434\u043E\u0431\u043D\u043E."
  }, "\u041F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u044B \u0438 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C"))), /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
      gap: "var(--space-5)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(PriceCard, {
    title: "\u041F\u0440\u043E\u0431\u043D\u044B\u0439 \u0443\u0440\u043E\u043A",
    price: "0 \u20BD",
    unit: "/ 60 \u043C\u0438\u043D\u0443\u0442",
    features: ["Знакомство с инструментом", "Первый бит целиком", "Без обязательств"],
    cta: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    onCta: onBook
  }), /*#__PURE__*/React.createElement(PriceCard, {
    title: "\u0420\u0430\u0437\u043E\u0432\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435",
    price: "1500 \u20BD",
    unit: "/ 60 \u043C\u0438\u043D\u0443\u0442",
    features: ["Индивидуально", "Своя программа", "Оборудование студии"],
    cta: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    onCta: onBook
  }), /*#__PURE__*/React.createElement(PriceCard, {
    title: "4 \u0437\u0430\u043D\u044F\u0442\u0438\u044F",
    price: "5 600 \u20BD",
    unit: "/ \u043C\u0435\u0441\u044F\u0446",
    featured: true,
    features: ["Раз в неделю", "План на месяц", "Домашние задания"],
    cta: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    onCta: onBook
  }), /*#__PURE__*/React.createElement(PriceCard, {
    title: "8 \u0437\u0430\u043D\u044F\u0442\u0438\u0439",
    price: "10 400 \u20BD",
    unit: "/ \u043C\u0435\u0441\u044F\u0446",
    features: ["Два раза в неделю", "Быстрый прогресс", "Разбор своих треков"],
    cta: "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F",
    onCta: onBook
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Wrap, {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(StripeRule, {
    count: 16,
    thickness: 20,
    length: "140px"
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    size: "display-3"
  }, "\u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u0437\u0430\u043D\u044F\u0442\u0438\u0435"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, ["Разминка и постановка рук", "Работа с метрономом", "Разбор ритмического рисунка", "Игра под музыку", "Задание на неделю"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "36px 1fr",
      gap: "var(--space-3)",
      borderTop: "1px solid var(--line-hairline)",
      paddingTop: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "rt-mono",
    style: {
      color: "var(--text-accent)"
    }
  }, "0" + (i + 1)), /*#__PURE__*/React.createElement("span", null, t))))), /*#__PURE__*/React.createElement(Card, {
    tone: "paper",
    padding: "xl",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "soft"
  }, "\u0412\u0437\u0440\u043E\u0441\u043B\u044B\u043C \u0441 \u043D\u0443\u043B\u044F"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "\u041F\u043E\u0434\u0440\u043E\u0441\u0442\u043A\u0430\u043C"), /*#__PURE__*/React.createElement(Tag, {
    tone: "neutral"
  }, "\u0414\u0435\u0442\u044F\u043C")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, "\u0410\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442 \u043D\u0435 \u0441\u0433\u043E\u0440\u0430\u0435\u0442: \u043F\u0440\u043E\u043F\u0443\u0449\u0435\u043D\u043D\u043E\u0435 \u0437\u0430\u043D\u044F\u0442\u0438\u0435 \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u0442\u0441\u044F, \u0435\u0441\u043B\u0438 \u043F\u0440\u0435\u0434\u0443\u043F\u0440\u0435\u0434\u0438\u0442\u044C \u0437\u0430 \u0441\u0443\u0442\u043A\u0438."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--body-sm)",
      color: "var(--text-muted)"
    }
  }, "\u041E\u043F\u043B\u0430\u0442\u0430 \u2014 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u043E\u043C \u0438\u043B\u0438 \u043D\u0430 \u043C\u0435\u0441\u0442\u0435. \u0422\u043E\u0447\u043D\u044B\u0435 \u0443\u0441\u043B\u043E\u0432\u0438\u044F \u0443\u0442\u043E\u0447\u043D\u044F\u0439\u0442\u0435 \u0443 \u0448\u043A\u043E\u043B\u044B."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    full: true,
    onClick: onBook
  }, "\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F \u043D\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0443\u0440\u043E\u043A")))));
}
Object.assign(window, {
  Prices
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Prices.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FaqItem = __ds_scope.FaqItem;

__ds_ns.PersonCard = __ds_scope.PersonCard;

__ds_ns.PriceCard = __ds_scope.PriceCard;

__ds_ns.Quote = __ds_scope.Quote;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.StripeRule = __ds_scope.StripeRule;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

})();
