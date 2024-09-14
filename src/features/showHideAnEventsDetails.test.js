import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then, and }) => {                                                                  
    given('a list of events', () => {                                                                                                                                                                                                                                                          
    });                                                                                                                                             
                                                                                                                                                    
    when('the user views the list', () => {                                                                                                         
    });

    then('each event element should be collapsed', () => {
    });

    and('no event details should be visible', () => {
    });
});

test('User can expand an event to see details', ({ given, when, then, and }) => {
    given('a list of collapsed events', () => {
    });

    when('the user clicks on an event', () => {
    });

    then('the event should expand', () => {
    });

    and('the event details should be visible', () => {
    });
});

test('User can collapse an event to hide details', ({ given, when, then, and }) => {
    given('an expanded event showing details', () => {
    });

    when('the user clicks on the event', () => {
    });

    then('the event should collapse', () => {
    });

    and('the event details should be hidden', () => {
    });
});
});