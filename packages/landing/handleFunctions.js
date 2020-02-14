export const handleSearchModal = () => {
  openModal({
    config: {
      className: "search-modal",
      disableDragging: true,
      width: "100%",
      height: "100%",
      animationFrom: { transform: "translateY(100px)" },
      animationTo: { transform: "translateY(0)" }, //
      transition: {
        mass: 1,
        tension: 180,
        friction: 26
      }
    },
    component: SearchPanel,
    componentProps: {},
    closeComponent: CloseModalButtonAlt,
    closeOnClickOutside: true
  });
};

export const handleLoginModal = () => {
  openModal({
    config: {
      className: "login-modal",
      disableDragging: true,
      width: "100%",
      height: "100%",
      animationFrom: { transform: "translateY(100px)" },
      animationTo: { transform: "translateY(0)" },
      transition: {
        mass: 1,
        tension: 180,
        friction: 26
      }
    },
    component: LoginModal,
    componentProps: {},
    closeComponent: CloseModalButton,
    closeOnClickOutside: true
  });
};

export const toggleHandler = () => {
  dispatch({
    type: "TOGGLE"
  });
};
