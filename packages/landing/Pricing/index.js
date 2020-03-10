import React, { useState, useEffect, useReducer, useRef } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import { EMAIL_CONSULT } from "../MutationsQueries";
import { useWindowSize } from "reusecore/src/hooks";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Box from "reusecore/src/elements/Box";
import Text from "reusecore/src/elements/Text";
import Image from "reusecore/src/elements/Image";
import Heading from "reusecore/src/elements/Heading";
import Checkbox from "reusecore/src/elements/Checkbox";
import Button from "reusecore/src/elements/Button";
import InputGroup from "common/src/components/InputGroup";
import RadioGroup from "common/src/components/RadioGroup";
import Container from "common/src/components/UI/Container";
import GlideCarousel from "common/src/components/GlideCarousel";
import success from "common/src/assets/image/success.svg";
import GlideSlide from "common/src/components/GlideCarousel/glideSlide";
import { useToggle } from "reusecore/src/hooks";
import SuccessfullySubmittedImage from "common/src/assets/image/submitted.svg";
import {
  TYPE_TABLE,
  MONTHLY_PRICING_TABLE,
  YEARLY_PRICING_TABLE,
  paymentPolicy,
  currencyOptions
} from "common/src/data/SaasClassic";

import PricingTable, {
  SectionWrapper,
  ContentArea,
  HeadingForm,
  ButtonGroupForm,
  DonationForm,
  DonateButton,
  DonateButtonStyle,
  FormWrapper,
  ButtonGroup,
  ButtonGroupMobile,
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
  PricingTableWrapper
} from "./pricing.style";
import Input from "reusecore/src/elements/Input";
import Loader from "reusecore/src/elements/Loader";

