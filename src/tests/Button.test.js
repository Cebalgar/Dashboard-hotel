import "@testing-library/jest-dom";
import { cleanup, render, screen } from '@testing-library/react'
import {Button} from '../styled/Buttons'

afterEach(cleanup);

describe("Button", () => {
    test("Background color: #135846", () => {
      render(
        <Button>
          Test
        </Button>
      );
  
      expect(screen.getByText("Test")).toHaveStyle(
        "backgroundColor: #135846"
      );
    });
  });
  