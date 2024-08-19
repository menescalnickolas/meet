import { render } from '@testing-library/react';
import EventList from '../components/EventList';
import { getEvents } from '../api';
import App from '../App';
import { mockData } from '../mock-data';

describe('<EventList /> component', () => {
  let EventListComponent;
  beforeEach(() => {
    EventListComponent = render(<EventList />);
  })

  test('has an element with "list" role', () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test('renders correct number of events', async () => {
    // const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={mockData} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(mockData.length);
  });
});

describe('<EventList /> integration', () => {

});