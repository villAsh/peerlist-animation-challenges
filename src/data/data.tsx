import ChallengeFour from "@/components/challengeFour";
import ChallengeOne from "@/components/challengeOne";
import ChallengeThree from "@/components/ChallengeThree";
import ChallengeTwo from "@/components/challengeTwo";

export default [
  {
    id: "day-1",
    title: "Challenge 1",
    disabled: false,
    component: <ChallengeOne />,
  },
  {
    id: "day-2",
    title: "Challenge 2",
    disabled: false,
    component: <ChallengeTwo />,
  },
  {
    id: "day-3",
    title: "Challenge 3",
    disabled: false,
    component: <ChallengeThree />,
  },
  {
    id: "day-4",
    title: "Challenge 4",
    disabled: false,
    component: <ChallengeFour />,
  },
  {
    id: "day-5",
    title: "Challenge 5",
    disabled: true,
  },
];
