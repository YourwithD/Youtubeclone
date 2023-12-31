import request from "@/app/api";
import {
  HOME_VIDEO_FAIL,
  HOME_VIDEO_REQUEST,
  HOME_VIDEO_SUCCESS,
} from "../actiontype";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME_VIDEO_REQUEST,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCoad: "IN",
        maxRusults: "20",
        pageToken: "",
      },
    });
    console.log(data)
    dispatch({
      type: HOME_VIDEO_SUCCESS,
      payload: {
        videos: data.item,
        nextpagetoken: data.nextpagetoken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
