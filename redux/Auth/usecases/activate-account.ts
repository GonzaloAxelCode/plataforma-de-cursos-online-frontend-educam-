import { ActivateAccountData } from "../interfaces/auth.models";
import activateAccountFetch from "../services/fetch-activate-account";
import { activateAccountReducer } from "../state/auth.slice";

export const activateAccountUseCase = async (
  data: ActivateAccountData,
  dispatch: any
) => {
  dispatch(
    activateAccountReducer({
      isLoadingActivateAccount: true,
    })
  );
  const { isSuccess, errors } = await activateAccountFetch(data);

  if (isSuccess) {
    dispatch(
      activateAccountReducer({
        isLoadingActivateAccount: false,
      })
    );
  } else {
    dispatch(
      activateAccountReducer({
        isLoadingActivateAccount: false,
        activateErrors: errors,
      })
    );
  }
};
