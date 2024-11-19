/* eslint-disable react/prop-types */

const VokebolaryCard = ({ singleData }) => {


    const difficultyColors = {
        easy: "bg-third-color",
        medium: "bg-secound-color",
        hard: "bg-farst-color text-white",
    };

    const speekWord = (word) => {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'es-ES'; // Spanish
        window.speechSynthesis.speak(utterance);

    }


    return (
        <div className={`flex flex-col items-center border p-5 rounded-xl ${difficultyColors[singleData.difficulty]}`}>
            <div onClick={() => speekWord(singleData.word)} className="cursor-pointer border-white border-2 border-dotted p-5 rounded-xl">
                <h2 className="font-bold text-3xl text-center">{singleData.word}</h2>
                <p className="text-center">{singleData.meaning}</p>
            </div>
            <div className="card-actions mt-3">
                <div className="badge badge-outline">{singleData.pronunciation}</div>
                <div className="badge badge-outline">{singleData.part_of_speech}</div>
                <div className="mx-auto">

                    <label htmlFor="my_modal_7" className="border border-transparent text-white rounded-full px-2 bg-farst-color hover:bg-secound-color">When to say</label>

                    {/* Put this part before </body> tag */}
                    <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                    <div className="modal" role="dialog">
                        <div className="modal-box">
                            <div className="border border-dotted p-5 rounded-xl">
                                <h2 className="font-bold text-3xl text-center">{singleData.word}</h2>
                                <p className="text-center">{singleData.meaning}</p>
                            </div>
                            <div className="text-center py-3 space-y-3">
                                <p className="text-gray-500">When to say</p>
                                <h4 className="text-sm">{singleData.when_to_say}</h4>
                                <p className="text-gray-500">example</p>
                                <h4 className="text-sm">{singleData.example}</h4>

                            </div>
                        </div>
                        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VokebolaryCard;