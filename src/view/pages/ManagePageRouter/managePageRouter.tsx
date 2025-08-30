import { useParams } from "react-router-dom";
import { FirstPage } from "../FirstPage/index";
import { SecondPage } from "../SecondPage/index";

const ManagePageRouter = () => {
  const { pointId, pageId } = useParams();

  if (!pointId || !pageId) return <div>Invalid route</div>;

  // Общие страницы
  if (pageId === "1") return <FirstPage />;
  if (pageId === "2") return <SecondPage />;

  // Индивидуальные страницы
  if (pointId === "alergoCod") {
    switch (pageId) {
      case "3":
        return <p>Case 3</p>;
      case "4":
        return <p>Case 4</p>;
      // ...
    }
  }

  //   if (pointId === "2") {
  //     switch (pageId) {
  //       case "3":
  //         return <Case2Page3 />;
  //       // ...
  //     }
  //   }

  return <div>Page not found</div>;
};

export default ManagePageRouter;
