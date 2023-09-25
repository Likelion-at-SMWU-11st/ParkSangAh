import React, { useState } from "react";
import styled from "styled-components";
import { firebaseAuth } from "../fbase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  const [userData, setUserData] = useState(null);
  const onSocialClick = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(firebaseAuth, provider)
      .then((data) => {
        setUserData(data.user);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <GoogleBtn onClick={onSocialClick}>
        <FcGoogle />
      </GoogleBtn>
    </Container>
  );
};

export default GoogleLogin;

const Container = styled.div`
  text-align: center;
`;

const GoogleBtn = styled.div``;
