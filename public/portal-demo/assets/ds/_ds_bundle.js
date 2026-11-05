/* @ds-bundle: {"format":4,"namespace":"AarnikshaDesignSystem_f93754","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Pill","sourcePath":"components/brand/Pill.jsx"},{"name":"StatusPill","sourcePath":"components/brand/StatusPill.jsx"},{"name":"FeaturePanel","sourcePath":"components/cards/FeaturePanel.jsx"},{"name":"IndustryCard","sourcePath":"components/cards/IndustryCard.jsx"},{"name":"LeaderCard","sourcePath":"components/cards/LeaderCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"ValueCard","sourcePath":"components/cards/ValueCard.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"ServiceIcon","sourcePath":"components/icons/ServiceIcon.jsx"},{"name":"SERVICE_ICON_NAMES","sourcePath":"components/icons/ServiceIcon.jsx"},{"name":"Divider","sourcePath":"components/layout/Divider.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"},{"name":"AccordionItem","sourcePath":"components/patterns/AccordionItem.jsx"},{"name":"CarouselDots","sourcePath":"components/patterns/CarouselDots.jsx"},{"name":"ContactRow","sourcePath":"components/patterns/ContactRow.jsx"},{"name":"FilterChip","sourcePath":"components/patterns/FilterChip.jsx"},{"name":"IconRow","sourcePath":"components/patterns/IconRow.jsx"},{"name":"ProcessStep","sourcePath":"components/patterns/ProcessStep.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"a38cfb8cd755","components/actions/IconButton.jsx":"b92fd677b2f9","components/brand/Eyebrow.jsx":"a55416fc1cfc","components/brand/Logo.jsx":"d5ae2814e68a","components/brand/Pill.jsx":"03d57543c852","components/brand/StatusPill.jsx":"1993d7e0d270","components/cards/FeaturePanel.jsx":"e171eb75a469","components/cards/IndustryCard.jsx":"5c344653ced4","components/cards/LeaderCard.jsx":"83796eb45d6c","components/cards/ServiceCard.jsx":"d3553244b6f9","components/cards/ValueCard.jsx":"de2d21698216","components/forms/Field.jsx":"058260f71ac4","components/icons/Icon.jsx":"b5ce63951ecf","components/icons/ServiceIcon.jsx":"e539be7f059c","components/layout/Divider.jsx":"24fa838cb5ab","components/layout/Section.jsx":"857aa759f6af","components/layout/SectionHeading.jsx":"0f2dd119ea49","components/overlay/Dialog.jsx":"176baa4120bb","components/patterns/AccordionItem.jsx":"586fb63debc4","components/patterns/CarouselDots.jsx":"053e420677de","components/patterns/ContactRow.jsx":"06bd33089022","components/patterns/FilterChip.jsx":"75e356503085","components/patterns/IconRow.jsx":"6c754ed5ccfa","components/patterns/ProcessStep.jsx":"694e74ba0859","prototypes/employee-portal/portal/admin.jsx":"a80c63e523bf","prototypes/employee-portal/portal/auth.jsx":"fe8d67267742","prototypes/employee-portal/portal/email-templates.js":"e9bc412863d3","prototypes/employee-portal/portal/employee.jsx":"2efcf7a88743","prototypes/employee-portal/portal/shell.jsx":"164a70d6aa00","prototypes/employee-portal/portal/store.js":"e9bc31daad61","prototypes/employee-portal/portal/ui.jsx":"d900e4ace548","prototypes/employee-portal/portal/work.jsx":"f916766627a4","ui_kits/website/Chrome.jsx":"00df88240676","ui_kits/website/Heroes.jsx":"685b9a15d418","ui_kits/website/Screens.jsx":"0f218276a6d1","ui_kits/website/SectionsA.jsx":"6ff1e817817b","ui_kits/website/SectionsB.jsx":"dd1194048772","ui_kits/website/data.js":"f9aaf6ef9e48"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AarnikshaDesignSystem_f93754 = window.AarnikshaDesignSystem_f93754 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  lg: '19px 34px',
  md: '17px 30px',
  sm: '13px 24px'
};
const SIZE = {
  lg: 'var(--text-button)',
  md: 'var(--text-button)',
  sm: 'var(--text-button-sm)'
};
function Button({
  variant = 'primary',
  size = 'md',
  arrow = false,
  href,
  onClick,
  disabled,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontSize: SIZE[size],
    fontWeight: 'var(--fw-bold)',
    borderRadius: 'var(--radius-pill)',
    padding: PAD[size],
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'var(--transition-button)',
    textDecoration: 'none',
    opacity: disabled ? 0.45 : 1
  };
  const skins = {
    primary: {
      background: hover && !disabled ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--action-on-color)',
      boxShadow: hover && !disabled ? 'var(--shadow-button-hover)' : 'var(--shadow-button)',
      transform: hover && !disabled ? 'var(--lift-button)' : 'none'
    },
    outline: {
      background: 'var(--surface-card)',
      color: hover ? 'var(--text-deep)' : 'var(--text-primary)',
      border: '1px solid ' + (hover ? 'var(--text-deep)' : 'var(--border-button)'),
      boxShadow: hover ? 'var(--shadow-outline-hover)' : 'none',
      transform: hover ? 'var(--lift-button)' : 'none'
    },
    onNavy: {
      background: hover ? 'var(--ak-white)' : 'transparent',
      color: hover ? 'var(--text-deep)' : 'var(--ak-white)',
      fontSize: 'var(--text-button-md)',
      border: '1px solid ' + (hover ? 'var(--ak-white)' : 'rgba(255,255,255,.38)'),
      padding: size === 'md' ? '13px 24px' : PAD[size],
      transform: hover ? 'var(--lift-button-sm)' : 'none'
    },
    white: {
      background: 'var(--ak-white)',
      color: 'var(--text-deep)',
      boxShadow: hover ? 'var(--shadow-button-on-navy-hover)' : 'var(--shadow-button-on-navy)',
      transform: hover ? 'var(--lift-button)' : 'none'
    },
    underline: {
      background: 'none',
      border: 'none',
      padding: '0 0 9px',
      borderRadius: 0,
      borderBottom: '1.5px solid ' + (hover ? 'var(--ak-white)' : 'rgba(255,255,255,.75)'),
      color: 'var(--ak-white)',
      fontSize: 'var(--text-button-md)',
      gap: hover ? '18px' : '10px',
      transition: 'gap var(--dur-base) ease, border-color var(--dur-base) ease'
    }
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    type: Tag === 'button' ? 'button' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...skins[variant],
      ...style
    }
  }, rest), children, arrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px'
    }
  }, "\u2197") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = 'outline',
  label,
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const sizes = {
    outline: 44,
    fab: 50,
    close: 38
  };
  const skins = {
    outline: {
      background: hover ? 'var(--text-deep)' : 'var(--surface-card)',
      color: hover ? 'var(--ak-white)' : 'var(--text-deep)',
      border: '1px solid var(--border-chip)',
      fontSize: '17px'
    },
    fab: {
      background: hover ? 'var(--action-primary)' : 'var(--surface-navy)',
      color: 'var(--ak-white)',
      border: 'none',
      fontSize: '17px',
      boxShadow: 'var(--shadow-fab)'
    },
    close: {
      background: hover ? 'var(--surface-band)' : 'var(--surface-tint)',
      color: hover ? 'var(--text-deep)' : 'var(--text-link)',
      border: '1px solid var(--border-card)',
      fontSize: '17px'
    }
  };
  const d = sizes[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d + 'px',
      height: d + 'px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      fontWeight: 'var(--fw-bold)',
      cursor: 'pointer',
      padding: 0,
      transition: 'background var(--dur-base) ease, color var(--dur-base) ease',
      ...skins[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  blue: 'var(--text-accent)',
  onNavy: 'var(--text-eyebrow-on-navy)',
  onNavyLight: 'var(--ak-blue-300)',
  onColor: 'rgba(255,255,255,.82)',
  muted: 'var(--text-caption)'
};
const SIZES = {
  md: 'var(--text-eyebrow)',
  sm: 'var(--text-eyebrow-sm)',
  xs: 'var(--text-eyebrow-xs)'
};
function Eyebrow({
  tone = 'blue',
  size = 'md',
  as: Tag = 'p',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      margin: 0,
      fontSize: SIZES[size],
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: TONES[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function Logo({
  src = 'assets/logo.png',
  size = 74,
  plate = true,
  radius = 'var(--radius-md)',
  href,
  style
}) {
  const inner = /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Aarniksha Solutions",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  });
  const box = {
    display: 'block',
    flex: '0 0 auto',
    width: size + 'px',
    height: size + 'px',
    background: plate ? 'var(--ak-white)' : 'transparent',
    borderRadius: plate ? radius : 0,
    padding: plate ? '6px' : 0,
    boxShadow: plate ? 'var(--shadow-logo)' : 'none',
    ...style
  };
  return href ? /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "Aarniksha Solutions home",
    style: box
  }, inner) : /*#__PURE__*/React.createElement("span", {
    style: box
  }, inner);
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/Pill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Pill({
  children,
  tone = 'outline',
  style,
  ...rest
}) {
  const skins = {
    outline: {
      border: '1px solid var(--border-pill)',
      color: 'var(--text-accent)',
      background: 'transparent'
    },
    solid: {
      border: '1px solid transparent',
      color: 'var(--ak-white)',
      background: 'var(--surface-navy)'
    },
    tint: {
      border: '1px solid var(--border-chip)',
      color: 'var(--text-link)',
      background: 'var(--surface-card)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-block',
      borderRadius: 'var(--radius-pill)',
      padding: '8px 18px',
      fontSize: 'var(--text-eyebrow-2xs)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-eyebrow-sm)',
      textTransform: 'uppercase',
      ...skins[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Pill.jsx", error: String((e && e.message) || e) }); }

// components/brand/StatusPill.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function StatusPill({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      background: 'var(--surface-card)',
      border: '1px solid #E3E9F3',
      borderRadius: 'var(--radius-pill)',
      padding: '11px 22px',
      boxShadow: 'var(--shadow-badge)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '7px',
      height: '7px',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--action-primary)',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'clamp(10px, .78vw, 12.5px)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-eyebrow-xs)',
      textTransform: 'uppercase',
      color: '#17325F'
    }
  }, children));
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeaturePanel.jsx
try { (() => {
function FeaturePanel({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-tint)',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--card-pad)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-34%',
      right: '-18%',
      width: '58%',
      height: '90%',
      borderRadius: 'var(--radius-circle)',
      border: '1px solid var(--ak-line-350)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, children));
}
Object.assign(__ds_scope, { FeaturePanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeaturePanel.jsx", error: String((e && e.message) || e) }); }

// components/cards/IndustryCard.jsx
try { (() => {
function IndustryCard({
  title,
  items = [],
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-tint)',
      border: '1px solid ' + (hover ? 'var(--action-primary)' : 'var(--border-chip)'),
      borderRadius: 'var(--radius-md)',
      padding: '26px 22px 28px',
      transition: 'var(--transition-card)',
      transform: hover ? 'var(--lift-card-sm)' : 'none',
      boxShadow: hover ? 'var(--shadow-lift)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 16px',
      fontSize: '20px',
      lineHeight: 'var(--lh-title)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: '7px',
      fontSize: 'var(--text-body-2xs)',
      lineHeight: 'var(--lh-copy)',
      color: 'var(--text-muted)'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      position: 'relative',
      paddingLeft: '15px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: '.62em',
      width: '5px',
      height: '5px',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--action-primary)'
    }
  }), it))));
}
Object.assign(__ds_scope, { IndustryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/IndustryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/LeaderCard.jsx
try { (() => {
function LeaderCard({
  name,
  role = 'Director',
  photo,
  index,
  offset = false,
  style
}) {
  return /*#__PURE__*/React.createElement("article", {
    style: {
      position: 'relative',
      flex: '1 1 260px',
      maxWidth: '320px',
      transform: offset ? 'translateY(clamp(0px, 4vw, 46px))' : 'translateY(0)',
      ...style
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-26px',
      left: '-6px',
      fontSize: 'clamp(56px, 6vw, 86px)',
      lineHeight: 1,
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: '-.05em',
      color: 'rgba(255,255,255,.07)'
    }
  }, index) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-portrait)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name + ', ' + role + ' at Aarniksha Solutions',
    loading: "lazy",
    style: {
      display: 'block',
      width: '100%',
      aspectRatio: '4 / 5',
      objectFit: 'cover',
      objectPosition: '50% 20%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-portrait-scrim)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '20px',
      right: '20px',
      bottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 3px',
      fontSize: 'clamp(18px, 1.6vw, 22px)',
      lineHeight: '1.16',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--ak-white)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-eyebrow-2xs)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--ak-blue-300)'
    }
  }, role))));
}
Object.assign(__ds_scope, { LeaderCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/LeaderCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ValueCard.jsx
try { (() => {
function ValueCard({
  index,
  title,
  body,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: hover ? 'rgba(255,255,255,.18)' : 'var(--surface-glass-on-blue)',
      border: '1px solid var(--border-on-blue)',
      borderRadius: 'var(--radius-md)',
      padding: '24px 22px 26px',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'background var(--dur-card) ease, transform var(--dur-card) ease',
      ...style
    }
  }, index ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 34px',
      fontSize: 'var(--text-eyebrow-xs)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-eyebrow-xs)',
      color: 'rgba(255,255,255,.7)'
    }
  }, index) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 'var(--text-h4)',
      lineHeight: '1.25',
      letterSpacing: '-.015em',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--ak-white)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-2xs)',
      lineHeight: 'var(--lh-comfy)',
      color: 'rgba(255,255,255,.86)'
    }
  }, body));
}
Object.assign(__ds_scope, { ValueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ValueCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  as = 'input',
  options = [],
  rows = 3,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const control = {
    width: '100%',
    fontSize: 'var(--text-body-sm)',
    color: 'var(--text-heading)',
    background: focus ? 'var(--ak-white)' : 'var(--surface-field)',
    border: '1px solid ' + (focus ? 'var(--focus-ring)' : 'var(--border-field)'),
    borderRadius: 'var(--radius-sm)',
    padding: '15px 16px',
    outline: 'none',
    transition: 'var(--transition-field)',
    fontFamily: 'inherit',
    ...(as === 'select' ? {
      appearance: 'none'
    } : null),
    ...(as === 'textarea' ? {
      resize: 'vertical'
    } : null),
    ...inputStyle
  };
  const handlers = {
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: '7px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-link)'
    }
  }, label) : null, as === 'select' ? /*#__PURE__*/React.createElement("select", _extends({
    style: control
  }, handlers, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))) : as === 'textarea' ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: control
  }, handlers, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    style: control
  }, handlers, rest)));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Geometry lifted verbatim from the site's inline SVGs (JobSeekers.jsx, ContactSection.jsx). */
const PATHS = {
  partnership: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "7.4",
    cy: "10",
    r: "4.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12.6",
    cy: "10",
    r: "4.4"
  })),
  'check-circle': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "7.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.4 10.3l2.6 2.6 4.6-5.4"
  })),
  target: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "7.6"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "3"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "2.6",
    y: "4.6",
    width: "14.8",
    height: "10.8",
    rx: "2.2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3.6 6.2l6.4 4.6 6.4-4.6"
  })),
  phone: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5.6",
    y: "2.2",
    width: "8.8",
    height: "15.6",
    rx: "2.4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.8 15.2h2.4"
  })),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M10 17.4c3.4-4 5.1-6.8 5.1-8.6a5.1 5.1 0 10-10.2 0c0 1.8 1.7 4.6 5.1 8.6z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "8.6",
    r: "1.9"
  })),
  clock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "10",
    r: "7.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 5.8V10l3 1.8"
  }))
};
function Icon({
  name,
  size = 20,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 20 20",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, rest), PATHS[name] || null);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/icons/ServiceIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Two-tone 48px service glyphs, verbatim from components/ServicesSection.jsx. */
const A = '#9CC6FA';
const PATHS = {
  'it-staffing': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "15",
    y: "15",
    width: "18",
    height: "18",
    rx: "4",
    fill: "#FFFFFF",
    fillOpacity: ".2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20.5",
    y: "20.5",
    width: "7",
    height: "7",
    rx: "1.6",
    fill: A,
    stroke: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 15v-4M28 15v-4M20 37v-4M28 37v-4M15 20h-4M15 28h-4M37 20h-4M37 28h-4"
  })),
  'non-it-staffing': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 39V14a2 2 0 012-2h12a2 2 0 012 2v25"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 22h6a2 2 0 012 2v15"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 39h30"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17 19h6M17 25h6M17 31h6",
    stroke: A
  }), /*#__PURE__*/React.createElement("rect", {
    x: "31",
    y: "28",
    width: "2.6",
    height: "4",
    rx: "1",
    fill: A,
    stroke: "none"
  })),
  'permanent-hiring': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "19",
    r: "9",
    fill: "#FFFFFF",
    fillOpacity: ".18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19.4l3 3 5-5.4",
    stroke: A
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18.5 26.5L16 40l8-4.4 8 4.4-2.5-13.5"
  })),
  'contract-staffing': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M29 10H16a2 2 0 00-2 2v24a2 2 0 002 2h8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29 10l6 6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 18h8M19 24h6",
    stroke: A
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "31",
    cy: "32",
    r: "7",
    fill: "#FFFFFF",
    fillOpacity: ".18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31 29v3l2.4 1.6",
    stroke: A
  })),
  'executive-search': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "22",
    r: "10.5",
    fill: "#FFFFFF",
    fillOpacity: ".16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M29.6 29.6L38 38"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "19.4",
    r: "3.2",
    stroke: A
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16.8 27.4a5.4 5.4 0 0110.4 0",
    stroke: A
  })),
  rpo: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M36 20a13 13 0 00-22.4-4.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 28a13 13 0 0022.4 4.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13.6 9v6.4H20M34.4 39v-6.4H28"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "5",
    fill: A,
    stroke: "none"
  })),
  'payroll-compliance': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M24 9l12 4.6v10.8c0 7.6-5 12.6-12 14.6-7-2-12-7-12-14.6V13.6L24 9z",
    fill: "#FFFFFF",
    fillOpacity: ".16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 24.2l3.4 3.4L30 20",
    stroke: A
  })),
  'hr-consulting': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "18",
    r: "5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M11 33a8 8 0 0116 0"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "26",
    y: "10",
    width: "14",
    height: "11",
    rx: "3",
    fill: "#FFFFFF",
    fillOpacity: ".18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M30 15.5h6",
    stroke: A
  }), /*#__PURE__*/React.createElement("path", {
    d: "M31 21l-1.4 3.6L33 21"
  }))
};
function ServiceIcon({
  name,
  size = 140,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "#FFFFFF",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, rest), PATHS[name] || null);
}
const SERVICE_ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { ServiceIcon, SERVICE_ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/ServiceIcon.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
const PANELS = ['var(--ak-navy-700)', 'var(--ak-navy-600)', 'var(--ak-navy-550)', 'var(--ak-navy-teal)'];
function ServiceCard({
  icon,
  title,
  body,
  cta = 'Know more',
  onCta,
  panelIndex = 0,
  image,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-hover)' : 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      transform: hover ? 'var(--lift-card)' : 'none',
      transition: 'var(--transition-card)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      background: PANELS[panelIndex % PANELS.length],
      backgroundImage: image ? undefined : 'var(--pattern-blueprint)',
      aspectRatio: '293 / 200',
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : null, icon ? /*#__PURE__*/React.createElement(__ds_scope.ServiceIcon, {
    name: icon,
    size: 140,
    style: {
      position: 'relative'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 22px 28px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '10px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'var(--text-h3-card)',
      lineHeight: 'var(--lh-snug)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-xs)',
      lineHeight: 'var(--lh-copy)',
      color: 'var(--text-muted)'
    }
  }, body), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onCta,
    style: {
      alignSelf: 'flex-start',
      marginTop: '14px',
      boxShadow: 'none'
    }
  }, cta) : null));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Divider.jsx
try { (() => {
function Divider({
  tone = 'light',
  style
}) {
  const colors = {
    light: 'var(--ak-line-200)',
    subtle: 'var(--border-hairline)',
    card: 'var(--border-card)',
    onNavy: 'rgba(255,255,255,.16)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '1px',
      background: colors[tone],
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Divider.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  page: {
    background: 'var(--surface-page)'
  },
  tint: {
    background: 'var(--surface-tint)'
  },
  band: {
    background: 'var(--surface-band)'
  },
  navy: {
    background: 'var(--surface-navy)'
  },
  blue: {
    background: 'var(--surface-blue)'
  },
  blueDeep: {
    background: 'var(--surface-blue-deep)'
  },
  heroGradient: {
    background: 'var(--gradient-hero)'
  },
  navyGradient: {
    background: 'var(--gradient-leadership)'
  },
  lightGradient: {
    background: 'var(--gradient-page-light)'
  }
};
function Section({
  tone = 'page',
  size = 'default',
  id,
  children,
  style,
  innerStyle,
  ...rest
}) {
  const pad = {
    default: 'var(--section-y)',
    band: 'var(--section-y-band)',
    tight: 'var(--section-y-tight)',
    hero: 'var(--hero-y-top)'
  }[size];
  const padBottom = size === 'hero' ? 'var(--hero-y-bottom)' : pad;
  return /*#__PURE__*/React.createElement("section", _extends({
    id: id,
    style: {
      position: 'relative',
      overflow: 'hidden',
      ...TONES[tone],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--layout-max)',
      margin: '0 auto',
      padding: pad + ' var(--layout-gutter) ' + padBottom,
      ...innerStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = 'light',
  align = 'end',
  titleWidth = 'var(--measure-headline)',
  style
}) {
  const onDark = tone === 'onNavy' || tone === 'onColor';
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: tone === 'onNavy' ? 'onNavy' : tone === 'onColor' ? 'onColor' : 'blue',
    style: {
      marginBottom: '22px'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--stack-md)',
      alignItems: align === 'end' ? 'flex-end' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: '1 1 420px',
      margin: 0,
      maxWidth: titleWidth,
      fontSize: 'var(--text-h2)',
      lineHeight: 'var(--lh-heading)',
      letterSpacing: 'var(--ls-h2)',
      fontWeight: 'var(--fw-extrabold)',
      color: onDark ? 'var(--ak-white)' : 'var(--text-heading)'
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      flex: '1 1 340px',
      margin: align === 'end' ? '0 0 8px' : 0,
      maxWidth: 'var(--measure-intro)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--lh-body)',
      color: onDark ? 'var(--text-on-navy)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, intro) : null));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  eyebrow,
  title,
  onClose,
  children,
  style
}) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'var(--surface-scrim)',
      backdropFilter: 'blur(3px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      animation: 'ak-fadein .25s ease both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: 'min(560px, 100%)',
      maxHeight: '92vh',
      overflowY: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      padding: 'clamp(24px, 3vw, 40px)',
      boxShadow: 'var(--shadow-modal)',
      animation: 'ak-pop .32s cubic-bezier(.2,.7,.3,1) both',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    size: "xs",
    style: {
      marginBottom: '8px'
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 'clamp(24px, 2.4vw, 32px)',
      lineHeight: '1.1',
      letterSpacing: '-.025em',
      fontWeight: 'var(--fw-extrabold)',
      color: 'var(--text-heading)'
    }
  }, title) : null), onClose ? /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    variant: "close",
    label: "Close",
    onClick: onClose
  }, "\xD7") : null), children));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/patterns/AccordionItem.jsx
try { (() => {
function AccordionItem({
  index,
  title,
  body,
  defaultOpen = true,
  last = false,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-navy)',
      borderBottom: last ? '1px solid var(--border-on-navy)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(v => !v),
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '28px',
      background: 'transparent',
      border: 'none',
      padding: '26px 0 0',
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, index ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: '26px',
      fontSize: 'var(--text-eyebrow-xs)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-num)',
      color: 'var(--text-eyebrow-on-navy)',
      paddingTop: '6px'
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 'clamp(18px, 1.4vw, 21px)',
      lineHeight: '1.3',
      letterSpacing: '-.015em',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--ak-white)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      color: 'var(--text-eyebrow-on-navy)',
      fontSize: '18px',
      fontWeight: 'var(--fw-bold)',
      transition: 'transform var(--dur-toggle) ease',
      transform: open ? 'rotate(45deg)' : 'rotate(0deg)'
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden',
      transition: 'max-height var(--dur-panel) var(--ease-accordion), opacity var(--dur-card) ease',
      maxHeight: open ? '400px' : '0px',
      opacity: open ? 1 : 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '10px 0 30px 54px',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-body)',
      color: 'var(--text-on-navy-soft)',
      textWrap: 'pretty'
    }
  }, body)));
}
Object.assign(__ds_scope, { AccordionItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/AccordionItem.jsx", error: String((e && e.message) || e) }); }

// components/patterns/CarouselDots.jsx
try { (() => {
function CarouselDots({
  count = 3,
  active = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: '9px',
      ...style
    }
  }, Array.from({
    length: count
  }, (_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": 'Go to card ' + (i + 1),
    onClick: () => onSelect && onSelect(i),
    style: {
      width: active === i ? '22px' : '8px',
      height: '8px',
      padding: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: active === i ? 'var(--action-primary)' : 'var(--ak-blue-200)',
      transition: 'background var(--dur-base) ease, width var(--dur-base) ease'
    }
  })));
}
Object.assign(__ds_scope, { CarouselDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/CarouselDots.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ContactRow.jsx
try { (() => {
function ContactRow({
  icon,
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '20px 0',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: '44px',
      height: '44px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--surface-band)',
      color: 'var(--action-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontSize: 'var(--text-eyebrow-xs)',
      fontWeight: 'var(--fw-extrabold)',
      letterSpacing: 'var(--ls-eyebrow-xs)',
      textTransform: 'uppercase',
      color: 'var(--text-caption)'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-value)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-nav)',
      color: 'var(--text-heading)'
    }
  }, children)));
}
Object.assign(__ds_scope, { ContactRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ContactRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/FilterChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function FilterChip({
  active = false,
  count,
  onClick,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      fontWeight: 'var(--fw-bold)',
      borderRadius: 'var(--radius-pill)',
      padding: '11px 20px',
      cursor: 'pointer',
      background: active ? 'var(--surface-navy)' : 'var(--surface-card)',
      color: active ? 'var(--ak-white)' : 'var(--text-link)',
      border: '1px solid ' + (active ? 'var(--surface-navy)' : 'var(--border-chip)'),
      transition: 'background var(--dur-base) ease, color var(--dur-base) ease, border-color var(--dur-base) ease',
      ...style
    }
  }, rest), children, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-eyebrow-2xs)',
      fontWeight: 'var(--fw-bold)',
      opacity: .6
    }
  }, count) : null);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/patterns/IconRow.jsx
