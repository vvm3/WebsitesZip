export interface IMailInfo {
    address: string;
    name?: string;
}

export interface ISendMailDetails {
    to: IMailInfo[];
    from: IMailInfo;
    subjectPrefix: string;
}