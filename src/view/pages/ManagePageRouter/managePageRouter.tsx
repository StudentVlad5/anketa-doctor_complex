import { useParams } from "react-router-dom";
import { FirstPage } from "../FirstPage/firstPage";
import { SecondPage } from "../SecondPage/secondPage";
import { ThirdPage } from "../ThirdPage/thirdPage";
import { FourthPage } from "../FourthPage/fourthPage";
import { FifthPage } from "../FifthPage/fifthPage";
import { SixthPage } from "../SixthPage/SixthPage";

const ManagePageRouter = () => {
  const { pointId, pageId } = useParams();

  if (!pointId || !pageId) return <div>Invalid route</div>;

  // Общие страницы
  if (pageId === "1") return <FirstPage />;
  if (pageId === "2") return <SecondPage pointId={pointId} />;
  if (pageId === "3") return <ThirdPage pointId={pointId} />;
  if (pageId === "4") return <FourthPage pointId={pointId} />;
  if (pageId === "5") return <FifthPage pointId={pointId} />;
  if (pageId === "6") return <SixthPage pointId={pointId} />;

  return <div>Page not found</div>;
};

export default ManagePageRouter;