try { (() => {
function IconRow({
  icon,
  title,
  body,
  divider = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      padding: '20px 0',
      borderBottom: divider ? '1px solid var(--border-card)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: '0 0 auto',
      width: '36px',
      height: '36px',
      marginTop: '1px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-circle)',
      background: 'rgba(47,128,236,.1)',
      color: 'var(--action-primary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontSize: '18.5px',
      lineHeight: '1.25',
      letterSpacing: '-.015em',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-body-xs)',
      lineHeight: 'var(--lh-comfy)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, body)));
}
Object.assign(__ds_scope, { IconRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/IconRow.jsx", error: String((e && e.message) || e) }); }

// components/patterns/ProcessStep.jsx
try { (() => {
function ProcessStep({
  title,
  body,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '12px',
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '5.5px',
      left: 0,
      right: 0,
      height: '1px',
      background: 'var(--ak-line-300)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '12px',
      height: '12px',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--surface-card)',
      border: '2px solid var(--action-primary)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '4px',
      left: '4px',
      width: '4px',
      height: '4px',
      borderRadius: 'var(--radius-circle)',
      background: 'var(--action-primary)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--lh-title)',
      letterSpacing: 'var(--ls-h3)',
      fontWeight: 'var(--fw-bold)',
      color: 'var(--text-heading)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 'var(--measure-card)',
      fontSize: 'var(--text-body-sm)',
      lineHeight: 'var(--lh-comfy)',
      color: 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, body));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/admin.jsx
try { (() => {
const isAdmin = u => ['hr_admin', 'super_admin'].includes(u.role);
function todayRow(S, u) {
  const di = dayInfo(S, u.id, AKH.todayIso());
  const map = {
    present: ['blue', 'Office'],
    wfh: ['grey', 'WFH'],
    leave: ['amber', 'On leave'],
    holiday: ['navy', 'Holiday'],
    weekend: ['grey', 'Weekend'],
    today: ['red', 'Not checked in']
  };
  return {
    di,
    badge: map[di.kind] || ['grey', di.label || '—']
  };
}
function ApproveModal({
  u,
  onClose
}) {
  const S = useStore();
  const {
    me,
    toast
  } = useApp();
  const nextId = () => 'AKS-' + String(Math.max(...S.users.filter(x => x.empId).map(x => Number(x.empId.slice(4)))) + 1).padStart(3, '0');
  const managers = S.users.filter(x => x.status === 'active' && x.role !== 'employee');
  const [f, setF] = React.useState({
    role: 'employee',
    managerId: '',
    empId: ''
  });
  React.useEffect(() => {
    if (u) setF({
      role: 'employee',
      managerId: (managers.find(x => x.dept === u.dept) || managers[0] || {}).id || '',
      empId: nextId()
    });
  }, [u]);
  if (!u) return null;
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    onClose: onClose,
    eyebrow: "Approve access",
    title: u.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8FAFE',
      border: '1px solid #E3EAF6',
      borderRadius: '14px',
      padding: '14px 16px',
      display: 'grid',
      gap: '4px',
      fontSize: '14px',
      color: '#43506A'
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#101B33'
    }
  }, u.designation), " \xB7 ", u.dept), /*#__PURE__*/React.createElement("span", null, u.email, " \xB7 +91 ", u.phone), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#8A94A6'
    }
  }, "Requested ", fmt.d(u.requestedAt))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Employee ID",
    value: f.empId,
    onChange: e => setF({
      ...f,
      empId: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Role",
    value: f.role,
    onChange: e => setF({
      ...f,
      role: e.target.value
    }),
    options: Object.entries(AKStore.ROLES).filter(([k]) => me.role === 'super_admin' || k !== 'super_admin')
  })), /*#__PURE__*/React.createElement(Select, {
    label: "Reporting manager",
    value: f.managerId,
    onChange: e => setF({
      ...f,
      managerId: e.target.value
    }),
    options: managers.map(x => [x.id, x.name + ' · ' + x.designation])
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: '#7A859A'
    }
  }, "An \"Account approved\" email goes to ", u.email, " with sign-in instructions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    icon: "UserCheck",
    onClick: () => {
      AKStore.act.approveUser(u.id, me.id, f);
      onClose();
      toast(u.name + ' approved · welcome email sent');
    }
  }, "Approve & email"))));
}
function SuspendModal({
  u,
  onClose
}) {
  const {
    me,
    toast
  } = useApp();
  const [reason, setReason] = React.useState('');
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    setReason('');
    setErr('');
  }, [u]);
  if (!u) return null;
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    onClose: onClose,
    eyebrow: "Suspend access",
    title: u.name
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14.5px',
      lineHeight: 1.6,
      color: '#43506A'
    }
  }, u.name.split(' ')[0], " will be signed out and won't be able to sign in until you reactivate the account. Their records are kept."), /*#__PURE__*/React.createElement(TextArea, {
    label: "Reason",
    rows: 2,
    value: reason,
    onChange: e => setReason(e.target.value),
    placeholder: "Shared with the employee in the email"
  }), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    variant: "danger",
    icon: "Ban",
    onClick: () => {
      if (!reason.trim()) return setErr('Add a reason.');
      AKStore.act.suspendUser(u.id, me.id, reason.trim());
      onClose();
      toast(u.name + ' suspended · email sent');
    }
  }, "Suspend & email"))));
}
function EmployeeDetail({
  u,
  onClose
}) {
  const S = useStore();
  if (!u) return null;
  const t = AKH.today();
  const st = AKH.monthStats(u.id, t.getFullYear(), t.getMonth());
  const open = S.tasks.filter(x => x.assigneeId === u.id && x.status !== 'done').length;
  const mgr = u.managerId ? AKH.user(u.managerId) : null;
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    onClose: onClose,
    eyebrow: (u.empId || 'Pending') + ' · ' + AKStore.ROLES[u.role],
    title: u.name,
    width: 600
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '12px 18px',
      fontSize: '14px',
      color: '#43506A'
    }
  }, [['Designation', u.designation], ['Department', u.dept], ['Email', u.email], ['Mobile', '+91 ' + u.phone], ['Manager', mgr ? mgr.name : '—'], ['Joined', u.joined ? fmt.d(u.joined) : '—']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Label, null, k), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8FAFE',
      border: '1px solid #E3EAF6',
      borderRadius: '16px',
      padding: '16px 18px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 14px',
      fontSize: '12px',
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#2F80EC'
    }
  }, t.toLocaleDateString('en-IN', {
    month: 'long'
  }), " attendance"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Office",
    value: st.present
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "WFH",
    value: st.wfh
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Leave",
    value: st.leave
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Absent",
    value: st.absent,
    tone: st.absent ? '#B9382F' : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Leave balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/React.createElement(LeaveBalances, {
    me: u,
    compact: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Work"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: '14px',
      color: '#43506A'
    }
  }, open, " open task", open === 1 ? '' : 's', /*#__PURE__*/React.createElement("br", null), "Self-assessment ", S.assessments[u.id] ? 'submitted' : 'not submitted'))), u.status === 'suspended' ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13.5px',
      color: '#B9382F',
      fontWeight: 600
    }
  }, "Suspended: ", u.suspendedReason) : null));
}
function AdminOverview({
  go
}) {
  const S = useStore();
  const {
    m,
    toast,
    me
  } = useApp();
  const [approve, setApprove] = React.useState(null);
  const active = S.users.filter(u => u.status === 'active');
  const rows = active.map(u => ({
    u,
    ...todayRow(S, u)
  }));
  const inNow = rows.filter(r => r.di.kind === 'present' || r.di.kind === 'wfh').length;
  const onLeave = rows.filter(r => r.di.kind === 'leave').length;
  const pendingUsers = S.users.filter(u => u.status === 'pending');
  const pending = pendingUsers.length + S.corrections.filter(c => c.status === 'pending').length + S.leaves.filter(l => l.status === 'pending').length;
  const t = AKH.todayIso();
  const upcoming = S.holidays.filter(h => h.date >= t).slice(0, 4);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Admin",
    title: "Overview",
    sub: fmt.long(t),
    actions: /*#__PURE__*/React.createElement(Btn, {
      variant: "outline",
      icon: "Mail",
      onClick: () => go('admin-outbox')
    }, "Email outbox")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      gap: m ? '12px' : '18px',
      marginBottom: m ? '16px' : '22px'
    }
  }, [['Active employees', active.length, S.users.filter(u => u.status === 'suspended').length + ' suspended'], ['Checked in', inNow, Math.round(inNow / Math.max(1, active.length - onLeave) * 100) + '% of expected'], ['On leave today', onLeave, null], ['Pending approvals', pending, 'access, leave & corrections']].map(([l, v, s]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    pad: "20px"
  }, /*#__PURE__*/React.createElement(Stat, {
    label: l,
    value: v,
    sub: s
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.6fr) minmax(0,1fr)',
      gap: m ? '16px' : '22px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontSize: '17px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, "Today's attendance"), /*#__PURE__*/React.createElement(Table, {
    head: ['Employee', 'Department', 'Status', 'In', 'Out'],
    minWidth: 560
  }, rows.map(({
    u,
    di,
    badge
  }) => /*#__PURE__*/React.createElement("tr", {
    key: u.id
  }, /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    size: 32
  })), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, u.dept), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: badge[0]
  }, badge[1]), di.late ? /*#__PURE__*/React.createElement(Badge, {
    tone: "red",
    style: {
      marginLeft: '6px'
    }
  }, "Late") : null), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontVariantNumeric: 'tabular-nums'
    }
  }, di.rec && di.rec.in ? fmt.t(di.rec.in) : '—'), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontVariantNumeric: 'tabular-nums'
    }
  }, di.rec && di.rec.out ? fmt.t(di.rec.out) : '—'))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: m ? '16px' : '22px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Access requests",
    sub: pendingUsers.length ? pendingUsers.length + ' waiting' : 'None waiting',
    action: /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => go('admin-employees'),
      style: {
        border: 'none',
        background: 'none',
        padding: 0,
        color: '#2F80EC',
        fontSize: '13.5px',
        fontWeight: 700,
        cursor: 'pointer',
        fontFamily: 'inherit'
      }
    }, "All \u2192")
  }), pendingUsers.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "UserCheck",
    title: "No new requests"
  }) : pendingUsers.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: u.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderTop: i ? '1px solid #EDF1F8' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    sub: u.designation + ' · ' + fmt.d(u.requestedAt),
    size: 32
  })), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    onClick: () => setApprove(u)
  }, "Review")))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Coming up",
    sub: "Festival greetings go to every active employee"
  }), upcoming.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: h.id,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderTop: i ? '1px solid #EDF1F8' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14.5px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, h.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '12.5px',
      color: '#7A859A'
    }
  }, fmt.dw(h.date))), h.greetingSent ? /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Greeting sent") : /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "outline",
    icon: "Send",
    onClick: () => {
      AKStore.act.sendGreeting(h.id, me.id);
      toast(h.name + ' greeting emailed to all employees');
    }
  }, "Send")))))), /*#__PURE__*/React.createElement(ApproveModal, {
    u: approve,
    onClose: () => setApprove(null)
  }));
}
function EmployeesPage() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const [tab, setTab] = React.useState(S.users.some(u => u.status === 'pending') ? 'pending' : 'active');
  const [q, setQ] = React.useState('');
  const [approve, setApprove] = React.useState(null);
  const [suspend, setSuspend] = React.useState(null);
  const [detail, setDetail] = React.useState(null);
  const by = s => S.users.filter(u => s === 'all' ? u.status !== 'rejected' : u.status === s);
  const list = by(tab).filter(u => !q || (u.name + u.email + u.phone + (u.empId || '') + u.dept).toLowerCase().includes(q.toLowerCase()));
  const actions = u => {
    if (u.status === 'pending') return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: '8px',
        justifyContent: 'flex-end'
      }
    }, /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      variant: "danger",
      onClick: () => {
        AKStore.act.rejectUser(u.id);
        toast('Request rejected');
      }
    }, "Reject"), /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      onClick: () => setApprove(u)
    }, "Approve"));
    if (u.id === me.id) return /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12.5px',
        color: '#8A94A6'
      }
    }, "You");
    if (u.role === 'super_admin' && me.role !== 'super_admin') return null;
    if (u.status === 'active') return /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      variant: "danger",
      icon: "Ban",
      onClick: () => setSuspend(u)
    }, "Suspend");
    if (u.status === 'suspended') return /*#__PURE__*/React.createElement(Btn, {
      size: "sm",
      variant: "outline",
      icon: "RotateCcw",
      onClick: () => {
        AKStore.act.reactivateUser(u.id);
        toast(u.name + ' reactivated');
      }
    }, "Reactivate");
    return null;
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Admin",
    title: "Employees",
    sub: "Approve new sign-ups, suspend or restore access. Every decision emails the employee."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '12px',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, [['pending', 'Pending'], ['active', 'Active'], ['suspended', 'Suspended'], ['all', 'All']].map(([k, l]) => /*#__PURE__*/React.createElement(DS.FilterChip, {
    key: k,
    active: tab === k,
    count: by(k).length,
    onClick: () => setTab(k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: m ? '100%' : '280px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search name, email, ID\u2026",
    value: q,
    onChange: e => setQ(e.target.value)
  }))), list.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Empty, {
    icon: "Users",
    title: "No one here",
    body: tab === 'pending' ? 'New access requests will appear here.' : null
  })) : m ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '12px'
    }
  }, list.map(u => /*#__PURE__*/React.createElement(Card, {
    key: u.id,
    pad: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setDetail(u),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      background: 'none',
      padding: 0,
      textAlign: 'left',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    sub: (u.empId || 'New') + ' · ' + u.designation
  })), /*#__PURE__*/React.createElement(StatusBadge, {
    status: u.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, actions(u))))) : /*#__PURE__*/React.createElement(Table, {
    head: ['Employee', 'ID', 'Department', 'Role', 'Manager', 'Status', '>Actions'],
    minWidth: 860
  }, list.map(u => /*#__PURE__*/React.createElement("tr", {
    key: u.id
  }, /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setDetail(u),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      textAlign: 'left',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    sub: u.email,
    size: 34
  }))), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontVariantNumeric: 'tabular-nums'
    }
  }, u.empId || '—'), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, u.dept, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '12.5px',
      color: '#8A94A6'
    }
  }, u.designation)), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, AKStore.ROLES[u.role]), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, u.managerId ? AKH.user(u.managerId).name : '—'), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: u.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right'
    }
  }, actions(u))))), /*#__PURE__*/React.createElement(ApproveModal, {
    u: approve,
    onClose: () => setApprove(null)
  }), /*#__PURE__*/React.createElement(SuspendModal, {
    u: suspend,
    onClose: () => setSuspend(null)
  }), /*#__PURE__*/React.createElement(EmployeeDetail, {
    u: detail,
    onClose: () => setDetail(null)
  }));
}
function ApprovalsPage() {
  const S = useStore();
  const [tab, setTab] = React.useState('corrections');
  const [decide, setDecide] = React.useState(null);
  const cP = S.corrections.filter(c => c.status === 'pending');
  const cD = S.corrections.filter(c => c.status !== 'pending');
  const lP = S.leaves.filter(l => l.status === 'pending');
  const lD = S.leaves.filter(l => ['approved', 'rejected'].includes(l.status)).slice(0, 8);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Admin",
    title: "Approvals",
    sub: "Everything waiting across the company. Managers see the same requests for their own team."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [['corrections', 'Attendance corrections', cP.length], ['leave', 'Leave', lP.length]],
    value: tab,
    onChange: setTab
  })), tab === 'corrections' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement(CardHead, {
    title: "Waiting",
    style: {
      marginBottom: cP.length ? '4px' : '18px'
    }
  }), cP.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "ClockAlert",
    title: "Nothing to review"
  }) : cP.map(c => /*#__PURE__*/React.createElement(CorrectionCard, {
    key: c.id,
    c: c
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Recently decided",
    style: {
      marginBottom: cD.length ? '4px' : '18px'
    }
  }), cD.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "History",
    title: "No history yet"
  }) : cD.map(c => /*#__PURE__*/React.createElement(CorrectionCard, {
    key: c.id,
    c: c
  })))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: '22px'
    }
  }, /*#__PURE__*/React.createElement(CardHead, {
    title: "Waiting",
    style: {
      marginBottom: lP.length ? '4px' : '18px'
    }
  }), lP.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "CalendarDays",
    title: "Nothing to review"
  }) : lP.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id
  }, /*#__PURE__*/React.createElement(LeaveRequestCard, {
    l: l,
    onDecide: setDecide
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '-6px 0 10px',
      fontSize: '12px',
      color: '#8A94A6'
    }
  }, "Approver: ", l.approverId ? AKH.user(l.approverId).name : '—')))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Recently decided",
    style: {
      marginBottom: '4px'
    }
  }), lD.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px',
      padding: '13px 0',
      borderTop: '1px solid #EDF1F8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 240px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: AKH.user(l.userId),
    sub: AKStore.LEAVE_TYPES[l.type] + ' · ' + fmt.range(l.from, l.to),
    size: 32
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '13px',
      color: '#7A859A'
    }
  }, "by ", l.decidedBy || l.approverId ? AKH.user(l.decidedBy || l.approverId).name : '—'), /*#__PURE__*/React.createElement(StatusBadge, {
    status: l.status
  }))))), /*#__PURE__*/React.createElement(DecideModal, {
    item: decide,
    onClose: () => setDecide(null)
  }));
}
function AdminHolidays() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const [f, setF] = React.useState({
    name: '',
    date: '',
    type: 'Festival',
    greeting: true
  });
  const [err, setErr] = React.useState('');
  const t = AKH.todayIso();
  const [show, setShow] = React.useState('upcoming');
  const list = S.holidays.filter(h => show === 'upcoming' ? h.date >= t : true);
  const add = () => {
    if (!f.name.trim() || !f.date) return setErr('Add a name and a date.');
    if (S.holidays.some(h => h.date === f.date)) return setErr('There is already a holiday on that date.');
    AKStore.act.addHoliday(f, me.id);
    setF({
      name: '',
      date: '',
      type: 'Festival',
      greeting: true
    });
    setErr('');
    toast('Holiday added' + (f.greeting ? ' · greeting emailed to all employees' : ''));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Admin",
    title: "Holidays & festivals",
    sub: "Pre-loaded with the Telangana 2026 general holidays. Add company holidays here; employees are notified straight away."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.7fr)',
      gap: m ? '16px' : '22px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tint: true
  }, /*#__PURE__*/React.createElement(CardHead, {
    title: "Add a holiday"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    value: f.name,
    onChange: e => setF({
      ...f,
      name: e.target.value
    }),
    placeholder: "e.g. Company foundation day"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Date",
    type: "date",
    value: f.date,
    onChange: e => setF({
      ...f,
      date: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Type",
    value: f.type,
    onChange: e => setF({
      ...f,
      type: e.target.value
    }),
    options: ['Festival', 'National', 'Telangana']
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontSize: '14px',
      color: '#43506A',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: f.greeting,
    onChange: e => setF({
      ...f,
      greeting: e.target.checked
    }),
    style: {
      width: '18px',
      height: '18px',
      marginTop: '1px',
      accentColor: '#2F80EC'
    }
  }), /*#__PURE__*/React.createElement("span", null, "Email a festival greeting to all active employees now")), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement(Btn, {
    icon: "Plus",
    onClick: add
  }, "Add holiday"))), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [['upcoming', 'Upcoming'], ['all', 'Whole year']],
    value: show,
    onChange: setShow
  })), /*#__PURE__*/React.createElement(Table, {
    head: ['Date', 'Holiday', 'Type', 'Greeting', ''],
    minWidth: 560
  }, list.map(h => /*#__PURE__*/React.createElement("tr", {
    key: h.id,
    style: {
      opacity: h.date < t ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      whiteSpace: 'nowrap',
      fontWeight: 700,
      color: '#101B33'
    }
  }, fmt.dw(h.date)), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, h.name), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: HOL_TONE[h.type] || 'grey'
  }, h.type)), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, h.greetingSent ? /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Sent") : h.date >= t ? /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "outline",
    icon: "Send",
    onClick: () => {
      AKStore.act.sendGreeting(h.id, me.id);
      toast('Greeting emailed to all employees');
    }
  }, "Send") : /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#8A94A6'
    }
  }, "\u2014")), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Remove ' + h.name,
    onClick: () => {
      AKStore.act.removeHoliday(h.id);
      toast('Holiday removed');
    },
    style: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      border: '1px solid #E3EAF6',
      background: '#fff',
      color: '#7A859A',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "Trash2",
    size: 15
  })))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: '13px',
      color: '#7A859A'
    }
  }, "In production, greetings are scheduled automatically at 10:00 am the day before each holiday."))));
}
const EMAIL_TONE = {
  account_approved: 'green',
  account_suspended: 'red',
  leave_decision: 'amber',
  task_assigned: 'blue',
  holiday_greeting: 'navy',
  monthly_summary: 'grey'
};
function OutboxPage() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const [type, setType] = React.useState('all');
  const list = S.outbox.filter(e => type === 'all' || e.type === type);
  const [sel, setSel] = React.useState(null);
  const cur = list.find(e => e.id === sel) || (!m ? list[0] : null);
  const preview = cur ? /*#__PURE__*/React.createElement("iframe", {
    title: cur.subject,
    srcDoc: AKEmail.render(cur.type, cur.data),
    style: {
      width: '100%',
      height: m ? '60vh' : '760px',
      border: 'none',
      borderRadius: '14px',
      background: '#E9EFFB',
      display: 'block'
    }
  }) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Admin",
    title: "Email outbox",
    sub: "Every email the portal has sent. In the prototype nothing leaves the browser.",
    actions: /*#__PURE__*/React.createElement(Btn, {
      icon: "Send",
      onClick: () => {
        const n = AKStore.act.runMonthlySummary(me.id);
        toast('Monthly summary sent to ' + n + ' employees');
      }
    }, "Run monthly summary")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(DS.FilterChip, {
    active: type === 'all',
    count: S.outbox.length,
    onClick: () => setType('all')
  }, "All"), Object.entries(AKEmail.TYPES).map(([k, l]) => /*#__PURE__*/React.createElement(DS.FilterChip, {
    key: k,
    active: type === k,
    count: S.outbox.filter(e => e.type === k).length,
    onClick: () => setType(k)
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(300px, 380px) minmax(0,1fr)',
      gap: '18px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    pad: "6px",
    style: {
      maxHeight: m ? 'none' : '800px',
      overflowY: 'auto'
    }
  }, list.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "Mail",
    title: "No emails of this type yet"
  }) : list.map(e => {
    const on = cur && cur.id === e.id;
    return /*#__PURE__*/React.createElement("button", {
      key: e.id,
      type: "button",
      onClick: () => setSel(e.id),
      style: {
        width: '100%',
        display: 'block',
        textAlign: 'left',
        padding: '14px 14px',
        border: 'none',
        borderRadius: '12px',
        background: on ? '#E9EFFB' : 'transparent',
        cursor: 'pointer',
        fontFamily: 'inherit',
        marginBottom: '2px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '8px'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: EMAIL_TONE[e.type]
    }, AKEmail.TYPES[e.type]), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12px',
        color: '#8A94A6'
      }
    }, fmt.ago(e.at))), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: '8px',
        fontSize: '14px',
        fontWeight: 700,
        color: '#101B33',
        lineHeight: 1.35
      }
    }, e.subject), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: '3px',
        fontSize: '12.5px',
        color: '#5B6577'
      }
    }, "To ", e.toName, " \xB7 ", e.to), e.trigger ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: '3px',
        fontSize: '12px',
        color: '#8A94A6'
      }
    }, e.trigger) : null);
  })), !m ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: '96px'
    }
  }, preview) : null), m ? /*#__PURE__*/React.createElement(Modal, {
    open: !!cur,
    onClose: () => setSel(null),
    eyebrow: cur ? AKEmail.TYPES[cur.type] : '',
    title: cur ? 'To ' + cur.toName : '',
    width: 640
  }, preview) : null);
}
const PERMS = [['Check in / out, leave, tasks, goals', [1, 1, 1, 1]], ['Approve team leave & corrections', [0, 1, 1, 1]], ['Assign tasks to direct reports', [0, 1, 1, 1]], ['Approve / reject new employees', [0, 0, 1, 1]], ['Suspend / reactivate accounts', [0, 0, 1, 1]], ['Manage holidays & send greetings', [0, 0, 1, 1]], ['View email outbox, run summaries', [0, 0, 1, 1]], ['Change roles, manage admins', [0, 0, 0, 1]]];
function RolesPage() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const people = S.users.filter(u => u.status === 'active');
  const roles = Object.keys(AKStore.ROLES);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Super admin",
    title: "Roles & access",
    sub: "What each role can do, and who has it."
  }), /*#__PURE__*/React.createElement(Table, {
    head: ['Permission', ...roles.map(r => AKStore.ROLES[r])],
    minWidth: 640
  }, PERMS.map(([p, v]) => /*#__PURE__*/React.createElement("tr", {
    key: p
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontWeight: 600,
      color: '#101B33'
    }
  }, p), v.map((on, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      ...TD,
      color: on ? '#2F80EC' : '#C9D3E3'
    }
  }, on ? /*#__PURE__*/React.createElement(PIcon, {
    name: "Check",
    size: 18,
    stroke: 2.2
  }) : '—'))))), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '28px 0 14px',
      fontSize: '17px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, "People"), /*#__PURE__*/React.createElement(Card, {
    pad: m ? '6px 14px' : '6px 20px'
  }, people.map((u, i) => /*#__PURE__*/React.createElement("div", {
    key: u.id,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px',
      padding: '12px 0',
      borderTop: i ? '1px solid #EDF1F8' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    sub: u.designation + ' · ' + u.dept,
    size: 34
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: m ? '100%' : '220px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: u.role,
    disabled: u.id === me.id,
    onChange: e => {
      AKStore.act.setRole(u.id, e.target.value);
      toast(u.name + ' is now ' + AKStore.ROLES[e.target.value]);
    },
    options: roles.map(r => [r, AKStore.ROLES[r]])
  }))))));
}
Object.assign(window, {
  AdminOverview,
  EmployeesPage,
  ApprovalsPage,
  AdminHolidays,
  OutboxPage,
  RolesPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/admin.jsx", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/auth.jsx
try { (() => {
const DEMO = [['u5', 'Employee'], ['u4', 'Manager'], ['u3', 'HR admin'], ['u1', 'Super admin']];
const DEMO_OTP = '123456';
function OtpBoxes({
  value,
  onChange
}) {
  const refs = React.useRef([]);
  const set = (i, ch) => {
    const digits = value.split('');
    digits[i] = ch;
    const next = digits.join('').slice(0, 6);
    onChange(next);
    if (ch && i < 5) refs.current[i + 1].focus();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '8px'
    }
  }, Array.from({
    length: 6
  }, (_, i) => /*#__PURE__*/React.createElement("input", {
    key: i,
    ref: el => refs.current[i] = el,
    inputMode: "numeric",
    maxLength: 1,
    "aria-label": 'Digit ' + (i + 1),
    value: value[i] || '',
    onChange: e => set(i, e.target.value.replace(/\D/g, '').slice(-1)),
    onKeyDown: e => {
      if (e.key === 'Backspace' && !value[i] && i > 0) refs.current[i - 1].focus();
    },
    onPaste: e => {
      const p = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
      if (p) {
        e.preventDefault();
        onChange(p);
        refs.current[Math.min(p.length, 5)].focus();
      }
    },
    style: {
      width: '100%',
      minWidth: 0,
      height: '56px',
      textAlign: 'center',
      fontSize: '22px',
      fontWeight: 800,
      color: '#06367E',
      background: value[i] ? '#fff' : '#F8FAFE',
      border: '1px solid ' + (value[i] ? '#2F80EC' : '#E1E8F4'),
      borderRadius: '12px',
      outline: 'none',
      fontFamily: 'inherit',
      boxSizing: 'border-box'
    }
  })));
}
function AuthNote({
  icon,
  tone = 'blue',
  title,
  children
}) {
  const c = {
    blue: ['#E7F1FD', '#1D6AE3'],
    amber: ['#FDF1DC', '#8A5A00'],
    red: ['#FCEAE8', '#B9382F'],
    green: ['#E3F5EC', '#0F7A55']
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '14px',
      background: c[0],
      borderRadius: '16px',
      padding: '18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c[1],
      marginTop: '1px'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 4px',
      fontSize: '15px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '14px',
      lineHeight: 1.6,
      color: '#43506A'
    }
  }, children)));
}
function AuthScreen() {
  const {
    m
  } = useApp();
  const [step, setStep] = React.useState('login');
  const [mode, setMode] = React.useState('mobile');
  const [id, setId] = React.useState('');
  const [acct, setAcct] = React.useState(null);
  const [otp, setOtp] = React.useState('');
  const [err, setErr] = React.useState('');
  const [timer, setTimer] = React.useState(0);
  const [reg, setReg] = React.useState({
    name: '',
    email: '',
    phone: '',
    dept: 'Recruitment',
    designation: ''
  });
  React.useEffect(() => {
    if (!timer) return;
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer]);
  const sendOtp = () => {
    setErr('');
    if (mode === 'mobile' && id.replace(/\D/g, '').length !== 10) return setErr('Enter your 10-digit mobile number.');
    if (mode === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(id.trim())) return setErr('Enter a valid email address.');
    const u = AKStore.act.findAccount(id);
    if (!u || u.status === 'rejected') return setErr("We couldn't find an account with that " + (mode === 'mobile' ? 'number' : 'email') + '. New here? Request access below.');
    setAcct(u);
    if (u.status === 'pending') return setStep('pending');
    if (u.status === 'suspended') return setStep('suspended');
    setOtp('');
    setTimer(30);
    setStep('otp');
  };
  const verify = () => {
    if (otp.length < 6) return setErr('Enter all 6 digits.');
    if (otp !== DEMO_OTP) return setErr('That code is incorrect. Check the message and try again.');
    AKStore.act.signIn(acct.id);
  };
  const register = () => {
    setErr('');
    if (!reg.name.trim() || !reg.designation.trim()) return setErr('Fill in your name and designation.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(reg.email.trim())) return setErr('Enter a valid email address.');
    if (reg.phone.replace(/\D/g, '').length !== 10) return setErr('Enter your 10-digit mobile number.');
    if (AKStore.act.findAccount(reg.email) || AKStore.act.findAccount(reg.phone)) return setErr('An account already exists with that email or mobile number.');
    setAcct(AKStore.act.register(reg));
    setStep('registered');
  };
  const masked = acct ? mode === 'mobile' ? '+91 ••••• ' + acct.phone.slice(-5) : acct.email.replace(/^(.{2}).*(@.*)$/, '$1•••$2') : '';
  const back = s => () => {
    setErr('');
    setStep(s);
  };
  let body;
  if (step === 'login') body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: hS
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: pS
  }, "Use the mobile number or email you registered with. We'll send you a one-time code."), /*#__PURE__*/React.createElement(Segmented, {
    full: true,
    options: [['mobile', 'Mobile number'], ['email', 'Email']],
    value: mode,
    onChange: v => {
      setMode(v);
      setId('');
      setErr('');
    }
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      sendOtp();
    },
    style: {
      display: 'grid',
      gap: '16px',
      marginTop: '20px'
    }
  }, mode === 'mobile' ? /*#__PURE__*/React.createElement(Input, {
    label: "Mobile number",
    prefix: "+91",
    inputMode: "numeric",
    placeholder: "98480 11012",
    value: id,
    onChange: e => setId(e.target.value.replace(/[^\d ]/g, '').slice(0, 11))
  }) : /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@aarnikshasolutions.com",
    value: id,
    onChange: e => setId(e.target.value)
  }), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement(DS.Button, {
    type: "submit",
    arrow: true,
    style: {
      width: '100%'
    }
  }, "Send code")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '22px 0 0',
      fontSize: '14.5px',
      color: '#5B6577',
      textAlign: 'center'
    }
  }, "New to Aarniksha? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setErr('');
      setStep('register');
    },
    style: {
      fontWeight: 700
    }
  }, "Request access")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '28px',
      paddingTop: '20px',
      borderTop: '1px solid #E9EDF5'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: '11px',
      fontWeight: 800,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: '#8A94A6'
    }
  }, "Prototype \xB7 demo accounts"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    }
  }, DEMO.map(([uid, role]) => {
    const u = AKH.user(uid);
    return /*#__PURE__*/React.createElement("button", {
      key: uid,
      type: "button",
      onClick: () => {
        setErr('');
        setId(mode === 'mobile' ? u.phone.replace(/(\d{5})(\d{5})/, '$1 $2') : u.email);
      },
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '6px 12px 6px 6px',
        borderRadius: '999px',
        border: '1px solid #DCE5F5',
        background: '#fff',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '13px',
        fontWeight: 700,
        color: '#43506A'
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: u.name,
      size: 24
    }), role);
  }))));
  if (step === 'otp') body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BackLink, {
    onClick: back('login')
  }), /*#__PURE__*/React.createElement("h2", {
    style: hS
  }, "Enter the code"), /*#__PURE__*/React.createElement("p", {
    style: pS
  }, "We sent a 6-digit code to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#101B33'
    }
  }, masked), ". It expires in 10 minutes."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      verify();
    },
    style: {
      display: 'grid',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(OtpBoxes, {
    value: otp,
    onChange: v => {
      setOtp(v);
      setErr('');
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F4FAFF',
      border: '1px dashed #C9D8F2',
      borderRadius: '12px',
      padding: '10px 14px',
      fontSize: '13.5px',
      color: '#43506A'
    }
  }, "Prototype: the code is ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#06367E',
      letterSpacing: '.1em'
    }
  }, DEMO_OTP)), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement(DS.Button, {
    type: "submit",
    arrow: true,
    style: {
      width: '100%'
    }
  }, "Verify and sign in")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: '14px',
      color: '#5B6577',
      textAlign: 'center'
    }
  }, timer ? 'Resend code in 0:' + String(timer).padStart(2, '0') : /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setTimer(30);
    },
    style: {
      fontWeight: 700
    }
  }, "Resend code")));
  if (step === 'register') body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BackLink, {
    onClick: back('login')
  }), /*#__PURE__*/React.createElement("h2", {
    style: hS
  }, "Request access"), /*#__PURE__*/React.createElement("p", {
    style: pS
  }, "HR reviews every request. You'll get an email as soon as your account is approved."), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      register();
    },
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    value: reg.name,
    onChange: e => setReg({
      ...reg,
      name: e.target.value
    }),
    placeholder: "As on your ID"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: reg.email,
    onChange: e => setReg({
      ...reg,
      email: e.target.value
    }),
    placeholder: "you@example.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Mobile number",
    prefix: "+91",
    inputMode: "numeric",
    value: reg.phone,
    onChange: e => setReg({
      ...reg,
      phone: e.target.value.replace(/[^\d ]/g, '').slice(0, 11)
    }),
    placeholder: "10-digit number"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Department",
    options: AKStore.DEPTS,
    value: reg.dept,
    onChange: e => setReg({
      ...reg,
      dept: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Designation",
    value: reg.designation,
    onChange: e => setReg({
      ...reg,
      designation: e.target.value
    }),
    placeholder: "e.g. Recruiter"
  })), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement(DS.Button, {
    type: "submit",
    arrow: true,
    style: {
      width: '100%'
    }
  }, "Submit request")));
  if (step === 'registered') body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: hS
  }, "Request sent"), /*#__PURE__*/React.createElement(AuthNote, {
    icon: "CircleCheck",
    tone: "green",
    title: 'Thanks, ' + acct.name.split(' ')[0] + '.'
  }, "Your request is with HR. We'll email ", /*#__PURE__*/React.createElement("strong", null, acct.email), " once it's approved \u2014 usually within one working day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "outline",
    full: true,
    onClick: back('login')
  }, "Back to sign in")));
  if (step === 'pending') body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BackLink, {
    onClick: back('login')
  }), /*#__PURE__*/React.createElement("h2", {
    style: hS
  }, "Almost there"), /*#__PURE__*/React.createElement(AuthNote, {
    icon: "Hourglass",
    tone: "amber",
    title: "Your account is awaiting approval"
  }, "HR hasn't approved ", acct.name.split(' ')[0], "'s access yet. You'll get an email at ", acct.email, " as soon as it's done."));
  if (step === 'suspended') body = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BackLink, {
    onClick: back('login')
  }), /*#__PURE__*/React.createElement("h2", {
    style: hS
  }, "Access suspended"), /*#__PURE__*/React.createElement(AuthNote, {
    icon: "Ban",
    tone: "red",
    title: "You can't sign in right now"
  }, "Your portal access has been suspended", acct.suspendedReason ? ' (' + acct.suspendedReason.toLowerCase() + ')' : '', ". Please contact ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:hr@aarnikshasolutions.com"
  }, "hr@aarnikshasolutions.com"), "."));
  const brand = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(140deg,#04255A 0%,#06367E 52%,#0A4497 100%)',
      padding: m ? '28px 22px 30px' : '48px 56px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: m ? 'auto' : '100vh',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-30%',
      right: '-40%',
      width: '120%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.09)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: '-50%',
      left: '-20%',
      width: '110%',
      aspectRatio: '1',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 50% 30%, rgba(47,128,236,.28), rgba(47,128,236,0) 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: m ? '48px' : '64px',
      height: m ? '48px' : '64px',
      background: '#fff',
      borderRadius: '14px',
      padding: '5px',
      boxSizing: 'border-box',
      boxShadow: '0 6px 20px rgba(2,22,56,.28)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Aarniksha Solutions",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 800,
      color: '#fff'
    }
  }, "Aarniksha Solutions"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontSize: '11px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#9CC6FA'
    }
  }, "Employee portal"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      marginTop: m ? '26px' : 0
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: '13ch',
      fontSize: m ? '30px' : 'clamp(40px, 4vw, 58px)',
      lineHeight: 1.02,
      letterSpacing: '-.035em',
      fontWeight: 800,
      color: '#fff'
    }
  }, "Your workday, in one place."), !m ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px',
      marginTop: '32px'
    }
  }, [['Clock', 'Check in from the office or from home'], ['CalendarDays', 'Apply for leave and follow every approval'], ['ListChecks', 'Tasks, goals and the holiday calendar together']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      color: 'rgba(255,255,255,.86)',
      fontSize: '16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '38px',
      height: '38px',
      flex: '0 0 auto',
      borderRadius: '50%',
      background: 'rgba(255,255,255,.1)',
      border: '1px solid rgba(255,255,255,.16)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#9CC6FA'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: ic,
    size: 18
  })), t))) : null), !m ? /*#__PURE__*/React.createElement("a", {
    href: "../../ui_kits/website/index.html",
    style: {
      position: 'relative',
      color: 'rgba(255,255,255,.78)',
      fontSize: '14px',
      fontWeight: 600
    }
  }, "\u2190 Back to aarnikshasolutions.com") : null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: m ? 'block' : 'grid',
      gridTemplateColumns: 'minmax(380px, 1fr) minmax(0, 1.1fr)',
      minHeight: m ? '100%' : '100vh',
      height: m ? '100%' : undefined,
      overflowY: m ? 'auto' : undefined,
      background: '#fff'
    }
  }, brand, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: m ? '28px 20px 36px' : '48px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: '420px'
    }
  }, body)));
}
const hS = {
  margin: '0 0 8px',
  fontSize: '30px',
  lineHeight: 1.08,
  letterSpacing: '-.03em',
  fontWeight: 800,
  color: '#101B33'
};
const pS = {
  margin: '0 0 22px',
  fontSize: '15px',
  lineHeight: 1.6,
  color: '#5B6577'
};
function BackLink({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      margin: '0 0 18px',
      padding: 0,
      border: 'none',
      background: 'none',
      color: '#43506A',
      fontSize: '14px',
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "ArrowLeft",
    size: 16
  }), "Back");
}
Object.assign(window, {
  AuthScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/auth.jsx", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/email-templates.js
try { (() => {
/* Aarniksha employee-portal email templates.
   Table-based, inline-styled, 600px — safe for Gmail / Outlook / Apple Mail.
   In production set AKEmail.LOGO and AKEmail.PORTAL to absolute https URLs. */
(function () {
  const E = {
    LOGO: '../../assets/logo.png',
    PORTAL: 'https://aarnikshasolutions.com/portal',
    FONT: "'Plus Jakarta Sans',Helvetica,Arial,sans-serif"
  };
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const fmt = isoDate => {
    if (!isoDate) return '';
    const [y, m, d] = isoDate.split('-').map(Number);
    return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };
  E.fmt = fmt;
  const rows = pairs => '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-top:1px solid #E9EDF5">' + pairs.filter(Boolean).map(([k, v]) => '<tr><td style="padding:14px 0;border-bottom:1px solid #E9EDF5;font-family:' + E.FONT + ';font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#8A94A6;width:42%;vertical-align:top">' + esc(k) + '</td>' + '<td style="padding:14px 0;border-bottom:1px solid #E9EDF5;font-family:' + E.FONT + ';font-size:15px;font-weight:600;color:#101B33;vertical-align:top">' + v + '</td></tr>').join('') + '</table>';
  const button = (label, href) => '<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background:#2F80EC;border-radius:999px">' + '<a href="' + href + '" style="display:inline-block;padding:15px 30px;font-family:' + E.FONT + ';font-size:15px;font-weight:700;color:#FFFFFF;text-decoration:none;border-radius:999px">' + esc(label) + ' &#8599;</a></td></tr></table>';
  const pill = (text, bg, fg) => '<span style="display:inline-block;padding:6px 14px;border-radius:999px;background:' + bg + ';color:' + fg + ';font-family:' + E.FONT + ';font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase">' + esc(text) + '</span>';
  function shell({
    preheader,
    eyebrow,
    title,
    intro,
    body = '',
    cta,
    hero
  }) {
    return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + esc(title) + '</title>' + '<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet"></head>' + '<body style="margin:0;padding:0;background:#E9EFFB;-webkit-font-smoothing:antialiased">' + '<div style="display:none;max-height:0;overflow:hidden;opacity:0">' + esc(preheader) + '</div>' + '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#E9EFFB"><tr><td align="center" style="padding:32px 12px">' + '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#FFFFFF;border-radius:18px;overflow:hidden;box-shadow:0 10px 30px rgba(16,27,51,.06)">' + '<tr><td style="background:#06367E;padding:24px 36px"><table role="presentation" cellpadding="0" cellspacing="0"><tr>' + '<td style="background:#FFFFFF;border-radius:12px;padding:4px;width:48px"><img src="' + E.LOGO + '" width="48" height="48" alt="Aarniksha Solutions" style="display:block;width:48px;height:48px;object-fit:contain"></td>' + '<td style="padding-left:16px;font-family:' + E.FONT + '"><div style="font-size:16px;font-weight:800;letter-spacing:-.01em;color:#FFFFFF">Aarniksha Solutions</div>' + '<div style="margin-top:3px;font-size:11px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#9CC6FA">Employee Portal</div></td></tr></table></td></tr>' + (hero || '') + '<tr><td style="padding:36px 36px 8px;font-family:' + E.FONT + '">' + (eyebrow ? '<div style="font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#2F80EC;margin-bottom:12px">' + eyebrow + '</div>' : '') + '<h1 style="margin:0 0 14px;font-size:28px;line-height:1.12;letter-spacing:-.025em;font-weight:800;color:#101B33">' + title + '</h1>' + '<p style="margin:0;font-size:16px;line-height:1.62;color:#5B6577">' + intro + '</p></td></tr>' + (body ? '<tr><td style="padding:22px 36px 4px">' + body + '</td></tr>' : '') + (cta ? '<tr><td style="padding:24px 36px 8px">' + button(cta.label, cta.href) + '</td></tr>' : '') + '<tr><td style="padding:28px 36px 0"></td></tr>' + '<tr><td style="border-top:1px solid #E9EDF5;background:#F8FAFE;padding:22px 36px;font-family:' + E.FONT + ';font-size:12.5px;line-height:1.6;color:#7A859A">' + '<strong style="color:#43506A">Aarniksha Solutions Private Limited</strong> &#183; Hi-Tech City, Hyderabad<br>' + 'This is an automated message from the employee portal. For help, write to <a href="mailto:hr@aarnikshasolutions.com" style="color:#2F80EC;text-decoration:none">hr@aarnikshasolutions.com</a>.</td></tr>' + '</table></td></tr></table></body></html>';
  }
  const T = {
    account_approved: {
      subject: d => 'Welcome to Aarniksha, ' + d.name.split(' ')[0] + ' — your portal access is ready',
      render: d => shell({
        preheader: 'Your employee portal account has been approved.',
        eyebrow: 'Account approved',
        title: 'Welcome to the team, ' + esc(d.name.split(' ')[0]) + '.',
        intro: 'HR has approved your access to the Aarniksha employee portal. Sign in with your registered mobile number or email &#8212; we\u2019ll send a one-time code each time.',
        body: rows([['Employee ID', esc(d.empId)], ['Designation', esc(d.designation)], ['Role', esc(d.role)], ['Reporting manager', esc(d.manager || '—')], ['Sign in with', esc(d.loginWith)]]),
        cta: {
          label: 'Sign in to the portal',
          href: E.PORTAL
        }
      })
    },
    account_suspended: {
      subject: () => 'Your Aarniksha portal access has been suspended',
      render: d => shell({
        preheader: 'Your employee portal access is on hold.',
        eyebrow: 'Access suspended',
        title: 'Your portal access is on hold.',
        intro: 'Hi ' + esc(d.name.split(' ')[0]) + ', your access to the Aarniksha employee portal was suspended on ' + esc(fmt(d.date)) + '. You won\u2019t be able to sign in until HR reactivates your account.',
        body: rows([['Reason', esc(d.reason || 'Not specified')], ['Actioned by', esc(d.by)]]) + '<p style="margin:20px 0 0;font-family:' + E.FONT + ';font-size:15px;line-height:1.6;color:#5B6577">If you think this is a mistake, reply to HR at <a href="mailto:hr@aarnikshasolutions.com" style="color:#2F80EC;text-decoration:none">hr@aarnikshasolutions.com</a>.</p>'
      })
    },
    leave_decision: {
      subject: d => 'Leave ' + (d.approved ? 'approved' : 'not approved') + ': ' + d.type + ', ' + fmt(d.from),
      render: d => shell({
        preheader: 'Your ' + d.type + ' request has been ' + (d.approved ? 'approved.' : 'declined.'),
        eyebrow: d.approved ? pill('Approved', '#E3F5EC', '#0F7A55') : pill('Not approved', '#FCEAE8', '#B9382F'),
        title: d.approved ? 'Your leave is approved.' : 'Your leave request was declined.',
        intro: 'Hi ' + esc(d.name.split(' ')[0]) + ', ' + esc(d.approver) + ' has ' + (d.approved ? 'approved' : 'declined') + ' your ' + esc(d.type.toLowerCase()) + ' request.' + (d.approved ? ' Your attendance calendar has been updated.' : ''),
        body: rows([['Leave type', esc(d.type)], ['Dates', esc(fmt(d.from)) + (d.to !== d.from ? ' &#8211; ' + esc(fmt(d.to)) : '')], ['Working days', esc(d.days)], d.note ? ['Note from approver', esc(d.note)] : null, ['Balance remaining', esc(d.balanceLeft) + ' days']]),
        cta: {
          label: 'View my leave',
          href: E.PORTAL + '/leave'
        }
      })
    },
    task_assigned: {
      subject: d => 'New task from ' + d.by + ': ' + d.title,
      render: d => shell({
        preheader: d.by + ' assigned you a task due ' + fmt(d.due) + '.',
        eyebrow: 'New task',
        title: esc(d.title),
        intro: esc(d.by) + ' assigned you a new task.' + (d.desc ? ' ' + esc(d.desc) : ''),
        body: rows([['Due', esc(fmt(d.due))], ['Priority', d.priority === 'High' ? pill('High', '#FCEAE8', '#B9382F') : d.priority === 'Medium' ? pill('Medium', '#FDF1DC', '#8A5A00') : pill('Low', '#EDF1F8', '#4A5670')], ['Assigned by', esc(d.by)]]),
        cta: {
          label: 'Open task',
          href: E.PORTAL + '/tasks'
        }
      })
    },
    holiday_greeting: {
      subject: d => 'Happy ' + d.holiday + ' from Aarniksha' + (d.closed ? ' — office closed ' + fmt(d.date) : ''),
      render: d => shell({
        preheader: d.message,
        hero: '<tr><td style="background:#2F80EC;padding:44px 36px 40px;font-family:' + E.FONT + '">' + '<div style="font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.82);margin-bottom:14px">Season\u2019s greetings</div>' + '<div style="font-size:42px;line-height:1;letter-spacing:-.035em;font-weight:800;color:#FFFFFF">Happy ' + esc(d.holiday) + '</div>' + '<div style="margin-top:14px;font-size:15px;font-weight:600;color:#FFFFFF">' + esc(fmt(d.date)) + '</div></td></tr>',
        title: 'Wishing you and your family a joyful ' + esc(d.holiday) + '.',
        intro: esc(d.message),
        body: d.closed ? rows([['Office', 'Closed on ' + esc(fmt(d.date))], ['Next working day', esc(fmt(d.nextWorking))]]) : '',
        cta: {
          label: 'See the holiday calendar',
          href: E.PORTAL + '/holidays'
        }
      })
    },
    monthly_summary: {
      subject: d => 'Your attendance summary for ' + d.month,
      render: d => {
        const tile = (n, l) => '<td width="25%" style="padding:18px 8px;text-align:center;border-right:1px solid #E3EAF6;font-family:' + E.FONT + '"><div style="font-size:30px;line-height:1;letter-spacing:-.03em;font-weight:800;color:#06367E">' + n + '</div><div style="margin-top:8px;font-size:11px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#8A94A6">' + l + '</div></td>';
        return shell({
          preheader: d.present + ' days present, ' + d.wfh + ' WFH, ' + d.leave + ' on leave in ' + d.month + '.',
          eyebrow: 'Monthly summary',
          title: esc(d.month) + ' at a glance',
          intro: 'Hi ' + esc(d.name.split(' ')[0]) + ', here\u2019s your attendance for ' + esc(d.month) + '. If anything looks wrong, raise a correction from the portal before the 7th.',
          body: '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8FAFE;border:1px solid #E3EAF6;border-radius:16px;border-collapse:separate"><tr>' + tile(d.present, 'Office') + tile(d.wfh, 'WFH') + tile(d.leave, 'Leave') + tile(d.absent, 'Absent').replace('border-right:1px solid #E3EAF6;', '') + '</tr></table>' + '<div style="height:18px"></div>' + rows([['Working days', esc(d.workingDays)], ['Average hours / day', esc(d.avgHours)], ['Late check-ins (after 9:45)', esc(d.late)], ['Holidays', esc(d.holidays)]]),
          cta: {
            label: 'View attendance',
            href: E.PORTAL + '/attendance'
          }
        });
      }
    }
  };
  E.TYPES = {
    account_approved: 'Account approved',
    account_suspended: 'Account suspended',
    leave_decision: 'Leave decision',
    task_assigned: 'Task assigned',
    holiday_greeting: 'Festival greeting',
    monthly_summary: 'Monthly summary'
  };
  E.subject = (type, d) => T[type].subject(d);
  E.render = (type, d) => T[type].render(d);
  window.AKEmail = E;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/email-templates.js", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/employee.jsx
try { (() => {
function useNow(ms = 1000) {
  const [n, setN] = React.useState(new Date());
  React.useEffect(() => {
    const t = setInterval(() => setN(new Date()), ms);
    return () => clearInterval(t);
  }, [ms]);
  return n;
}
function ClockCard() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const now = useNow();
  const [mode, setMode] = React.useState('office');
  const k = AKH.todayIso();
  const rec = (S.attendance[me.id] || {})[k];
  const hol = AKH.holidayOn(k);
  const weekend = AKH.isWeekend(AKH.today());
  const onLeave = rec && rec.status === 'leave';
  const nowHM = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
  const worked = rec && rec.in ? Math.max(0, AKH.mins(rec.out || nowHM) - AKH.mins(rec.in)) : 0;
  let status = 'You haven\u2019t checked in yet';
  if (hol) status = 'Holiday · ' + hol.name;else if (weekend) status = 'It\u2019s the weekend';else if (onLeave) status = 'You\u2019re on ' + AKStore.LEAVE_TYPES[rec.type].toLowerCase() + ' today';else if (rec && rec.out) status = 'Checked out at ' + fmt.t(rec.out);else if (rec && rec.in) status = 'Checked in at ' + fmt.t(rec.in) + ' · ' + (rec.status === 'wfh' ? 'Working from home' : 'Office');
  const canIn = !hol && !weekend && !onLeave && !(rec && rec.in);
  const canOut = rec && rec.in && !rec.out;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '22px',
      background: 'linear-gradient(140deg,#04255A 0%,#06367E 52%,#0A4497 100%)',
      padding: m ? '22px' : '30px 32px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-60%',
      right: '-20%',
      width: '70%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: '-30%',
      right: '2%',
      width: '42%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px dashed rgba(255,255,255,.08)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '11.5px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#9CC6FA'
    }
  }, "Today \xB7 ", now.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'short'
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: m ? '44px' : '58px',
      lineHeight: 1,
      letterSpacing: '-.04em',
      fontWeight: 800,
      fontVariantNumeric: 'tabular-nums'
    }
  }, now.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).replace(/\s?(am|pm)/i, ''), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '0.42em',
      marginLeft: '8px',
      letterSpacing: 0,
      color: 'rgba(255,255,255,.7)'
    }
  }, String(now.getSeconds()).padStart(2, '0'), " \xB7 ", now.getHours() < 12 ? 'am' : 'pm')), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: '15px',
      color: 'rgba(255,255,255,.86)'
    }
  }, status), rec && rec.in ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '18px',
      maxWidth: '420px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '13px',
      fontWeight: 700,
      color: 'rgba(255,255,255,.78)',
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", null, Math.floor(worked / 60), "h ", String(worked % 60).padStart(2, '0'), "m worked"), /*#__PURE__*/React.createElement("span", null, "Target 9h")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '6px',
      borderRadius: '999px',
      background: 'rgba(255,255,255,.16)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(100, worked / 540 * 100) + '%',
      height: '100%',
      background: 'linear-gradient(90deg,#6FA8F5,#FFFFFF)',
      borderRadius: '999px'
    }
  }))) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px',
      marginTop: '22px'
    }
  }, canIn ? /*#__PURE__*/React.createElement(Segmented, {
    dark: true,
    options: [['office', 'Office'], ['wfh', 'Work from home']],
    value: mode,
    onChange: setMode
  }) : null, canIn ? /*#__PURE__*/React.createElement(Btn, {
    variant: "white",
    size: "lg",
    icon: "LogIn",
    onClick: () => {
      AKStore.act.checkIn(me.id, mode);
      toast('Checked in · ' + (mode === 'wfh' ? 'working from home' : 'office'));
    }
  }, "Check in") : null, canOut ? /*#__PURE__*/React.createElement(Btn, {
    variant: "white",
    size: "lg",
    icon: "LogOut",
    onClick: () => {
      AKStore.act.checkOut(me.id);
      toast('Checked out. See you tomorrow!');
    }
  }, "Check out") : null)));
}
function LeaveBalances({
  me,
  compact
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: compact ? '14px' : '16px'
    }
  }, Object.entries(AKStore.LEAVE_TYPES).map(([k, label]) => {
    const b = me.leave[k];
    const left = b.total - b.used;
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '11.5px',
        fontWeight: 800,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: '#8A94A6',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, compact ? k : label), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '8px 0 10px',
        whiteSpace: 'nowrap',
        fontSize: compact ? '26px' : '32px',
        lineHeight: 1,
        letterSpacing: '-.035em',
        fontWeight: 800,
        color: '#06367E'
      }
    }, left, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        fontWeight: 700,
        color: '#8A94A6',
        letterSpacing: 0
      }
    }, " / ", b.total)), /*#__PURE__*/React.createElement(Progress, {
      value: left / b.total * 100,
      h: 6
    }));
  }));
}
function HomePage({
  go
}) {
  const S = useStore();
  const {
    me,
    m
  } = useApp();
  const t = AKH.todayIso();
  const now = AKH.today();
  const tasks = S.tasks.filter(x => x.assigneeId === me.id && x.status !== 'done').sort((a, b) => a.due.localeCompare(b.due)).slice(0, 4);
  const hols = S.holidays.filter(h => h.date >= t).slice(0, 3);
  const st = AKH.monthStats(me.id, now.getFullYear(), now.getMonth());
  const notes = S.notifications.filter(n => n.userId === me.id).sort((a, b) => b.at.localeCompare(a.at)).slice(0, 4);
  const c = navCounts(S, me);
  const waiting = (c.team || 0) + (['hr_admin', 'super_admin'].includes(me.role) ? (c['admin-employees'] || 0) + (c['admin-approvals'] || 0) : 0);
  const link = (label, r) => /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => go(r),
    style: {
      border: 'none',
      background: 'none',
      padding: 0,
      color: '#2F80EC',
      fontSize: '13.5px',
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit',
      whiteSpace: 'nowrap'
    }
  }, label, " \u2192");
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: m ? '18px' : '26px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: m ? '26px' : '34px',
      lineHeight: 1.08,
      letterSpacing: '-.03em',
      fontWeight: 800,
      color: '#101B33'
    }
  }, greet(), ", ", firstName(me), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: '15px',
      color: '#5B6577'
    }
  }, me.designation, " \xB7 ", me.dept, " \xB7 ", me.empId)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(auto-fit, minmax(380px, 1fr))',
      gap: m ? '16px' : '22px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: m ? '16px' : '22px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(ClockCard, null), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Due soon",
    sub: tasks.length ? tasks.length + ' open tasks' : null,
    action: link('All tasks', 'tasks')
  }), tasks.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "ListChecks",
    title: "Nothing due",
    body: "New tasks from your manager will show up here."
  }) : tasks.map((x, i) => {
    const over = x.due < t;
    return /*#__PURE__*/React.createElement("div", {
      key: x.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '13px 0',
        borderTop: i ? '1px solid #EDF1F8' : 'none'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Mark done",
      onClick: () => AKStore.act.setTaskStatus(x.id, 'done'),
      style: {
        width: '22px',
        height: '22px',
        borderRadius: '50%',
        border: '1.5px solid #C9D8F2',
        background: '#fff',
        cursor: 'pointer',
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '14.5px',
        fontWeight: 700,
        color: '#101B33',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, x.title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: '12.5px',
        color: over ? '#B9382F' : '#7A859A',
        fontWeight: over ? 700 : 500
      }
    }, over ? 'Overdue · ' : x.due === t ? 'Due today · ' : 'Due ' + fmt.dw(x.due) + ' · ', AKH.user(x.byId).name)), x.priority === 'High' ? /*#__PURE__*/React.createElement(Badge, {
      tone: "red"
    }, "High") : null);
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: now.toLocaleDateString('en-IN', {
      month: 'long'
    }) + ' so far',
    action: link('Attendance', 'attendance')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4,1fr)',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Office",
    value: st.present
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "WFH",
    value: st.wfh
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Leave",
    value: st.leave
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Avg hours",
    value: st.avgHours
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: m ? '16px' : '22px',
      minWidth: 0
    }
  }, waiting ? /*#__PURE__*/React.createElement(Card, {
    tint: true,
    style: {
      borderColor: '#C9D8F2'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '44px',
      height: '44px',
      flex: '0 0 auto',
      borderRadius: '50%',
      background: '#2F80EC',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '17px',
      fontWeight: 800
    }
  }, waiting), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 140px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, "Waiting for you"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '13px',
      color: '#5B6577'
    }
  }, "Approvals and access requests")), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    onClick: () => go(c.team ? 'team' : c['admin-employees'] ? 'admin-employees' : 'admin-approvals')
  }, "Review"))) : null, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Leave balance",
    sub: 'Year ' + now.getFullYear(),
    action: link('Apply', 'leave')
  }), /*#__PURE__*/React.createElement(LeaveBalances, {
    me: me,
    compact: true
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Upcoming holidays",
    action: link('Calendar', 'holidays')
  }), hols.map((h, i) => {
    const d = AKH.parse(h.date);
    const days = Math.round((d - now) / 864e5);
    return /*#__PURE__*/React.createElement("div", {
      key: h.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '12px 0',
        borderTop: i ? '1px solid #EDF1F8' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '48px',
        textAlign: 'center',
        flex: '0 0 auto',
        borderRadius: '12px',
        background: '#E9EFFB',
        padding: '6px 0'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '10.5px',
        fontWeight: 800,
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: '#2F80EC'
      }
    }, d.toLocaleDateString('en-IN', {
      month: 'short'
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '1px 0 0',
        fontSize: '19px',
        fontWeight: 800,
        color: '#06367E',
        lineHeight: 1.1
      }
    }, d.getDate())), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '14.5px',
        fontWeight: 700,
        color: '#101B33'
      }
    }, h.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: '12.5px',
        color: '#7A859A'
      }
    }, d.toLocaleDateString('en-IN', {
      weekday: 'long'
    }), AKH.isWeekend(d) ? ' · falls on a weekend' : '')), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '12.5px',
        fontWeight: 700,
        color: '#43506A',
        whiteSpace: 'nowrap'
      }
    }, days === 0 ? 'Today' : days === 1 ? 'Tomorrow' : 'in ' + days + 'd'));
  })), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Updates"
  }), notes.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "Bell",
    title: "No updates yet"
  }) : notes.map((n, i) => /*#__PURE__*/React.createElement("div", {
    key: n.id,
    style: {
      display: 'flex',
      gap: '12px',
      padding: '12px 0',
      borderTop: i ? '1px solid #EDF1F8' : 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '8px',
      height: '8px',
      marginTop: '6px',
      borderRadius: '50%',
      background: n.read ? '#DCE5F5' : '#2F80EC',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, n.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '13px',
      color: '#5B6577'
    }
  }, n.body)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: '#8A94A6',
      whiteSpace: 'nowrap'
    }
  }, fmt.ago(n.at))))))));
}
const CELL = {
  blue: ['#E7F1FD', '#1D6AE3'],
  grey: ['#EDF1F8', '#4A5670'],
  amber: ['#FDF1DC', '#8A5A00'],
  red: ['#FCEAE8', '#B9382F'],
  navy: ['#06367E', '#FFFFFF']
};
function CorrectionModal({
  open,
  onClose,
  date
}) {
  const {
    me,
    toast
  } = useApp();
  const S = useStore();
  const rec = (S.attendance[me.id] || {})[date] || {};
  const [f, setF] = React.useState({
    date: date || AKH.todayIso(),
    in: rec.in || '09:30',
    out: rec.out || '18:30',
    reason: ''
  });
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    const r = (S.attendance[me.id] || {})[date] || {};
    setF({
      date: date || AKH.iso(AKH.addDays(AKH.today(), -1)),
      in: r.in || '09:30',
      out: r.out || '18:30',
      reason: ''
    });
    setErr('');
  }, [open, date]);
  const submit = () => {
    if (f.date > AKH.todayIso()) return setErr('You can only correct today or earlier.');
    if (AKH.mins(f.out) <= AKH.mins(f.in)) return setErr('Check-out must be after check-in.');
    if (!f.reason.trim()) return setErr('Add a short reason for your manager.');
    AKStore.act.requestCorrection(me.id, f);
    onClose();
    toast('Correction sent to your manager and HR');
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    eyebrow: "Attendance",
    title: "Request a correction"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Date",
    type: "date",
    value: f.date,
    max: AKH.todayIso(),
    onChange: e => setF({
      ...f,
      date: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Check-in",
    type: "time",
    value: f.in,
    onChange: e => setF({
      ...f,
      in: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Check-out",
    type: "time",
    value: f.out,
    onChange: e => setF({
      ...f,
      out: e.target.value
    })
  })), /*#__PURE__*/React.createElement(TextArea, {
    label: "Reason",
    rows: 3,
    value: f.reason,
    onChange: e => setF({
      ...f,
      reason: e.target.value
    }),
    placeholder: "e.g. Forgot to check out after a client call"
  }), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    onClick: submit,
    icon: "Send"
  }, "Send request"))));
}
function AttendancePage() {
  const S = useStore();
  const {
    me,
    m
  } = useApp();
  const t = AKH.today();
  const [ym, setYm] = React.useState([t.getFullYear(), t.getMonth()]);
  const [sel, setSel] = React.useState(null);
  const [corr, setCorr] = React.useState(null);
  const [y, mo] = ym;
  const first = new Date(y, mo, 1);
  const lead = (first.getDay() + 6) % 7;
  const last = new Date(y, mo + 1, 0).getDate();
  const cells = [...Array(lead).fill(null), ...Array.from({
    length: last
  }, (_, i) => AKH.iso(new Date(y, mo, i + 1)))];
  while (cells.length % 7) cells.push(null);
  const st = AKH.monthStats(me.id, y, mo);
  const mine = S.corrections.filter(c => c.userId === me.id);
  const isCurrent = y === t.getFullYear() && mo === t.getMonth();
  const shift = n => {
    const d = new Date(y, mo + n, 1);
    setYm([d.getFullYear(), d.getMonth()]);
  };
  const info = sel ? dayInfo(S, me.id, sel) : null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Attendance",
    title: "My attendance",
    sub: 'Shift 9:30 am – 6:30 pm · check-ins after ' + fmt.t(AKStore.LATE_AFTER) + ' count as late.',
    actions: /*#__PURE__*/React.createElement(Btn, {
      variant: "outline",
      icon: "ClockAlert",
      onClick: () => setCorr(AKH.iso(AKH.addDays(t, -1)))
    }, "Request correction")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: m ? '16px' : '22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? 'repeat(3,1fr)' : 'repeat(6,1fr)',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Office",
    value: st.present
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "WFH",
    value: st.wfh
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Leave",
    value: st.leave
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Absent",
    value: st.absent,
    tone: st.absent ? '#B9382F' : undefined
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Late",
    value: st.late
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Avg hours",
    value: st.avgHours
  }))), /*#__PURE__*/React.createElement(Card, {
    pad: m ? '16px' : '24px'
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '18px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '18px',
      fontWeight: 800,
      letterSpacing: '-.015em',
      color: '#101B33'
    }
  }, first.toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(DS.IconButton, {
    variant: "outline",
    label: "Previous month",
    onClick: () => shift(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement(DS.IconButton, {
    variant: "outline",
    label: "Next month",
    onClick: () => shift(1),
    disabled: isCurrent,
    style: {
      opacity: isCurrent ? 0.4 : 1
    }
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, minmax(0,1fr))',
      gap: m ? '4px' : '8px'
    }
  }, ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => /*#__PURE__*/React.createElement("p", {
    key: d,
    style: {
      margin: '0 0 4px',
      fontSize: '11px',
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: '#8A94A6',
      textAlign: m ? 'center' : 'left',
      paddingLeft: m ? 0 : '4px'
    }
  }, m ? d[0] : d)), cells.map((k, i) => {
    if (!k) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const di = dayInfo(S, me.id, k);
    const isT = k === AKH.todayIso();
    const c = di.tone ? CELL[di.tone] : null;
    const weekend = di.kind === 'weekend';
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      onClick: () => setSel(k),
      style: {
        position: 'relative',
        minHeight: m ? '48px' : '92px',
        padding: m ? '6px 0' : '10px',
        borderRadius: m ? '10px' : '12px',
        border: '1px solid ' + (isT ? '#2F80EC' : '#EDF1F8'),
        boxShadow: isT ? '0 0 0 2px rgba(47,128,236,.15)' : 'none',
        background: weekend ? '#F8FAFE' : '#fff',
        cursor: 'pointer',
        textAlign: m ? 'center' : 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: m ? 'center' : 'stretch',
        gap: '6px',
        fontFamily: 'inherit',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '14px',
        fontWeight: 800,
        color: weekend ? '#8A94A6' : '#101B33'
      }
    }, AKH.parse(k).getDate()), c ? m ? /*#__PURE__*/React.createElement("span", {
      style: {
        width: '7px',
        height: '7px',
        borderRadius: '50%',
        background: c[1] === '#FFFFFF' ? '#06367E' : c[1]
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        padding: '3px 8px',
        borderRadius: '8px',
        background: c[0],
        color: c[1],
        fontSize: '11.5px',
        fontWeight: 700,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, di.label) : null, !m && di.rec && di.rec.in ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11.5px',
        color: di.late ? '#B9382F' : '#7A859A',
        fontVariantNumeric: 'tabular-nums'
      }
    }, fmt.t(di.rec.in), di.rec.out ? ' – ' + fmt.t(di.rec.out) : '') : null);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '14px',
      marginTop: '18px',
      paddingTop: '16px',
      borderTop: '1px solid #EDF1F8'
    }
  }, [['Office', 'blue'], ['WFH', 'grey'], ['Leave', 'amber'], ['Holiday', 'navy'], ['Absent / missed punch', 'red']].map(([l, tn]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontSize: '12.5px',
      fontWeight: 600,
      color: '#5B6577'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '3px',
      background: tn === 'navy' ? '#06367E' : CELL[tn][1]
    }
  }), l)))), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginTop: m ? '16px' : '22px'
    }
  }, /*#__PURE__*/React.createElement(CardHead, {
    title: "My correction requests",
    sub: "Missed check-ins or check-outs you've asked to fix"
  }), mine.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "ClockAlert",
    title: "No corrections requested"
  }) : mine.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: c.id,
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '12px',
      padding: '13px 0',
      borderTop: i ? '1px solid #EDF1F8' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14.5px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, fmt.dw(c.date), " \xB7 ", fmt.t(c.in), " \u2013 ", fmt.t(c.out)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '13px',
      color: '#7A859A'
    }
  }, c.reason)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: c.status
  })))), /*#__PURE__*/React.createElement(Modal, {
    open: !!sel,
    onClose: () => setSel(null),
    eyebrow: info ? info.label || 'Day' : '',
    title: sel ? fmt.long(sel) : ''
  }, info ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '16px'
    }
  }, info.rec && info.rec.in ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '14px',
      background: '#F8FAFE',
      border: '1px solid #E3EAF6',
      borderRadius: '16px',
      padding: '18px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    label: "Check-in",
    value: fmt.t(info.rec.in),
    tone: info.late ? '#B9382F' : undefined
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Check-out",
    value: info.rec.out ? fmt.t(info.rec.out) : '—'
  }), /*#__PURE__*/React.createElement(Stat, {
    label: "Worked",
    value: info.rec.out ? fmt.dur(info.rec.in, info.rec.out) : '—'
  })) : /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      color: '#5B6577'
    }
  }, info.kind === 'holiday' ? 'Office closed for ' + info.hol.name + '.' : info.kind === 'leave' ? AKStore.LEAVE_TYPES[info.rec.type] + ' (approved).' : info.kind === 'absent' ? 'No check-in recorded for this day.' : info.kind === 'weekend' ? 'Weekend.' : 'Nothing recorded yet.'), info.rec && info.rec.corrected ? /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, "Corrected by approval") : null, info.kind === 'missed' || info.kind === 'absent' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    icon: "ClockAlert",
    onClick: () => {
      const d = sel;
      setSel(null);
      setCorr(d);
    }
  }, "Request correction")) : null) : null), /*#__PURE__*/React.createElement(CorrectionModal, {
    open: !!corr,
    date: corr,
    onClose: () => setCorr(null)
  }));
}
function ApplyLeaveModal({
  open,
  onClose
}) {
  const {
    me,
    toast
  } = useApp();
  const t = AKH.todayIso();
  const [f, setF] = React.useState({
    type: 'CL',
    from: t,
    to: t,
    reason: ''
  });
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    setF({
      type: 'CL',
      from: t,
      to: t,
      reason: ''
    });
    setErr('');
  }, [open]);
  const days = f.from && f.to && f.to >= f.from ? AKH.workingDays(f.from, f.to) : 0;
  const left = me.leave[f.type].total - me.leave[f.type].used;
  const submit = () => {
    if (f.to < f.from) return setErr('The end date must be on or after the start date.');
    if (!days) return setErr('Those dates are all weekends or holidays.');
    if (days > left) return setErr('You only have ' + left + ' ' + AKStore.LEAVE_TYPES[f.type].toLowerCase() + ' days left.');
    if (!f.reason.trim()) return setErr('Add a short reason.');
    AKStore.act.applyLeave(me.id, f);
    onClose();
    toast('Leave request sent to ' + (me.managerId ? AKH.user(me.managerId).name : 'HR'));
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    eyebrow: "Leave",
    title: "Apply for leave"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Leave type",
    value: f.type,
    onChange: e => setF({
      ...f,
      type: e.target.value
    }),
    options: Object.entries(AKStore.LEAVE_TYPES).map(([k, l]) => [k, l + ' · ' + (me.leave[k].total - me.leave[k].used) + ' left'])
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "From",
    type: "date",
    value: f.from,
    min: t,
    onChange: e => setF({
      ...f,
      from: e.target.value,
      to: e.target.value > f.to ? e.target.value : f.to
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "To",
    type: "date",
    value: f.to,
    min: f.from,
    onChange: e => setF({
      ...f,
      to: e.target.value
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: '#F4FAFF',
      border: '1px solid #DCE5F5',
      borderRadius: '12px',
      padding: '12px 14px',
      fontSize: '14px',
      color: '#43506A'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Working days (excludes weekends & holidays)"), /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: '18px',
      color: '#06367E'
    }
  }, days)), /*#__PURE__*/React.createElement(TextArea, {
    label: "Reason",
    rows: 3,
    value: f.reason,
    onChange: e => setF({
      ...f,
      reason: e.target.value
    }),
    placeholder: "Visible to your manager and HR"
  }), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    icon: "Send",
    onClick: submit
  }, "Send request"))));
}
function LeavePage() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const [open, setOpen] = React.useState(false);
  const mine = S.leaves.filter(l => l.userId === me.id).sort((a, b) => b.from.localeCompare(a.from));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Leave",
    title: "Leave",
    sub: 'Approved by ' + (me.managerId ? AKH.user(me.managerId).name : 'HR') + '. You get an email as soon as a request is decided.',
    actions: /*#__PURE__*/React.createElement(Btn, {
      icon: "Plus",
      onClick: () => setOpen(true)
    }, "Apply for leave")
  }), /*#__PURE__*/React.createElement(Card, {
    style: {
      marginBottom: m ? '16px' : '22px'
    }
  }, /*#__PURE__*/React.createElement(LeaveBalances, {
    me: me,
    compact: m
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 14px',
      fontSize: '17px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, "My requests"), mine.length === 0 ? /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(Empty, {
    icon: "CalendarDays",
    title: "No leave requests yet"
  })) : m ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '12px'
    }
  }, mine.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.id,
    pad: "18px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, AKStore.LEAVE_TYPES[l.type]), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontSize: '13.5px',
      color: '#5B6577'
    }
  }, fmt.range(l.from, l.to), " \xB7 ", l.days, " day", l.days > 1 ? 's' : '')), /*#__PURE__*/React.createElement(StatusBadge, {
    status: l.status
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: '13.5px',
      color: '#7A859A'
    }
  }, l.reason), l.note ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: '13.5px',
      color: '#43506A'
    }
  }, "\u201C", l.note, "\u201D") : null, l.status === 'pending' ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '12px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "danger",
    onClick: () => {
      AKStore.act.cancelLeave(l.id);
      toast('Request cancelled');
    }
  }, "Cancel request")) : null))) : /*#__PURE__*/React.createElement(Table, {
    head: ['Type', 'Dates', 'Days', 'Reason', 'Approver', 'Status', '']
  }, mine.map(l => /*#__PURE__*/React.createElement("tr", {
    key: l.id
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      fontWeight: 700,
      color: '#101B33'
    }
  }, AKStore.LEAVE_TYPES[l.type]), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, fmt.range(l.from, l.to)), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, l.days), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      maxWidth: '260px'
    }
  }, l.reason, l.note ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '4px',
      color: '#06367E'
    }
  }, "\u201C", l.note, "\u201D") : null), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, l.approverId ? AKH.user(l.approverId).name : '—'), /*#__PURE__*/React.createElement("td", {
    style: TD
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: l.status
  })), /*#__PURE__*/React.createElement("td", {
    style: {
      ...TD,
      textAlign: 'right'
    }
  }, l.status === 'pending' ? /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "danger",
    onClick: () => {
      AKStore.act.cancelLeave(l.id);
      toast('Request cancelled');
    }
  }, "Cancel") : null)))), /*#__PURE__*/React.createElement(ApplyLeaveModal, {
    open: open,
    onClose: () => setOpen(false)
  }));
}
Object.assign(window, {
  HomePage,
  AttendancePage,
  LeavePage,
  LeaveBalances,
  useNow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/employee.jsx", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/shell.jsx
try { (() => {
const NAV = [{
  group: 'Me',
  items: [['home', 'Home', 'LayoutDashboard'], ['attendance', 'Attendance', 'CalendarCheck'], ['leave', 'Leave', 'CalendarDays'], ['tasks', 'Tasks', 'ListChecks'], ['performance', 'Performance', 'Target'], ['holidays', 'Holidays', 'PartyPopper']]
}, {
  group: 'My team',
  roles: ['manager', 'hr_admin', 'super_admin'],
  items: [['team', 'Team', 'Users']]
}, {
  group: 'Admin',
  roles: ['hr_admin', 'super_admin'],
  items: [['admin', 'Overview', 'LayoutGrid'], ['admin-employees', 'Employees', 'UserCheck'], ['admin-approvals', 'Approvals', 'Inbox'], ['admin-holidays', 'Holidays & festivals', 'CalendarHeart'], ['admin-outbox', 'Email outbox', 'Mail'], ['admin-roles', 'Roles & access', 'KeyRound', ['super_admin']]]
}];
const routeAllowed = (route, role) => NAV.some(g => (!g.roles || g.roles.includes(role)) && g.items.some(([k,,, r]) => k === route && (!r || r.includes(role))));
const navFor = role => NAV.filter(g => !g.roles || g.roles.includes(role)).map(g => ({
  ...g,
  items: g.items.filter(([,,, r]) => !r || r.includes(role))
}));
const ROUTE_LABEL = Object.fromEntries(NAV.flatMap(g => g.items.map(([k, l]) => [k, l])));
function navCounts(S, me) {
  const t = AKH.todayIso();
  const reports = S.users.filter(u => u.managerId === me.id).map(u => u.id);
  return {
    tasks: S.tasks.filter(x => x.assigneeId === me.id && x.status !== 'done' && x.due <= t).length,
    team: S.leaves.filter(l => l.status === 'pending' && l.approverId === me.id).length + S.corrections.filter(c => c.status === 'pending' && reports.includes(c.userId)).length,
    'admin-employees': S.users.filter(u => u.status === 'pending').length,
    'admin-approvals': S.corrections.filter(c => c.status === 'pending').length + S.leaves.filter(l => l.status === 'pending').length
  };
}
function CountDot({
  n,
  light
}) {
  if (!n) return null;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '20px',
      height: '20px',
      padding: '0 6px',
      borderRadius: '999px',
      background: light ? '#2F80EC' : '#D4453B',
      color: '#fff',
      fontSize: '11px',
      fontWeight: 800,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxSizing: 'border-box'
    }
  }, n);
}
function NavItem({
  k,
  label,
  icon,
  active,
  count,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-current": active ? 'page' : undefined,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 12px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'inherit',
      textAlign: 'left',
      background: active ? 'rgba(255,255,255,.14)' : h ? 'rgba(255,255,255,.07)' : 'transparent',
      color: '#fff',
      opacity: active || h ? 1 : 0.78,
      fontSize: '14.5px',
      fontWeight: active ? 700 : 600,
      transition: 'background .2s ease, opacity .2s ease'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 18,
    color: active ? '#9CC6FA' : undefined
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, label), /*#__PURE__*/React.createElement(CountDot, {
    n: count,
    light: true
  }));
}
function Sidebar({
  route,
  go
}) {
  const S = useStore();
  const {
    me
  } = useApp();
  const counts = navCounts(S, me);
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 0,
      height: '100vh',
      width: '256px',
      flex: '0 0 256px',
      background: '#06367E',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: '-18%',
      left: '-40%',
      width: '160%',
      aspectRatio: '1',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.07)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '22px 20px 18px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '46px',
      height: '46px',
      background: '#fff',
      borderRadius: '12px',
      padding: '4px',
      boxSizing: 'border-box',
      boxShadow: '0 6px 20px rgba(2,22,56,.28)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Aarniksha Solutions",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15.5px',
      fontWeight: 800,
      letterSpacing: '-.01em',
      color: '#fff'
    }
  }, "Aarniksha"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '10.5px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#9CC6FA'
    }
  }, "Employee portal"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'relative',
      flex: 1,
      overflowY: 'auto',
      padding: '6px 12px 12px',
      display: 'flex',
      flexDirection: 'column',
      gap: '18px'
    }
  }, navFor(me.role).map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      padding: '0 12px',
      fontSize: '10.5px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, g.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px'
    }
  }, g.items.map(([k, label, icon]) => /*#__PURE__*/React.createElement(NavItem, {
    key: k,
    k: k,
    label: label,
    icon: icon,
    active: route === k,
    count: counts[k],
    onClick: () => go(k)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderTop: '1px solid rgba(255,255,255,.12)',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: me.name,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14px',
      fontWeight: 700,
      color: '#fff',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, me.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '12px',
      color: 'rgba(255,255,255,.66)'
    }
  }, AKStore.ROLES[me.role])), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Sign out",
    title: "Sign out",
    onClick: () => AKStore.act.signOut(),
    style: {
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      border: '1px solid rgba(255,255,255,.2)',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "LogOut",
    size: 16
  }))));
}
function NotifPanel({
  go,
  onClose
}) {
  const S = useStore();
  const {
    me,
    m
  } = useApp();
  const list = S.notifications.filter(n => n.userId === me.id).sort((a, b) => b.at.localeCompare(a.at)).slice(0, 12);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: m ? '60px' : '62px',
      right: m ? '12px' : 0,
      left: m ? '12px' : 'auto',
      width: m ? 'auto' : '380px',
      maxHeight: m ? '70%' : '520px',
      overflowY: 'auto',
      background: '#fff',
      border: '1px solid #E3EAF6',
      borderRadius: '18px',
      boxShadow: '0 22px 44px rgba(16,27,51,.14)',
      zIndex: 40,
      animation: 'ak-pop .24s cubic-bezier(.2,.7,.3,1) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 18px',
      borderBottom: '1px solid #EDF1F8',
      position: 'sticky',
      top: 0,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, "Notifications"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => AKStore.act.markRead(me.id),
    style: {
      border: 'none',
      background: 'none',
      color: '#2F80EC',
      fontSize: '13px',
      fontWeight: 700,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, "Mark all read")), list.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "Bell",
    title: "You're all caught up"
  }) : list.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    type: "button",
    onClick: () => {
      onClose();
      if (n.link && routeAllowed(n.link, me.role)) go(n.link);
    },
    style: {
      width: '100%',
      display: 'flex',
      gap: '12px',
      padding: '14px 18px',
      border: 'none',
      borderBottom: '1px solid #EDF1F8',
      background: n.read ? '#fff' : '#F4FAFF',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '8px',
      height: '8px',
      marginTop: '6px',
      borderRadius: '50%',
      background: n.read ? 'transparent' : '#2F80EC',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '14px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, n.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '2px',
      fontSize: '13px',
      color: '#5B6577'
    }
  }, n.body)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: '#8A94A6',
      whiteSpace: 'nowrap'
    }
  }, fmt.ago(n.at)))));
}
function Bell({
  go
}) {
  const S = useStore();
  const {
    me
  } = useApp();
  const [open, setOpen] = React.useState(false);
  const unread = S.notifications.filter(n => n.userId === me.id && !n.read).length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": 'Notifications, ' + unread + ' unread',
    onClick: () => setOpen(v => !v),
    style: {
      position: 'relative',
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      border: '1px solid #E3EAF6',
      background: open ? '#E9EFFB' : '#fff',
      color: '#06367E',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "Bell",
    size: 19
  }), unread ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: '-3px',
      right: '-3px'
    }
  }, /*#__PURE__*/React.createElement(CountDot, {
    n: unread
  })) : null), open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    onClick: () => setOpen(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 30
    }
  }), /*#__PURE__*/React.createElement(NotifPanel, {
    go: go,
    onClose: () => setOpen(false)
  })) : null);
}
function Topbar({
  go
}) {
  const {
    me
  } = useApp();
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      height: '72px',
      background: 'rgba(255,255,255,.92)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid #E9EDF5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      color: '#5B6577',
      fontSize: '14px',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: "MapPin",
    size: 16,
    color: "#2F80EC"
  }), me.location, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C9D3E3'
    }
  }, "\xB7"), " ", new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../ui_kits/website/index.html",
    style: {
      fontSize: '14px',
      fontWeight: 600,
      color: '#43506A',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px'
    }
  }, "Website ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px'
    }
  }, "\u2197")), /*#__PURE__*/React.createElement(Bell, {
    go: go
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: me.name,
    size: 40
  })));
}
const TABS = [['home', 'Home', 'LayoutDashboard'], ['attendance', 'Attendance', 'CalendarCheck'], ['tasks', 'Tasks', 'ListChecks'], ['leave', 'Leave', 'CalendarDays']];
function MoreSheet({
  route,
  go,
  onClose
}) {
  const S = useStore();
  const {
    me
  } = useApp();
  const counts = navCounts(S, me);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(6,25,58,.5)',
      animation: 'ak-fadein .2s ease both'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#06367E',
      borderRadius: '24px 24px 0 0',
      padding: '10px 16px 24px',
      maxHeight: '82%',
      overflowY: 'auto',
      animation: 'ak-pop .28s cubic-bezier(.2,.7,.3,1) both'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '4px',
      borderRadius: '2px',
      background: 'rgba(255,255,255,.3)',
      margin: '0 auto 14px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '4px 8px 16px',
      borderBottom: '1px solid rgba(255,255,255,.12)',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: me.name,
    size: 40
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 700,
      color: '#fff'
    }
  }, me.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '12.5px',
      color: 'rgba(255,255,255,.66)'
    }
  }, me.designation, " \xB7 ", AKStore.ROLES[me.role]))), navFor(me.role).map(g => /*#__PURE__*/React.createElement("div", {
    key: g.group,
    style: {
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      padding: '0 12px',
      fontSize: '10.5px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,.5)'
    }
  }, g.group), g.items.map(([k, label, icon]) => /*#__PURE__*/React.createElement(NavItem, {
    key: k,
    k: k,
    label: label,
    icon: icon,
    active: route === k,
    count: counts[k],
    onClick: () => {
      onClose();
      go(k);
    }
  })))), /*#__PURE__*/React.createElement(Btn, {
    variant: "glass",
    icon: "LogOut",
    full: true,
    onClick: () => AKStore.act.signOut()
  }, "Sign out")));
}
function AppShell({
  route,
  go,
  children
}) {
  const {
    m
  } = useApp();
  const [more, setMore] = React.useState(false);
  const scroller = React.useRef(null);
  React.useEffect(() => {
    if (scroller.current) scroller.current.scrollTop = 0;else window.scrollTo(0, 0);
  }, [route]);
  if (m) {
    const inTabs = TABS.some(([k]) => k === route);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: '#F8FAFE'
      }
    }, /*#__PURE__*/React.createElement("header", {
      style: {
        position: 'relative',
        flex: '0 0 auto',
        height: '64px',
        background: '#06367E',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '0 16px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '36px',
        height: '36px',
        background: '#fff',
        borderRadius: '10px',
        padding: '3px',
        boxSizing: 'border-box'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo.png",
      alt: "Aarniksha Solutions",
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        flex: 1,
        margin: 0,
        fontSize: '16px',
        fontWeight: 800,
        color: '#fff',
        letterSpacing: '-.01em'
      }
    }, ROUTE_LABEL[route]), /*#__PURE__*/React.createElement(Bell, {
      go: go
    })), /*#__PURE__*/React.createElement("main", {
      ref: scroller,
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '20px 16px 28px'
      }
    }, children), /*#__PURE__*/React.createElement("nav", {
      style: {
        flex: '0 0 auto',
        display: 'flex',
        background: '#fff',
        borderTop: '1px solid #E3EAF6',
        padding: '6px 6px 14px'
      }
    }, [...TABS, ['__more', 'More', 'Menu']].map(([k, label, icon]) => {
      const on = k === '__more' ? !inTabs || more : route === k;
      return /*#__PURE__*/React.createElement("button", {
        key: k,
        type: "button",
        onClick: () => k === '__more' ? setMore(true) : go(k),
        style: {
          flex: 1,
          minHeight: '52px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '4px',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          color: on ? '#2F80EC' : '#7A859A',
          fontSize: '11.5px',
          fontWeight: on ? 800 : 600
        }
      }, /*#__PURE__*/React.createElement(PIcon, {
        name: icon,
        size: 21,
        stroke: on ? 2 : 1.6
      }), label);
    })), more ? /*#__PURE__*/React.createElement(MoreSheet, {
      route: route,
      go: go,
      onClose: () => setMore(false)
    }) : null);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: '#F8FAFE'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    route: route,
    go: go
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    go: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: '1240px',
      margin: '0 auto',
      padding: '32px 36px 56px'
    }
  }, children)));
}
Object.assign(window, {
  AppShell,
  routeAllowed,
  navCounts,
  ROUTE_LABEL
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/shell.jsx", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/store.js
try { (() => {
/* Simulated backend for the prototype. Everything persists in localStorage so the
   employee side and the admin panel see the same data. See HANDOFF.md for the real schema. */
(function () {
  const KEY = 'ak-portal-v1';
  const pad = n => String(n).padStart(2, '0');
  const iso = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  const parse = s => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  const addDays = (d, n) => {
    const x = new Date(d);
    x.setDate(x.getDate() + n);
    return x;
  };
  const today = () => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  };
  const todayIso = () => iso(today());
  const isWeekend = d => d.getDay() === 0 || d.getDay() === 6;
  const rnd = s => {
    const x = Math.sin(s * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  };
  const nowHM = () => {
    const d = new Date();
    return pad(d.getHours()) + ':' + pad(d.getMinutes());
  };
  const uid = p => p + Date.now().toString(36).slice(-4) + Math.random().toString(36).slice(2, 6);
  const mins = hm => {
    const [h, m] = hm.split(':').map(Number);
    return h * 60 + m;
  };
  const ROLES = {
    employee: 'Employee',
    manager: 'Team manager',
    hr_admin: 'HR admin',
    super_admin: 'Super admin'
  };
  const LEAVE_TYPES = {
    CL: 'Casual leave',
    SL: 'Sick leave',
    EL: 'Earned leave'
  };
  const DEPTS = ['Leadership', 'Recruitment', 'HR & Operations', 'Payroll & Compliance', 'Business Development', 'IT Services'];
  const LATE_AFTER = '09:45';
  const HOLIDAYS_2026 = [['2026-01-14', 'Bhogi', 'Festival'], ['2026-01-15', 'Sankranti / Pongal', 'Festival'], ['2026-01-26', 'Republic Day', 'National'], ['2026-02-15', 'Maha Shivaratri', 'Festival'], ['2026-03-03', 'Holi', 'Festival'], ['2026-03-19', 'Ugadi', 'Telangana'], ['2026-03-21', 'Eid-ul-Fitr (Ramzan)', 'Festival'], ['2026-03-22', 'Following day of Ramzan', 'Festival'], ['2026-03-27', 'Sri Rama Navami', 'Festival'], ['2026-04-03', 'Good Friday', 'Festival'], ['2026-04-05', 'Babu Jagjivan Ram Jayanti', 'Telangana'], ['2026-04-14', 'Dr. B.R. Ambedkar Jayanti', 'National'], ['2026-05-27', 'Eid-ul-Azha (Bakrid)', 'Festival'], ['2026-06-26', 'Muharram (10th Moharam)', 'Festival'], ['2026-08-10', 'Bonalu', 'Telangana'], ['2026-08-15', 'Independence Day', 'National'], ['2026-08-26', 'Eid Milad-un-Nabi', 'Festival'], ['2026-09-04', 'Sri Krishna Ashtami', 'Festival'], ['2026-09-14', 'Vinayaka Chavithi', 'Festival'], ['2026-10-02', 'Mahatma Gandhi Jayanti', 'National'], ['2026-10-18', 'Saddula Bathukamma', 'Telangana'], ['2026-10-20', 'Vijaya Dasami / Dussehra', 'Festival'], ['2026-10-21', 'Day after Vijaya Dasami', 'Festival'], ['2026-11-08', 'Deepavali', 'Festival'], ['2026-11-24', 'Kartika Purnima / Guru Nanak Jayanti', 'Festival'], ['2026-12-25', 'Christmas', 'Festival'], ['2026-12-26', 'Boxing Day', 'Festival'], ['2027-01-26', 'Republic Day', 'National']];
  const GREETINGS = {
    Deepavali: 'May the festival of lights bring warmth, health and prosperity to you and everyone at home.',
    'Vijaya Dasami / Dussehra': 'May this Dasara bring new beginnings and the strength to achieve everything you set out to do.',
    Christmas: 'Wishing you a peaceful Christmas and a bright new year with the people you love.',
    'Saddula Bathukamma': 'Celebrating Telangana\u2019s festival of flowers with you and your family.',
    Bonalu: 'Wishing you and your family a happy and blessed Bonalu.'
  };
  let S = null;
  const listeners = new Set();
  const save = () => {
    try {
      localStorage.setItem(KEY, JSON.stringify(S));
    } catch (e) {}
  };
  const emit = () => {
    save();
    listeners.forEach(fn => fn());
  };
  const holidayOn = (st, date) => st.holidays.find(h => h.date === date);
  const isWorking = (st, d) => !isWeekend(d) && !holidayOn(st, iso(d));
  const workingDays = (st, from, to) => {
    let n = 0;
    for (let d = parse(from); d <= parse(to); d = addDays(d, 1)) if (isWorking(st, d)) n++;
    return n;
  };
  const nextWorking = (st, date) => {
    let d = addDays(parse(date), 1);
    while (!isWorking(st, d)) d = addDays(d, 1);
    return iso(d);
  };
  const user = id => S.users.find(u => u.id === id);
  const admins = () => S.users.filter(u => u.status === 'active' && (u.role === 'hr_admin' || u.role === 'super_admin'));
  const fmtDate = (s, o) => parse(s).toLocaleDateString('en-IN', o || {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  function notify(userId, title, body, link) {
    S.notifications.unshift({
      id: uid('n'),
      userId,
      title,
      body,
      link,
      at: new Date().toISOString(),
      read: false
    });
  }
  function email(type, u, data, trigger) {
    if (!u) return;
    S.outbox.unshift({
      id: uid('m'),
      type,
      to: u.email,
      toName: u.name,
      subject: AKEmail.subject(type, data),
      data,
      trigger,
      at: new Date().toISOString()
    });
  }
  function broadcast(type, data, trigger, recipients) {
    S.outbox.unshift({
      id: uid('m'),
      type,
      to: 'all-staff@aarnikshasolutions.com',
      toName: 'All employees (' + recipients + ')',
      subject: AKEmail.subject(type, data),
      data,
      trigger,
      at: new Date().toISOString()
    });
  }
  function monthStats(st, userId, y, m) {
    const u = st.users.find(x => x.id === userId);
    const rec = st.attendance[userId] || {};
    const t = today();
    const r = {
      present: 0,
      wfh: 0,
      leave: 0,
      absent: 0,
      late: 0,
      holidays: 0,
      workingDays: 0,
      hours: 0,
      hourDays: 0
    };
    const last = new Date(y, m + 1, 0).getDate();
    for (let day = 1; day <= last; day++) {
      const d = new Date(y, m, day);
      const k = iso(d);
      if (isWeekend(d)) continue;
      if (holidayOn(st, k)) {
        r.holidays++;
        continue;
      }
      r.workingDays++;
      const a = rec[k];
      if (a && a.status === 'leave') {
        r.leave++;
        continue;
      }
      if (d > t) continue;
      if (a && a.in) {
        a.status === 'wfh' ? r.wfh++ : r.present++;
        if (mins(a.in) > mins(LATE_AFTER)) r.late++;
        if (a.out) {
          r.hours += (mins(a.out) - mins(a.in)) / 60;
          r.hourDays++;
        }
      } else if (d < t && (!u || !u.joined || k >= u.joined)) r.absent++;
    }
    r.avgHours = r.hourDays ? (r.hours / r.hourDays).toFixed(1) + 'h' : '—';
    return r;
  }
  function seed() {
    const t = today();
    const st = {
      version: 1,
      session: null,
      users: [],
      attendance: {},
      leaves: [],
      corrections: [],
      tasks: [],
      goals: [],
      assessments: {},
      holidays: [],
      notifications: [],
      outbox: []
    };
    st.holidays = HOLIDAYS_2026.map(([date, name, type], i) => ({
      id: 'h' + i,
      date,
      name,
      type,
      greetingSent: date < iso(t) && type !== 'National'
    }));
    const bal = (cl, sl, el) => ({
      CL: {
        total: 12,
        used: cl
      },
      SL: {
        total: 8,
        used: sl
      },
      EL: {
        total: 15,
        used: el
      }
    });
    const U = (id, name, role, designation, dept, managerId, status, empId, phone, extra) => Object.assign({
      id,
      name,
      role,
      designation,
      dept,
      managerId,
      status,
      empId,
      phone,
      email: name.toLowerCase().split(' ')[0] + '.' + name.toLowerCase().split(' ').slice(-1)[0] + '@aarnikshasolutions.com',
      joined: '2025-04-01',
      location: 'Hi-Tech City, Hyderabad',
      leave: bal(3, 1, 2)
    }, extra || {});
    st.users = [U('u1', 'Arjun Laknepally', 'super_admin', 'Director', 'Leadership', null, 'active', 'AKS-001', '9848011001', {
      joined: '2024-06-01',
      leave: bal(2, 0, 1)
    }), U('u2', 'Sneha Rampalli', 'super_admin', 'Director', 'Leadership', null, 'active', 'AKS-002', '9848011002', {
      joined: '2024-06-01',
      leave: bal(1, 1, 3)
    }), U('u3', 'Kavya Reddy', 'hr_admin', 'HR Manager', 'HR & Operations', 'u2', 'active', 'AKS-004', '9848011004', {
      joined: '2024-09-02'
    }), U('u4', 'Rahul Varma', 'manager', 'Team Lead, IT Recruitment', 'Recruitment', 'u1', 'active', 'AKS-007', '9848011007', {
      joined: '2024-11-04',
      leave: bal(4, 2, 3)
    }), U('u5', 'Priya Sharma', 'employee', 'Senior Recruiter', 'Recruitment', 'u4', 'active', 'AKS-012', '9848011012', {
      leave: bal(4, 1, 2)
    }), U('u6', 'Mohammed Irfan', 'employee', 'Technical Recruiter', 'Recruitment', 'u4', 'active', 'AKS-015', '9848011015', {
      joined: '2025-07-14',
      leave: bal(2, 2, 0)
    }), U('u7', 'Ananya Rao', 'employee', 'Recruitment Associate', 'Recruitment', 'u4', 'active', 'AKS-018', '9848011018', {
      joined: iso(new Date(t.getFullYear(), t.getMonth() - 1, 3)),
      leave: bal(0, 0, 0)
    }), U('u8', 'Sai Kiran Goud', 'employee', 'Payroll Executive', 'Payroll & Compliance', 'u3', 'active', 'AKS-021', '9848011021', {
      leave: bal(5, 2, 4)
    }), U('u9', 'Divya Menon', 'employee', 'Business Development Executive', 'Business Development', 'u1', 'suspended', 'AKS-023', '9848011023', {
      suspendedReason: 'Pending document verification'
    }), U('u10', 'Vamshi Krishna', 'employee', 'Recruitment Associate', 'Recruitment', null, 'pending', null, '9848011030', {
      joined: null,
      requestedAt: iso(addDays(t, -1))
    }), U('u11', 'Nikhita Jain', 'employee', 'HR Executive', 'HR & Operations', null, 'pending', null, '9848011031', {
      joined: null,
      requestedAt: iso(addDays(t, -3))
    })];
    const prevStart = new Date(t.getFullYear(), t.getMonth() - 1, 1);
    st.users.filter(u => u.status !== 'pending').forEach((u, ui) => {
      const rec = st.attendance[u.id] = {};
      for (let d = new Date(prevStart); d < t; d = addDays(d, 1)) {
        const k = iso(d);
        if (!isWorking(st, d) || u.joined && k < u.joined) continue;
        if (u.status === 'suspended' && d > addDays(t, -12)) continue;
        const r = rnd((ui + 1) * 997 + d.getTime() / 864e5);
        if (r < 0.03) continue;
        const wfh = r > 0.88;
        const inM = 9 * 60 + 12 + Math.floor(rnd(r * 31 + ui) * 42);
        const outM = 18 * 60 + 18 + Math.floor(rnd(r * 17 + ui) * 50);
        rec[k] = {
          status: wfh ? 'wfh' : 'present',
          in: pad(Math.floor(inM / 60)) + ':' + pad(inM % 60),
          out: pad(Math.floor(outM / 60)) + ':' + pad(outM % 60)
        };
      }
    });
    const todayWorking = isWorking(st, t);
    if (todayWorking) {
      [['u1', '09:21', 'present'], ['u2', '09:40', 'present'], ['u3', '09:18', 'present'], ['u4', '09:26', 'present'], ['u6', '09:52', 'wfh'], ['u8', '09:34', 'present']].forEach(([id, tin, s]) => {
        st.attendance[id][iso(t)] = {
          status: s,
          in: tin,
          out: null
        };
      });
    }
    const weekdaysIn = (y, m) => {
      const out = [];
      for (let d = new Date(y, m, 1); d.getMonth() === m; d = addDays(d, 1)) if (isWorking(st, d)) out.push(iso(d));
      return out;
    };
    const pw = weekdaysIn(prevStart.getFullYear(), prevStart.getMonth());
    const mkLeave = o => {
      const l = Object.assign({
        id: uid('l'),
        appliedAt: o.from,
        note: ''
      }, o);
      l.days = workingDays(st, l.from, l.to);
      st.leaves.push(l);
      if (l.status === 'approved') for (let d = parse(l.from); d <= parse(l.to); d = addDays(d, 1)) if (isWorking(st, d)) st.attendance[l.userId][iso(d)] = {
        status: 'leave',
        type: l.type
      };
      return l;
    };
    mkLeave({
      userId: 'u5',
      type: 'CL',
      from: pw[8],
      to: pw[9],
      reason: 'Family function in Warangal',
      status: 'approved',
      approverId: 'u4',
      decidedAt: pw[6],
      note: 'Enjoy the function!'
    });
    let ad = t;
    while (!isWorking(st, ad)) ad = addDays(ad, 1);
    mkLeave({
      userId: 'u7',
      type: 'SL',
      from: iso(ad),
      to: nextWorking(st, iso(ad)),
      reason: 'Fever — doctor advised rest',
      status: 'approved',
      approverId: 'u4',
      decidedAt: iso(ad)
    });
    let nw = addDays(t, 7);
    while (!isWorking(st, nw)) nw = addDays(nw, 1);
    let nw2 = nw;
    for (let i = 0; i < 2; i++) nw2 = parse(nextWorking(st, iso(nw2)));
    mkLeave({
      userId: 'u6',
      type: 'EL',
      from: iso(nw),
      to: iso(nw2),
      reason: 'Travelling home to Kurnool for a family wedding',
      status: 'pending',
      approverId: 'u4',
      appliedAt: iso(addDays(t, -1))
    });
    let sl = addDays(t, 12);
    while (!isWorking(st, sl)) sl = addDays(sl, 1);
    mkLeave({
      userId: 'u8',
      type: 'CL',
      from: iso(sl),
      to: iso(sl),
      reason: 'Bank and passport appointment',
      status: 'pending',
      approverId: 'u3',
      appliedAt: todayIso()
    });
    let mp = addDays(t, -3);
    while (!isWorking(st, mp)) mp = addDays(mp, -1);
    st.attendance.u5[iso(mp)] = {
      status: 'present',
      in: '09:36',
      out: null
    };
    let mp2 = addDays(t, -2);
    while (!isWorking(st, mp2)) mp2 = addDays(mp2, -1);
    st.attendance.u6[iso(mp2)] = {
      status: 'present',
      in: '09:41',
      out: null
    };
    st.corrections.push({
      id: uid('c'),
      userId: 'u6',
      date: iso(mp2),
      in: '09:41',
      out: '18:47',
      reason: 'Forgot to check out — was on a client call till 6:45 pm',
      status: 'pending',
      at: iso(addDays(t, -1))
    });
    const due = n => iso(addDays(t, n));
    const task = (assigneeId, byId, title, desc, d, priority, status) => st.tasks.push({
      id: uid('t'),
      assigneeId,
      byId,
      title,
      desc,
      due: due(d),
      priority,
      status,
      createdAt: due(-5)
    });
    task('u5', 'u4', 'Shortlist 5 Java developers for TechNova', 'Senior Java/Spring Boot, 6–9 yrs, Hyderabad hybrid. Share profiles in the tracker with notice periods.', 0, 'High', 'in_progress');
    task('u5', 'u4', 'Schedule client interviews — Fintrix Bank', 'Three candidates for the risk analyst role. Coordinate slots for Thursday or Friday.', 1, 'High', 'todo');
    task('u5', 'u4', 'Reference checks for two selected candidates', 'Use the standard reference form; two referees each.', 3, 'Medium', 'todo');
    task('u5', 'u4', 'Update candidate tracker for October', '', -2, 'Low', 'done');
    task('u5', 'u4', 'Prepare weekly hiring report', 'Pipeline by client, offers made, joins this week.', 2, 'Medium', 'todo');
    task('u6', 'u4', 'Source DevOps engineers (AWS, Terraform)', 'Target 15 profiles for Cloudline.', 2, 'High', 'in_progress');
    task('u6', 'u4', 'Technical screening — 4 React candidates', '', -1, 'Medium', 'todo');
    task('u7', 'u4', 'Complete onboarding documents', 'Upload PAN, Aadhaar and bank details on the HR drive.', 4, 'Low', 'todo');
    task('u8', 'u3', 'Process October payroll inputs', 'Attendance, leave and reimbursements cut-off.', 1, 'High', 'in_progress');
    const goal = (userId, title, progress, weight, dueIso) => st.goals.push({
      id: uid('g'),
      userId,
      title,
      progress,
      weight,
      due: dueIso,
      updatedAt: due(-6)
    });
    goal('u5', 'Close 18 IT placements in H2', 61, 40, '2026-12-31');
    goal('u5', 'Bring time-to-shortlist down to 4 days', 70, 25, '2026-12-31');
    goal('u5', 'Build a talent pool of 300 cloud engineers', 82, 20, '2026-12-15');
    goal('u5', 'Complete the Advanced Sourcing certification', 40, 15, '2026-11-30');
    goal('u6', 'Close 12 technical placements in H2', 48, 50, '2026-12-31');
    goal('u6', 'Maintain 85% interview-to-offer quality score', 76, 50, '2026-12-31');
    goal('u4', 'Team target: 45 placements in H2', 58, 60, '2026-12-31');
    goal('u4', 'Hire and ramp up 2 recruiters', 50, 40, '2026-12-31');
    goal('u8', 'Zero-error payroll runs for H2', 83, 60, '2026-12-31');
    goal('u8', 'Automate PF and ESI challan reports', 35, 40, '2026-12-31');
    st.cycle = {
      id: 'H2-2026',
      name: 'H2 2026 review',
      due: '2026-11-30'
    };
    st.assessments.u6 = {
      rating: 4,
      achievements: 'Closed 7 technical roles including two niche DevOps positions.',
      challenges: 'Long notice periods slowed two closures.',
      next: 'Build a bench of pre-screened cloud profiles.',
      submittedAt: due(-2)
    };
    const N = (userId, title, body, link, ago, read) => st.notifications.push({
      id: uid('n'),
      userId,
      title,
      body,
      link,
      at: addDays(new Date(), -ago).toISOString(),
      read: !!read
    });
    N('u5', 'New task from Rahul Varma', 'Schedule client interviews — Fintrix Bank', 'tasks', 0);
    N('u5', 'Self-assessment is open', 'H2 2026 self-assessment is due by 30 Nov.', 'performance', 1);
    N('u5', 'Deepavali — Sunday, 8 Nov', 'Wishing you a bright and joyful festival of lights.', 'holidays', 2, true);
    N('u4', 'Leave request from Mohammed Irfan', '3 days earned leave', 'team', 1);
    N('u4', 'Missed check-out correction', 'Mohammed Irfan requested a correction', 'team', 1);
    ['u1', 'u2', 'u3'].forEach(a => {
      N(a, '2 new access requests', 'Vamshi Krishna and Nikhita Jain are waiting for approval.', 'admin-employees', 1);
      N(a, 'Attendance correction pending', 'Mohammed Irfan — missed check-out', 'admin-approvals', 1);
    });
    N('u3', 'Leave request from Sai Kiran Goud', '1 day casual leave', 'team', 0);
    S = st;
    const M = (type, uId, data, trigger, at) => {
      const u = st.users.find(x => x.id === uId);
      st.outbox.push({
        id: uid('m'),
        type,
        to: u ? u.email : 'all-staff@aarnikshasolutions.com',
        toName: u ? u.name : 'All employees (8)',
        subject: AKEmail.subject(type, data),
        data,
        trigger,
        at: at.toISOString()
      });
    };
    const lm = new Date(t.getFullYear(), t.getMonth() - 1, 1);
    const lmName = lm.toLocaleDateString('en-IN', {
      month: 'long',
      year: 'numeric'
    });
    M('monthly_summary', 'u5', Object.assign({
      name: 'Priya Sharma',
      month: lmName
    }, monthStats(st, 'u5', lm.getFullYear(), lm.getMonth())), 'Scheduled · 1st of month, 9:00', new Date(t.getFullYear(), t.getMonth(), 1, 9));
    M('monthly_summary', 'u6', Object.assign({
      name: 'Mohammed Irfan',
      month: lmName
    }, monthStats(st, 'u6', lm.getFullYear(), lm.getMonth())), 'Scheduled · 1st of month, 9:00', new Date(t.getFullYear(), t.getMonth(), 1, 9));
    M('holiday_greeting', null, {
      holiday: 'Vijaya Dasami / Dussehra',
      date: '2026-10-20',
      closed: true,
      nextWorking: '2026-10-22',
      message: GREETINGS['Vijaya Dasami / Dussehra']
    }, 'Scheduled · day before, 10:00', new Date(2026, 9, 19, 10));
    M('account_approved', 'u7', {
      name: 'Ananya Rao',
      empId: 'AKS-018',
      designation: 'Recruitment Associate',
      role: 'Employee',
      manager: 'Rahul Varma',
      loginWith: 'Mobile ending 1018 or ananya.rao@aarnikshasolutions.com'
    }, 'Kavya Reddy approved the access request', parse(st.users[6].joined));
    M('leave_decision', 'u5', {
      name: 'Priya Sharma',
      approved: true,
      type: 'Casual leave',
      from: pw[8],
      to: pw[9],
      days: 2,
      approver: 'Rahul Varma',
      note: 'Enjoy the function!',
      balanceLeft: 8
    }, 'Rahul Varma approved a leave request', parse(pw[6]));
    st.outbox.sort((a, b) => b.at.localeCompare(a.at));
    return st;
  }
  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        S = JSON.parse(raw);
        return;
      }
    } catch (e) {}
    S = seed();
    save();
  }
  const act = {
    findAccount(identifier) {
      const v = String(identifier || '').trim().toLowerCase();
      const digits = v.replace(/\D/g, '').slice(-10);
      return S.users.find(u => v.includes('@') ? u.email === v : digits.length === 10 && u.phone === digits) || null;
    },
    signIn(userId) {
      S.session = {
        userId,
        at: new Date().toISOString()
      };
      emit();
    },
    signOut() {
      S.session = null;
      emit();
    },
    register(d) {
      const u = {
        id: uid('u'),
        name: d.name.trim(),
        email: d.email.trim().toLowerCase(),
        phone: d.phone.replace(/\D/g, '').slice(-10),
        role: 'employee',
        designation: d.designation.trim(),
        dept: d.dept,
        managerId: null,
        status: 'pending',
        empId: null,
        joined: null,
        location: 'Hi-Tech City, Hyderabad',
        requestedAt: todayIso(),
        leave: {
          CL: {
            total: 12,
            used: 0
          },
          SL: {
            total: 8,
            used: 0
          },
          EL: {
            total: 15,
            used: 0
          }
        }
      };
      S.users.push(u);
      admins().forEach(a => notify(a.id, 'New access request', u.name + ' · ' + u.designation, 'admin-employees'));
      emit();
      return u;
    },
    checkIn(userId, mode) {
      (S.attendance[userId] = S.attendance[userId] || {})[todayIso()] = {
        status: mode === 'wfh' ? 'wfh' : 'present',
        in: nowHM(),
        out: null
      };
      emit();
    },
    checkOut(userId) {
      const r = (S.attendance[userId] || {})[todayIso()];
      if (r) r.out = nowHM();
      emit();
    },
    applyLeave(userId, d) {
      const u = user(userId);
      const l = {
        id: uid('l'),
        userId,
        type: d.type,
        from: d.from,
        to: d.to,
        reason: d.reason,
        status: 'pending',
        approverId: u.managerId || (admins()[0] || {}).id,
        appliedAt: todayIso(),
        days: workingDays(S, d.from, d.to),
        note: ''
      };
      S.leaves.unshift(l);
      if (l.approverId) notify(l.approverId, 'Leave request from ' + u.name, l.days + ' day' + (l.days > 1 ? 's' : '') + ' ' + LEAVE_TYPES[l.type].toLowerCase(), 'team');
      emit();
      return l;
    },
    cancelLeave(id) {
      const l = S.leaves.find(x => x.id === id);
      if (l && l.status === 'pending') l.status = 'cancelled';
      emit();
    },
    decideLeave(id, approve, byId, note) {
      const l = S.leaves.find(x => x.id === id);
      const u = user(l.userId);
      const by = user(byId);
      l.status = approve ? 'approved' : 'rejected';
      l.note = note || '';
      l.decidedAt = todayIso();
      l.decidedBy = byId;
      if (approve) {
        u.leave[l.type].used += l.days;
        S.attendance[u.id] = S.attendance[u.id] || {};
        for (let d = parse(l.from); d <= parse(l.to); d = addDays(d, 1)) if (isWorking(S, d)) S.attendance[u.id][iso(d)] = {
          status: 'leave',
          type: l.type
        };
      }
      notify(u.id, 'Leave ' + (approve ? 'approved' : 'declined'), LEAVE_TYPES[l.type] + ', ' + fmtDate(l.from), 'leave');
      email('leave_decision', u, {
        name: u.name,
        approved: approve,
        type: LEAVE_TYPES[l.type],
        from: l.from,
        to: l.to,
        days: l.days,
        approver: by.name,
        note: l.note,
        balanceLeft: u.leave[l.type].total - u.leave[l.type].used
      }, by.name + (approve ? ' approved' : ' declined') + ' a leave request');
      emit();
    },
    requestCorrection(userId, d) {
      const u = user(userId);
      S.corrections.unshift({
        id: uid('c'),
        userId,
        date: d.date,
        in: d.in,
        out: d.out,
        reason: d.reason,
        status: 'pending',
        at: todayIso()
      });
      const to = new Set([u.managerId, ...admins().map(a => a.id)].filter(Boolean));
      to.forEach(id => notify(id, 'Attendance correction from ' + u.name, fmtDate(d.date) + ' · ' + d.in + '–' + d.out, 'admin-approvals'));
      emit();
    },
    decideCorrection(id, approve, byId) {
      const c = S.corrections.find(x => x.id === id);
      c.status = approve ? 'approved' : 'rejected';
      c.decidedBy = byId;
      c.decidedAt = todayIso();
      if (approve) {
        const prev = (S.attendance[c.userId] || {})[c.date];
        (S.attendance[c.userId] = S.attendance[c.userId] || {})[c.date] = {
          status: prev && prev.status === 'wfh' ? 'wfh' : 'present',
          in: c.in,
          out: c.out,
          corrected: true
        };
      }
      notify(c.userId, 'Correction ' + (approve ? 'approved' : 'declined'), fmtDate(c.date) + ' · ' + c.in + '–' + c.out, 'attendance');
      emit();
    },
    addTask(byId, d) {
      const t = {
        id: uid('t'),
        assigneeId: d.assigneeId,
        byId,
        title: d.title.trim(),
        desc: (d.desc || '').trim(),
        due: d.due,
        priority: d.priority,
        status: 'todo',
        createdAt: todayIso()
      };
      S.tasks.unshift(t);
      const u = user(d.assigneeId);
      const by = user(byId);
      notify(u.id, 'New task from ' + by.name, t.title, 'tasks');
      email('task_assigned', u, {
        name: u.name,
        title: t.title,
        desc: t.desc,
        due: t.due,
        priority: t.priority,
        by: by.name
      }, by.name + ' assigned a task');
      emit();
    },
    setTaskStatus(id, status) {
      const t = S.tasks.find(x => x.id === id);
      t.status = status;
      if (status === 'done') {
        t.doneAt = todayIso();
        if (t.byId !== t.assigneeId) notify(t.byId, 'Task completed', user(t.assigneeId).name + ' · ' + t.title, 'team');
      }
      emit();
    },
    updateGoal(id, progress, note) {
      const g = S.goals.find(x => x.id === id);
      g.progress = progress;
      g.lastNote = note;
      g.updatedAt = todayIso();
      emit();
    },
    submitAssessment(userId, d) {
      S.assessments[userId] = Object.assign({}, d, {
        submittedAt: todayIso()
      });
      const u = user(userId);
      if (u.managerId) notify(u.managerId, 'Self-assessment submitted', u.name + ' · ' + S.cycle.name, 'team');
      emit();
    },
    approveUser(id, byId, d) {
      const u = user(id);
      const by = user(byId);
      Object.assign(u, {
        status: 'active',
        role: d.role,
        managerId: d.managerId || null,
        empId: d.empId,
        joined: todayIso(),
        approvedBy: byId
      });
      S.attendance[u.id] = S.attendance[u.id] || {};
      email('account_approved', u, {
        name: u.name,
        empId: u.empId,
        designation: u.designation,
        role: ROLES[u.role],
        manager: u.managerId ? user(u.managerId).name : null,
        loginWith: 'Mobile ending ' + u.phone.slice(-4) + ' or ' + u.email
      }, by.name + ' approved the access request');
      notify(u.id, 'Welcome to Aarniksha', 'Your account is active. Check in to start your day.', 'home');
      emit();
    },
    rejectUser(id) {
      user(id).status = 'rejected';
      emit();
    },
    suspendUser(id, byId, reason) {
      const u = user(id);
      const by = user(byId);
      u.status = 'suspended';
      u.suspendedReason = reason;
      email('account_suspended', u, {
        name: u.name,
        reason,
        by: by.name,
        date: todayIso()
      }, by.name + ' suspended the account');
      emit();
    },
    reactivateUser(id) {
      const u = user(id);
      u.status = 'active';
      u.suspendedReason = null;
      notify(u.id, 'Access restored', 'Your portal access has been reactivated.', 'home');
      emit();
    },
    setRole(id, role) {
      user(id).role = role;
      emit();
    },
    addHoliday(d, byId) {
      const h = {
        id: uid('h'),
        date: d.date,
        name: d.name.trim(),
        type: d.type,
        greetingSent: false
      };
      S.holidays.push(h);
      S.holidays.sort((a, b) => a.date.localeCompare(b.date));
      S.users.filter(u => u.status === 'active').forEach(u => notify(u.id, 'Holiday added: ' + h.name, fmtDate(h.date, {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
      }), 'holidays'));
      if (d.greeting) act.sendGreeting(h.id, byId, true);
      emit();
      return h;
    },
    removeHoliday(id) {
      S.holidays = S.holidays.filter(h => h.id !== id);
      emit();
    },
    sendGreeting(id, byId, silent) {
      const h = S.holidays.find(x => x.id === id);
      const by = user(byId);
      const n = S.users.filter(u => u.status === 'active').length;
      broadcast('holiday_greeting', {
        holiday: h.name,
        date: h.date,
        closed: isWeekend(parse(h.date)) ? false : true,
        nextWorking: nextWorking(S, h.date),
        message: GREETINGS[h.name] || 'From all of us at Aarniksha Solutions, wishing you a happy and safe celebration with your loved ones.'
      }, by.name + ' sent a festival greeting', n);
      h.greetingSent = true;
      if (!silent) emit();
    },
    runMonthlySummary(byId) {
      const t = today();
      const lm = new Date(t.getFullYear(), t.getMonth() - 1, 1);
      const month = lm.toLocaleDateString('en-IN', {
        month: 'long',
        year: 'numeric'
      });
      const list = S.users.filter(u => u.status === 'active');
      list.forEach(u => email('monthly_summary', u, Object.assign({
        name: u.name,
        month
      }, monthStats(S, u.id, lm.getFullYear(), lm.getMonth())), user(byId).name + ' ran the monthly summary'));
      emit();
      return list.length;
    },
    markRead(userId) {
      S.notifications.forEach(n => {
        if (n.userId === userId) n.read = true;
      });
      emit();
    },
    reset() {
      S = seed();
      emit();
    }
  };
  load();
  window.AKStore = {
    get: () => S,
    subscribe: fn => {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    act,
    ROLES,
    LEAVE_TYPES,
    DEPTS,
    LATE_AFTER,
    h: {
      iso,
      parse,
      addDays,
      today,
      todayIso,
      isWeekend,
      isWorking: d => isWorking(S, d),
      holidayOn: k => holidayOn(S, k),
      workingDays: (a, b) => workingDays(S, a, b),
      monthStats: (id, y, m) => monthStats(S, id, y, m),
      user: id => user(id),
      fmtDate,
      mins,
      pad
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/store.js", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/ui.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS = window.AarnikshaDesignSystem_f93754;
const AKH = window.AKStore.h;
const AppCtx = React.createContext(null);
const useApp = () => React.useContext(AppCtx);
function useStore() {
  const [, force] = React.useReducer(x => x + 1, 0);
  React.useEffect(() => window.AKStore.subscribe(force), []);
  return window.AKStore.get();
}

/* Lucide outline icons (CDN) drawn at the brand's 1.6 stroke — see HANDOFF.md, "Icon substitution". */
function PIcon({
  name,
  size = 18,
  stroke = 1.6,
  color,
  style
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const L = window.lucide;
    const el = ref.current;
    if (!L || !el || !L.icons || !L.icons[name]) return;
    const NS = 'http://www.w3.org/2000/svg';
    const node = L.icons[name];
    const svg = document.createElementNS(NS, 'svg');
    const a = {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      'stroke-width': stroke,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    };
    Object.keys(a).forEach(k => svg.setAttribute(k, a[k]));
    (Array.isArray(node[0]) ? node : node[2] || []).forEach(([tag, at]) => {
      const c = document.createElementNS(NS, tag);
      Object.keys(at).forEach(k => c.setAttribute(k, at[k]));
      svg.appendChild(c);
    });
    el.replaceChildren(svg);
  }, [name, size, stroke]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size + 'px',
      height: size + 'px',
      flex: '0 0 auto',
      color,
      ...style
    }
  });
}
const TONES = {
  blue: ['#E7F1FD', '#1D6AE3'],
  green: ['#E3F5EC', '#0F7A55'],
  amber: ['#FDF1DC', '#8A5A00'],
  red: ['#FCEAE8', '#B9382F'],
  grey: ['#EDF1F8', '#4A5670'],
  navy: ['#06367E', '#FFFFFF']
};
const STATUS = {
  pending: ['amber', 'Pending'],
  approved: ['green', 'Approved'],
  rejected: ['red', 'Declined'],
  cancelled: ['grey', 'Cancelled'],
  active: ['green', 'Active'],
  suspended: ['red', 'Suspended'],
  todo: ['grey', 'To do'],
  in_progress: ['blue', 'In progress'],
  done: ['green', 'Done']
};
function Badge({
  tone = 'grey',
  children,
  style
}) {
  const [bg, fg] = TONES[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: '999px',
      background: bg,
      color: fg,
      fontSize: '12px',
      fontWeight: 700,
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
const StatusBadge = ({
  status
}) => /*#__PURE__*/React.createElement(Badge, {
  tone: (STATUS[status] || STATUS.pending)[0]
}, (STATUS[status] || [0, status])[1]);
function Btn({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  full,
  style,
  disabled,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const on = h && !disabled;
  const skins = {
    primary: {
      background: on ? '#06367E' : '#2F80EC',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: on ? '0 10px 22px rgba(47,128,236,.28)' : 'none'
    },
    outline: {
      background: '#fff',
      color: on ? '#06367E' : '#101B33',
      border: '1px solid ' + (on ? '#06367E' : '#DCE3EE')
    },
    ghost: {
      background: on ? '#EDF1F8' : 'transparent',
      color: '#43506A',
      border: '1px solid transparent'
    },
    danger: {
      background: on ? '#FCEAE8' : '#fff',
      color: '#B9382F',
      border: '1px solid #F2C9C5'
    },
    white: {
      background: '#fff',
      color: '#06367E',
      border: '1px solid transparent',
      boxShadow: on ? '0 12px 26px rgba(2,22,56,.26)' : '0 8px 20px rgba(2,22,56,.16)'
    },
    glass: {
      background: on ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.1)',
      color: '#fff',
      border: '1px solid rgba(255,255,255,.24)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      padding: size === 'sm' ? '7px 14px' : size === 'lg' ? '15px 26px' : '11px 20px',
      borderRadius: '999px',
      fontSize: size === 'sm' ? '13px' : size === 'lg' ? '16px' : '14.5px',
      fontWeight: 700,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background .2s ease, color .2s ease, border-color .2s ease, box-shadow .2s ease',
      width: full ? '100%' : undefined,
      whiteSpace: 'nowrap',
      fontFamily: 'inherit',
      ...skins[variant],
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: size === 'sm' ? 15 : 17
  }) : null, children);
}
function Card({
  children,
  pad = '24px',
  style,
  tint
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: tint ? '#F8FAFE' : '#fff',
      border: '1px solid #E3EAF6',
      borderRadius: '18px',
      padding: pad,
      minWidth: 0,
      ...style
    }
  }, children);
}
function CardHead({
  title,
  sub,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: '12px',
      marginBottom: '18px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '17px',
      lineHeight: 1.25,
      letterSpacing: '-.015em',
      fontWeight: 800,
      color: '#101B33'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: '13.5px',
      color: '#7A859A'
    }
  }, sub) : null), action || null);
}
function PageHeader({
  eyebrow,
  title,
  sub,
  actions
}) {
  const {
    m
  } = useApp();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '16px',
      marginBottom: m ? '20px' : '28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 10px',
      fontSize: '12px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#2F80EC'
    }
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: m ? '28px' : '36px',
      lineHeight: 1.06,
      letterSpacing: '-.03em',
      fontWeight: 800,
      color: '#101B33'
    }
  }, title), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      maxWidth: '60ch',
      fontSize: '15px',
      lineHeight: 1.6,
      color: '#5B6577',
      textWrap: 'pretty'
    }
  }, sub) : null), actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px'
    }
  }, actions) : null);
}
function Stat({
  label,
  value,
  sub,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '11.5px',
      fontWeight: 800,
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: '#8A94A6'
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: '30px',
      lineHeight: 1,
      letterSpacing: '-.035em',
      fontWeight: 800,
      color: tone || '#06367E'
    }
  }, value), sub ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: '13px',
      color: '#7A859A'
    }
  }, sub) : null);
}
const AV_COLORS = ['#06367E', '#2F80EC', '#0A4497', '#1D6AE3', '#0B4A78', '#123A86'];
function Avatar({
  name = '?',
  size = 36
}) {
  const ini = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  const c = AV_COLORS[[...name].reduce((a, ch) => a + ch.charCodeAt(0), 0) % AV_COLORS.length];
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size + 'px',
      height: size + 'px',
      borderRadius: '50%',
      background: c,
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: Math.round(size * 0.36) + 'px',
      fontWeight: 800,
      flex: '0 0 auto',
      letterSpacing: '.02em'
    }
  }, ini);
}
function Person({
  u,
  sub,
  size = 36
}) {
  if (!u) return /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#8A94A6'
    }
  }, "\u2014");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: u.name,
    size: size
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14.5px',
      fontWeight: 700,
      color: '#101B33',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, u.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '2px 0 0',
      fontSize: '12.5px',
      color: '#7A859A',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, sub != null ? sub : u.designation)));
}
function Progress({
  value,
  h = 8,
  color = '#2F80EC'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: h + 'px',
      borderRadius: '999px',
      background: '#E9EFFB',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.max(0, Math.min(100, value)) + '%',
      height: '100%',
      borderRadius: '999px',
      background: color,
      transition: 'width .4s cubic-bezier(.2,.7,.3,1)'
    }
  }));
}
function Segmented({
  options,
  value,
  onChange,
  dark,
  full
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      width: full ? '100%' : undefined,
      padding: '4px',
      gap: '4px',
      borderRadius: '999px',
      background: dark ? 'rgba(255,255,255,.1)' : '#EDF1F8',
      border: dark ? '1px solid rgba(255,255,255,.16)' : 'none'
    }
  }, options.map(([k, label, count]) => {
    const on = value === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      type: "button",
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange(k),
      style: {
        flex: full ? 1 : undefined,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: '8px 14px',
        borderRadius: '999px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '13.5px',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        transition: 'background .2s ease, color .2s ease',
        background: on ? dark ? '#fff' : '#fff' : 'transparent',
        color: on ? '#06367E' : dark ? 'rgba(255,255,255,.82)' : '#4A5670',
        boxShadow: on && !dark ? '0 2px 8px rgba(16,27,51,.08)' : 'none'
      }
    }, label, count != null ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '11.5px',
        opacity: 0.6
      }
    }, count) : null);
  }));
}
function Empty({
  icon = 'Inbox',
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '28px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: '44px',
      height: '44px',
      borderRadius: '50%',
      background: '#E9EFFB',
      color: '#2F80EC',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(PIcon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 4px',
      fontSize: '15px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, title), body ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13.5px',
      color: '#7A859A'
    }
  }, body) : null);
}
function Modal({
  open,
  onClose,
  eyebrow,
  title,
  children,
  width = 520
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(DS.Dialog, {
    open: true,
    eyebrow: eyebrow,
    title: title,
    onClose: onClose,
    style: {
      width: 'min(' + width + 'px, 100%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '22px'
    }
  }, children));
}
const inputStyle = {
  width: '100%',
  fontSize: '15px',
  color: '#101B33',
  background: '#F8FAFE',
  border: '1px solid #E1E8F4',
  borderRadius: '12px',
  padding: '13px 14px',
  outline: 'none',
  fontFamily: 'inherit',
  boxSizing: 'border-box'
};
function Label({
  children,
  hint
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '8px',
      fontSize: '13px',
      fontWeight: 700,
      color: '#43506A'
    }
  }, children, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: '#8A94A6'
    }
  }, hint) : null);
}
function Input({
  label,
  hint,
  prefix,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: '7px',
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(Label, {
    hint: hint
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      borderRadius: '12px',
      border: '1px solid ' + (f ? '#2F80EC' : '#E1E8F4'),
      background: f ? '#fff' : '#F8FAFE',
      transition: 'border-color .2s ease, background .2s ease',
      overflow: 'hidden'
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px 0 14px',
      fontSize: '15px',
      fontWeight: 700,
      color: '#43506A'
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...inputStyle,
      border: 'none',
      background: 'transparent'
    }
  }, rest))));
}
function Select({
  label,
  options,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: '7px',
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(Label, null, label) : null, /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...inputStyle,
      appearance: 'none',
      backgroundImage: 'linear-gradient(45deg,transparent 50%,#7A859A 50%),linear-gradient(135deg,#7A859A 50%,transparent 50%)',
      backgroundPosition: 'calc(100% - 20px) 50%, calc(100% - 15px) 50%',
      backgroundSize: '5px 5px',
      backgroundRepeat: 'no-repeat',
      paddingRight: '36px'
    }
  }, rest), options.map(o => Array.isArray(o) ? /*#__PURE__*/React.createElement("option", {
    key: o[0],
    value: o[0]
  }, o[1]) : /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o))));
}
function TextArea({
  label,
  hint,
  rows = 3,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'grid',
      gap: '7px',
      minWidth: 0,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement(Label, {
    hint: hint
  }, label) : null, /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: {
      ...inputStyle,
      resize: 'vertical',
      lineHeight: 1.5
    }
  }, rest)));
}
const ErrorLine = ({
  children
}) => children ? /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: '13.5px',
    fontWeight: 600,
    color: '#D4453B'
  }
}, children) : null;
const TH = {
  textAlign: 'left',
  padding: '12px 16px',
  fontSize: '11px',
  fontWeight: 800,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: '#8A94A6',
  borderBottom: '1px solid #E9EDF5',
  whiteSpace: 'nowrap',
  background: '#F8FAFE'
};
const TD = {
  padding: '14px 16px',
  fontSize: '14px',
  color: '#43506A',
  borderBottom: '1px solid #EDF1F8',
  verticalAlign: 'middle'
};
function Table({
  head,
  children,
  minWidth = 640
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      border: '1px solid #E3EAF6',
      borderRadius: '16px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      minWidth: minWidth + 'px',
      borderCollapse: 'collapse'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, head.map((h, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...TH,
      textAlign: h && h.startsWith && h.startsWith('>') ? 'right' : 'left'
    }
  }, h && h.replace ? h.replace(/^>/, '') : h)))), /*#__PURE__*/React.createElement("tbody", null, children)));
}
const fmt = {
  d: s => AKH.parse(s).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short'
  }),
  dw: s => AKH.parse(s).toLocaleDateString('en-IN', {
    weekday: 'short',
    day: 'numeric',
    month: 'short'
  }),
  long: s => AKH.parse(s).toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }),
  range: (a, b) => a === b ? fmt.dw(a) : fmt.d(a) + ' – ' + fmt.d(b),
  t: hm => {
    if (!hm) return '—';
    const [h, mm] = hm.split(':').map(Number);
    return (h + 11) % 12 + 1 + ':' + String(mm).padStart(2, '0') + (h < 12 ? ' am' : ' pm');
  },
  ago: isoTs => {
    const s = (Date.now() - new Date(isoTs).getTime()) / 1000;
    if (s < 60) return 'Just now';
    if (s < 3600) return Math.floor(s / 60) + 'm ago';
    if (s < 86400) return Math.floor(s / 3600) + 'h ago';
    const d = Math.floor(s / 86400);
    return d === 1 ? 'Yesterday' : d + 'd ago';
  },
  dur: (a, b) => {
    const m = AKH.mins(b) - AKH.mins(a);
    return Math.floor(m / 60) + 'h ' + String(m % 60).padStart(2, '0') + 'm';
  }
};
const greet = () => {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
};
const firstName = u => u.name.split(' ')[0];
function dayInfo(S, userId, k) {
  const d = AKH.parse(k);
  const t = AKH.todayIso();
  const u = AKH.user(userId);
  const rec = (S.attendance[userId] || {})[k];
  const hol = AKH.holidayOn(k);
  if (rec && rec.status === 'leave') return {
    kind: 'leave',
    label: 'Leave',
    tone: 'amber',
    rec
  };
  if (AKH.isWeekend(d)) return {
    kind: 'weekend',
    label: 'Weekend',
    tone: null
  };
  if (hol) return {
    kind: 'holiday',
    label: hol.name,
    tone: 'navy',
    hol
  };
  if (rec && rec.in) {
    if (!rec.out && k < t) return {
      kind: 'missed',
      label: 'Missed punch',
      tone: 'red',
      rec
    };
    return {
      kind: rec.status,
      label: rec.status === 'wfh' ? 'WFH' : 'Office',
      tone: rec.status === 'wfh' ? 'grey' : 'blue',
      rec,
      late: AKH.mins(rec.in) > AKH.mins(window.AKStore.LATE_AFTER)
    };
  }
  if (k === t) return {
    kind: 'today',
    label: 'Not checked in',
    tone: null
  };
  if (k > t || u && u.joined && k < u.joined) return {
    kind: 'future',
    label: '',
    tone: null
  };
  return {
    kind: 'absent',
    label: 'Absent',
    tone: 'red'
  };
}
Object.assign(window, {
  DS,
  AKH,
  AppCtx,
  useApp,
  useStore,
  PIcon,
  Badge,
  StatusBadge,
  STATUS,
  Btn,
  Card,
  CardHead,
  PageHeader,
  Stat,
  Avatar,
  Person,
  Progress,
  Segmented,
  Empty,
  Modal,
  Input,
  Select,
  TextArea,
  Label,
  ErrorLine,
  Table,
  TH,
  TD,
  fmt,
  greet,
  firstName,
  dayInfo,
  inputStyle
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/ui.jsx", error: String((e && e.message) || e) }); }

// prototypes/employee-portal/portal/work.jsx
try { (() => {
const PRIORITY_TONE = {
  High: 'red',
  Medium: 'amber',
  Low: 'grey'
};
const NEXT_STATUS = {
  todo: 'in_progress',
  in_progress: 'done',
  done: 'todo'
};
function assignableFor(S, me) {
  const admin = ['hr_admin', 'super_admin'].includes(me.role);
  return S.users.filter(u => u.status === 'active' && u.id !== me.id && (admin || u.managerId === me.id));
}
function AssignTaskModal({
  open,
  onClose,
  preset
}) {
  const S = useStore();
  const {
    me,
    toast
  } = useApp();
  const people = assignableFor(S, me);
  const blank = () => ({
    assigneeId: preset || (people[0] || {}).id || '',
    title: '',
    desc: '',
    due: AKH.iso(AKH.addDays(AKH.today(), 2)),
    priority: 'Medium'
  });
  const [f, setF] = React.useState(blank);
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    setF(blank());
    setErr('');
  }, [open, preset]);
  const submit = () => {
    if (!f.assigneeId) return setErr('Choose who this is for.');
    if (!f.title.trim()) return setErr('Give the task a title.');
    AKStore.act.addTask(me.id, f);
    onClose();
    toast('Task assigned · email sent to ' + AKH.user(f.assigneeId).name);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    eyebrow: "Tasks",
    title: "Assign a task"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Assign to",
    value: f.assigneeId,
    onChange: e => setF({
      ...f,
      assigneeId: e.target.value
    }),
    options: people.map(u => [u.id, u.name + ' · ' + u.designation])
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Title",
    value: f.title,
    onChange: e => setF({
      ...f,
      title: e.target.value
    }),
    placeholder: "e.g. Shortlist 5 profiles for TechNova"
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Details",
    hint: "Optional",
    rows: 3,
    value: f.desc,
    onChange: e => setF({
      ...f,
      desc: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Due",
    type: "date",
    min: AKH.todayIso(),
    value: f.due,
    onChange: e => setF({
      ...f,
      due: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '7px'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Priority"), /*#__PURE__*/React.createElement(Segmented, {
    full: true,
    options: [['Low', 'Low'], ['Medium', 'Med'], ['High', 'High']],
    value: f.priority,
    onChange: v => setF({
      ...f,
      priority: v
    })
  }))), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    icon: "Send",
    onClick: submit
  }, "Assign & email"))));
}
function TaskRow({
  x,
  first,
  showAssignee,
  onOpen
}) {
  const t = AKH.todayIso();
  const over = x.status !== 'done' && x.due < t;
  const done = x.status === 'done';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
      padding: '14px 4px',
      borderTop: first ? 'none' : '1px solid #EDF1F8'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": done ? 'Mark as to do' : 'Mark as done',
    onClick: () => AKStore.act.setTaskStatus(x.id, done ? 'todo' : 'done'),
    style: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      border: done ? 'none' : '1.5px solid #C9D8F2',
      background: done ? '#2F80EC' : '#fff',
      color: '#fff',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '0 0 auto'
    }
  }, done ? /*#__PURE__*/React.createElement(PIcon, {
    name: "Check",
    size: 14,
    stroke: 2.4
  }) : null), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onOpen,
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      background: 'none',
      padding: 0,
      textAlign: 'left',
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: '15px',
      fontWeight: 700,
      color: done ? '#8A94A6' : '#101B33',
      textDecoration: done ? 'line-through' : 'none',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, x.title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '3px',
      fontSize: '13px',
      color: over ? '#B9382F' : '#7A859A',
      fontWeight: over ? 700 : 500
    }
  }, done ? 'Completed' : over ? 'Overdue · was due ' + fmt.d(x.due) : x.due === t ? 'Due today' : 'Due ' + fmt.dw(x.due), " \xB7 ", showAssignee ? 'for ' + AKH.user(x.assigneeId).name : 'from ' + AKH.user(x.byId).name)), /*#__PURE__*/React.createElement(Badge, {
    tone: PRIORITY_TONE[x.priority]
  }, x.priority), /*#__PURE__*/React.createElement(StatusBadge, {
    status: x.status
  }));
}
function TasksPage() {
  const S = useStore();
  const {
    me,
    m
  } = useApp();
  const canAssign = me.role !== 'employee';
  const [scope, setScope] = React.useState('mine');
  const [filter, setFilter] = React.useState('open');
  const [openId, setOpenId] = React.useState(null);
  const [assign, setAssign] = React.useState(false);
  const base = S.tasks.filter(x => scope === 'mine' ? x.assigneeId === me.id : x.byId === me.id && x.assigneeId !== me.id);
  const groups = {
    open: base.filter(x => x.status !== 'done'),
    todo: base.filter(x => x.status === 'todo'),
    in_progress: base.filter(x => x.status === 'in_progress'),
    done: base.filter(x => x.status === 'done')
  };
  const list = groups[filter].slice().sort((a, b) => a.due.localeCompare(b.due));
  const sel = S.tasks.find(x => x.id === openId);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Tasks",
    title: scope === 'mine' ? 'My tasks' : 'Tasks I assigned',
    actions: canAssign ? /*#__PURE__*/React.createElement(Btn, {
      icon: "Plus",
      onClick: () => setAssign(true)
    }, "Assign task") : null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      marginBottom: '16px',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflowX: 'auto',
      maxWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [['open', 'Open', groups.open.length], ['todo', 'To do', groups.todo.length], ['in_progress', 'In progress', groups.in_progress.length], ['done', 'Done', groups.done.length]],
    value: filter,
    onChange: setFilter
  })), canAssign ? /*#__PURE__*/React.createElement(Segmented, {
    options: [['mine', 'Mine'], ['assigned', 'Assigned by me']],
    value: scope,
    onChange: setScope
  }) : null), /*#__PURE__*/React.createElement(Card, {
    pad: m ? '6px 14px' : '8px 20px'
  }, list.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "ListChecks",
    title: filter === 'done' ? 'Nothing completed yet' : 'All clear',
    body: filter === 'done' ? null : 'No tasks in this view.'
  }) : list.map((x, i) => /*#__PURE__*/React.createElement(TaskRow, {
    key: x.id,
    x: x,
    first: i === 0,
    showAssignee: scope !== 'mine',
    onOpen: () => setOpenId(x.id)
  }))), /*#__PURE__*/React.createElement(Modal, {
    open: !!sel,
    onClose: () => setOpenId(null),
    eyebrow: sel ? sel.priority + ' priority' : '',
    title: sel ? sel.title : ''
  }, sel ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '18px'
    }
  }, sel.desc ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      lineHeight: 1.6,
      color: '#43506A'
    }
  }, sel.desc) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px',
      background: '#F8FAFE',
      border: '1px solid #E3EAF6',
      borderRadius: '16px',
      padding: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Assigned by"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '8px'
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: AKH.user(sel.byId),
    size: 30
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "Due"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '10px 0 0',
      fontSize: '15px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, fmt.long(sel.due)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Status"), /*#__PURE__*/React.createElement(Segmented, {
    full: true,
    options: [['todo', 'To do'], ['in_progress', 'In progress'], ['done', 'Done']],
    value: sel.status,
    onChange: v => AKStore.act.setTaskStatus(sel.id, v)
  }))) : null), /*#__PURE__*/React.createElement(AssignTaskModal, {
    open: assign,
    onClose: () => setAssign(false)
  }));
}
const RATINGS = [[1, 'Needs improvement'], [2, 'Developing'], [3, 'Meets expectations'], [4, 'Exceeds expectations'], [5, 'Outstanding']];
function PerformancePage() {
  const S = useStore();
  const {
    me,
    m,
    toast
  } = useApp();
  const goals = S.goals.filter(g => g.userId === me.id);
  const overall = goals.length ? Math.round(goals.reduce((a, g) => a + g.progress * g.weight, 0) / goals.reduce((a, g) => a + g.weight, 0)) : 0;
  const sub = S.assessments[me.id];
  const [edit, setEdit] = React.useState(null);
  const [val, setVal] = React.useState({
    progress: 0,
    note: ''
  });
  const [f, setF] = React.useState({
    rating: 0,
    achievements: '',
    challenges: '',
    next: ''
  });
  const [err, setErr] = React.useState('');
  const g = goals.find(x => x.id === edit);
  const daysLeft = Math.round((AKH.parse(S.cycle.due) - AKH.today()) / 864e5);
  const submit = () => {
    if (!f.rating) return setErr('Choose an overall rating.');
    if (!f.achievements.trim() || !f.next.trim()) return setErr('Fill in your achievements and your focus for next period.');
    AKStore.act.submitAssessment(me.id, f);
    toast('Self-assessment submitted to ' + (me.managerId ? AKH.user(me.managerId).name : 'HR'));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Performance",
    title: S.cycle.name,
    sub: "Keep your goals up to date through the cycle and submit your self-assessment before the deadline."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1.25fr) minmax(0,1fr)',
      gap: m ? '16px' : '22px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: '16px',
      paddingBottom: '18px',
      marginBottom: '6px',
      borderBottom: '1px solid #EDF1F8'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: '17px',
      fontWeight: 800,
      color: '#101B33'
    }
  }, "My goals"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontSize: '13.5px',
      color: '#7A859A'
    }
  }, "Weighted progress across ", goals.length, " goals")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '44px',
      lineHeight: 0.9,
      letterSpacing: '-.045em',
      fontWeight: 800,
      color: '#2F80EC'
    }
  }, overall, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '20px'
    }
  }, "%"))), goals.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "Target",
    title: "No goals set yet",
    body: "Your manager will add goals for this cycle."
  }) : goals.map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: x.id,
    style: {
      padding: '16px 0',
      borderTop: i ? '1px solid #EDF1F8' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
      marginBottom: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '15px',
      fontWeight: 700,
      color: '#101B33'
    }
  }, x.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '3px 0 0',
      fontSize: '12.5px',
      color: '#7A859A'
    }
  }, "Weight ", x.weight, "% \xB7 due ", fmt.d(x.due), " \xB7 updated ", fmt.d(x.updatedAt))), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "outline",
    onClick: () => {
      setEdit(x.id);
      setVal({
        progress: x.progress,
        note: ''
      });
    }
  }, "Update")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Progress, {
    value: x.progress
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '40px',
      textAlign: 'right',
      fontSize: '14px',
      fontWeight: 800,
      color: '#06367E'
    }
  }, x.progress, "%"))))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Self-assessment",
    sub: sub ? 'Submitted ' + fmt.d(sub.submittedAt) : 'Due ' + fmt.long(S.cycle.due) + (daysLeft >= 0 ? ' · ' + daysLeft + ' days left' : ''),
    action: sub ? /*#__PURE__*/React.createElement(Badge, {
      tone: "green"
    }, "Submitted") : /*#__PURE__*/React.createElement(Badge, {
      tone: "amber"
    }, "Open")
  }), sub ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F8FAFE',
      border: '1px solid #E3EAF6',
      borderRadius: '14px',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Overall rating"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: '17px',
      fontWeight: 800,
      color: '#06367E'
    }
  }, sub.rating, " \xB7 ", RATINGS[sub.rating - 1][1])), [['Achievements', sub.achievements], ['Challenges', sub.challenges], ['Focus for next period', sub.next]].map(([l, v]) => v ? /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement(Label, null, l), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: '14.5px',
      lineHeight: 1.6,
      color: '#43506A'
    }
  }, v)) : null)) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Label, {
    hint: f.rating ? RATINGS[f.rating - 1][1] : null
  }, "Overall rating"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)',
      gap: '8px'
    }
  }, RATINGS.map(([n, l]) => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    title: l,
    onClick: () => {
      setF({
        ...f,
        rating: n
      });
      setErr('');
    },
    style: {
      height: '46px',
      borderRadius: '12px',
      border: '1px solid ' + (f.rating === n ? '#2F80EC' : '#E1E8F4'),
      background: f.rating === n ? '#2F80EC' : f.rating > n ? '#E7F1FD' : '#F8FAFE',
      color: f.rating === n ? '#fff' : '#06367E',
      fontSize: '17px',
      fontWeight: 800,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, n)))), /*#__PURE__*/React.createElement(TextArea, {
    label: "Key achievements",
    rows: 3,
    value: f.achievements,
    onChange: e => setF({
      ...f,
      achievements: e.target.value
    }),
    placeholder: "What did you deliver this cycle?"
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Challenges",
    hint: "Optional",
    rows: 2,
    value: f.challenges,
    onChange: e => setF({
      ...f,
      challenges: e.target.value
    })
  }), /*#__PURE__*/React.createElement(TextArea, {
    label: "Focus for next period",
    rows: 2,
    value: f.next,
    onChange: e => setF({
      ...f,
      next: e.target.value
    })
  }), /*#__PURE__*/React.createElement(ErrorLine, null, err), /*#__PURE__*/React.createElement(Btn, {
    icon: "Send",
    onClick: submit,
    full: m
  }, "Submit to ", me.managerId ? AKH.user(me.managerId).name.split(' ')[0] : 'HR')))), /*#__PURE__*/React.createElement(Modal, {
    open: !!g,
    onClose: () => setEdit(null),
    eyebrow: "Update goal",
    title: g ? g.title : ''
  }, g ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '18px'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '30px',
      fontWeight: 800,
      letterSpacing: '-.03em',
      color: '#2F80EC'
    }
  }, val.progress, "%")), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: "0",
    max: "100",
    step: "5",
    value: val.progress,
    onChange: e => setVal({
      ...val,
      progress: Number(e.target.value)
    }),
    style: {
      width: '100%',
      accentColor: '#2F80EC'
    }
  })), /*#__PURE__*/React.createElement(TextArea, {
    label: "What changed?",
    hint: "Optional",
    rows: 2,
    value: val.note,
    onChange: e => setVal({
      ...val,
      note: e.target.value
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: () => setEdit(null)
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    onClick: () => {
      AKStore.act.updateGoal(g.id, val.progress, val.note);
      setEdit(null);
      toast('Goal updated');
    }
  }, "Save"))) : null));
}
const HOL_TONE = {
  National: 'blue',
  Festival: 'amber',
  Telangana: 'green'
};
function HolidaysPage() {
  const S = useStore();
  const {
    m
  } = useApp();
  const [type, setType] = React.useState('all');
  const t = AKH.todayIso();
  const now = AKH.today();
  const year = now.getFullYear();
  const list = S.holidays.filter(h => h.date.startsWith(String(year)) || h.date > t && h.date.startsWith(String(year + 1)));
  const next = S.holidays.find(h => h.date >= t && !AKH.isWeekend(AKH.parse(h.date))) || S.holidays.find(h => h.date >= t);
  const shown = list.filter(h => type === 'all' || h.type === type);
  const months = {};
  shown.forEach(h => {
    const k = h.date.slice(0, 7);
    (months[k] = months[k] || []).push(h);
  });
  const off = list.filter(h => !AKH.isWeekend(AKH.parse(h.date)) && h.date.startsWith(String(year))).length;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "Holidays",
    title: 'Holiday calendar ' + year,
    sub: 'Hyderabad office · Telangana general holidays plus national holidays. ' + off + ' fall on working days this year.'
  }), next ? (() => {
    const d = AKH.parse(next.date);
    const days = Math.round((d - now) / 864e5);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '22px',
        background: '#2F80EC',
        padding: m ? '22px' : '30px 34px',
        marginBottom: m ? '18px' : '24px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '18px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        bottom: '-80%',
        right: '-6%',
        width: '50%',
        aspectRatio: '1',
        borderRadius: '50%',
        background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,.18), rgba(255,255,255,0) 70%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '0 0 10px',
        fontSize: '11.5px',
        fontWeight: 800,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.82)'
      }
    }, "Next holiday"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: m ? '30px' : '44px',
        lineHeight: 1,
        letterSpacing: '-.035em',
        fontWeight: 800,
        color: '#fff'
      }
    }, next.name), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '12px 0 0',
        fontSize: '15px',
        fontWeight: 600,
        color: '#fff'
      }
    }, fmt.long(next.date))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: m ? '44px' : '64px',
        lineHeight: 0.9,
        letterSpacing: '-.045em',
        fontWeight: 800,
        color: '#fff'
      }
    }, days), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '6px 0 0',
        fontSize: '12px',
        fontWeight: 800,
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'rgba(255,255,255,.82)'
      }
    }, days === 1 ? 'day to go' : 'days to go')));
  })() : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: '16px',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Segmented, {
    options: [['all', 'All', list.length], ['National', 'National'], ['Festival', 'Festival'], ['Telangana', 'Telangana']],
    value: type,
    onChange: setType
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: m ? '14px' : '18px',
      alignItems: 'start'
    }
  }, Object.entries(months).map(([k, hs]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    pad: "18px 20px"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 6px',
      fontSize: '12px',
      fontWeight: 800,
      letterSpacing: '.14em',
      textTransform: 'uppercase',
      color: '#2F80EC'
    }
  }, AKH.parse(k + '-01').toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric'
  })), hs.map((h, i) => {
    const d = AKH.parse(h.date);
    const past = h.date < t;
    const we = AKH.isWeekend(d);
    return /*#__PURE__*/React.createElement("div", {
      key: h.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '11px 0',
        borderTop: i ? '1px solid #EDF1F8' : 'none',
        opacity: past ? 0.5 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '42px',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '22px',
        lineHeight: 1,
        fontWeight: 800,
        letterSpacing: '-.03em',
        color: '#06367E'
      }
    }, d.getDate()), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '3px 0 0',
        fontSize: '11px',
        fontWeight: 700,
        color: '#8A94A6'
      }
    }, d.toLocaleDateString('en-IN', {
      weekday: 'short'
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: '14.5px',
        fontWeight: 700,
        color: '#101B33'
      }
    }, h.name), we ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: '2px 0 0',
        fontSize: '12px',
        color: '#8A94A6'
      }
    }, "Falls on a weekend") : null), /*#__PURE__*/React.createElement(Badge, {
      tone: HOL_TONE[h.type] || 'grey'
    }, h.type));
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '18px 0 0',
      fontSize: '13px',
      color: '#7A859A'
    }
  }, "Dates for Eid, Bakrid, Muharram and Milad-un-Nabi depend on the moon sighting and may move by a day. HR will confirm."));
}
function DecideModal({
  item,
  onClose
}) {
  const {
    me,
    toast
  } = useApp();
  const [note, setNote] = React.useState('');
  React.useEffect(() => setNote(''), [item]);
  if (!item) return null;
  const {
    leave,
    approve
  } = item;
  const u = AKH.user(leave.userId);
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    onClose: onClose,
    eyebrow: approve ? 'Approve leave' : 'Decline leave',
    title: u.name + ' · ' + leave.days + ' day' + (leave.days > 1 ? 's' : '')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '14.5px',
      color: '#43506A'
    }
  }, AKStore.LEAVE_TYPES[leave.type], " \xB7 ", fmt.range(leave.from, leave.to), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#7A859A'
    }
  }, "\u201C", leave.reason, "\u201D")), /*#__PURE__*/React.createElement(TextArea, {
    label: approve ? 'Note to ' + u.name.split(' ')[0] : 'Reason for declining',
    hint: approve ? 'Optional' : null,
    rows: 2,
    value: note,
    onChange: e => setNote(e.target.value)
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: '13px',
      color: '#7A859A'
    }
  }, u.name.split(' ')[0], " will get an email at ", u.email, "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    variant: "ghost",
    onClick: onClose
  }, "Cancel"), /*#__PURE__*/React.createElement(Btn, {
    variant: approve ? 'primary' : 'danger',
    onClick: () => {
      AKStore.act.decideLeave(leave.id, approve, me.id, note);
      onClose();
      toast('Leave ' + (approve ? 'approved' : 'declined') + ' · email sent');
    }
  }, approve ? 'Approve' : 'Decline'))));
}
function LeaveRequestCard({
  l,
  onDecide
}) {
  const u = AKH.user(l.userId);
  const bal = u.leave[l.type];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '14px',
      padding: '14px 0',
      borderTop: '1px solid #EDF1F8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    sub: AKStore.LEAVE_TYPES[l.type] + ' · ' + fmt.range(l.from, l.to) + ' · ' + l.days + 'd'
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: '2 1 200px',
      margin: 0,
      fontSize: '13.5px',
      color: '#5B6577'
    }
  }, l.reason, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '2px',
      fontSize: '12px',
      color: '#8A94A6'
    }
  }, bal.total - bal.used, " of ", bal.total, " days left")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "danger",
    onClick: () => onDecide({
      leave: l,
      approve: false
    })
  }, "Decline"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    onClick: () => onDecide({
      leave: l,
      approve: true
    })
  }, "Approve")));
}
function CorrectionCard({
  c
}) {
  const {
    me,
    toast
  } = useApp();
  const S = useStore();
  const u = AKH.user(c.userId);
  const orig = (S.attendance[c.userId] || {})[c.date];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '14px',
      padding: '14px 0',
      borderTop: '1px solid #EDF1F8'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 220px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Person, {
    u: u,
    sub: fmt.dw(c.date) + ' · requested ' + fmt.t(c.in) + ' – ' + fmt.t(c.out)
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: '2 1 200px',
      margin: 0,
      fontSize: '13.5px',
      color: '#5B6577'
    }
  }, c.reason, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: '2px',
      fontSize: '12px',
      color: '#8A94A6'
    }
  }, "Recorded: ", orig && orig.in ? fmt.t(orig.in) + ' – ' + (orig.out ? fmt.t(orig.out) : 'no check-out') : 'no check-in')), c.status === 'pending' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    variant: "danger",
    onClick: () => {
      AKStore.act.decideCorrection(c.id, false, me.id);
      toast('Correction declined');
    }
  }, "Decline"), /*#__PURE__*/React.createElement(Btn, {
    size: "sm",
    onClick: () => {
      AKStore.act.decideCorrection(c.id, true, me.id);
      toast('Correction approved · attendance updated');
    }
  }, "Approve")) : /*#__PURE__*/React.createElement(StatusBadge, {
    status: c.status
  }));
}
function TeamPage() {
  const S = useStore();
  const {
    me,
    m
  } = useApp();
  const [decide, setDecide] = React.useState(null);
  const [assign, setAssign] = React.useState(null);
  const team = S.users.filter(u => u.managerId === me.id && u.status === 'active');
  const ids = team.map(u => u.id);
  const t = AKH.todayIso();
  const leaves = S.leaves.filter(l => l.status === 'pending' && l.approverId === me.id);
  const corrections = S.corrections.filter(c => c.status === 'pending' && ids.includes(c.userId));
  const status = u => {
    const di = dayInfo(S, u.id, t);
    if (di.kind === 'office' || di.kind === 'present') return ['blue', 'Office · ' + fmt.t(di.rec.in)];
    if (di.kind === 'wfh') return ['grey', 'WFH · ' + fmt.t(di.rec.in)];
    if (di.kind === 'leave') return ['amber', 'On leave'];
    if (di.kind === 'holiday') return ['navy', 'Holiday'];
    if (di.kind === 'weekend') return ['grey', 'Weekend'];
    return ['red', 'Not checked in'];
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHeader, {
    eyebrow: "My team",
    title: team.length + ' direct report' + (team.length === 1 ? '' : 's'),
    actions: team.length ? /*#__PURE__*/React.createElement(Btn, {
      icon: "Plus",
      onClick: () => setAssign(team[0].id)
    }, "Assign task") : null
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: m ? '1fr' : 'minmax(0,1fr) minmax(0,1.3fr)',
      gap: m ? '16px' : '22px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Today",
    sub: fmt.long(t)
  }), team.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "Users",
    title: "No direct reports"
  }) : team.map((u, i) => {
    const [tone, label] = status(u);
    const open = S.tasks.filter(x => x.assigneeId === u.id && x.status !== 'done').length;
    const a = S.assessments[u.id];
    return /*#__PURE__*/React.createElement("div", {
      key: u.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '13px 0',
        borderTop: i ? '1px solid #EDF1F8' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Person, {
      u: u,
      sub: open + ' open task' + (open === 1 ? '' : 's') + ' · review ' + (a ? 'submitted' : 'pending')
    })), /*#__PURE__*/React.createElement(Badge, {
      tone: tone
    }, label), /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": 'Assign task to ' + u.name,
      title: "Assign task",
      onClick: () => setAssign(u.id),
      style: {
        width: '34px',
        height: '34px',
        borderRadius: '50%',
        border: '1px solid #DCE5F5',
        background: '#fff',
        color: '#06367E',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement(PIcon, {
      name: "Plus",
      size: 16
    })));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: m ? '16px' : '22px',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Leave requests",
    sub: leaves.length ? leaves.length + ' waiting for you' : 'Nothing waiting',
    style: {
      marginBottom: leaves.length ? '4px' : '18px'
    }
  }), leaves.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "CalendarDays",
    title: "You're all caught up"
  }) : leaves.map(l => /*#__PURE__*/React.createElement(LeaveRequestCard, {
    key: l.id,
    l: l,
    onDecide: setDecide
  }))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHead, {
    title: "Attendance corrections",
    sub: corrections.length ? corrections.length + ' waiting for you' : 'Nothing waiting',
    style: {
      marginBottom: corrections.length ? '4px' : '18px'
    }
  }), corrections.length === 0 ? /*#__PURE__*/React.createElement(Empty, {
    icon: "ClockAlert",
    title: "No corrections to review"
  }) : corrections.map(c => /*#__PURE__*/React.createElement(CorrectionCard, {
    key: c.id,
    c: c
  }))))), /*#__PURE__*/React.createElement(DecideModal, {
    item: decide,
    onClose: () => setDecide(null)
  }), /*#__PURE__*/React.createElement(AssignTaskModal, {
    open: !!assign,
    preset: assign,
    onClose: () => setAssign(null)
  }));
}
Object.assign(window, {
  TasksPage,
  PerformancePage,
  HolidaysPage,
  TeamPage,
  AssignTaskModal,
  DecideModal,
  LeaveRequestCard,
  CorrectionCard,
  HOL_TONE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "prototypes/employee-portal/portal/work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
const {
  Logo,
  Button,
  Eyebrow,
  Field,
  Dialog,
  IconButton
} = window.AarnikshaDesignSystem_f93754;
function Header({
  route,
  go,
  onEnquire
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 60,
      background: "var(--surface-navy)",
      boxShadow: "var(--shadow-header)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "0 var(--layout-gutter-header)",
      height: "var(--header-height)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "24px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('home');
    },
    "aria-label": "Aarniksha Solutions home",
    style: {
      display: "block",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Logo, {
    src: "../../assets/logo.png",
    size: 74
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "clamp(18px, 2.4vw, 40px)"
    }
  }, window.AK_DATA.nav.map(([label, key]) => {
    const on = route === key;
    return /*#__PURE__*/React.createElement("a", {
      key: key,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(key);
      },
      onMouseEnter: () => setHover(key),
      onMouseLeave: () => setHover(null),
      style: {
        color: "var(--ak-white)",
        fontSize: "var(--text-nav)",
        fontWeight: "var(--fw-semibold)",
        letterSpacing: "var(--ls-nav)",
        padding: "6px 0",
        borderBottom: "2px solid " + (on || hover === key ? "var(--nav-underline)" : "transparent"),
        opacity: on || hover === key ? 1 : .72,
        transition: "opacity var(--dur-base) ease, border-color var(--dur-base) ease"
      }
    }, label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "../../prototypes/employee-portal/Employee%20Portal.html",
    style: {
      color: "var(--ak-white)",
      fontSize: "15px",
      fontWeight: "var(--fw-semibold)",
      opacity: .82,
      whiteSpace: "nowrap"
    }
  }, "Employee Login"), /*#__PURE__*/React.createElement(Button, {
    variant: "onNavy",
    arrow: true,
    onClick: () => go('contact')
  }, "Contact Us"))));
}
function Footer({
  go,
  onEnquire
}) {
  const cols = [['Company', [['About Us', 'about'], ['Industries', 'industries'], ['How We Work', 'insights'], ['Training Partnership', 'services'], ['Insights', 'insights'], ['Careers', 'careers']]], ['Start Here', [['Start a Project', 'enquiry'], ['Hire Talent', 'enquiry'], ['Contact Us', 'contact'], ['Employee Login', 'portal']]], ['Connect / Socials', [['LinkedIn', null], ['Instagram', null]]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "clamp(56px, 6.4vw, 92px) var(--layout-gutter) 36px",
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(32px, 4vw, 56px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 240px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "116px",
      height: "116px",
      background: "#fff",
      border: "1px solid var(--ak-line-100)",
      borderRadius: "var(--radius-xl)",
      padding: "10px",
      boxShadow: "var(--shadow-soft)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "Aarniksha Solutions",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "24px 0 0",
      maxWidth: "20ch",
      fontSize: "17px",
      lineHeight: "1.35",
      letterSpacing: "-.015em",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-deep)"
    }
  }, "Technology that moves business forward.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "3 1 620px",
      minWidth: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
      gap: "clamp(24px, 3vw, 40px)"
    }
  }, cols.map(([head, links]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "xs",
    style: {
      marginBottom: "20px",
      letterSpacing: "var(--ls-eyebrow-sm)"
    }
  }, head), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "13px",
      alignItems: "flex-start"
    }
  }, links.map(([label, target]) => /*#__PURE__*/React.createElement("a", {
    key: label,
    href: target === 'portal' ? '../../prototypes/employee-portal/Employee%20Portal.html' : '#',
    onClick: e => {
      if (target === 'portal') return;
      e.preventDefault();
      if (target === 'enquiry') onEnquire();else if (target) go(target);
    },
    style: {
      fontSize: "15.5px",
      color: "var(--text-link)"
    }
  }, label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "0 var(--layout-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: "1px",
      background: "var(--border-hairline)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "26px 0 34px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-meta)",
      color: "var(--text-meta)"
    }
  }, "\xA9 2026 Aarniksha Solutions. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(18px, 2vw, 34px)"
    }
  }, ['Privacy Policy', 'Terms of Use', 'Refund Policy'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--text-meta)",
      color: "var(--text-meta)"
    }
  }, l))))));
}
function EnquiryForm({
  compact
}) {
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState('');
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    company: '',
    service: 'IT Staffing',
    message: ''
  });
  const set = k => e => {
    setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    setError('');
  };
  const submit = e => {
    e.preventDefault();
    if (!form.name.trim()) return setError('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) return setError('Please enter a valid email address.');
    if (!form.message.trim()) return setError('Please add a short message.');
    setSent(true);
  };
  if (sent) return /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "26px",
      background: "var(--surface-band)",
      border: "1px solid var(--ak-line-blue)",
      borderRadius: "var(--radius-md)",
      padding: "26px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 8px",
      fontSize: "19px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-deep)"
    }
  }, "Thank you \u2014 message received."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "15.5px",
      lineHeight: "1.6",
      color: "var(--text-link)"
    }
  }, "A member of our team will get back to you within one business day."));
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      marginTop: compact ? "26px" : "24px",
      display: "grid",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Full name",
    value: form.name,
    onChange: set('name'),
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Work email",
    value: form.email,
    onChange: set('email'),
    placeholder: "you@company.com"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "16px"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Company",
    value: form.company,
    onChange: set('company'),
    placeholder: "Company name"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "How can we help?",
    as: "select",
    value: form.service,
    onChange: set('service'),
    options: window.AK_DATA.serviceOptions
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message",
    as: "textarea",
    rows: compact ? 3 : 4,
    value: form.message,
    onChange: set('message'),
    placeholder: "Tell us about the roles you're hiring for"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      minHeight: "18px",
      fontSize: "13.5px",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-error)"
    }
  }, error), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    arrow: true,
    style: {
      width: "100%"
    }
  }, "Send enquiry"));
}
function EnquiryModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    eyebrow: "Talk to an Expert",
    title: "Let's build your team.",
    onClose: onClose
  }, /*#__PURE__*/React.createElement(EnquiryForm, {
    compact: true
  }));
}
function BackToTop({
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: "clamp(16px, 2vw, 30px)",
      bottom: "clamp(16px, 2vw, 30px)",
      zIndex: 70
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "fab",
    label: "Back to top",
    onClick: onClick
  }, "\u2191"));
}
Object.assign(window, {
  Header,
  Footer,
  EnquiryForm,
  EnquiryModal,
  BackToTop
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Heroes.jsx
try { (() => {
const {
  Button,
  Eyebrow,
  StatusPill
} = window.AarnikshaDesignSystem_f93754;

/* Homepage hero — radial gradient field with concentric rotating rings, verbatim rhythm from HomeHero.jsx */
function HomeHero({
  onEnquire,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--gradient-hero)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "min(1180px, 108vw)",
      height: "min(1180px, 108vw)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "1px solid rgba(6,54,126,.055)",
      animation: "ak-spin 120s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-3px",
      left: "50%",
      width: "6px",
      height: "6px",
      marginLeft: "-3px",
      borderRadius: "50%",
      background: "rgba(47,128,236,.35)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      position: "absolute",
      inset: "13%",
      borderRadius: "50%",
      border: "1px solid rgba(6,54,126,.07)",
      animation: "ak-spin-rev 84s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: "-4px",
      left: "50%",
      width: "8px",
      height: "8px",
      marginLeft: "-4px",
      borderRadius: "50%",
      background: "var(--ak-blue-500)",
      boxShadow: "0 0 0 6px rgba(47,128,236,.10)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      position: "absolute",
      inset: "26%",
      borderRadius: "50%",
      border: "1px dashed rgba(6,54,126,.09)",
      animation: "ak-spin 62s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "-3px",
      left: "50%",
      width: "6px",
      height: "6px",
      marginLeft: "-3px",
      borderRadius: "50%",
      background: "rgba(6,54,126,.3)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      position: "absolute",
      inset: "39%",
      borderRadius: "50%",
      border: "1px solid rgba(6,54,126,.06)",
      background: "radial-gradient(circle at 50% 42%, rgba(255,255,255,.9), rgba(255,255,255,0) 70%)",
      animation: "ak-spin-rev 44s linear infinite"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "-22%",
      right: "-8%",
      width: "min(720px, 54vw)",
      height: "min(720px, 54vw)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "radial-gradient(circle at 40% 36%, #FFFFFF 0%, #FDFEFF 46%, rgba(232,240,252,.9) 66%, rgba(232,240,252,0) 78%)",
      boxShadow: "0 50px 140px rgba(47,128,236,.10)",
      animation: "ak-breathe 13s ease-in-out infinite"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: "-34%",
      left: "-12%",
      width: "min(640px, 48vw)",
      height: "min(640px, 48vw)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-anim": true,
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      background: "radial-gradient(circle at 55% 45%, rgba(255,255,255,.95), rgba(47,128,236,.07) 58%, rgba(47,128,236,0) 76%)",
      filter: "blur(6px)",
      animation: "ak-drift-a 26s ease-in-out infinite"
    }
  })), /*#__PURE__*/React.createElement("span", {
    "data-anim": true,
    style: {
      position: "absolute",
      top: "22%",
      left: "22%",
      width: "5px",
      height: "5px",
      borderRadius: "50%",
      background: "var(--ak-blue-500)",
      animation: "ak-twinkle 6s ease-in-out infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-anim": true,
    style: {
      position: "absolute",
      top: "34%",
      right: "24%",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "var(--ak-navy-700)",
      animation: "ak-twinkle 7.5s ease-in-out .8s infinite"
    }
  }), /*#__PURE__*/React.createElement("span", {
    "data-anim": true,
    style: {
      position: "absolute",
      bottom: "26%",
      left: "32%",
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "var(--ak-blue-500)",
      animation: "ak-twinkle 5.4s ease-in-out 1.6s infinite"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "clamp(56px, 8vw, 118px) var(--layout-gutter) clamp(72px, 8vw, 120px)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(StatusPill, null, "Connecting Exceptional Talent with Exceptional Businesses"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "clamp(28px, 3.4vw, 48px) 0 0",
      fontSize: "var(--text-display)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-deep)"
    }
  }, "Building Trust.", /*#__PURE__*/React.createElement("br", null), "Delivering Excellence."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "clamp(14px, 1.6vw, 22px) auto 0",
      fontSize: "var(--text-lede)",
      lineHeight: "var(--lh-lede)",
      letterSpacing: "var(--ls-display)",
      fontWeight: "var(--fw-medium)",
      color: "var(--text-primary)",
      textWrap: "balance"
    }
  }, "Connecting Exceptional Talent", /*#__PURE__*/React.createElement("br", null), "with Exceptional Businesses"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "clamp(22px, 2.4vw, 34px) auto 0",
      maxWidth: "var(--measure-hero)",
      fontSize: "clamp(15px, 1.06vw, 19px)",
      lineHeight: "var(--lh-relaxed)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, "We Empower organizations with world-class recruitment, staffing, & business solutions. Our commitment to quality, integrity, and innovation enables businesses to build high-performing teams while helping professionals achieve meaningful careers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
      justifyContent: "center",
      marginTop: "clamp(30px, 3.4vw, 44px)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    arrow: true,
    onClick: onEnquire
  }, "Talk to an Expert"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    arrow: true,
    onClick: () => go('services')
  }, "Explore Capabilities")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "min(460px, 74%)",
      margin: "clamp(40px, 4.6vw, 62px) auto 0",
      height: "12px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "5px",
      left: 0,
      right: 0,
      height: "1px",
      background: "linear-gradient(90deg, rgba(47,128,236,.15), rgba(47,128,236,.5), rgba(47,128,236,.15))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: "11px",
      height: "11px",
      borderRadius: "50%",
      background: "#fff",
      border: "2px solid var(--ak-blue-500)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    "data-anim": true,
    style: {
      position: "absolute",
      top: "3.5px",
      left: 0,
      width: "5px",
      height: "5px",
      marginLeft: "3px",
      borderRadius: "50%",
      background: "var(--ak-blue-500)",
      animation: "ak-travel 5.2s cubic-bezier(.65,0,.35,1) infinite"
    }
  }))));
}

