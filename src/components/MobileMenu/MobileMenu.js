/* eslint-disable no-unused-vars */
import React from "react";
import styled, { css, keyframes } from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <BackDrop />
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink style={{ "--i": 0 }} href="/sale">
            Sale
          </NavLink>
          <NavLink style={{ "--i": 1 }} href="/new">
            New&nbsp;Releases
          </NavLink>
          <NavLink style={{ "--i": 2 }} href="/men">
            Men
          </NavLink>
          <NavLink style={{ "--i": 3 }} href="/women">
            Women
          </NavLink>
          <NavLink style={{ "--i": 4 }} href="/kids">
            Kids
          </NavLink>
          <NavLink style={{ "--i": 5 }} href="/collections">
            Collections
          </NavLink>
        </Nav>
        <Footer>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  animation: ${fadeIn} 500ms linear both;
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  background: transparent;
  justify-content: flex-end;
  perspective: 500px;
  transform-style: preserve-3d;
`;

const Content = styled(DialogContent)`
  --overfill: 16px;
  position: relative;
  background: white;
  width: calc(300px + var(--overfill));
  margin-right: calc(var(--overfill) * -1);
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  transform-origin: center right;

  @media (prefers-reduced-motion) {
    animation: ${slideIn} 500ms both linear;
    animation-delay: 200ms;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: var(--overfill);
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
  animation: ${fadeIn} 600ms both;
  animation-delay: calc(calc(0.3 + 0.1 * var(--i)) * 1s);
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
  animation: ${fadeIn} 400ms both;
  animation-delay: 1200ms;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
