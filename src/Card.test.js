import { render, fireEvent } from "@testing-library/react";
import Card from './Card';

it("renders without crashing", function() {
    render(<Card />);
  });