/* Interior page hero — full-bleed photo under a two-layer navy scrim */
function PageHero({
  eyebrow,
  title,
  intro,
  image,
  base = "#06367E",
  objectPosition = "62% 50%",
  scrim,
  eyebrowTone = "onNavyLight"
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: base,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: scrim || "linear-gradient(90deg, rgba(4,26,66,.95) 0%, rgba(6,54,126,.86) 36%, rgba(6,54,126,.5) 72%, rgba(6,54,126,.34) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(4,26,66,.5) 0%, rgba(4,26,66,0) 44%, rgba(4,26,66,.42) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--layout-max)",
      margin: "0 auto",
      padding: "var(--hero-y-top) var(--layout-gutter) var(--hero-y-bottom)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: eyebrowTone,
    size: "sm",
    style: {
      marginBottom: "20px"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 22px",
      maxWidth: "20ch",
      fontSize: "var(--text-h1)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--ak-white)",
      textShadow: "0 2px 24px rgba(2,22,56,.4)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-lede)",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--lh-comfy)",
      color: "var(--text-on-navy)",
      textWrap: "pretty"
    }
  }, intro)));
}
Object.assign(window, {
  HomeHero,
  PageHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Heroes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Screens.jsx
try { (() => {
const {
  Section,
  Eyebrow,
  Button
} = window.AarnikshaDesignSystem_f93754;
function HomeScreen({
  go,
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.HomeHero, {
    go: go,
    onEnquire: onEnquire
  }), /*#__PURE__*/React.createElement(window.AboutStrip, {
    go: go
  }), /*#__PURE__*/React.createElement(window.WhoWeAre, null), /*#__PURE__*/React.createElement(window.ServicesSection, {
    onEnquire: onEnquire
  }), /*#__PURE__*/React.createElement(window.WhyChooseUs, null), /*#__PURE__*/React.createElement(window.ProcessSection, null), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire
  }), /*#__PURE__*/React.createElement(window.IndustriesSection, null), /*#__PURE__*/React.createElement(window.LeadershipStrip, {
    go: go
  }), /*#__PURE__*/React.createElement(window.AudiencePanels, null), /*#__PURE__*/React.createElement(window.Commitment, null), /*#__PURE__*/React.createElement(window.ContactSection, null), /*#__PURE__*/React.createElement(window.ClosingBand, null));
}
function AboutScreen({
  go,
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHero, {
    eyebrow: "About Us",
    title: "Built on trust. Measured by outcomes.",
    intro: "We help organizations build exceptional teams \u2014 combining industry expertise, technology-driven recruitment, and a deep understanding of what each client actually needs.",
    image: "../../assets/about-team.png",
    objectPosition: "68% 46%",
    eyebrowTone: "onNavy",
    scrim: "linear-gradient(90deg, #06367E 0%, rgba(6,54,126,.92) 26%, rgba(6,54,126,.55) 56%, rgba(6,54,126,.1) 100%)"
  }), /*#__PURE__*/React.createElement(window.WhoWeAre, null), /*#__PURE__*/React.createElement(window.AboutStrip, {
    go: go
  }), /*#__PURE__*/React.createElement(window.WhyChooseUs, null), /*#__PURE__*/React.createElement(window.Commitment, null), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire,
    tone: "light"
  }));
}
function ServicesScreen({
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHero, {
    eyebrow: "Our Services",
    title: "Workforce solutions built around your business",
    intro: "From IT and non-IT staffing to executive search, RPO, payroll compliance, and HR consulting \u2014 engage us for a single hire or your entire recruitment lifecycle.",
    image: "../../assets/services-hero.jpg",
    base: "#04142F",
    eyebrowTone: "onNavy",
    scrim: "linear-gradient(90deg, #04142F 0%, rgba(4,20,47,.9) 32%, rgba(6,54,126,.42) 66%, rgba(6,54,126,.28) 100%)"
  }), /*#__PURE__*/React.createElement(window.ServicesSection, {
    onEnquire: onEnquire
  }), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire
  }));
}
function IndustriesScreen({
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHero, {
    eyebrow: "Industries We Serve",
    title: "Delivering talent across diverse industries",
    intro: "Every industry has its own workforce challenges. Our domain expertise lets us deliver professionals with the right skills, experience, and cultural fit.",
    image: "../../assets/industries-hero.jpg",
    objectPosition: "60% 60%"
  }), /*#__PURE__*/React.createElement(window.IndustriesSection, null), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire
  }));
}
function InsightsScreen({
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHero, {
    eyebrow: "How We Work",
    title: "A recruitment process built for speed and precision",
    intro: "A transparent, structured methodology \u2014 from understanding your requirement to post-placement support \u2014 that shortens hiring timelines without compromising on quality.",
    image: "../../assets/insights-hero.jpg",
    objectPosition: "58% 46%"
  }), /*#__PURE__*/React.createElement(window.ProcessSection, null), /*#__PURE__*/React.createElement(window.WhyChooseUs, null), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire
  }));
}
function CareersScreen({
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHero, {
    eyebrow: "Careers",
    title: "Find the team where you belong",
    intro: "Whether you are building a team or planning your next career move, our consultants work closely with you at every stage.",
    image: "../../assets/careers-hero.jpg",
    objectPosition: "62% 40%"
  }), /*#__PURE__*/React.createElement(window.AudiencePanels, null), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire
  }));
}
const DIRECTORS = [{
  name: 'Arjun Laknepally',
  photo: '../../assets/leader-arjun.png',
  bio: "Arjun Laknepally is a visionary leader committed to building Aarniksha Solutions Private Limited into a trusted and client-centric organization. With a strong focus on integrity, innovation, and operational excellence, he is dedicated to delivering solutions that create long-term value for clients and business partners. His leadership is driven by a passion for quality, transparency, and sustainable growth."
}, {
  name: 'Sneha Rampalli',
  photo: '../../assets/leader-sneha.png',
  flip: true,
  bio: "Sneha Rampalli brings a thoughtful and customer-focused approach to the leadership of Aarniksha Solutions Private Limited. She is committed to fostering a culture of professionalism, collaboration, and continuous improvement. Her vision is centered on building lasting relationships with clients through trust, reliability, and exceptional service."
}];
function LeadershipScreen({
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
    tone: "lightGradient",
    innerStyle: {
      padding: "clamp(52px, 6vw, 96px) var(--layout-gutter) clamp(56px, 6.6vw, 104px)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "clamp(24px, 3vw, 48px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-30%",
      left: "-10%",
      width: "44vw",
      height: "44vw",
      borderRadius: "50%",
      background: "radial-gradient(circle at 45% 45%, rgba(47,128,236,.10), rgba(47,128,236,0) 68%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 400px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    style: {
      marginBottom: "20px"
    }
  }, "Leadership"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: "0 0 24px",
      maxWidth: "15ch",
      fontSize: "clamp(38px, 5vw, 68px)",
      lineHeight: "1.02",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: "#0B2A5B"
    }
  }, "Leading with Vision. Delivering with Integrity."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "50ch",
      fontSize: "var(--text-body)",
      lineHeight: "1.68",
      color: "var(--ak-ink-600)",
      textWrap: "pretty"
    }
  }, "At Aarniksha Solutions, our leadership is driven by a commitment to innovation, integrity, and excellence. Guided by Directors Arjun Laknepally and Sneha Rampalli, we deliver trusted solutions, build lasting client relationships, and create sustainable value.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 480px",
      minWidth: 0,
      marginRight: "clamp(-40px, -4vw, -20px)",
      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.55) 5%, #000 16%), linear-gradient(180deg, transparent 0%, #000 11%, #000 84%, transparent 100%)",
      maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.55) 5%, #000 16%), linear-gradient(180deg, transparent 0%, #000 11%, #000 84%, transparent 100%)",
      WebkitMaskComposite: "source-in",
      maskComposite: "intersect"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/leadership-hero.png",
    alt: "Business leaders flying on paper planes toward a flag",
    style: {
      display: "block",
      width: "100%",
      height: "auto"
    }
  }))), /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    size: "tight",
    innerStyle: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(28px, 4.5vw, 72px)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-52%",
      right: "-10%",
      width: "46vw",
      height: "46vw",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.07)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "0 1 320px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy",
    style: {
      marginBottom: "18px"
    }
  }, "Our Shared Vision"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "56px",
      height: "4px",
      borderRadius: "2px",
      background: "var(--ak-blue-400)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      flex: "1 1 460px",
      minWidth: 0,
      margin: 0,
      fontSize: "var(--text-statement)",
      lineHeight: "1.5",
      letterSpacing: "-.015em",
      fontWeight: "var(--fw-medium)",
      color: "var(--ak-white)",
      textWrap: "pretty"
    }
  }, "Together, Arjun Laknepally and Sneha Rampalli are leading Aarniksha Solutions with a common purpose \u2014 to build a company recognized for its integrity, innovation, and commitment to excellence. Their goal is to create meaningful partnerships, deliver reliable solutions, and contribute to the success of every client they serve.")), /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "clamp(44px, 5.5vw, 78px)"
    }
  }, "Meet Our Directors"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "clamp(56px, 7vw, 104px)"
    }
  }, DIRECTORS.map(d => /*#__PURE__*/React.createElement("article", {
    key: d.name,
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "clamp(28px, 4.5vw, 76px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "278px",
      width: "100%",
      order: d.flip ? 2 : 1,
      justifySelf: d.flip ? "end" : "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: "18px -18px -18px 18px",
      borderRadius: "var(--radius-lg)",
      background: "linear-gradient(135deg, rgba(47,128,236,.22), rgba(6,54,126,.14))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: d.photo,
    alt: d.name + ', Director at Aarniksha Solutions',
    loading: "lazy",
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      aspectRatio: "4 / 5",
      objectFit: "cover",
      objectPosition: "50% 22%",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-portrait-light)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      order: d.flip ? 1 : 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 10px",
      fontSize: "var(--text-h3-lg)",
      lineHeight: "1.08",
      letterSpacing: "var(--ls-h2)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-heading)"
    }
  }, d.name), /*#__PURE__*/React.createElement(Eyebrow, {
    size: "sm",
    style: {
      marginBottom: "22px"
    }
  }, "Director"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-body)",
      fontSize: "var(--text-body)",
      lineHeight: "1.7",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, d.bio)))))), /*#__PURE__*/React.createElement(window.CtaBand, {
    onEnquire: onEnquire,
    tone: "light"
  }));
}
function ContactScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.PageHero, {
    eyebrow: "Contact Us",
    title: "Let's talk about your next hire",
    intro: "Tell us what you need and a member of our team will come back to you within one business day.",
    image: "../../assets/contact-hero.jpg",
    base: "#071A3C",
    objectPosition: "64% 50%",
    scrim: "linear-gradient(90deg, rgba(7,26,60,.92) 0%, rgba(6,54,126,.72) 34%, rgba(6,54,126,.34) 70%, rgba(6,54,126,.22) 100%)"
  }), /*#__PURE__*/React.createElement(window.ContactSection, {
    hideHeading: true
  }));
}
Object.assign(window, {
  HomeScreen,
  AboutScreen,
  ServicesScreen,
  IndustriesScreen,
  InsightsScreen,
  CareersScreen,
  LeadershipScreen,
  ContactScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  Divider,
  ServiceCard,
  AccordionItem,
  ProcessStep
} = window.AarnikshaDesignSystem_f93754;
function AboutStrip({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "blueDeep",
    size: "band"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-30%",
      right: "-12%",
      width: "46vw",
      height: "46vw",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.12)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--stack-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 380px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: "clamp(46px, 6vw, 80px)",
      lineHeight: "var(--lh-flush)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--ak-white)"
    }
  }, "About Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "clamp(18px, 2.2vw, 30px)",
      marginLeft: "calc(-1 * var(--layout-gutter))",
      marginRight: "-6%"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/about-network.png",
    alt: "A project team reviewing work together, linked to a wider network of professionals",
    loading: "lazy",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 460px",
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "22px"
    }
  }, ["Aarniksha Solutions Private Limited is a leading IT Services, Consulting, and Talent Solutions company dedicated to helping businesses achieve sustainable growth through technology, innovation, and skilled professionals.", "We partner with organizations of all sizes to deliver cutting-edge IT consulting, software development, cloud solutions, digital transformation, AI-driven solutions, and IT staffing services. Our focus is on understanding each client's unique business challenges and providing customized, scalable, and cost-effective solutions that drive measurable results.", "At Aarniksha Solutions, we believe technology is more than a tool\u2014it is a catalyst for business transformation. By combining technical expertise with industry knowledge, we help our clients stay competitive in an ever-evolving digital landscape."].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--lh-body)",
      color: "rgba(255,255,255,.92)",
      textWrap: "pretty"
    }
  }, t)), /*#__PURE__*/React.createElement(Button, {
    variant: "underline",
    arrow: true,
    onClick: () => go('services'),
    style: {
      alignSelf: "flex-start",
      marginTop: "14px"
    }
  }, "Explore"))));
}
function WhoWeAre() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--stack-md)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      flex: "0 0 auto",
      marginBottom: "10px"
    }
  }, "Who We Are"), /*#__PURE__*/React.createElement("h2", {
    style: {
      flex: "1 1 520px",
      margin: 0,
      maxWidth: "20ch",
      fontSize: "var(--text-h2)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-h2)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-heading)"
    }
  }, "Your Trusted Talent & Business Solutions Partner")), /*#__PURE__*/React.createElement(Divider, {
    style: {
      margin: "clamp(34px, 4vw, 54px) 0 clamp(34px, 4vw, 52px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(32px, 5vw, 84px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 400px",
      minWidth: 0,
      display: "flex",
      gap: "18px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      fontSize: "54px",
      lineHeight: ".8",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--ak-blue-500)"
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-quote)",
      lineHeight: "var(--lh-snug)",
      letterSpacing: "var(--ls-quote)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-deep)",
      textWrap: "pretty"
    }
  }, "At Aarniksha Solutions, we don't just fill positions\u2014we build relationships, strengthen businesses, and create opportunities for people to succeed.")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 440px",
      minWidth: 0,
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }
  }, ["Aarniksha Solutions Private Limited is a dynamic recruitment, staffing, and business solutions company dedicated to helping organizations build exceptional teams and achieve sustainable growth.", "With a strong commitment to professionalism, integrity, and excellence, we deliver customized workforce solutions that meet the evolving needs of businesses across diverse industries. From startups to large enterprises, we partner with our clients to identify, attract, and retain the right talent.", "Our approach combines industry expertise, technology-driven recruitment, and a deep understanding of client requirements to ensure every hiring decision creates long-term value."].map((t, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      margin: 0,
      fontSize: "clamp(15px, 1.05vw, 18px)",
      lineHeight: "var(--lh-comfy)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, t)))));
}
function ServicesSection({
  onEnquire
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "band",
    id: "services"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Services",
    title: "Comprehensive Talent & Business Solutions",
    intro: "At Aarniksha Solutions Private Limited, we offer end-to-end workforce and business solutions that enable organizations to grow with confidence and efficiency.",
    style: {
      marginBottom: "clamp(38px, 4.6vw, 62px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(258px, 1fr))",
      gap: "clamp(18px, 1.6vw, 24px)"
    }
  }, window.AK_DATA.services.map((s, i) => /*#__PURE__*/React.createElement(ServiceCard, _extends({
    key: s.title
  }, s, {
    panelIndex: i,
    onCta: onEnquire
  })))));
}
function WhyChooseUs() {
  const rows = window.AK_DATA.why;
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy"
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-18%",
      right: "-22%",
      width: "58vw",
      height: "58vw",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.07)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "min(58%, 760px)",
      pointerEvents: "none",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/why-choose-tech.png",
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "62% 50%",
      mixBlendMode: "screen",
      opacity: .62,
      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 22%, #000 62%), linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
      maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 22%, #000 62%), linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)",
      WebkitMaskComposite: "source-in",
      maskComposite: "intersect"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, #06367E 0%, rgba(6,54,126,.82) 26%, rgba(6,54,126,.28) 62%, rgba(6,54,126,.42) 100%)"
    }
  })), /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy",
    style: {
      marginBottom: "clamp(30px, 3.6vw, 46px)"
    }
  }, "Why Choose Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "560px"
    }
  }, rows.map(([n, title, body], i) => /*#__PURE__*/React.createElement(AccordionItem, {
    key: n,
    index: n,
    title: title,
    body: body,
    last: i === rows.length - 1
  }))));
}
function ProcessSection() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    id: "process"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Our Recruitment Process",
    title: "A Proven Process. Exceptional Results.",
    align: "start",
    titleWidth: "var(--measure-headline-tight)",
    intro: "At Aarniksha Solutions Private Limited, we follow a structured and transparent recruitment process to ensure every hiring decision delivers value to our clients and career growth for our candidates.",
    style: {
      marginBottom: "clamp(38px, 4.6vw, 58px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      columnGap: "clamp(26px, 3vw, 44px)",
      rowGap: "clamp(38px, 4vw, 56px)"
    }
  }, window.AK_DATA.process.map(([title, body]) => /*#__PURE__*/React.createElement(ProcessStep, {
    key: title,
    title: title,
    body: body
  }))));
}
Object.assign(window, {
  AboutStrip,
  WhoWeAre,
  ServicesSection,
  WhyChooseUs,
  ProcessSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsA.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SectionsB.jsx
try { (() => {
const {
  Section,
  SectionHeading,
  Eyebrow,
  Button,
  IconButton,
  IndustryCard,
  ValueCard,
  LeaderCard,
  FeaturePanel,
  Pill,
  IconRow,
  ContactRow,
  FilterChip
} = window.AarnikshaDesignSystem_f93754;
function CtaBand({
  onEnquire,
  tone = "blue"
}) {
  const dark = tone === "blue";
  return /*#__PURE__*/React.createElement(Section, {
    tone: dark ? "blue" : "band",
    size: "band",
    innerStyle: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(32px, 5vw, 72px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-60%",
      right: "-6%",
      width: "46vw",
      height: "46vw",
      borderRadius: "50%",
      background: dark ? "radial-gradient(circle at 40% 40%, rgba(255,255,255,.14), rgba(255,255,255,0) 70%)" : "radial-gradient(circle at 40% 40%, rgba(47,128,236,.16), rgba(47,128,236,0) 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 400px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: dark ? "onColor" : "blue",
    style: {
      marginBottom: "20px"
    }
  }, "Ready to Build Your Dream Team?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: "14ch",
      fontSize: "var(--text-h2-band)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: dark ? "var(--ak-white)" : "var(--text-heading)"
    }
  }, "Let's Build Success Together")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 420px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 32px",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--lh-body)",
      color: dark ? "var(--text-on-blue)" : "var(--text-body)",
      textWrap: "pretty"
    }
  }, "Whether you're a startup, a growing business, or a large enterprise, Aarniksha Solutions Private Limited is here to help you find the right talent and build high-performing teams. From sourcing exceptional professionals to delivering end-to-end recruitment solutions, we are committed to supporting your business at every stage of its growth journey."), /*#__PURE__*/React.createElement(Button, {
    variant: dark ? "white" : "primary",
    arrow: true,
    onClick: onEnquire
  }, "Talk to an Expert")));
}
function IndustriesSection() {
  const [group, setGroup] = React.useState('all');
  const track = React.useRef(null);
  const step = dir => {
    const t = track.current;
    if (t) t.scrollBy({
      left: dir * 320,
      behavior: 'smooth'
    });
  };
  const shown = window.AK_DATA.industries.filter(x => group === 'all' || x.group === group);
  return /*#__PURE__*/React.createElement(Section, {
    tone: "band",
    id: "industries"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Industries We Serve",
    title: "Delivering Talent Across Diverse Industries",
    align: "start",
    titleWidth: "15ch",
    intro: "At Aarniksha Solutions Private Limited, we understand that every industry has unique workforce challenges. Our domain expertise enables us to identify and deliver professionals who possess the right skills, experience, and cultural fit.",
    style: {
      marginBottom: "clamp(38px, 4.6vw, 58px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      marginBottom: "clamp(22px, 2.4vw, 30px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "9px"
    }
  }, window.AK_DATA.industryFilters.map(([key, label, count]) => /*#__PURE__*/React.createElement(FilterChip, {
    key: key,
    active: group === key,
    count: count,
    onClick: () => {
      setGroup(key);
      if (track.current) track.current.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "10px",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    label: "Scroll industries left",
    onClick: () => step(-1)
  }, "\u2190"), /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    label: "Scroll industries right",
    onClick: () => step(1)
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    ref: track,
    "data-track": true,
    style: {
      display: "flex",
      gap: "var(--grid-gap)",
      overflowX: "auto",
      scrollSnapType: "x mandatory",
      scrollBehavior: "smooth",
      padding: "4px 4px 12px",
      margin: "0 -4px"
    }
  }, shown.map(x => /*#__PURE__*/React.createElement(IndustryCard, {
    key: x.title,
    title: x.title,
    items: x.items,
    style: {
      flex: "0 0 clamp(246px, 24vw, 300px)",
      scrollSnapAlign: "start"
    }
  }))));
}
function LeadershipStrip({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navyGradient"
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "clamp(120px, 20vw, 320px)",
      lineHeight: 1,
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "-.06em",
      color: "rgba(255,255,255,.028)",
      whiteSpace: "nowrap",
      pointerEvents: "none"
    }
  }, "LEADERSHIP"), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-40%",
      right: "-12%",
      width: "48vw",
      height: "48vw",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.06)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(36px, 5vw, 80px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 380px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onNavy",
    size: "sm",
    style: {
      marginBottom: "20px"
    }
  }, "Leadership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 22px",
      maxWidth: "16ch",
      fontSize: "clamp(34px, 4.4vw, 58px)",
      lineHeight: "1.02",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--ak-white)"
    }
  }, "Guided by Vision. Grounded in Integrity."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 clamp(26px, 3vw, 36px)",
      maxWidth: "var(--measure-intro)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--lh-comfy)",
      color: "rgba(255,255,255,.76)",
      textWrap: "pretty"
    }
  }, "Arjun Laknepally and Sneha Rampalli lead Aarniksha Solutions with a shared commitment to integrity, innovation and client-centric delivery."), /*#__PURE__*/React.createElement(Button, {
    variant: "white",
    size: "md",
    arrow: true,
    onClick: () => go('leadership')
  }, "Meet the directors")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 440px",
      minWidth: 0,
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(18px, 2.4vw, 32px)",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(LeaderCard, {
    index: "01",
    name: "Arjun Laknepally",
    photo: "../../assets/leader-arjun.png"
  }), /*#__PURE__*/React.createElement(LeaderCard, {
    index: "02",
    name: "Sneha Rampalli",
    photo: "../../assets/leader-sneha.png",
    offset: true
  }))));
}
function AudiencePanels() {
  const rows = window.AK_DATA.commitmentRows;
  const panel = (tag, title) => /*#__PURE__*/React.createElement(FeaturePanel, null, /*#__PURE__*/React.createElement(Pill, null, tag), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "clamp(22px, 2.4vw, 32px) 0 12px",
      fontSize: "var(--text-h2-panel)",
      lineHeight: "1.02",
      letterSpacing: "-.032em",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-heading)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 clamp(20px, 2.2vw, 28px)",
      fontSize: "16.5px",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-accent)"
    }
  }, "Our Commitment"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-card)"
    }
  }, rows.map(([icon, t, b], i) => /*#__PURE__*/React.createElement(IconRow, {
    key: t,
    icon: icon,
    title: t,
    body: b,
    divider: i !== rows.length - 1
  }))));
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    id: "jobseekers",
    innerStyle: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
      gap: "clamp(24px, 2.6vw, 34px)"
    }
  }, panel('Employers', 'For Employers'), panel('Job Seekers', 'For Job Seekers'));
}
function Commitment() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "blue",
    size: "tight",
    innerStyle: {
      display: "flex",
      flexWrap: "wrap",
      gap: "clamp(30px, 4vw, 64px)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 340px",
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "onColor",
    style: {
      marginBottom: "18px"
    }
  }, "Our Commitment"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: "11ch",
      fontSize: "clamp(38px, 5vw, 66px)",
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--ak-white)"
    }
  }, "Our Commitment")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "2 1 520px",
      minWidth: 0,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
      gap: "clamp(14px, 1.4vw, 20px)"
    }
  }, window.AK_DATA.commitments.map(([n, t, b]) => /*#__PURE__*/React.createElement(ValueCard, {
    key: n,
    index: n,
    title: t,
    body: b
  }))));
}
function ContactSection({
  hideHeading
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    id: "contact",
    innerStyle: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
      gap: "clamp(32px, 4.6vw, 72px)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, !hideHeading ? /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "22px"
    }
  }, "Contact Us") : null, !hideHeading ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 20px",
      maxWidth: "16ch",
      fontSize: "var(--text-h2)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--ls-h2)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-heading)"
    }
  }, "Let's talk about your next hire") : null, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 clamp(24px, 3vw, 36px)",
      maxWidth: "var(--measure-intro)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, "Whether you are building a team or exploring your next role, our consultants respond within one business day."), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "mail",
    label: "Email"
  }, "info@aarnikshasolutions.com", /*#__PURE__*/React.createElement("br", null), "hr@aarnikshasolutions.com"), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "phone",
    label: "Phone"
  }, "+91 94923 69600", /*#__PURE__*/React.createElement("br", null), "+91 93917 20155"), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "pin",
    label: "Office"
  }, "Hi-Tech City, Hyderabad"), /*#__PURE__*/React.createElement(ContactRow, {
    icon: "clock",
    label: "Hours"
  }, "Mon\u2013Fri \xB7 9:30am \u2013 6:30pm IST")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-tint)",
      border: "1px solid var(--border-card)",
      borderRadius: "var(--radius-xl)",
      padding: "clamp(26px, 3vw, 40px)",
      boxShadow: "var(--shadow-panel)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "0 0 6px",
      fontSize: "clamp(22px, 2.2vw, 28px)",
      lineHeight: "1.14",
      letterSpacing: "-.025em",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--text-heading)"
    }
  }, "Send us an enquiry"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-body-xs)",
      lineHeight: "1.6",
      color: "var(--text-muted)"
    }
  }, "Tell us what you need and we'll come back with a plan."), /*#__PURE__*/React.createElement(window.EnquiryForm, null)));
}
function ClosingBand() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "navy",
    innerStyle: {
      padding: "clamp(64px, 8vw, 112px) var(--layout-gutter) clamp(80px, 9vw, 130px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: "-40%",
      right: "-16%",
      width: "62vw",
      height: "62vw",
      borderRadius: "50%",
      border: "1px solid rgba(255,255,255,.08)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      bottom: "-70%",
      right: "4%",
      width: "44vw",
      height: "44vw",
      borderRadius: "50%",
      background: "radial-gradient(circle at 50% 30%, rgba(47,128,236,.28), rgba(47,128,236,0) 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "min(52%, 700px)",
      pointerEvents: "none",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/service-permanent-hiring.jpg",
    alt: "",
    loading: "lazy",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "55% 45%",
      mixBlendMode: "luminosity",
      opacity: .3,
      WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.22) 34%, #000 78%), linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%)",
      maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.22) 34%, #000 78%), linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%)",
      WebkitMaskComposite: "source-in",
      maskComposite: "intersect"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(90% 120% at 100% 50%, rgba(47,128,236,.16), rgba(6,54,126,0) 62%), linear-gradient(90deg, #06367E 0%, rgba(6,54,126,.82) 34%, rgba(6,54,126,.5) 74%, rgba(6,54,126,.66) 100%)"
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 clamp(26px, 3vw, 40px)",
      maxWidth: "20ch",
      fontSize: "clamp(38px, 5.6vw, 76px)",
      lineHeight: "var(--lh-flush)",
      letterSpacing: "var(--ls-h1)",
      fontWeight: "var(--fw-extrabold)",
      color: "var(--ak-white)"
    }
  }, "Building Trust. Delivering Excellence."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "62ch",
      fontSize: "var(--text-body-lg)",
      lineHeight: "var(--lh-comfy)",
      color: "var(--text-on-navy-soft)",
      textWrap: "pretty"
    }
  }, "Your success is our mission. Let's shape the future of work\u2014together. Contact us today and discover how Aarniksha Solutions can help your business grow with the right people."));
}
Object.assign(window, {
  CtaBand,
  IndustriesSection,
  LeadershipStrip,
  AudiencePanels,
  Commitment,
  ContactSection,
  ClosingBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SectionsB.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.AK_DATA = {
  nav: [['Home', 'home'], ['About Us', 'about'], ['Services', 'services'], ['Industries', 'industries'], ['Insights', 'insights'], ['Careers', 'careers'], ['Leadership', 'leadership']],
  services: [{
    icon: 'it-staffing',
    title: 'IT Staffing',
    body: 'Providing highly skilled technology professionals across software development, cloud, data, and infrastructure domains.'
  }, {
    icon: 'non-it-staffing',
    title: 'Non-IT Staffing',
    body: 'Connecting organizations with qualified professionals across finance, HR, operations, sales, and administration.'
  }, {
    icon: 'permanent-hiring',
    title: 'Permanent Hiring',
    body: 'Helping businesses recruit exceptional full-time professionals who drive long-term organizational growth.'
  }, {
    icon: 'contract-staffing',
    title: 'Contract Staffing',
    body: 'Delivering flexible workforce solutions for project-based, short-term, and seasonal requirements.'
  }, {
    icon: 'executive-search',
    title: 'Executive Search',
    body: 'Identifying and recruiting senior leadership professionals and niche specialists for business-critical roles.'
  }, {
    icon: 'rpo',
    title: 'Recruitment Process Outsourcing (RPO)',
    body: 'Managing the complete recruitment lifecycle, from talent sourcing to onboarding, as an extension of your team.'
  }, {
    icon: 'payroll-compliance',
    title: 'Payroll & Compliance Support',
    body: 'Ensuring seamless payroll management and statutory compliance across every engagement.'
  }, {
    icon: 'hr-consulting',
    title: 'HR Consulting',
    body: 'Providing strategic HR advisory services, workforce planning, and organisational development support.'
  }],
  industries: [{
    group: 'tech',
    title: 'Information Technology (IT)',
    items: ['Software Development', 'Cloud Computing', 'AI & ML', 'Cybersecurity', 'Data Analytics', 'ERP', 'DevOps', 'Infrastructure']
  }, {
    group: 'finance',
    title: 'Banking, Financial Services & Insurance (BFSI)',
    items: ['Banking', 'Financial Services', 'Insurance', 'FinTech', 'Risk & Compliance']
  }, {
    group: 'healthcare',
    title: 'Healthcare & Life Sciences',
    items: ['Hospitals', 'Pharmaceuticals', 'Medical Devices', 'Healthcare Services', 'Clinical Research']
  }, {
    group: 'industrial',
    title: 'Engineering & Manufacturing',
    items: ['Automotive', 'Industrial Manufacturing', 'Heavy Engineering', 'Process Industries']
  }, {
    group: 'tech',
    title: 'Telecom & Digital Services',
    items: ['Telecommunications', 'Network Operations', 'Digital Transformation', 'ITES']
  }, {
    group: 'consumer',
    title: 'Retail & E-Commerce',
    items: ['Retail Chains', 'Online Marketplaces', 'Supply Chain', 'Customer Experience']
  }, {
    group: 'industrial',
    title: 'Logistics & Supply Chain',
    items: ['Warehousing', 'Transportation', 'Procurement', 'Inventory Management']
  }, {
    group: 'industrial',
    title: 'Infrastructure, Construction & Real Estate',
    items: ['Construction', 'EPC', 'Smart Infrastructure', 'Facility Management']
  }, {
    group: 'industrial',
    title: 'Energy & Utilities',
    items: ['Power', 'Renewable Energy', 'Oil & Gas', 'Utilities']
  }, {
    group: 'consumer',
    title: 'Education & Corporate Services',
    items: ['Education', 'HR', 'Administration', 'Legal', 'Sales & Marketing', 'Business Operations']
  }],
  industryFilters: [['all', 'All Industries', 10], ['tech', 'Technology', 2], ['finance', 'Finance', 1], ['healthcare', 'Healthcare', 1], ['industrial', 'Industrial & Energy', 4], ['consumer', 'Consumer & Services', 2]],
  why: [['01', 'Industry Expertise', 'Our experienced recruitment professionals understand diverse industries, technologies, and business requirements, enabling us to identify the right talent for every role.'], ['02', 'Quality-Driven Hiring', 'Every candidate undergoes a comprehensive screening and evaluation process to ensure the best fit for your organization.'], ['03', 'Faster Hiring Process', 'Our streamlined recruitment methodology reduces hiring timelines, helping you secure top talent quickly without compromising on quality.'], ['04', 'Customized Workforce Solutions', 'Every organization is unique. We tailor our staffing and recruitment strategies to align with your business objectives and workforce needs.'], ['05', 'Integrity & Transparency', 'We believe in honest communication, ethical business practices, and complete transparency throughout every stage of the recruitment process.'], ['06', 'Long-Term Partnerships', 'Our focus is not just on filling positions but on building trusted, long-lasting relationships that contribute to the sustained growth of our clients and candidates.']],
  process: [['Understand', 'We begin by understanding your business, organizational culture, technical requirements, and hiring objectives.'], ['Source', 'Using our extensive talent network, premium job portals, professional platforms, referrals, and strategic sourcing techniques, we identify the most suitable candidates.'], ['Screen & Assess', 'Every candidate is carefully evaluated through resume screening, skill assessments, technical validation, and preliminary interviews to ensure quality and role alignment.'], ['Shortlist', 'Only the most qualified and best-matched candidates are presented, saving your hiring team valuable time and effort.'], ['Interview & Selection', 'We coordinate the interview process, gather feedback, facilitate communication, and support both clients and candidates until the final hiring decision.'], ['Onboard & Support', 'Our commitment extends beyond placement. We assist with onboarding and provide continued support to ensure a smooth transition and long-term success.']],
  commitments: [['01', 'Trusted Partnerships', 'We build long-term relationships based on integrity, transparency, and mutual success.'], ['02', 'Quality-First Approach', 'Every candidate and every client engagement reflects our commitment to excellence.'], ['03', 'Dedicated Support', 'Our team works closely with clients and candidates to ensure a smooth and successful recruitment experience.']],
  commitmentRows: [['partnership', 'Trusted Partnerships', 'We build long-term relationships based on integrity, transparency, and mutual success.'], ['check-circle', 'Quality-First Approach', 'Every candidate and every client engagement reflects our commitment to excellence.'], ['target', 'Dedicated Support', 'Our team works closely with clients and candidates to ensure a smooth and successful recruitment experience.']],
  serviceOptions: ['IT Staffing', 'Non-IT Staffing', 'Permanent Hiring', 'Contract Staffing', 'Executive Search', 'Recruitment Process Outsourcing (RPO)', 'Payroll & Compliance Support', 'HR Consulting', 'Software Development', 'Corporate Trainings']
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.FeaturePanel = __ds_scope.FeaturePanel;

__ds_ns.IndustryCard = __ds_scope.IndustryCard;

__ds_ns.LeaderCard = __ds_scope.LeaderCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ValueCard = __ds_scope.ValueCard;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.ServiceIcon = __ds_scope.ServiceIcon;

__ds_ns.SERVICE_ICON_NAMES = __ds_scope.SERVICE_ICON_NAMES;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.AccordionItem = __ds_scope.AccordionItem;

__ds_ns.CarouselDots = __ds_scope.CarouselDots;

__ds_ns.ContactRow = __ds_scope.ContactRow;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.IconRow = __ds_scope.IconRow;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

})();
