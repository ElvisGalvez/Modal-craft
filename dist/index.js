"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
const Modal = _ref => {
  let {
    isOpen = false,
    onClose,
    children,
    className = '',
    classNames = {},
    fadeDuration = 0,
    fadeDelay = 1.0,
    customTransition,
    customButtons,
    style = {},
    renderFooter,
    closeOnEscape = true,
    closeOnClickOutside = true
  } = _ref;
  const [isShown, setIsShown] = (0, _react.useState)(isOpen);
  const modalRef = (0, _react.useRef)(null);
  const closeModal = e => {
    if (closeOnClickOutside && modalRef.current === e.target) {
      onClose();
    }
  };
  (0, _react.useEffect)(() => {
    if (isOpen) {
      setIsShown(true);
    } else {
      const timer = setTimeout(() => setIsShown(false), fadeDuration * 1000 * fadeDelay);
      return () => clearTimeout(timer);
    }
  }, [isOpen, fadeDuration, fadeDelay]);
  (0, _react.useEffect)(() => {
    const handleKeyDown = event => {
      if (closeOnEscape && event.keyCode === 27 && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, closeOnEscape]);
  const transitionStyle = customTransition || "opacity ".concat(fadeDuration, "s ").concat(fadeDelay, "s");
  const footer = renderFooter ? renderFooter() : customButtons || /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClose,
    className: "close-modal"
  }, "Close");
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: modalRef,
    onClick: closeModal,
    className: "modal-blocker ".concat(isShown ? 'shown' : 'hidden', " ").concat(className, " ").concat(classNames.blocker || ''),
    style: {
      transition: transitionStyle,
      ...style.blocker
    },
    "aria-hidden": !isShown,
    role: "dialog",
    "aria-modal": "true",
    "data-testid": "modal-blocker"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content ".concat(classNames.content || ''),
    style: {
      ...style.content
    },
    role: "document"
  }, children, footer));
};
var _default = exports.default = Modal;