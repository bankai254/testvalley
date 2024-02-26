import { server } from 'src/mocks/msw/server';

import '@testing-library/jest-dom';

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
});
window.IntersectionObserver = mockIntersectionObserver;

const mockResizeObserver = jest.fn();
mockResizeObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
});
window.ResizeObserver = mockResizeObserver;

const createObjectURL = jest.fn();
createObjectURL.mockReturnValue('objectURL');
window.URL.createObjectURL = createObjectURL;
window.URL.revokeObjectURL = jest.fn();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
