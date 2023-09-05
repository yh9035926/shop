import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOG_OUT_REQUEST } from "../../reducer/user";

import { usePagination } from "../PaginationProvider";
import SignUpPopup from "../SignUpPopup";
import LoginPopup from "../LoginPopup";

const Header = () => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isLoggedIn, logOutDone } = useSelector((state) => state.user);
  const { me } = useSelector((state) => state.user);
  const { paginate } = usePagination();
  //회원가입 팝업---------------------------------------
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const handleOpenSignUp = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };
  //로그인 팝업-----------------------------------------------
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleOpenLogin = () => {
    setIsLoginOpen(true);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  useEffect(() => {
    if (logOutDone) {
      dispatch({
        type: "INITIALIZE_STATE", // 초기화 액션 타입
      });
      navigator("/login");
    }
  }, [dispatch, logOutDone, navigator]);

  const handleLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, [dispatch]);

  const handleGoHome = useCallback(() => {
    dispatch({
      type: "GO_HOME",
    });
    paginate(1);
    navigator("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dispatch, navigator, paginate]);

  return (
    <HeaderWrapper>
      <HeaderLogo>
        <button onClick={handleGoHome}>Y Mall </button>
      </HeaderLogo>
      <HeaderWidth>
        <HeaderList>
          {!isLoggedIn && (
            <>
              <li>
                <button>회원가입</button>
              </li>
              <li>
                <button>로그인</button>
              </li>
            </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <Button onClick={handleLogout}>로그아웃</Button>
              </li>
            </>
          )}
        </HeaderList>
        {isLoggedIn && <Nickname>{me.nickname}님 환영합니다</Nickname>}
      </HeaderWidth>
      {isSignUpOpen && <SignUpPopup onClose={handleCloseSignUp} />}
      {isLoginOpen && <LoginPopup onClose={handleCloseSignUp} />}
    </HeaderWrapper>
  );
};

export default Header;

const Nickname = styled.div`
  position: absolute;
  bottom: 0px;
`;

const Button = styled.button`
  cursor: pointer;
  font-size: 1rem;
  margin: 5px;
  font-weight: bold;
  transition: transform 0.3s ease, color 0.3s ease;
  &:hover {
    transform: translateY(-2px);
    color: #ff8c00;
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  top: 0;
  z-index: 1000;
  position: fixed;
  background-color: ${(props) => props.theme.subColor};
`;

export const HeaderWidth = styled.div`
  width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const shadowAnimation = keyframes`
  0% {
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.6);
  }
  50% {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: translateY(0);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.6);
  }
`;

export const HeaderLogo = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: 1.5rem;
  color: #ffffff;
  background-color: ${(props) => props.theme.mainColor};
  border: none;
  border-radius: 8px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0.6);
  animation: ${shadowAnimation} 2s infinite;
  border: 1px solid;
  padding: 5px 10px;
  transition: background-color 0.3s ease;
  left: 30%;

  &:hover {
    background-color: #ff8c00;
  }
`;
export const HeaderList = styled.ul`
  display: flex;
  background-color: ${(props) => props.theme.mainColor};
  margin-left: 20px;
  color: #fff;
  border-radius: 8px;
  position: relative;
  align-items: center;
  height: 2.5rem;
  font-size: 0.825rem;

  & > li {
    cursor: pointer;
    font-size: 1rem;
    margin: 5px;
    font-weight: bold;
    transition: transform 0.3s ease, color 0.3s ease;
    &:hover {
      transform: translateY(-2px);
      color: #ff8c00;
    }
  }

  & > a > li {
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ff8c00;
    }
  }
`;
