import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">
            <PrimaryLink>Sale</PrimaryLink>
            <SecondaryLink aria-hidden="true">Sale</SecondaryLink>
          </NavLink>
          <NavLink href="/new">
            <PrimaryLink>New&nbsp;Releases</PrimaryLink>
            <SecondaryLink>New&nbsp;Releases</SecondaryLink>
          </NavLink>
          <NavLink href="/men">
            <PrimaryLink>Men</PrimaryLink>
            <SecondaryLink>Men</SecondaryLink>
          </NavLink>
          <NavLink href="/women">
            <PrimaryLink>Women</PrimaryLink>
            <SecondaryLink>Women</SecondaryLink>
          </NavLink>
          <NavLink href="/kids">
            <PrimaryLink>Kids</PrimaryLink>
            <SecondaryLink>Kids</SecondaryLink>
          </NavLink>
          <NavLink href="/collections">
            <PrimaryLink>Collections</PrimaryLink>
            <SecondaryLink>Collections</SecondaryLink>
          </NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid var(--color-gray-900);
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 9.2vw - 4.5rem, 3.5rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }

  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const PrimaryLink = styled.span`
  display: block;
  transition: transform 500ms;
`;

const SecondaryLink = styled(PrimaryLink)`
  font-weight: 700;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transform: translateY(100%);
`;

const NavLink = styled.a`
  display: inline-block;
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }

  &:hover ${PrimaryLink} {
    font-weight: bold;
    transition: font-weight 200ms;
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover ${PrimaryLink} {
      transform: translateY(-100%);
      transition: transform 200ms;
    }

    &:hover ${SecondaryLink} {
      transform: translateY(0);
    }
  }
`;

export default Header;
