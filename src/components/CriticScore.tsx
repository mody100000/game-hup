import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge fontSize="14px" colorScheme={color} paddingX={3} borderRadius={3}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
