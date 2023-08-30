import ReactPlayer from "react-player";

export default async function VideoHome() {
    return (
        <>
            <video autoPlay={true} loop={true}  >
                <source src='https://xgddmaybsftuiidgvjys.supabase.co/storage/v1/object/public/kisetsu/kisetsu%20tech.mp4' type={"video/mp4"} />
            </video>
        </>
    )

}