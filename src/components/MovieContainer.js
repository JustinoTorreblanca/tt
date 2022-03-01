import Flex from "./atoms/Flex";
import Typography from "./atoms/Typography";

const MovieContainer = ({ title, photoUrL, id, voteMovie } = {}) => {
  return (
    <Flex flexWrap={["wrap"]} justifyContent="center">
      <MovieCard
        title={title}
        photoUrL={photoUrL}
        key={id}
        onClick={voteMovie}
      />
    </Flex>
  );
};
export default MovieContainer;

const MovieCard = ({ photoUrL, title, id, voteMovie } = {}) => {
  //debugger;

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      border="1px solid gray"
      p="16px"
      width={["90vw"]}
      maxWidth={["300px"]}
      height={["320px"]}
      justifyContent="space-between"
      m={["15px", "20px"]}
      key={id}
      style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
    >
      <Typography variant={["body1Regular"]}>{title}</Typography>

      <Flex
        borderRadius="50%"
        height="140px"
        width="120px"
        border="1px solid gray"
        backgroundImage={`url(${photoUrL})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      />
      <Flex
        as="button"
        backgroundColor="graySecondary"
        width="220px"
        border="none"
        textAlign="center"
        justifyContent="center"
        p="8px"
        borderRadius="8px"
        onClick={voteMovie}
      >
        <Typography variant="h6">Vote for this movie</Typography>
      </Flex>
    </Flex>
  );
};
