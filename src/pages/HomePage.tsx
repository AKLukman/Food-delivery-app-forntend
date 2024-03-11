import landingImage from "../assets/landing.png";
import appDownload from "../assets/appDownload.png";
export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Take into a takeway today
        </h1>
        <span className="text-xl">Food is just click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap 5">
        <img src={landingImage} alt="" />
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tighter">
            Order takway even faster!
          </span>
          <span>
            Download the Alessi app for faster ordering and personalised
            recomendations
          </span>
          <img src={appDownload} alt="" />
        </div>
      </div>
    </div>
  );
}