const PricingSection = ({
  sectionWrapperP,
  isChecked,
  secTitleWrapper,
  secHeading,
  secText,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonFillStyle,
  listContentStyle,
  rows,
  columns
}) => {
  const [state, setState] = useState({
    data: MONTHLY_PRICING_TABLE,
    active: true
  });

  const size = useWindowSize();

  const [selectedService, setSelectedService] = useState({
    category: "",
    type: "subscription",
    selected: false
  });

  const [pricingState, setPricingState] = useState({
    price: "",
    type: "usd",
    category: "Informational Website"
  });

  const handleFormData = (value, name) => {
    console.log("triggered handleForm");
    setSelectedService({
      ...selectedService,
      [name]: value
    });
    console.log(selectedService);
  };

  const handleDonation = e => {
    e.preventDefault();
    console.log("Donation form data: ", state);

    setState({
      ...state,
      price: ""
    });
  };

  function inArray(needle, haystack) {
    var count = haystack.length;
    for (var i = 0; i < count; i++) {
      if (haystack[i] == needle) {
        return true;
      }
    }
    return false;
  }

  function indexInArray(needle, haystack) {
    for (var i = 0; i < haystack.length; i++) {
      if (haystack[i] == needle) {
        return i;
      }
    }
    return false;
  }

  const [
    newProposal,
    { loading: emailLoading, error: emailError, data: emailData, client }
  ] = useMutation(EMAIL_CONSULT, { errorPolicy: "all" });

  const [loadingState, setLoadingState] = useState(false);

  const [dataState, setDataState] = useState({
    name: "",
    description: "",
    category: "",
    type: ""
  });

  const [mobile, setMobile] = useState(false);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const [contactState, setContactState] = useState({
    description: "",
    name: "",
    email: "",
    valid: ""
  });

  const [businessState, setBusinessState] = useState({
    purchase: {
      selected: false,
      service: [],
      cost: []
    },
    subscription: {
      selected: false,
      service: [],
      cost: []
    }
  });

  const [informationState, setInformationState] = useState({
    purchase: {
      selected: false,
      service: [],
      cost: []
    },
    subscription: {
      selected: false,
      service: [],
      cost: []
    }
  });
  const [ecommerceState, setEcommerceState] = useState({
    purchase: {
      selected: false,
      service: [],
      cost: []
    },
    subscription: {
      selected: false,
      service: [],
      cost: []
    }
  });

  const [businessTotal, setBusinessTotal] = useState({
    purchase: [],
    subscription: []
  });
  const [informationTotal, setInformationTotal] = useState({
    purchase: [],
    subscription: []
  });
  const [ecommerceTotal, setEcommerceTotal] = useState({
    purchase: [],
    subscription: []
  });

  useEffect(
    () => {
      informationState.subscription.selected
        ? setSelectedService({
            ...selectedService,
            category: "information",
            type: "subscription"
          })
        : businessState.subscription.selected
        ? setSelectedService({
            ...selectedService,
            category: "business",
            type: "subscription"
          })
        : ecommerceState.subscription.selected
        ? setSelectedService({
            ...selectedService,
            category: "ecommerce",
            type: "subscription"
          })
        : informationState.purchase.selected
        ? setSelectedService({
            ...selectedService,
            category: "information",
            type: "purchase"
          })
        : businessState.purchase.selected
        ? setSelectedService({
            ...selectedService,
            category: "business",
            type: "purchase"
          })
        : ecommerceState.purchase.selected
        ? setSelectedService({
            ...selectedService,
            category: "ecommerce",
            type: "purchase"
          })
        : null;
    },
    [businessState.purchase.selected],
    [businessState.subscription.selected],
    [ecommerceState.purchase.selected],
    [ecommerceState.subscription.selected],
    [informationState.purchase.selected],
    [informationState.subscription.selected]
  );

  useEffect(() => {
    size.width == undefined ? setLoadingState(true) : null;
  }, []);

  useEffect(() => {
    size.width >= 1100
      ? setMobile(false)
      : size.width < 1100
      ? setMobile(true)
      : null;
  });

  useEffect(
    () => {
      console.log(Object.values(state.data));
      const sumSubscriptionBusiness = businessState.subscription.cost.reduce(
        (total, next) => total + Number(next),
        Number(MONTHLY_PRICING_TABLE[1].price)
      );
      const sumPurchaseBusiness = businessState.purchase.cost.reduce(
        (total, next) => total + Number(next),
        Number(YEARLY_PRICING_TABLE[1].price)
      );
      setBusinessTotal({
        purchase: Math.round(sumPurchaseBusiness * 100) / 100,
        subscription: Math.round(sumSubscriptionBusiness * 100) / 100
      });
    },
    [businessState.purchase.cost],
    [businessState.subscription.cost]
  );

  useEffect(
    () => {
      const sumSubscriptionInformation = informationState.subscription.cost.reduce(
        (total, next) => total + Number(next),
        Number(MONTHLY_PRICING_TABLE[0].price)
      );
      const sumPurchaseInformation = informationState.purchase.cost.reduce(
        (total, next) => total + Number(next),
        Number(YEARLY_PRICING_TABLE[0].price)
      );
      setInformationTotal({
        purchase: Math.round(sumPurchaseInformation * 100) / 100,
        subscription: Math.round(sumSubscriptionInformation * 100) / 100
      });
    },
    [informationState.purchase.cost],
    [informationState.subscription.cost]
  );

  useEffect(() => {
    let refinedData;
    console.log("refinedData initial", refinedData);
    if (selectedService.category !== "") {
      refinedData = data.filter(
        table =>
          table.category === selectedService.category &&
          table.type === selectedService.type
      );
      setDataState({
        name: refinedData[0].name,
        description: refinedData[0].description,
        category: refinedData[0].category,
        type: refinedData[0].type
      });
      console.log("final refinedData", refinedData[0]);
    } else {
      refinedData = data;
      // setDataState({ ...dataState });
    }
  }, [selectedService]);

  useEffect(
    () => {
      const sumSubscriptionEcommerce = ecommerceState.subscription.cost.reduce(
        (total, next) => total + Number(next),
        Number(MONTHLY_PRICING_TABLE[2].price)
      );
      const sumPurchaseEcommerce = ecommerceState.purchase.cost.reduce(
        (total, next) => total + Number(next),
        Number(YEARLY_PRICING_TABLE[2].price)
      );
      setEcommerceTotal({
        purchase: Math.round(sumPurchaseEcommerce * 100) / 100,
        subscription: Math.round(sumSubscriptionEcommerce * 100) / 100
      });
    },
    [ecommerceState.purchase.cost],
    [ecommerceState.subscription.cost]
  );

  const [toggleValue, toggleHandler] = useToggle(isChecked);

  const handleSubmitProposal = e => {
    e.preventDefault();
  };

  const handleDescriptionChange = e => {
    setContactState({
      ...contactState,
      description: e
    });
  };

  const handleNameOnChange = e => {
    setContactState({ ...contactState, name: e });
  };

  const handleEmailOnChange = e => {
    if (e.match(emailRegex)) {
      if (e.length > 0) {
        setContactState({ ...contactState, email: e, valid: "valid" });
      }
    } else {
      if (e.length > 0) {
        setContactState({ ...contactState, valid: "invalid" });
      } else {
        setContactState({ ...contactState, valid: "" });
      }
    }
  };

  const handleChecking = (e, item) => {
    const { name } = e.target;
    const { id } = e.target;
    const newService = item.service;
    const newCost = item.cost;
    const newPCost = item.pcost;

    if (
      name === "business" &&
      businessState.subscription.service[0] !== undefined &&
      !inArray(newService[0], businessState.subscription.service)
    ) {
      const oldBusinessPurchaseService = businessState.purchase.service;
      const oldBusinessPurchaseCost = businessState.purchase.cost;
      const oldBusinessSubscriptionService = businessState.subscription.service;
      const oldBusinessSubscriptionCost = businessState.subscription.cost;
      setBusinessState({
        purchase: {
          ...businessState.selected,
          service: [...oldBusinessPurchaseService, item.service],
          cost: [...oldBusinessPurchaseCost, newPCost]
        },
        subscription: {
          ...businessState.selected,
          service: [...oldBusinessSubscriptionService, item.service],
          cost: [...oldBusinessSubscriptionCost, newCost]
        }
      });
    }
    if (
      name === "business" &&
      businessState.subscription.service[0] !== undefined &&
      inArray(newService[0], businessState.subscription.service)
    ) {
      const removeBusinessIndex = indexInArray(
        newService[0],
        businessState.subscription.service
      );

      const reducedBusinessSubscriptionService = businessState.subscription.service.filter(
        (s, i) => i !== removeBusinessIndex
      );

      const reducedBusinessSubscriptionCost = businessState.subscription.cost.filter(
        (s, i) => i !== removeBusinessIndex
      );

      const reducedBusinessPurchaseService = businessState.purchase.service.filter(
        (s, i) => i !== removeBusinessIndex
      );

      const reducedBusinessPurchaseCost = businessState.purchase.cost.filter(
        (s, i) => i !== removeBusinessIndex
      );

      setBusinessState({
        purchase: {
          ...businessState.selected,
          service: [...reducedBusinessPurchaseService],
          cost: [...reducedBusinessPurchaseCost]
        },
        subscription: {
          ...businessState.selected,
          service: [...reducedBusinessSubscriptionService],
          cost: [...reducedBusinessSubscriptionCost]
        }
      });
    }
    if (
      name === "business" &&
      businessState.subscription.service[0] === undefined
    ) {
      setBusinessState({
        purchase: {
          ...businessState.selected,
          service: [newService],
          cost: [newPCost]
        },
        subscription: {
          ...businessState.selected,
          service: [newService],
          cost: [newCost]
        }
      });
    }
    if (
      name === "information" &&
      informationState.subscription.service[0] !== undefined &&
      !inArray(newService[0], informationState.subscription.service)
    ) {
      const oldInformationPurchaseService = informationState.purchase.service;
      const oldInformationPurchaseCost = informationState.purchase.cost;
      const oldInformationSubscriptionService =
        informationState.subscription.service;
      const oldInformationSubscriptionCost = informationState.subscription.cost;
      setInformationState({
        purchase: {
          ...informationState.selected,
          service: [...oldInformationPurchaseService, newService],
          cost: [...oldInformationPurchaseCost, newPCost]
        },
        subscription: {
          ...informationState.selected,
          service: [...oldInformationSubscriptionService, newService],
          cost: [...oldInformationSubscriptionCost, newCost]
        }
      });
    }
    if (
      name === "information" &&
      informationState.subscription.service[0] !== undefined &&
      inArray(newService[0], informationState.subscription.service)
    ) {
      const removeInformationIndex = indexInArray(
        newService[0],
        informationState.subscription.service
      );
      const reducedInformationSubscriptionService = informationState.subscription.service.filter(
        (s, i) => i !== removeInformationIndex
      );
      const reducedInformationSubscriptionCost = informationState.subscription.cost.filter(
        (s, i) => i !== removeInformationIndex
      );
      const reducedInformationPurchaseService = informationState.purchase.service.filter(
        (s, i) => i !== removeInformationIndex
      );
      const reducedInformationPurchaseCost = informationState.purchase.cost.filter(
        (s, i) => i !== removeInformationIndex
      );
      setInformationState({
        purchase: {
          ...informationState.selected,
          service: [...reducedInformationPurchaseService],
          cost: [...reducedInformationPurchaseCost]
        },
        subscription: {
          ...informationState.selected,
          service: [...reducedInformationSubscriptionService],
          cost: [...reducedInformationSubscriptionCost]
        }
      });
    }
    if (
      name === "information" &&
      informationState.subscription.service[0] === undefined
    ) {
      setInformationState({
        purchase: {
          ...informationState.selected,
          service: [newService],
          cost: [newPCost]
        },
        subscription: {
          ...informationState.selected,
          service: [newService],
          cost: [newCost]
        }
      });
    }
    if (
      name === "ecommerce" &&
      ecommerceState.subscription.service[0] !== undefined &&
      !inArray(newService[0], ecommerceState.subscription.service)
    ) {
      const oldEcommercePurchaseService = ecommerceState.purchase.service;
      const oldEcommercePurchaseCost = ecommerceState.purchase.cost;
      const oldEcommerceSubscriptionService =
        ecommerceState.subscription.service;
      const oldEcommerceSubscriptionCost = ecommerceState.subscription.cost;
      setEcommerceState({
        purchase: {
          ...ecommerceState.selected,
          service: [...oldEcommercePurchaseService, newService],
          cost: [...oldEcommercePurchaseCost, newPCost]
        },
        subscription: {
          ...ecommerceState.selected,
          service: [...oldEcommerceSubscriptionService, newService],
          cost: [...oldEcommerceSubscriptionCost, newCost]
        }
      });
    }
    if (
      name === "ecommerce" &&
      ecommerceState.subscription.service[0] !== undefined &&
      inArray(newService[0], ecommerceState.subscription.service)
    ) {
      const removeEcommerceIndex = indexInArray(
        newService[0],
        ecommerceState.subscription.service
      );
      const reducedEcommerceSubscriptionService = ecommerceState.subscription.service.filter(
        (s, i) => i !== removeEcommerceIndex
      );
      const reducedEcommerceSubscriptionCost = ecommerceState.subscription.cost.filter(
        (s, i) => i !== removeEcommerceIndex
      );
      const reducedEcommercePurchaseService = ecommerceState.purchase.service.filter(
        (s, i) => i !== removeEcommerceIndex
      );
      const reducedEcommercePurchaseCost = ecommerceState.purchase.cost.filter(
        (s, i) => i !== removeEcommerceIndex
      );
      setEcommerceState({
        purchase: {
          ...ecommerceState.selected,
          service: [...reducedEcommercePurchaseService],
          cost: [...reducedEcommercePurchaseCost]
        },
        subscription: {
          ...ecommerceState.selected,
          service: [...reducedEcommerceSubscriptionService],
          cost: [...reducedEcommerceSubscriptionCost]
        }
      });
    }
    if (
      name === "ecommerce" &&
      ecommerceState.subscription.service[0] === undefined
    ) {
      setEcommerceState({
        purchase: {
          ...ecommerceState.selected,
          service: [newService],
          cost: [newPCost]
        },
        subscription: {
          ...ecommerceState.selected,
          service: [newService],
          cost: [newCost]
        }
      });
    }
  };

  const data = state.data;
  let refinedData;
  if (selectedService.category !== "") {
    refinedData = data.filter(
      table =>
        table.category === selectedService.category &&
        table.type === selectedService.type
    );
    // setDataState({ refinedData });
  } else {
    refinedData = data;
    // setDataState({ ...dataState });
  }
  const activeStatus = state.active;

  const pricingCarouselOptions = {
    type: "slider",
    perView: 3,
    gap: 30,
    bound: true,
    startAt: 0
    // breakpoints: {
    //   1199: {
    //     perView: 2,
    //     type: "slider",
    //     peek: {
    //       before: 100,
    //       after: 100
    //     }
    //   },
    //   990: {
    //     type: "slider",
    //     perView: 1,
    //     peek: {
    //       before: 160,
    //       after: 160
    //     }
    //   },
    //   767: {
    //     type: "slider",
    //     perView: 1,
    //     peek: {
    //       before: 80,
    //       after: 80
    //     }
    //   },
    //   575: {
    //     type: "slider",
    //     perView: 1,
    //     gap: 15,
    //     peek: {
    //       before: 20,
    //       after: 20
    //     }
    //   }
    // }
  };

  return (
    <>
      {mobile || loadingState ? (
        <SectionWrapper id="donate">
          <Container width="100%">
            <Box className="rows" {...rows}>
              <Box className="columns" {...columns}>
                <ContentArea>
                  <HeadingForm>
                    Customize your website according to <span>your needs</span>
                  </HeadingForm>
                  <Text content="Data from January 1 through November 30, 2018" />
                  <ButtonGroupForm>
                    <Link href="#">
                      <a className="learn__more-btn alt">
                        <span className="hyphen" />
                        <span className="btn_text">Funding Progress</span>
                      </a>
                    </Link>
                    <Text content="or" />
                    <Link href="#">
                      <a className="learn__more-btn">
                        <span className="hyphen" />
                        <span className="btn_text">Join our Organizations</span>
                      </a>
                    </Link>
                  </ButtonGroupForm>
                </ContentArea>
              </Box>
              <Box className="col" {...columns}>
                <DonationForm onSubmit={e => handleDonation(e)}>
                  {/* <InputGroup
                    inputType="number"
                    placeholder="100.00"
                    inputValue={state.price}
                    inputOnChange={e => handleFormData(e.target.value, "price")}
                    currency="$ USD"
                    selectedValue={state.currency}
                    selectOptions={currencyOptions}
                    selectOnUpdate={value => handleFormData(value, "currency")}
                  /> */}
                  {selectedService.category === "" && (
                    <RadioGroup
                      name="radioGroup"
                      value={selectedService.category}
                      items={state.data}
                      onUpdate={(value, title) => {
                        handleFormData(value, "category");
                      }}
                    />
                  )}
                  {selectedService.category !== "" && (
                    <>
                      {console.log("refinedData", refinedData[0])}
                      <PricingHead>
                        <Heading content={refinedData[0].name} {...nameStyle} />
                        <Text
                          content={refinedData[0].description}
                          {...descriptionStyle}
                        />
                      </PricingHead>
                      <PricingPrice>
                        {dataState.name === "Informational Website" &&
                        dataState.type === "subscription" ? (
                          <Text
                            content={`$${informationTotal.subscription}`}
                            {...priceStyle}
                          />
                        ) : dataState.name === "Informational Website" &&
                          dataState.type === "purchase" ? (
                          <Text
                            content={`$${informationTotal.purchase}`}
                            {...priceStyle}
                          />
                        ) : dataState.name === "Business Website" &&
                          dataState.type === "subscription" ? (
                          <Text
                            content={`$${businessTotal.subscription}`}
                            {...priceStyle}
                          />
                        ) : dataState.name === "Business Website" &&
                          dataState.type === "purchase" ? (
                          <Text
                            content={`$${businessTotal.purchase}`}
                            {...priceStyle}
                          />
                        ) : dataState.category === "ecommerce" &&
                          dataState.type === "subscription" ? (
                          <Text
                            content={`$${ecommerceTotal.subscription}`}
                            {...priceStyle}
                          />
                        ) : dataState.category === "ecommerce" &&
                          dataState.type === "purchase" ? (
                          <Text
                            content={`$${ecommerceTotal.purchase}`}
                            {...priceStyle}
                          />
                        ) : (
                          <Text content="error" {...priceStyle} />
                        )}
                        <Text
                          content={refinedData[0].priceLabel}
                          {...priceLabelStyle}
                        />
                      </PricingPrice>
                      {!selectedService.selected ? (
                        <>
                          <PricingList>
                            {refinedData[0].listItems.map((item, index) => (
                              <ListItem key={`pricing-table-list-${index}`}>
                                <Checkbox
                                  name={`${refinedData[0].category}`}
                                  id={`${refinedData[0].type}`}
                                  labelText={item.service}
                                  checked={toggleValue}
                                  value={item}
                                  onChange={e => {
                                    toggleHandler;
                                    handleChecking(e, item);
                                  }}
                                />
                                {refinedData[0].type === "subscription" ? (
                                  <Text
                                    content={`$${item.cost}`}
                                    {...listContentStyle}
                                  />
                                ) : (
                                  <Text
                                    content={`$${item.pcost}`}
                                    {...listContentStyle}
                                  />
                                )}
                              </ListItem>
                            ))}
                          </PricingList>

                          <RadioGroup
                            name="radioGroup"
                            value={selectedService.type}
                            items={TYPE_TABLE}
                            onUpdate={value => {
                              value === "purchase"
                                ? setState({
                                    data: YEARLY_PRICING_TABLE,
                                    active: false
                                  })
                                : setState({
                                    data: MONTHLY_PRICING_TABLE,
                                    active: true
                                  });
                              handleFormData(value, "type");
                              console.log("value", value);
                            }}
                          />
                          <DonateButtonStyle>
                            <Button
                              title={refinedData[0].buttonLabel}
                              disabled={
                                selectedService.category === "" ||
                                (selectedService.category ===
                                  refinedData[0].category &&
                                  selectedService.type === refinedData[0].type)
                                  ? false
                                  : true
                              }
                              variant="textButton"
                              icon={<i className="flaticon-next" />}
                              onClick={() => {
                                setSelectedService({
                                  ...selectedService,
                                  selected: true
                                });
                              }}
                              {...buttonFillStyle}
                            />
                          </DonateButtonStyle>
                        </>
                      ) : (
                        <FormWrapper onSubmit={handleSubmitProposal}>
                          {emailData == undefined && !emailError && (
                            <>
                              <Input
                                isMaterial
                                label="More Details"
                                inputType="textarea"
                                type="textarea"
                                required
                                onChange={handleDescriptionChange}
                              />
                              <Input
                                isMaterial
                                label="Enter Your Name"
                                required
                                onChange={handleNameOnChange}
                                inputType="text"
                                type="name"
                              />
                              <Input
                                isMaterial
                                className={contactState.valid}
                                label="Enter Your Email"
                                required
                                onChange={handleEmailOnChange}
                                inputType="email"
                                type="email"
                              />
                            </>
                          )}
                          {selectedService.category ===
                            refinedData[0].category &&
                          !emailLoading &&
                          emailData !== undefined &&
                          !emailError ? (
                            <>
                              <Image src={SuccessfullySubmittedImage} />
                              <Heading
                                content={`Thank You ${contactState.name}!`}
                                {...nameStyle}
                              />
                              <Text
                                content={`Please look out for an email from us to ${contactState.email} within 24 hours`}
                                {...priceLabelStyle}
                              />
                            </>
                          ) : (
                            <DonateButton
                              type="submit"
                              onClick={() => {
                                const { type, category } = selectedService;
                                console.log("type", type);
                                console.log("category", category);
                                const objectArray =
                                  type === "subscription" &&
                                  category === "information"
                                    ? informationState.subscription
                                    : type === "purchase" &&
                                      category === "information"
                                    ? informationState.purchase
                                    : type === "purchase" &&
                                      category === "business"
                                    ? businessState.purchase
                                    : type === "subscription" &&
                                      category === "business"
                                    ? businessState.subscription
                                    : type === "subscription" &&
                                      category === "ecommerce"
                                    ? ecommerceState.subscription
                                    : type === "purchase" &&
                                      category === "ecommerce"
                                    ? ecommerceState.purchase
                                    : null;
                                const costArray =
                                  type === "subscription" &&
                                  category === "information"
                                    ? informationTotal.subscription
                                    : type === "purchase" &&
                                      category === "information"
                                    ? informationTotal.purchase
                                    : type === "purchase" &&
                                      category === "business"
                                    ? businessTotal.purchase
                                    : type === "subscription" &&
                                      category === "business"
                                    ? businessTotal.subscription
                                    : type === "subscription" &&
                                      category === "ecommerce"
                                    ? ecommerceTotal.subscription
                                    : type === "purchase" &&
                                      category === "ecommerce"
                                    ? ecommerceTotal.purchase
                                    : null;
                                if (objectArray.service.length !== 0) {
                                  const [first, ...r] = Object.entries(
                                    objectArray
                                  ).map(([k, vals]) =>
                                    vals.map(([v]) => ({ [k]: v }))
                                  );
                                  const zipped = first.map((o, i) =>
                                    Object.assign(o, ...r.map(arr => arr[i]))
                                  );

                                  newProposal({
                                    variables: {
                                      input: {
                                        email: contactState.email,
                                        name: contactState.name,
                                        type: {
                                          create: {
                                            model: type.toUpperCase(),
                                            description:
                                              contactState.description,
                                            cost: costArray,
                                            name: refinedData[0].name,
                                            services: {
                                              create: zipped
                                            }
                                          }
                                        }
                                      }
                                    }
                                  });
                                } else {
                                  newProposal({
                                    variables: {
                                      input: {
                                        email: contactState.email,
                                        name: contactState.name,
                                        type: {
                                          create: {
                                            model: type.toUpperCase(),
                                            description:
                                              contactState.description,
                                            cost: costArray,
                                            name: refinedData[0].name
                                          }
                                        }
                                      }
                                    }
                                  });
                                }
                              }}
                            >
                              Request Proposal Now{" "}
                              {/* <Image src={success} alt="Charity Landing" /> */}
                            </DonateButton>
                          )}
                        </FormWrapper>
                      )}
                    </>
                  )}
                </DonationForm>
              </Box>
            </Box>
          </Container>
        </SectionWrapper>
      ) : (
        <Box {...sectionWrapperP} id="pricing_section">
          <Container>
            <Box {...secTitleWrapper}>
              <Text {...secText} content="PRICING PLAN" />
              <Heading
                {...secHeading}
                content="Customize your website according to your needs"
              />
              <PricingButtonWrapper>
                <Button
                  title="Monthly Subscription Pricing"
                  className={activeStatus ? "active-item" : ""}
                  onClick={() =>
                    setState({ data: MONTHLY_PRICING_TABLE, active: true })
                  }
                />
                <Button
                  title="One-Time Purchase Pricing"
                  className={activeStatus === false ? "active-item" : ""}
                  onClick={() =>
                    setState({ data: YEARLY_PRICING_TABLE, active: false })
                  }
                />
                <Link href="#">
                  <a>+ Custom Plan</a>
                </Link>
              </PricingButtonWrapper>
            </Box>
            <PricingTableWrapper>
              <GlideCarousel
                carouselSelector="pricing-carousel"
                options={pricingCarouselOptions}
                controls={false}
              >
                <>
                  {data.map((pricingTable, index) => (
                    <GlideSlide key={`pricing-table-${index}`}>
                      <PricingTable
                        freePlan={pricingTable.freePlan}
                        className="pricing_table"
                      >
                        <PricingHead>
                          <Heading content={pricingTable.name} {...nameStyle} />
                          <Text
                            content={pricingTable.description}
                            {...descriptionStyle}
                          />
                        </PricingHead>
                        <PricingPrice>
                          {pricingTable.name === "Informational Website" &&
                          pricingTable.type === "subscription" ? (
                            <Text
                              content={`$${informationTotal.subscription}`}
                              {...priceStyle}
                            />
                          ) : pricingTable.name === "Informational Website" &&
                            pricingTable.type === "purchase" ? (
                            <Text
                              content={`$${informationTotal.purchase}`}
                              {...priceStyle}
                            />
                          ) : pricingTable.name === "Business Website" &&
                            pricingTable.type === "subscription" ? (
                            <Text
                              content={`$${businessTotal.subscription}`}
                              {...priceStyle}
                            />
                          ) : pricingTable.name === "Business Website" &&
                            pricingTable.type === "purchase" ? (
                            <Text
                              content={`$${businessTotal.purchase}`}
                              {...priceStyle}
                            />
                          ) : pricingTable.category === "ecommerce" &&
                            pricingTable.type === "subscription" ? (
                            <Text
                              content={`$${ecommerceTotal.subscription}`}
                              {...priceStyle}
                            />
                          ) : pricingTable.category === "ecommerce" &&
                            pricingTable.type === "purchase" ? (
                            <Text
                              content={`$${ecommerceTotal.purchase}`}
                              {...priceStyle}
                            />
                          ) : (
                            <Text content="error" {...priceStyle} />
                          )}
                          <Text
                            content={pricingTable.priceLabel}
                            {...priceLabelStyle}
                          />
                        </PricingPrice>

                        <PricingList>
                          {pricingTable.listItems.map(
                            (item, index) =>
                              pricingTable.category !==
                                selectedService.category && (
                                <ListItem key={`pricing-table-list-${index}`}>
                                  <Checkbox
                                    name={`${pricingTable.category}`}
                                    id={`${pricingTable.type}`}
                                    labelText={item.service}
                                    checked={toggleValue}
                                    value={item}
                                    onChange={e => {
                                      toggleHandler;
                                      handleChecking(e, item);
                                    }}
                                  />
                                  {pricingTable.type === "subscription" ? (
                                    <Text
                                      content={`$${item.cost}`}
                                      {...listContentStyle}
                                    />
                                  ) : (
                                    <Text
                                      content={`$${item.pcost}`}
                                      {...listContentStyle}
                                    />
                                  )}
                                </ListItem>
                              )
                          )}
                        </PricingList>
                        <FormWrapper onSubmit={handleSubmitProposal}>
                          {selectedService.category === pricingTable.category &&
                            emailData == undefined &&
                            !emailError && (
                              <>
                                <Input
                                  isMaterial
                                  label="More Details"
                                  inputType="textarea"
                                  type="textarea"
                                  required
                                  onChange={handleDescriptionChange}
                                />
                                <Input
                                  isMaterial
                                  label="Enter Your Name"
                                  required
                                  onChange={handleNameOnChange}
                                  inputType="text"
                                  type="name"
                                />
                                <Input
                                  isMaterial
                                  className={contactState.valid}
                                  label="Enter Your Email"
                                  required
                                  onChange={handleEmailOnChange}
                                  inputType="email"
                                  type="email"
                                />
                              </>
                            )}
                          {selectedService.category === pricingTable.category &&
                            !emailLoading &&
                            emailData !== undefined &&
                            !emailError && (
                              <Image src={SuccessfullySubmittedImage} />
                            )}
                          <ButtonGroup>
                            {pricingTable.category === "information" &&
                            pricingTable.type === "subscription" &&
                            pricingTable.category !==
                              selectedService.category ? (
                              <Button
                                title={pricingTable.buttonLabel}
                                disabled={
                                  selectedService.category === "" ||
                                  (selectedService.category ===
                                    pricingTable.category &&
                                    selectedService.type === pricingTable.type)
                                    ? false
                                    : true
                                }
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  setSelectedService({
                                    ...selectedService,
                                    category: "information",
                                    type: "subscription"
                                  });
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "information" &&
                              pricingTable.type === "subscription" &&
                              emailData == undefined &&
                              pricingTable.category ===
                                selectedService.category ? (
                              <Button
                                isLoading={emailLoading ? true : false}
                                title="Request Proposal"
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  const objectArray =
                                    informationState.subscription;
                                  if (objectArray.service.length !== 0) {
                                    const [first, ...r] = Object.entries(
                                      objectArray
                                    ).map(([k, vals]) =>
                                      vals.map(([v]) => ({ [k]: v }))
                                    );
                                    const zipped = first.map((o, i) =>
                                      Object.assign(o, ...r.map(arr => arr[i]))
                                    );

                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "SUBSCRIPTION",
                                              description:
                                                contactState.description,
                                              cost:
                                                informationTotal.subscription,
                                              name: pricingTable.name,
                                              services: {
                                                create: zipped
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                  } else {
                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "SUBSCRIPTION",
                                              description:
                                                contactState.description,
                                              cost:
                                                informationTotal.subscription,
                                              name: pricingTable.name
                                            }
                                          }
                                        }
                                      }
                                    });
                                  }
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "information" &&
                              pricingTable.type === "purchase" &&
                              pricingTable.category !==
                                selectedService.category ? (
                              <Button
                                title={pricingTable.buttonLabel}
                                disabled={
                                  selectedService.category === "" ||
                                  (selectedService.category ===
                                    pricingTable.category &&
                                    selectedService.type === pricingTable.type)
                                    ? false
                                    : true
                                }
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  setSelectedService({
                                    ...selectedService,
                                    category: "information",
                                    type: "purchase"
                                  });
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "information" &&
                              pricingTable.type === "purchase" &&
                              emailData == undefined &&
                              pricingTable.category ===
                                selectedService.category ? (
                              <Button
                                isLoading={emailLoading ? true : false}
                                title="Request Proposal"
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  const objectArray = informationState.purchase;
                                  if (objectArray.service.length !== 0) {
                                    const [first, ...r] = Object.entries(
                                      objectArray
                                    ).map(([k, vals]) =>
                                      vals.map(([v]) => ({ [k]: v }))
                                    );
                                    const zipped = first.map((o, i) =>
                                      Object.assign(o, ...r.map(arr => arr[i]))
                                    );

                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "PURCHASE",
                                              description:
                                                contactState.description,
                                              cost: informationTotal.purchase,
                                              name: pricingTable.name,
                                              services: {
                                                create: zipped
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                  } else {
                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "PURCHASE",
                                              description:
                                                contactState.description,
                                              cost: informationTotal.purchase,
                                              name: pricingTable.name
                                            }
                                          }
                                        }
                                      }
                                    });
                                  }
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "ecommerce" &&
                              pricingTable.type === "subscription" &&
                              pricingTable.category !==
                                selectedService.category ? (
                              <Button
                                title={pricingTable.buttonLabel}
                                disabled={
                                  selectedService.category === "" ||
                                  (selectedService.category ===
                                    pricingTable.category &&
                                    selectedService.type === pricingTable.type)
                                    ? false
                                    : true
                                }
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  setSelectedService({
                                    ...selectedService,
                                    category: "ecommerce",
                                    type: "subscription"
                                  });
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "ecommerce" &&
                              pricingTable.type === "subscription" &&
                              emailData == undefined &&
                              pricingTable.category ===
                                selectedService.category ? (
                              <Button
                                isLoading={emailLoading ? true : false}
                                title="Request Proposal"
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  const objectArray =
                                    ecommerceState.subscription;
                                  if (objectArray.service.length !== 0) {
                                    const [first, ...r] = Object.entries(
                                      objectArray
                                    ).map(([k, vals]) =>
                                      vals.map(([v]) => ({ [k]: v }))
                                    );
                                    const zipped = first.map((o, i) =>
                                      Object.assign(o, ...r.map(arr => arr[i]))
                                    );

                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "SUBSCRIPTION",
                                              description:
                                                contactState.description,
                                              cost: ecommerceTotal.subscription,
                                              name: pricingTable.name,
                                              services: {
                                                create: zipped
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                  } else {
                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "SUBSCRIPTION",
                                              description:
                                                contactState.description,
                                              cost: ecommerceTotal.subscription,
                                              name: pricingTable.name
                                            }
                                          }
                                        }
                                      }
                                    });
                                  }
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "ecommerce" &&
                              pricingTable.type === "purchase" &&
                              pricingTable.category !==
                                selectedService.category ? (
                              <Button
                                title={pricingTable.buttonLabel}
                                disabled={
                                  selectedService.category === "" ||
                                  (selectedService.category ===
                                    pricingTable.category &&
                                    selectedService.type === pricingTable.type)
                                    ? false
                                    : true
                                }
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  setSelectedService({
                                    ...selectedService,
                                    category: "ecommerce",
                                    type: "purchase"
                                  });
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "ecommerce" &&
                              pricingTable.type === "purchase" &&
                              emailData == undefined &&
                              pricingTable.category ===
                                selectedService.category ? (
                              <Button
                                isLoading={emailLoading ? true : false}
                                title="Request Proposal"
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  const objectArray = ecommerceState.purchase;
                                  if (objectArray.service.length !== 0) {
                                    const [first, ...r] = Object.entries(
                                      objectArray
                                    ).map(([k, vals]) =>
                                      vals.map(([v]) => ({ [k]: v }))
                                    );
                                    const zipped = first.map((o, i) =>
                                      Object.assign(o, ...r.map(arr => arr[i]))
                                    );

                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "PURCHASE",
                                              description:
                                                contactState.description,
                                              cost: ecommerceTotal.subscription,
                                              name: pricingTable.name,
                                              services: {
                                                create: zipped
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                  } else {
                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "PURCHASE",
                                              description:
                                                contactState.description,
                                              cost: ecommerceTotal.subscription,
                                              name: pricingTable.name
                                            }
                                          }
                                        }
                                      }
                                    });
                                  }
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "business" &&
                              pricingTable.type === "subscription" &&
                              pricingTable.category !==
                                selectedService.category ? (
                              <Button
                                title={pricingTable.buttonLabel}
                                disabled={
                                  selectedService.category === "" ||
                                  (selectedService.category ===
                                    pricingTable.category &&
                                    selectedService.type === pricingTable.type)
                                    ? false
                                    : true
                                }
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  setSelectedService({
                                    ...selectedService,
                                    category: "business",
                                    type: "subscription"
                                  });
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "business" &&
                              pricingTable.type === "subscription" &&
                              emailData == undefined &&
                              pricingTable.category ===
                                selectedService.category ? (
                              <Button
                                isLoading={emailLoading ? true : false}
                                title="Request Proposal"
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  const objectArray =
                                    businessState.subscription;
                                  if (objectArray.service.length !== 0) {
                                    const [first, ...r] = Object.entries(
                                      objectArray
                                    ).map(([k, vals]) =>
                                      vals.map(([v]) => ({ [k]: v }))
                                    );
                                    const zipped = first.map((o, i) =>
                                      Object.assign(o, ...r.map(arr => arr[i]))
                                    );

                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "SUBSCRIPTION",
                                              description:
                                                contactState.description,
                                              cost: businessTotal.subscription,
                                              name: pricingTable.name,
                                              services: {
                                                create: zipped
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                  } else {
                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "SUBSCRIPTION",
                                              description:
                                                contactState.description,
                                              cost: businessTotal.subscription,
                                              name: pricingTable.name
                                            }
                                          }
                                        }
                                      }
                                    });
                                  }
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "business" &&
                              pricingTable.type === "purchase" &&
                              pricingTable.category !==
                                selectedService.category ? (
                              <Button
                                title={pricingTable.buttonLabel}
                                disabled={
                                  selectedService.category === "" ||
                                  (selectedService.category ===
                                    pricingTable.category &&
                                    selectedService.type === pricingTable.type)
                                    ? false
                                    : true
                                }
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  setSelectedService({
                                    ...selectedService,
                                    category: "business",
                                    type: "purchase"
                                  });
                                }}
                                {...buttonFillStyle}
                              />
                            ) : pricingTable.category === "business" &&
                              pricingTable.type === "purchase" &&
                              emailData == undefined &&
                              pricingTable.category ===
                                selectedService.category ? (
                              <Button
                                isLoading={emailLoading ? true : false}
                                title="Request Proposal"
                                variant="textButton"
                                icon={<i className="flaticon-next" />}
                                onClick={() => {
                                  const objectArray = businessState.purchase;
                                  if (objectArray.service.length !== 0) {
                                    const [first, ...r] = Object.entries(
                                      objectArray
                                    ).map(([k, vals]) =>
                                      vals.map(([v]) => ({ [k]: v }))
                                    );
                                    const zipped = first.map((o, i) =>
                                      Object.assign(o, ...r.map(arr => arr[i]))
                                    );

                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "PURCHASE",
                                              description:
                                                contactState.description,
                                              cost: businessTotal.subscription,
                                              name: pricingTable.name,
                                              services: {
                                                create: zipped
                                              }
                                            }
                                          }
                                        }
                                      }
                                    });
                                  } else {
                                    newProposal({
                                      variables: {
                                        input: {
                                          email: contactState.email,
                                          name: contactState.name,
                                          type: {
                                            create: {
                                              model: "PURCHASE",
                                              description:
                                                contactState.description,
                                              cost: businessTotal.subscription,
                                              name: pricingTable.name
                                            }
                                          }
                                        }
                                      }
                                    });
                                  }
                                }}
                                {...buttonFillStyle}
                              />
                            ) : selectedService.category ===
                                pricingTable.category &&
                              !emailLoading &&
                              emailData !== undefined &&
                              !emailError ? (
                              <>
                                <Heading
                                  content={`Thank You ${contactState.name}!`}
                                  {...nameStyle}
                                />
                                <Text
                                  content={`Please look out for an email from us to ${contactState.email} within 24 hours`}
                                  {...priceLabelStyle}
                                />
                              </>
                            ) : (
                              <Button
                                title={pricingTable.buttonLabel}
                                // onClick={f}
                                {...buttonFillStyle}
                              />
                            )}
                            {/* {pricingTable.trialButtonLabel ? (
                          <Link href={pricingTable.trialURL || "#"}>
                            <a className="trial_button">
                              {pricingTable.trialButtonLabel}
                            </a>
                          </Link>
                        ) : (
                          ""
                        )} */}
                          </ButtonGroup>
                        </FormWrapper>
                      </PricingTable>
                    </GlideSlide>
                  ))}
                </>
              </GlideCarousel>
            </PricingTableWrapper>
          </Container>
        </Box>
      )}
    </>
  );
};

PricingSection.propTypes = {
  rows: PropTypes.object,
  columns: PropTypes.object,
  textStyle: PropTypes.object,
  sectionWrapperP: PropTypes.object,
  row: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object
};

PricingSection.defaultProps = {
  // DonateSection row default style
  rows: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-15px",
    mr: "-15px"
  },
  // DonateSection col default style
  columns: {
    width: [1, 3 / 4],
    pl: "15px",
    pr: "15px",
    mb: "30px",
    ml: "auto",
    mr: "auto"
  },
  sectionWrapperP: {
    as: "section",
    pt: ["60px", "80px", "80px", "80px", "100px"],
    pb: "20px"
  },
  secTitleWrapper: {
    mb: ["30px", "40px"]
  },
  secText: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#ff4362",
    mb: "12px"
  },
  secHeading: {
    textAlign: "center",
    fontSize: ["20px", "24px", "36px", "36px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
    ml: "auto",
    mr: "auto",
    lineHeight: "1.12",
    width: "500px",
    maxWidth: "100%"
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: "15px",
    pl: "15px"
  },
  nameStyle: {
    fontSize: ["20px", "20px", "22px", "22px", "22px"],
    fontWeight: "700",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    textAlign: "center",
    mb: "12px"
  },
  descriptionStyle: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#6e7379",
    lineHeight: "1.75",
    textAlign: "center",
    mb: "0"
  },
  priceStyle: {
    as: "span",
    display: "block",
    fontSize: ["36px", "36px", "40px", "40px", "40px"],
    color: "#0f2137",
    textAlign: "center",
    mb: "5px",
    letterSpacing: "-0.025em",
    fontWeight: "500"
  },
  priceLabelStyle: {
    fontSize: ["13px", "14px", "14px", "14px", "14px"],
    color: "#6e7379",
    lineHeight: "1.75",
    textAlign: "center",
    mb: "0"
  },
  buttonStyle: {
    type: "button",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "4px",
    pl: "10px",
    pr: "10px",
    bg: "#fff",
    color: "#2aa275",
    colors: "primaryWithBg",
    width: "222px",
    maxWidth: "100%"
  },
  buttonFillStyle: {
    type: "button",
    // textAlign: "center",
    ml: "auto",
    mr: "auto",
    fontSize: "15px",
    fontWeight: "700",
    color: "white",
    borderRadius: "4px",
    pl: "10px",
    pr: "10px",
    colors: "primaryWithBg",
    minWidth: ["160px", "190px"],
    maxWidth: "100%",
    height: "48px"
  },
  listContentStyle: {
    fontSize: ["15px", "16px", "16px", "16px", "16px"],
    color: "#6e7379",
    mb: "0"
  }
};

export default PricingSection;
