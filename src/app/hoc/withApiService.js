import React, { useContext } from "react";
import { ApiServiceContext } from "../../index";

export function withApiService() {
  return (Wrapped) => {
    return (props) => {
      const apiService = useContext(ApiServiceContext);

      return (
        <Wrapped {...props} apiService={apiService} />
      );
    };
  };
}
