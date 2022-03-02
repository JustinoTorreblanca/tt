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
  const [searchTerm, setSearchTerm] = useState("");
  const [votedPicture, setVotedPicture] = useState(false);
  const [votedDirector, setVotedDirector] = useState(false);
  const [votedActor, setVotedActor] = useState(false);
  const [votedActress, setVotedActress] = useState(false);
  const [votedSuppActor, setVotedSuppActor] = useState(false);
  const [votedSuppActress, setVotedSuppActress] = useState(false);
  const [votedVisualEffects, setVotedVisualEffects] = useState(false);
  const [votes, setVotes] = useState([]);

  const addVote = (category, title, id) => {
    return votes.push({ category, title, id });
  };

  console.log(votes);

  const pushVotes = () => {
    setVotes(console.log(votes));
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setVotes([]);
    setVotedPicture(false);
    setVotedDirector(false);
    setVotedActor(false);
    setVotedActress(false);
    setVotedSuppActor(false);
    setVotedSuppActress(false);
    setVotedVisualEffects(false);
  };

  const getMovies = async () => {
    await fetch("http://localhost:8080/api/movies")
      .then((res) => res.json())
      .then((movies) => {
        setMovie(movies);
      })
      .catch((error) => console.log("ERROR"));
  };
  useEffect(() => {
    setLoading(true);
    getMovies();
    setLoading(false);
  }, [setMovie]);

  function sortMovies(x, y) {
    if (x.title < y.title) {
      return -1;
    }
    if (x.title > y.title) {
      return 1;
    }
    return 0;
  }

  return (
    <Flex
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
          maxWidth={["", "980px", "980px"]}
          as="input"
          type="text"
          fontSize="16px"
          borderRadius="4px"
          border="1px solid gray"
          placeholder="Search a movie tittle..."
          textAlign="left"
          p="11px"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </Flex>

      {loading ? <h1>loading...</h1> : ""}

      <Category value="Best Picture" />
      {movie &&
        movie?.movies
          ?.slice(0, 5)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={() => [
                setVotedPicture(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              id={mov.id}
              disabled={votedPicture}
              category={mov.category}
            />
          ))}

      <Category value="Best Director" />
      {movie &&
        movie?.movies
          ?.slice(5, 10)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={() => [
                setVotedDirector(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              id={mov.id}
              disabled={votedDirector}
              category={mov.category}
            />
          ))}

      <Category value="Best Actor" />
      {movie &&
        movie?.movies
          ?.slice(10, 15)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={() => [
                setVotedActor(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              id={mov.id}
              disabled={votedActor}
              category={mov.category}
            />
          ))}

      <Category value="Best Actress" />
      {movie &&
        movie?.movies
          ?.slice(15, 20)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={() => [
                setVotedActress(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              id={mov.id}
              disabled={votedActress}
              category={mov.category}
            />
          ))}

      <Category value="Best Supporting Actor" />
      {movie &&
        movie?.movies
          ?.slice(20, 25)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={() => [
                setVotedSuppActor(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              id={mov.id}
              disabled={votedSuppActor}
              category={mov.category}
            />
          ))}

      <Category value="Best Supporting Actress" />
      {movie &&
        movie?.movies
          ?.slice(25, 30)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              voteMovie={() => [
                setVotedSuppActress(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              id={mov.id}
              disabled={votedSuppActress}
              category={mov.category}
            />
          ))}

      <Category value="Best Visual Effects" />
      {movie &&
        movie?.movies
          ?.slice(30)
          .sort(sortMovies)
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((mov) => (
            <MovieContainer
              title={mov.title}
              photoUrL={mov.photoUrL}
              key={mov.id}
              id={mov.id}
              voteMovie={() => [
                setVotedVisualEffects(true),
                addVote(mov.category, mov.title, mov.id),
              ]}
              disabled={votedVisualEffects}
              category={mov.category}
            />
          ))}
      <Flex width={["100%"]} justifyContent="center">
        <SubmitButton
          openModal={openModal}
          isOpen={isOpen}
          pushVotes={pushVotes}
        />
      </Flex>

      <ModalVotesSubmitted
        isOpen={isOpen}
        closeModal={closeModal}
        votes={votes}
      />
    </Flex>
  );
};

export default MainContainer;

const Category = ({ value }) => {
  return (
    <Flex
      my={["16px"]}
      backgroundColor="#e6e6e6"
      borderRadius="2px"
      border="1px solid gray"
      width={["91vw"]}
      maxWidth={["", "980px", "980px"]}
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

const SubmitButton = ({ openModal, pushVotes }) => {
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
      onSubmit={pushVotes}
      className="btn-submit"
    >
      <Typography variant="body1Regular">SUBMIT VOTES</Typography>
    </Flex>
  );
};

const ModalVotesSubmitted = ({ isOpen, closeModal, votes }) => {
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
        width="80vw"
        backgroundColor="white"
        justifyContent="start"
        py="15px"
        flexDirection="column"
        px="20px"
        maxWidth={["680px"]}
        className={`modal ${isOpen && "is-open"}`}
      >
        <Typography variant={["h4", "h3"]} mb="15px">
          VOTES SUBMITTED
        </Typography>
        <Flex flexDirection="column" mt="12px">
          <Typography variant="body1Bold" textAlign="left" mb="8px">
            Your votes:
          </Typography>
          <Typography as="ul" ml="24px" fontSize={["18px", "24px"]}>
            {votes.length > 0 ? (
              votes.map((vote) => (
                <Typography as="li" textAlign="left" mb="8px" key={vote.id}>
                  <b>{vote.title}</b> - {vote.category}
                </Typography>
              ))
            ) : (
              <h1 style={{ color: "gray", margin: "12px 0px" }}>
                You haven't vote yet
              </h1>
            )}
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
            className="btn-close"
          >
            <Typography variant="body1Bold">Close</Typography>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
