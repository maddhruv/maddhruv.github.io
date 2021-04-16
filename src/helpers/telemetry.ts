export const captureEvent = (event: string, payload?: any) => {
  import("posthog-js")
    .then(module => module.default)
    .then(posthog => {
      posthog.capture(event, payload);
    });
};
