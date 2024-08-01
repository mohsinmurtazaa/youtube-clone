export const GOOGLE_API_KEY = "AIzaSyBTb5hpXTVxchOyRZ8BeOoJ_t2p6pR5HrA";
export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

export const YOUTUBE_VIDEO_COMMENTS_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=";

export const YOUTUBE_SEARCH_VIDEO_BY_KEYWORD =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=";

export const COMMENTS_DATA = [
  {
    name: "Mohsin Murtaza",
    text: "this is comment on youtube video",
    replies: [],
  },
  {
    name: "Mohsin Murtaza",
    text: "this is comment on youtube video",
    replies: [
      {
        name: "Hira Khan",
        text: "this is my reply comment on youtube video",
        replies: [
          {
            name: "Amna",
            text: "this is amna comment on youtube video",
            replies: [
              {
                name: "Faizan Khan",
                text: "this is faizan comment on youtube video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mohsin Murtaza",
    text: "this is comment on youtube video",
    replies: [],
  },
  {
    name: "Mohsin Murtaza",
    text: "this is comment on youtube video",
    replies: [
      {
        name: "Hira Khan",
        text: "this is my reply comment on youtube video",
        replies: [
          {
            name: "Amna",
            text: "this is amna comment on youtube video",
            replies: [
              {
                name: "Faizan Khan",
                text: "this is faizan comment on youtube video",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Mohsin Murtaza",
    text: "this is comment on youtube video",
    replies: [],
  },
];

// const getComments = async () => {
//   const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
//   const videoId = params.get("v"); // Replace with your method of getting the video ID
//   let nextPageToken = '';
//   let comments = [];

//   do {
//     try {
//       const response = await fetch(
//         `https://www.googleapis.com/youtube/v3/commentThreads?key=${apiKey}&videoId=${videoId}&part=snippet,replies&maxResults=100&pageToken=${nextPageToken}`
//       );

//       if (!response.ok) {
//         throw new Error(`Error Status : ${response.status}`);
//       }

//       const data = await response.json();

//       if (data.items) {
//         comments = [...comments, ...data.items];
//         nextPageToken = data.nextPageToken || '';
//       } else {
//         nextPageToken = '';
//       }
//     } catch (error) {
//       console.log(error);
//       nextPageToken = '';
//     }
//   } while (nextPageToken);

//   setVideoComments(comments);

//   // For debugging, log the comments and replies
//   comments.forEach(item => {
//     console.log('Comment:', item.snippet.topLevelComment.snippet.textDisplay);
//     if (item.replies && item.replies.comments) {
//       item.replies.comments.forEach(reply => {
//         console.log('Reply:', reply.snippet.textDisplay);
//       });
//     } else {
//       console.log('No replies for this comment');
//     }
//   });
// };
