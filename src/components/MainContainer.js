import Box from "./atoms/Box";
import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";
import MovieContainer from "./MovieContainer";
import "./globalStyles.css";
import { useState, useEffect } from "react";

const MainContainer = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [search, setSearch] = useState("");
  const [movieNames, setMovieNames] = useState([]);

  const voteMovie = () => setIsSelected(true);

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    encontrarPelicula(e.target.value);
  };

  const getMovies = async () => {
    await fetch("http://localhost:8080/api/movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovie(movies);
        setMovieNames(movies.movies);
      })
      .catch((error) => console.log("ERROR"));
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
    setLoading(false);
  }, [setMovie]);

  function encontrarPelicula(palabra) {
    const regexPalabra = new RegExp(palabra, "g");
    return movieNames.filter((pelicula) => {
      if (regexPalabra.test(pelicula.title)) {
        return console.log(pelicula.title);
      }
      return false;
    });
  }

  return (
    <Flex
      //flexDirection="column"
      mb={["30px"]}
      mx={["auto"]}
      border="1px solid gray"
      borderRadius="4px"
      justifyContent="center"
      alignItems="center"
      py={["16px"]}
      px={["8px"]}
      minWidth="300px"
      width="96%"
      maxWidth="1336px"
      flexWrap="wrap"
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <Typography variant={["h3", "h2", "h1"]} color="#9C9C87">
        Movie Awards
      </Typography>

      <Flex justifyContent="center" my={["16px"]}>
        <Box
          width={["90vw"]}
          maxWidth={["360px", "980px", "980px"]}
          as="input"
          type="text"
          fontSize="16px"
          borderRadius="4px"
          border="1px solid gray"
          placeholder="Search a movie tittle..."
          textAlign="left"
          p="11px"
          value={search}
          onChange={handleChange}
        />
      </Flex>

      {loading ? <h1>loading...</h1> : ""}

      <Category value="Best Picture" />
      {movie &&
        movie?.movies
          ?.slice(0, 5)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={voteMovie}
            />
          ))}

      <Category value="Best Director" />
      {movie &&
        movie?.movies
          ?.slice(5, 10)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
            />
          ))}

      <Category value="Best Actor" />
      {movie &&
        movie?.movies
          ?.slice(10, 15)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
            />
          ))}

      <Category value="Best Actress" />
      {movie &&
        movie?.movies
          ?.slice(15, 20)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
            />
          ))}

      <Category value="Best Supporting Actor" />
      {movie &&
        movie?.movies
          ?.slice(20, 25)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
            />
          ))}

      <Category value="Best Supporting Actress" />
      {movie &&
        movie?.movies
          ?.slice(25, 30)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
            />
          ))}

      <Category value="Best Visual Effects" />
      {movie &&
        movie?.movies
          ?.slice(30)
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
            />
          ))}

      <SubmitButton openModal={openModal} isOpen={isOpen} />

      <ModalVotesSubmitted isOpen={isOpen} closeModal={closeModal} />
    </Flex>
  );
};

export default MainContainer;

const SearchField = ({ search, handleChange }) => {
  return (
    <Flex justifyContent="center" my={["16px"]}>
      <Box
        width={["90vw"]}
        maxWidth={["360px", "980px", "980px"]}
        as="input"
        type="text"
        fontSize="16px"
        borderRadius="4px"
        border="1px solid gray"
        placeholder="Search a movie tittle..."
        textAlign="left"
        p="11px"
        value={console.log(search)}
        onChange={handleChange}
      />
    </Flex>
  );
};

const Category = ({ value }) => {
  return (
    <Flex
      my={["16px"]}
      backgroundColor="#e6e6e6"
      borderRadius="2px"
      border="1px solid gray"
      width={["91vw"]}
      maxWidth={["360px", "980px", "980px"]}
    >
      <Typography
        borderRadius="4px"
        border="1px solid gray"
        p="5px"
        textAlign="left"
        variant={["h6"]}
        //id={id}
      >
        {value}
      </Typography>
    </Flex>
  );
};

const SubmitButton = ({ openModal }) => {
  return (
    <Flex
      backgroundColor="#fac612"
      as="button"
      width="225px"
      borderRadius="12px"
      border="2px solid gray"
      justifyContent="center"
      py="5px"
      my="15px"
      onClick={openModal}
    >
      <Typography variant="body1Regular">SUBMIT VOTES</Typography>
    </Flex>
  );
};

const ModalVotesSubmitted = ({ isOpen, closeModal }) => {
  return (
    <Box
      position="fixed"
      width="100%"
      height="100vh"
      justifyContent="center"
      backgroundColor="rgba(0,0,0, 0.75)"
      alignItems="center"
      top="0vh"
      className={`modal ${isOpen && "is-open"}`}
    >
      <Box
        //position="absolute"
        width="80vw"
        //height="80vh"
        backgroundColor="white"
        justifyContent="start"
        py="15px"
        flexDirection="column"
        px="20px"
        maxWidth={["680px"]}
        className={`modal ${isOpen && "is-open"}`}
      >
        <Typography variant="h3" mb="15px">
          VOTES SUBMITTED
        </Typography>
        <Flex flexDirection="column" mt="12px">
          <Typography variant="body1Bold" textAlign="left" mb="8px">
            Your votes:
          </Typography>
          <Typography as="ul" ml="24px" fontSize="24px">
            <Typography as="li" textAlign="left" mb="8px">
              voto1
            </Typography>
            <Typography as="li" textAlign="left" mb="8px">
              voto1
            </Typography>
            <Typography as="li" textAlign="left" mb="8px">
              voto1
            </Typography>
          </Typography>
          <Flex
            backgroundColor="#fac612"
            as="button"
            width="225px"
            borderRadius="12px"
            border="2px solid gray"
            justifyContent="center"
            py="5px"
            my="15px"
            alignSelf="flex-end"
            mr={["0px", "15px", "20px"]}
            onClick={closeModal}
          >
            <Typography variant="body1Bold">Close</Typography>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
