import React, { Fragment, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";
import FeatureBlockWrapper, {
  IconWrapper,
  ContentWrapper,
  ButtonWrapper
} from "./featureBlock.style";

const FeatureBlock = ({
  className,
  icon,
  title,
  button,
  description,
  details,
  iconPosition,
  additionalContent,
  wrapperStyle,
  iconStyle,
  contentStyle,
  btnWrapperStyle,
  ...props
}) => {
  const [menuState, setMenuState] = useState({
    show: false
  });

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);
    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  });

  const handleToggle = () => {
    setMenuState(prevState => ({
      ...menuState,
      show: !prevState.show
    }));
  };

  const handleDocumentClick = () => {
    if (menuState.show) {
      handleToggle();
    }
  };
  // Add all classs to an array
  const addAllClasses = ["feature__block"];

  // Add icon position class
  if (iconPosition) {
    addAllClasses.push(`icon_${iconPosition}`);
  }

  // className prop checking
  if (className) {
    addAllClasses.push(className);
  }

  // check icon value and add
  const Icon = icon && (
    <IconWrapper className="icon__wrapper" {...iconStyle}>
      {icon}
    </IconWrapper>
  );

  return (
    <FeatureBlockWrapper
      onClick={handleToggle}
      className={addAllClasses.join(" ")}
      {...wrapperStyle}
      {...props}
    >
      {Icon}

      {title || description || button ? (
        <Fragment>
          <ContentWrapper className="content__wrapper" {...contentStyle}>
            {title}
            {description}
            {menuState.show && (
              <>
                {details}
                {button && (
                  <ButtonWrapper
                    className="button__wrapper"
                    {...btnWrapperStyle}
                  >
                    {button}
                  </ButtonWrapper>
                )}
              </>
            )}
          </ContentWrapper>
          {additionalContent}
        </Fragment>
      ) : (
        ""
      )}
    </FeatureBlockWrapper>
  );
};

FeatureBlock.propTypes = {
  /** ClassName of the FeatureBlock */
  className: PropTypes.string,

  /** title prop contain a react component. You can use our Heading component from reusecore */
  title: PropTypes.element,

  /** description prop contain a react component. You can use our Text component from reusecore */
  description: PropTypes.element,

  /** details */
  details: PropTypes.element,

  /** button prop contain a react component. You can use our Button component from reusecore */
  button: PropTypes.element,

  /** Set icon position of the FeatureBlock */
  iconPosition: PropTypes.oneOf(["top", "left", "right"]),

  /** wrapperStyle prop contain these style system props:  display, flexWrap, width, height, alignItems,
   * justifyContent, position, overflow, space, color, borders, borderColor, boxShadow and borderRadius. */
  wrapperStyle: PropTypes.object,

  /** iconStyle prop contain these style system props: display, width, height, alignItems, justifyContent,
   * position, space, fontSize, color, borders, overflow, borderColor, boxShadow and borderRadius. */
  iconStyle: PropTypes.object,

  /** contentStyle prop contain these style system props: width, textAlign and space. */
  contentStyle: PropTypes.object,

  /** btnWrapperStyle prop contain these style system props: display, space, alignItems,
   * flexDirection and justifyContent. */
  btnWrapperStyle: PropTypes.object
};

FeatureBlock.defaultProps = {
  iconPosition: "top"
};

export default FeatureBlock;
