import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('Default number of events displayed when not specified', ({ given, when, then }) => {
      given('the user has not specified a number of events to display', () => {
      });

      when('the event list is loaded', () => {
      });

      then(/^(\d+) events should be displayed by default$/, (arg0) => {
      });
  });

  test('User can change the number of events displayed', ({ given, when, then, and }) => {
      given('the user wants to see a different number of events', () => {
      });

      when('the user specifies a number of events to display', () => {
      });

      then('that specified number of events should be displayed', () => {
      });

      and('the event list should update accordingly', () => {
      });
  });

});
