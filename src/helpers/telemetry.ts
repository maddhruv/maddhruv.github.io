export const captureEvent = (event: string, payload?: any) => {
  console.log("capture");
  import("posthog-js")
    .then(module => module.default)
    .then(posthog => {
      posthog.capture(event, payload);
    });
};
