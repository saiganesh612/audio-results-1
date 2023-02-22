import { SoligaPaths, LambaniPaths } from "./path"

const DisplayFiles = ({ src }) => {
    const data = src === "soliga" ? SoligaPaths : LambaniPaths

    return (
        <>
            <br />
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
