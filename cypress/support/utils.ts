/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

import {
  HttpResponseInterceptor,
  RouteMatcher,
  StaticResponse,
} from 'cypress/types/net-stubbing';

export function interceptor(
  requestMatcher: RouteMatcher,
  response?: StaticResponse | HttpResponseInterceptor
): { sendResponse: () => void } {
  let sendResponse;
  const trigger = new Promise((resolve) => {
    sendResponse = resolve;
  });
  cy.intercept(requestMatcher, (request) => {
    return trigger.then(() => {
      request.reply(response);
    });
  });
  return { sendResponse };
}