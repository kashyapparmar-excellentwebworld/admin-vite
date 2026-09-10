import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { MAX_FILE_SIZE } from "@/lib/constants";
import { Icon } from "@/components";
import { Button } from "@/components/ui/button";

const UploadFile = ({
    title,
    allowFileType,
    getFileData
}: {
    title?: string,
    allowFileType: string[],
    getFileData?: any
}) => {
    const { t } = useTranslation();
    const fileRef = useRef<HTMLInputElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<any>(null);
    const [fileError, setFileError] = useState<Record<string, any>>({ status: false, message: "" });

    const handleFileUpload = () => {
        fileRef.current?.click();
    }

    const handleFileChange = (fileData: any) => {
        if (!fileData) return

        if (fileData.size > MAX_FILE_SIZE) {
            return setFileError({ status: true, message: "File size should not be more than 10MB." });
        } else if (!allowFileType?.includes(fileData?.type)) {
            return setFileError({ status: true, message: "File type is not supported." });
        }
        else {
            setFileError({ status: false, message: "" });
            setSelectedFile(fileData)
            getFileData && getFileData(fileData)
        }
    };

    const handleFileCancle = () => {
        setSelectedFile(null);
        getFileData && getFileData(null);
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files?.[0];

        if (file) {
            handleFileChange(file);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    return (
        <div className="flex flex-col gap-2" >
            <p className="dark:text-white mb-2" >{title || ""}</p>
            {!selectedFile ? <div className="bg-gray-50 dark:bg-white/10 w-full p-4 rounded-xl" >
                <div
                    onClick={handleFileUpload}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    className={`${isDragging ? "border-dashed border-gray-500 dark:border-white" : "border-solid border-gray-300 dark:border-white/10"} border-2 flex justify-center flex-col items-center rounded-lg p-4 text-center cursor-pointer text-slate-400`}
                >
                    <Icon fontSize={40} icon="basil:cloud-upload-outline" />
                    <p className="text-black dark:text-white font-semibold text-sm mb-2" >
                        {t("common.dnd_title")}{' '}
                        <span className="text-blue-600 font-semibold underline">{t("common.browse")}</span>
                    </p>
                    <p className="text-xs text-slate-400" >
                        {t("common.file_type_info")}
                    </p>
                </div>
            </div> : <div className="flex gap-4 justify-start items-center w-fit">
                <div className="dark:text-white px-2 py-1 flex gap-4 justify-start items-center bg-black/10 dark:bg-white/10 w-fit rounded-xl" >
                    <div className="flex items-center gap-2" >
                        <Icon icon="akar-icons:file" className="text-sm cursor-pointer" />
                        <p className="" >{selectedFile?.name}</p>
                    </div>
                    <Icon
                        onClick={handleFileCancle}
                        icon="akar-icons:cross"
                        className="text-xs cursor-pointer"
                    />
                </div>
                <Button className={"bg-blue-500 cursor-pointer text-white"} >Upload</Button>
            </div>}
            {fileError?.status && <p className="text-xs text-red-400" >
                {fileError.message || ""}
            </p>}
            <input
                ref={fileRef}
                type="file"
                className="hidden"
                accept={allowFileType.join(", ")}
                name="fileupload"
                onChange={(e: any) => handleFileChange(e.target.files[0])}
            />
        </div>
    )
}

export default UploadFile;
