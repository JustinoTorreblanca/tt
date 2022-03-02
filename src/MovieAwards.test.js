import MainContainer from "./components/MainContainer";
import MovieContainer from "./components/MovieContainer";
import { render, screen } from "@testing-library/react";

describe("<MainContainer />", () => {
  const renderMainContainer = () => render(<MainContainer />);
  const renderMovieContainer = () => render(<MovieContainer />);

  test("should show the title", () => {
    renderMainContainer();
    const title = screen.getByText(/Movie Awards/i);
    expect(title).toBeInTheDocument();
  });
  test("should show a movie image", () => {
    renderMovieContainer();
    const movieImage = screen.getByRole("img");
    expect(movieImage).toHaveAttribute(
      "src",
      "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg"
    );
    expect(movieImage).toHaveAttribute("src", "Nomadland poster");
  });

  test("should display a vote button", () => {
    renderMovieContainer();
    const voteButton = screen.getByRole("button");
    expect(voteButton).toHaveClass("btn-vote");
  });

  test("should display a button VOTES SUBMITTES", () => {
    renderMainContainer();
    const category = screen.getByText(/VOTES SUBMITTED/i);
    expect(category).toBeInTheDocument();
  });

  test("should display a category Best Actress", () => {
    renderMainContainer();
    const category = screen.getByText(/Best Actress/i);
    expect(category).toBeInTheDocument();
  });
});
