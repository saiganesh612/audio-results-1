import { SoligaPaths, LambaniPaths } from "./path"

const Transcript = ({ src }) => {
    const transcripts = src === "soliga" ? SoligaPaths.transcript : LambaniPaths.transcript

    return (
        <div className="mb-4">
            <h4>Transcript</h4>
            {transcripts.map((transcript, index) => <p key={index} className="m-0">{transcript}</p>)}
        </div>
    )
}

export default Transcript
