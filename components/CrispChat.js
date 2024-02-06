"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure(window.CRISP_WEBSITE_ID="d53a7786-3b0f-4b5e-8fea-1bb14cf567e5");
  });

  return null;
}

export default CrispChat;