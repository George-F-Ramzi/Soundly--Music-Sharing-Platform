// import { Await, useLoaderData, useLocation } from "react-router-dom";
// import { SongCard } from "../lib/types.def";
// import { Suspense, useContext, useEffect, useState } from "react";
// import Loading from "../ComponentHelper/loading";
// import PlayerContext from "../ComponentHelper/playerContext";

// interface ReturnDefer {
//   data: (id: string) => Promise<Comment[]>;
// }

// function SongPage() {
//   const { data } = useLoaderData() as ReturnDefer;
//   const [liked, setLiked] = useState(false);
//   const { setSong } = useContext(PlayerContext);

//   const location = useLocation();
//   let song: SongCard = location.state.song;

//   // useEffect(() => {
//   //   if (song.liked != null) setLiked(true);
//   //   else setLiked(false);
//   // }, [song]);

//   return (
//     <div className="mt-16 pb-36 text-white">
//       <div className="flex flex-col items-center">
//         <img
//           className="min-w-[100px]  max-h-[100px] rounded mb-10"
//           src={song.coverUrl}
//         />
//         <h1 className="font-bold tablet:text-xl text-5xl mb-7">
//           {song.songName}
//         </h1>
//         <div className="flex">
//           <p className="text-base tablet:text-sm  font-bold text-gray-300">
//             {song.likes}:Likes
//           </p>
//         </div>
//         <div className="mt-14 w-full h-12 grid grid-cols-2 gap-6">
//           <button
//             onClick={() => setSong!(song)}
//             className="bg-gradient1 h-12 w-full  rounded font-bold text-black text-xl"
//           >
//             Play
//           </button>
//           {/* {!liked ? (
//             <LikeBtn id={song.id} setLiked={setLiked} />
//           ) : (
//             <DislikeBtn id={song.id} setLiked={setLiked} />
//           )} */}
//         </div>
//       </div>
//       <Suspense fallback={<Loading />}>
//         <Await resolve={data}>
//           {({ uploadedSongs, likedSongs }: ProfilePageType) => (
//             <>
//               {/* <SongsSection data={uploadedSongs} title={"Uploaded Songs"} />
//               <SongsSection data={likedSongs} title={"Liked Songs"} /> */}
//             </>
//           )}
//         </Await>
//       </Suspense>
//     </div>
//   );
// }

// export default SongPage;
