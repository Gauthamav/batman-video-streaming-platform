import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/navbarSlice';
import { useSearchParams } from 'react-router';
import CommentVideo from './CommentVideo';
import LiveChat from './LiveChat';

const WatchVideo = () => {
  const dispatch = useDispatch();

  dispatch(closeMenu());

  const [searchParams] = useSearchParams();

  const videoId = searchParams.get('v');

  return (
    <div className="mt-36 ml-10  w-full">
      <div className="flex lg:flex-row flex-col gap-10 w-full">
        <div className="w-full max-w-[700px]">
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full rounded-2xl"
              src={'https://www.youtube.com/embed/' + videoId + '?si=iub8FcyUpRz8apjc'}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <LiveChat></LiveChat>
      </div>
      <CommentVideo></CommentVideo>
    </div>
  );
};

export default WatchVideo;
