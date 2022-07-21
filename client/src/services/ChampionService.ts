import Champions from '../assets/champions.json';
import { ChampionSource, ChampionSummary } from './Types';

const getChampionList = () : ChampionSummary[] => {
    const champions: ChampionSource = Champions;
    const championArray : ChampionSummary[] = [];

    Object.entries(champions.data).forEach(([key, value] : [string, any]) => {
        const championSummary : ChampionSummary = value;
        championArray.push(championSummary);
        // console.log(championSummary);
    });

    return championArray;
};

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

const getRandomChampion = () : ChampionSummary => {
    var championList = getChampionList();
    return championList[getRandomInt(championList.length)];
}

// const postDocumentsToEmail = async (pploadExistingDocumentToEmail: UploadExistingDocumentToEmail) => {
//     return await ApiPost<DocumentOperationStatus[]>(`${AppConfig.getAPIRootURL()}/documents/uploadtoemail`, pploadExistingDocumentToEmail);
// };

// const downloadAttachment = async (attachment: Attachment, callback: DownloadCallbackFn) => {
// 	const downloadUrl = `${documentsBaseUrl}/download?documentId=${attachment.id}&isEmailAttachment=${attachment.isEmailAttachment}`;
// 	ApiDownload(downloadUrl, attachment.fileName, callback);
// };

// const deleteAttachments = async (attachments: Attachment[]): Promise<DocumentOperationStatus[]> => {
// 	const deleteModels = attachments.map<AttachmentReference>((item) => {
// 		return {
// 			id: item.id,
// 			type: item.isEmailAttachment ? DocumentType.Email : DocumentType.Note,
// 		};
// 	});

// 	const deleteUrl = `${documentsBaseUrl}/`;
// 	const deletionStatus = await ApiDelete<DocumentOperationStatus[]>(deleteUrl, deleteModels);
//     return deletionStatus;
// };

const ChampionService = {
    getChampionList,
    getRandomChampion
};

export default ChampionService;