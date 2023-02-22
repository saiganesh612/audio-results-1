import { SoligaPaths, LambaniPaths } from "./path"
import Transcript from "./Transcript"

const DisplayFiles = ({ src }) => {
    const data = src === "soliga" ? SoligaPaths : LambaniPaths

    return (
        <>
            <h2>{src === "soliga" ? "Soliga TTS Results" : "Lambani TTS Results"}</h2>
            <Transcript src={src} />
            <div className="row">
                <div className="col">
                    <h3>Original</h3>
                    {data.original.map((audio, index) => <audio key={index} src={audio} controls />)}
                </div>
                <div className="col">
                    <h3>Hifi</h3>
                    {data.hifi.map((audio, index) => <audio key={index} src={audio} controls />)}
                </div>
                <div className="col">
                    <h3>Waveglow</h3>
                    {data.waveglow.map((audio, index) => <audio key={index} src={audio} controls />)}
                </div>
            </div>
        </>
    )
}

export default DisplayFiles
