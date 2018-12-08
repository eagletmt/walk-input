window.addEventListener('keydown', (evt) => {
  if (!evt.ctrlKey && evt.altKey && !evt.metaKey && (evt.key === 'i' || evt.key === 'I')) {
    const inputs = findTextInputElements();
    if (inputs.length !== 0) {
      if (isTextInputElement(evt.target)) {
        let index = inputs.findIndex((input) => input.isSameNode(evt.target));
        if (index === -1) {
          inputs[0].focus();
        } else {
          if (evt.shiftKey) {
            inputs[(index + inputs.length - 1) % inputs.length].focus();
          } else {
            inputs[(index + 1) % inputs.length].focus();
          }
        }
      } else {
        inputs[0].focus();
      }
    }
    evt.preventDefault();
  }
});

function isTextInputElement(element) {
  if (element.localName === 'input') {
    return ['text', 'search', 'tel', 'url', 'email', 'password', 'number'].indexOf(element.type) !== -1;
  } else {
    return element.localName === 'textarea' || element.isContentEditable;
  }
}

function isVisibleElement(element) {
  return element.clientWidth > 0 && element.clientHeight > 0;
}

function findTextInputElements() {
  return Array.filter(document.querySelectorAll('input, textarea, [contenteditable]'), isTextInputElement).filter(isVisibleElement);
}
