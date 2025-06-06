import { Instrumentation } from "next";

export function register() {
  if (process.env.NODE_ENV === "development") {
    console.log("alireza");
  }
  console.log("hamid");
}

export const onRequestError: Instrumentation.onRequestError = async (
  err,
  request,
  context,
): Promise<void> => {
  console.log(err, request, context);
};
