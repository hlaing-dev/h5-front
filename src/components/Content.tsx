import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { showToast } from "../pages/profile/error/ErrorSlice";

const Content = ({ notice }: any) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [pageType, setPageType] = useState(false);

  const type = notice?.extend?.page_type;
  // console.log('type', type)

  useEffect(() => {
    if (type === "internal") {
      setPageType(true);
    } else {
      setPageType(false); // Reset if type changes
    }
  }, [type]);

  if (!notice) {
    return null;
  }

  const JumpAction = (notice: any) => {
    const external = notice?.extend?.page_type;
    console.log(external);
    if (external === "external") {
      window.open(notice.extend.page_path, "_blank");
    } else {
      dispatch(
        showToast({
          message: "IOS积分系统正在开发中！敬请期待～",
          type: "error",
        })
      );
    }
  };

  return (
    <div className="content p-3">
      <div className="text-card">
        <h3 className=" text-white text-[12px] font-[500] leading-[14px]">
          {notice.title}
        </h3>
        <p className="mt-3 text-[#888] text-[10px] font-[500]">
          {notice.content}
        </p>
        {pageType ? (
          <>
            {notice.extend.parameters?.video_id && (
              <button
                onClick={() =>
                  navigate(`/player/${notice.extend.parameters?.video_id}`)
                }
                className="noti-btn mt-6"
              >
                {notice.extend.page_name}
              </button>
            )}
            {notice.extend.parameters?.topic_id && (
              <button
                onClick={() =>
                  navigate(`/explorer/${notice.extend.parameters?.topic_id}`)
                }
                className="noti-btn mt-6"
              >
                {notice.extend.page_name}
              </button>
            )}
            {!notice.extend.parameters?.topic_id &&
              !notice.extend.parameters?.video_id && (
                <button
                  onClick={() => JumpAction(notice)}
                  className="noti-btn mt-6"
                >
                  {notice.extend.page_name}
                </button>
              )}
          </>
        ) : (
          notice.extend.page_name && (
            <button
              className="noti-btn mt-6"
              onClick={() => JumpAction(notice)}
            >
              {notice.extend.page_name}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Content;
